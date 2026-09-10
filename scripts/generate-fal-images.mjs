#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve } from "node:path";

const FAL_MODEL = process.env.FAL_MODEL || "fal-ai/flux/dev";
const MAX_ATTEMPTS = 3;
const BACKOFF_MS = [2_000, 5_000, 10_000];
const SUCCESS_DELAY_MS = 1_500;

const sleep = (milliseconds) => new Promise((resolveSleep) => setTimeout(resolveSleep, milliseconds));

function getImageDimensions(buffer) {
  if (buffer.length >= 24 && buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    return `${buffer.readUInt32BE(16)}x${buffer.readUInt32BE(20)}`;
  }

  if (buffer.length >= 2 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }

      const marker = buffer[offset + 1];
      offset += 2;
      if (marker === 0xd8 || marker === 0xd9) continue;
      if (offset + 2 > buffer.length) break;

      const segmentLength = buffer.readUInt16BE(offset);
      if (segmentLength < 2 || offset + segmentLength > buffer.length) break;
      const isStartOfFrame =
        marker >= 0xc0 &&
        marker <= 0xc3 ||
        marker >= 0xc5 &&
        marker <= 0xc7 ||
        marker >= 0xc9 &&
        marker <= 0xcb ||
        marker >= 0xcd &&
        marker <= 0xcf;

      if (isStartOfFrame && segmentLength >= 7) {
        return `${buffer.readUInt16BE(offset + 5)}x${buffer.readUInt16BE(offset + 3)}`;
      }
      offset += segmentLength;
    }
  }

  return "?x?";
}

function formatError(error) {
  return error instanceof Error ? error.message : String(error);
}

function validateEntry(entry, index) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    throw new Error(`La entrada ${index + 1} debe ser un objeto`);
  }
  if (typeof entry.output !== "string" || entry.output.length === 0) {
    throw new Error(`La entrada ${index + 1} requiere "output"`);
  }
  if (typeof entry.prompt !== "string" || entry.prompt.length === 0) {
    throw new Error(`La entrada ${index + 1} requiere "prompt"`);
  }
}

function destinationFor(outputRoot, output) {
  if (isAbsolute(output)) {
    throw new Error('"output" no puede ser una ruta absoluta');
  }

  const destination = resolve(outputRoot, output);
  const relativeDestination = relative(outputRoot, destination);
  if (relativeDestination.startsWith("..") || isAbsolute(relativeDestination)) {
    throw new Error('"output" no puede escapar de <outputDir>');
  }
  return destination;
}

async function generateImage(entry, outputRoot) {
  const destination = destinationFor(outputRoot, entry.output);
  let lastError;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(`https://fal.run/${FAL_MODEL}`, {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.FAL_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: entry.prompt,
          image_size: "landscape_16_9",
          num_images: 1,
          num_inference_steps: 28,
          guidance_scale: 3.5,
        }),
      });

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(`HTTP ${response.status}${responseText ? `: ${responseText.slice(0, 300)}` : ""}`);
      }

      const result = await response.json();
      const imageUrl = result?.images?.[0]?.url;
      if (typeof imageUrl !== "string" || imageUrl.length === 0) {
        throw new Error('La respuesta no contiene "images[0].url"');
      }

      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(`Descarga HTTP ${imageResponse.status}`);
      }

      const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, imageBuffer);
      return `${getImageDimensions(imageBuffer)}, ${Math.max(1, Math.round(imageBuffer.length / 1024))} KB`;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS - 1) {
        await sleep(BACKOFF_MS[attempt]);
      }
    }
  }

  throw lastError;
}

async function main() {
  if (!process.env.FAL_KEY) {
    console.error("Falta FAL_KEY. Define la variable de entorno antes de ejecutar el script.");
    process.exitCode = 1;
    return;
  }

  const [inputPath, outputDir] = process.argv.slice(2);
  if (!inputPath || !outputDir) {
    console.error("Uso: node scripts/generate-fal-images.mjs <input.json> <outputDir>");
    process.exitCode = 1;
    return;
  }

  let entries;
  try {
    entries = JSON.parse(await readFile(inputPath, "utf8"));
    if (!Array.isArray(entries)) throw new Error("El JSON de entrada debe ser un array");
    entries.forEach(validateEntry);
  } catch (error) {
    console.error(`Entrada inválida: ${formatError(error)}`);
    process.exitCode = 1;
    return;
  }

  const outputRoot = resolve(outputDir);
  const failed = [];
  let generated = 0;
  let previousSucceeded = false;

  for (const [index, entry] of entries.entries()) {
    if (previousSucceeded) await sleep(SUCCESS_DELAY_MS);
    try {
      const details = await generateImage(entry, outputRoot);
      generated += 1;
      console.log(`[${index + 1}/${entries.length}] ${entry.output} -> OK (${details})`);
      previousSucceeded = true;
    } catch (error) {
      failed.push(entry.output);
      console.log(`[${index + 1}/${entries.length}] ${entry.output} -> FALLÓ: ${formatError(error)}`);
      previousSucceeded = false;
    }
  }

  console.log(`Generadas: ${generated}/${entries.length}. Fallidas: [${failed.join(", ")}]`);
}

await main();
