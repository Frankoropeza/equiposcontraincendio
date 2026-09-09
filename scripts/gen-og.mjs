#!/usr/bin/env node
// ============================================================================
// scripts/gen-og.mjs — genera los PNG de Open Graph (1200×630) que faltan.
// ----------------------------------------------------------------------------
// POR QUÉ (auditoría 2026-09-09 · hallazgo P1-7): `ogShareImage()` de
// src/lib/seo.ts reescribe la imagen de la página
//     /images/<dir>/<name>.svg  →  /images/og/<dir>-<name>.png
// y, si ese PNG no existe, cae al OG por defecto del sitio. Productos y
// artículos tenían el suyo; servicios y zonas NO, así que al compartir un
// servicio o una zona por WhatsApp —el canal principal del negocio— salía la
// tarjeta genérica.
//
// QUÉ HACE: recorre las imágenes referenciadas por las colecciones `servicios`
// y `zonas`, y por cada SVG sin su PNG de OG lo genera con el naming aplanado
// que espera ogShareImage(). Idempotente: no toca los que ya existen.
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

/** /images/servicios/foo.svg → images/og/servicios-foo.png (naming de ogShareImage). */
function ogNameFor(rel) {
  const m = rel.match(/^\/images\/(.+)\.(svg|avif|webp)$/i);
  if (!m) return null;
  return `${m[1].replace(/\//g, '-')}.png`;
}

/** Extrae los `image:` del frontmatter de una colección. */
function imagesOf(collection) {
  const dir = path.join(ROOT, 'src', 'content', collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .flatMap((f) => {
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const m = src.match(/^image:\s*(\S+)\s*$/m) ?? src.match(/^heroImage:\s*(\S+)\s*$/m);
      return m ? [m[1]] : [];
    });
}

const targets = [...new Set([...imagesOf('servicios'), ...imagesOf('zonas')])];
if (!targets.length) {
  console.log('gen-og — no hay imágenes de servicios/zonas que procesar.');
  process.exit(0);
}

fs.mkdirSync(OG_DIR, { recursive: true });
let hechos = 0, saltados = 0;

for (const rel of targets) {
  const name = ogNameFor(rel);
  if (!name) continue;
  const src = path.join(PUBLIC, rel.replace(/^\//, ''));
  const out = path.join(OG_DIR, name);
  if (!fs.existsSync(src)) {
    console.warn(`  ! origen inexistente: ${rel}`);
    continue;
  }
  if (fs.existsSync(out) && !FORCE) {
    saltados++;
    continue;
  }
  // density alta: el SVG se rasteriza nítido antes de encajar en 1200×630.
  await sharp(src, { density: 220 })
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`  ✓ ${rel}  →  /images/og/${name}`);
  hechos++;
}

console.log(`\ngen-og — ${hechos} generado(s), ${saltados} ya existían.`);
