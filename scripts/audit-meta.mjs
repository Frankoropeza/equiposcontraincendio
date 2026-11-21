#!/usr/bin/env node
/* ============================================================================
 * scripts/audit-meta.mjs — gate de SEO técnico del HTML publicado
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

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE } from '../src/config/site.ts'
import {
  auditHtmlPages,
  DESC_MAX,
  NON_PAGE_HTML_FILE,
  TITLE_MAX,
} from './lib/html-seo-audit.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST_DIR = path.join(ROOT, 'dist')

// Archivos del dist que NO son páginas del sitio: verificación de propiedad de
// Search Console (NO se borra nunca o Google revoca la verificación).
function walk(dir) {
  const out = []
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith('.')) continue
    const full = path.join(dir, name)
    if (fs.statSync(full).isDirectory()) out.push(...walk(full))
    else if (name.endsWith('.html') && !NON_PAGE_HTML_FILE.test(name))
      out.push(full)
  }
  return out
}

if (!fs.existsSync(DIST_DIR)) {
  console.error('✗ audit-meta: no hay dist/. Corre `npm run build` primero.')
  process.exit(1)
}

const files = walk(DIST_DIR).sort()
const pages = files.map((file) => {
  const relative = path.relative(DIST_DIR, file).replace(/\\/g, '/')
  return {
    url:
      relative === '404.html'
        ? '/404/'
        : `/${relative.replace(/index\.html$/, '')}`,
    html: fs.readFileSync(file, 'utf8'),
  }
})
const { rows, failures } = auditHtmlPages(pages, { siteUrl: SITE.url })

console.log(
  `audit:meta · dist/ · title ≤${TITLE_MAX} · description ≤${DESC_MAX}`,
)
console.log('─'.repeat(100))
for (const row of failures) {
  console.log(
    `FAIL  t:${String(row.title?.length ?? 0).padStart(3)} d:${String(row.description?.length ?? 0).padStart(3)} h1:${row.h1Count}  ${row.url}  · ${row.problems.join('; ')}`,
  )
}
console.log('─'.repeat(100))
console.log(`${rows.length} páginas auditadas · ${failures.length} fallas`)

if (failures.length > 0) {
  console.error(
    `✗ audit-meta falló: ${failures.length} página(s) con problemas SEO.`,
  )
  process.exit(1)
}
console.log('✓ audit-meta — metadatos únicos, canonical y H1 correctos.')
