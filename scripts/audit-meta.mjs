#!/usr/bin/env node
/* ============================================================================
 * scripts/audit-meta.mjs — gate de SEO técnico (longitudes title/description)
 * ----------------------------------------------------------------------------
 * REGLA: cada página publicada debe tener <title> ≤60 chars y meta description
 * ≤155 chars. Espejo de los límites de `src/lib/seo.ts` (META_TITLE_MAX=60,
 * META_DESC_MAX=155 vía metaAuditBasic).
 *
 * USO:  npm run audit:meta   (y automáticamente como `postbuild`)
 *
 * REESCRITO EL 2026-11-19 (auditoría). La versión anterior leía src/pages/ y
 * solo entendía `<PageLayout …>` con atributos literales: las páginas con
 * ServiceL3, GiroL3, ProductLayout o ArticleLayout salían como "—" y las
 * dinámicas como SKIP. Resultado: ~24 URLs nunca se auditaban y las 130 rutas
 * generadas por `getStaticPaths` (productos, blog, giros, zonas) tampoco.
 *
 * Ahora audita el `dist/`, que es lo que de verdad se publica: lee cada
 * index.html, extrae <title> y <meta name="description"> ya renderizados y no
 * hay valor "dinámico" que esquivar. Requiere `astro build` previo — por eso
 * va enganchado como `postbuild` y no como `prebuild`.
 * ========================================================================== */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');

// Límites — espejo de src/lib/seo.ts (META_TITLE_MAX, META_DESC_MAX).
const TITLE_MAX = 60;
const DESC_MAX = 155;

// Archivos del dist que NO son páginas del sitio: verificación de propiedad de
// Search Console (NO se borra nunca o Google revoca la verificación).
const NOT_A_PAGE = /^google[0-9a-f]+\.html$/;

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.html') && !NOT_A_PAGE.test(name)) out.push(full);
  }
  return out;
}

// Entidades que aparecen en el HTML renderizado y cuentan como UN carácter.
function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8209;/g, '-')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function extract(html) {
  const title = html.match(/<title>([\s\S]*?)<\/title>/i);
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  return {
    title: title ? decode(title[1].trim()) : null,
    description: desc ? decode(desc[1].trim()) : null,
  };
}

if (!fs.existsSync(DIST_DIR)) {
  console.error('✗ audit-meta: no hay dist/. Corre `npm run build` primero.');
  process.exit(1);
}

const files = walk(DIST_DIR).sort();
const rows = [];
let fails = 0;

for (const file of files) {
  const url = '/' + path.relative(DIST_DIR, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  const { title, description } = extract(fs.readFileSync(file, 'utf8'));
  const problems = [];
  if (!title) problems.push('sin <title>');
  else if (title.length > TITLE_MAX) problems.push(`title ${title.length} > ${TITLE_MAX}`);
  if (!description) problems.push('sin meta description');
  else if (description.length > DESC_MAX) problems.push(`description ${description.length} > ${DESC_MAX}`);

  const status = problems.length ? 'FAIL' : 'OK';
  if (problems.length) fails += 1;
  rows.push({ status, url, title: title?.length ?? 0, desc: description?.length ?? 0, problems });
}

console.log(`audit:meta · dist/ · title ≤${TITLE_MAX} · description ≤${DESC_MAX}`);
console.log('─'.repeat(100));
for (const row of rows.filter((r) => r.status === 'FAIL')) {
  console.log(`FAIL  t:${String(row.title).padStart(3)} d:${String(row.desc).padStart(3)}  ${row.url}  · ${row.problems.join('; ')}`);
}
console.log('─'.repeat(100));
console.log(`${rows.length} páginas auditadas · ${fails} fallas`);

if (fails > 0) {
  console.error(`✗ audit-meta falló: ${fails} página(s) fuera de los límites.`);
  process.exit(1);
}
console.log('✓ audit-meta — todas las páginas dentro de los límites.');
