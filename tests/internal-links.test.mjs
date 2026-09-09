// ============================================================================
// tests/internal-links.test.mjs — guardia del contrato de barra final.
// ----------------------------------------------------------------------------
// POR QUÉ (auditoría 2026-09-09 · hallazgo P1-1): el sitio está configurado en
// `trailingSlash: 'always'` (medido: Cloudflare Pages sirve /ruta → 308 → /ruta/)
// pero TODOS los enlaces internos se escribían sin barra final. Resultado: 44
// rutas internas distintas en el HTML publicado, cero con barra, y un 308 en
// cada clic y en cada rastreo de Google.
//
// QUÉ VIGILA: cualquier literal de RUTA DE PÁGINA en src/ — da igual si está en
// `href="…"`, en `href: '…'`, en un template literal con `${}`, en un `ctaHref`,
// en el `path` de un nodo de schema o en un enlace markdown. Buscar solo `href`
// dejaba fuera media docena de casos reales (NAV de site.ts, ctaHref de
// CategoryFeature, paths de ProductLayout/ServiceLayout).
//
// Excepciones legítimas: la raíz "/", rutas con extensión (/sitemap-index.xml),
// anclas (#), querystrings (?) y los assets (/images/…, /fonts/…), que no son
// rutas de página y por tanto NO llevan barra final.
//
//   npm test
// ============================================================================
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'src');
const EXTS = ['.astro', '.ts', '.md', '.mdx'];

// Primer segmento de toda ruta de página del sitio. Al añadir una sección nueva
// (p. ej. /sectores/ o /productos/<categoria>/), añádela aquí.
const PAGE_SEGMENTS = [
  'productos', 'servicios', 'blog', 'cobertura', 'sectores',
  'contacto', 'nosotros', 'privacidad', 'terminos', 'cookies',
];

const SEG = `(?:${PAGE_SEGMENTS.join('|')})`;
// Ruta entre comillas simples, dobles o backticks (admite ${...} dentro).
const RE_QUOTED = new RegExp(`(["'\`])(/${SEG}(?:/[^"'\`\\s]*)?)\\1`, 'g');
// Enlace markdown: ](/ruta)
const RE_MD = new RegExp(`\\]\\((/${SEG}(?:/[^)\\s]*)?)\\)`, 'g');

function needsSlash(route) {
  if (route.endsWith('/')) return false;
  if (route.includes('#') || route.includes('?')) return false;
  const last = route.replace(/\/+$/, '').split('/').pop() ?? '';
  // Archivo con extensión (pero ${expr} no cuenta como extensión).
  if (last.includes('.') && !last.includes('${')) return false;
  return true;
}

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (EXTS.includes(path.extname(e.name))) acc.push(p);
  }
  return acc;
}

test('toda ruta de página interna lleva barra final (trailingSlash: always)', () => {
  const offenders = [];

  for (const file of walk(SRC)) {
    fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      // Ignora comentarios de una línea: documentan ejemplos, no enlazan.
      const code = line.replace(/^\s*(\/\/|\*)\s.*$/, '');
      for (const re of [RE_QUOTED, RE_MD]) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(code)) !== null) {
          const route = m[2] ?? m[1];
          if (needsSlash(route)) {
            offenders.push(`${path.relative(ROOT, file)}:${i + 1}  ${route}`);
          }
        }
      }
    });
  }

  assert.deepEqual(
    offenders,
    [],
    `Rutas internas sin barra final (provocan un 308 en cada clic):\n  ${offenders.join('\n  ')}\n`,
  );
});
