#!/usr/bin/env node
// ============================================================================
// scripts/gen-og.mjs — genera las imágenes de Open Graph (1200×630) que faltan.
// ----------------------------------------------------------------------------
// POR QUÉ (auditoría 2026-09-09 · hallazgo P1-7): `ogShareImage()` de
// src/lib/seo.ts reescribe la imagen de la página
//     /images/<dir>/<name>.svg  →  /images/og/<dir>-<name>.jpg
// y, si ese PNG no existe, cae al OG por defecto del sitio. Productos y
// artículos tenían el suyo; servicios y zonas NO, así que al compartir un
// servicio o una zona por WhatsApp —el canal principal del negocio— salía la
// tarjeta genérica.
//
// QUÉ HACE: recorre las imágenes referenciadas por TODAS las colecciones y, por
// cada una sin su PNG de OG, lo genera con el naming aplanado que espera
// ogShareImage(). Idempotente: no toca los que ya existen (usa --force para
// regenerar).
//
// SALTA LOS PLACEHOLDERS (revisión 2026-09-09): si la imagen de origen es un SVG
// con el cartel «Imagen próximamente», NO se genera su OG. Generarlo sería peor
// que no tenerlo: al compartir la ficha por WhatsApp saldría una tarjeta que
// dice que la foto falta, en vez del OG de marca por defecto, que sí es digno.
// En cuanto la ficha reciba su foto real, volver a correr el script la cubre.
//
// REQUIERE `sharp` (presente en el árbol de dependencias de Astro). No forma
// parte del build: se corre a mano cuando se añaden imágenes.
//
//   node scripts/gen-og.mjs           # genera lo que falte
//   node scripts/gen-og.mjs --force   # regenera todo
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const PUBLIC = path.join(ROOT, 'public');
const OG_DIR = path.join(PUBLIC, 'images', 'og');
const FORCE = process.argv.includes('--force');

const W = 1200, H = 630;

let sharp;
try {
  ({ default: sharp } = await import('sharp'));
} catch {
  console.error('✗ gen-og — falta `sharp`. Instálalo con: npm i -D sharp');
  process.exit(1);
}

/** /images/servicios/foo.avif → images/og/servicios-foo.jpg (naming de ogShareImage).
 *
 *  JPEG, no PNG (revisión 2026-09-09): con los placeholders vectoriales el PNG
 *  pesaba ~28 KB, pero con fotografía real se disparaba por encima de 1 MB —
 *  demasiado para una tarjeta que WhatsApp tiene que descargar antes de pintar
 *  la previsualización. En JPEG de calidad 82 la misma imagen ronda los 150 KB.
 *  `ogShareImage()` en src/lib/seo.ts busca .jpg primero y .png como respaldo. */
function ogNameFor(rel) {
  const m = rel.match(/^\/images\/(.+)\.(svg|avif|webp|png|jpe?g)$/i);
  if (!m) return null;
  return `${m[1].replace(/\//g, '-')}.jpg`;
}

/** Extrae los `image:` / `heroImage:` del frontmatter de una colección. */
function imagesOf(collection) {
  const dir = path.join(ROOT, 'src', 'content', collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .flatMap((f) => {
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      // Acepta el valor con o sin comillas (las fichas de `giros` lo llevan entre comillas).
      const m =
        src.match(/^image:\s*["']?([^"'\s]+)["']?\s*$/m) ??
        src.match(/^heroImage:\s*["']?([^"'\s]+)["']?\s*$/m);
      return m ? [m[1]] : [];
    });
}

/** ¿El origen es un SVG con el cartel «Imagen próximamente»? */
function esPlaceholder(absPath) {
  if (!/\.svg$/i.test(absPath)) return false;
  try {
    return /pr[oó]ximamente/i.test(fs.readFileSync(absPath, 'utf8'));
  } catch {
    return false;
  }
}

const COLECCIONES = ['productos', 'servicios', 'articulos', 'zonas', 'casos', 'giros'];
const targets = [...new Set(COLECCIONES.flatMap((c) => imagesOf(c)))];
if (!targets.length) {
  console.log('gen-og — no hay imágenes de servicios/zonas que procesar.');
  process.exit(0);
}

fs.mkdirSync(OG_DIR, { recursive: true });
let hechos = 0, saltados = 0;
const placeholders = [];

for (const rel of targets) {
  const name = ogNameFor(rel);
  if (!name) continue;
  const src = path.join(PUBLIC, rel.replace(/^\//, ''));
  const out = path.join(OG_DIR, name);
  if (!fs.existsSync(src)) {
    console.warn(`  ! origen inexistente: ${rel}`);
    continue;
  }
  if (esPlaceholder(src)) {
    placeholders.push(rel);
    continue;
  }
  if (fs.existsSync(out) && !FORCE) {
    saltados++;
    continue;
  }
  // density alta: el SVG se rasteriza nítido antes de encajar en 1200×630.
  await sharp(src, { density: 220 })
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .flatten({ background: '#ffffff' }) // JPEG no tiene alfa: fondo blanco.
    .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(out);
  console.log(`  ✓ ${rel}  →  /images/og/${name}`);
  hechos++;
}

console.log(`\ngen-og — ${hechos} generado(s), ${saltados} ya existían.`);
if (placeholders.length) {
  console.log(`\n⚠  ${placeholders.length} ficha(s) SIN OG porque su imagen sigue siendo el cartel «Imagen próximamente»:`);
  for (const rel of placeholders) console.log(`   · ${rel}`);
  console.log('   Caen al OG por defecto del sitio, que es lo correcto. Vuelve a correr');
  console.log('   este script (con --force) en cuanto reciban su foto real.');
}
