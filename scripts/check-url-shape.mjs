#!/usr/bin/env node
// ============================================================================
// check-url-shape.mjs — Gate de FORMA DE URL (compuerta POST-build, sobre dist/).
// ----------------------------------------------------------------------------
// EL DEFECTO QUE ESTE GATE IMPIDE (F0-9b, 2026-08):
//   Declarar `trailingSlash: 'never'` SIN `build: { format: 'file' }` produce un
//   build en formato DIRECTORIO (dist/x/index.html) mientras el sitemap y el
//   canonical emiten la URL SIN barra (/x). El host sirve /x/ → cada URL del
//   sitemap responde 308. 17 de los 53 repos del portafolio estaban así.
//   No se detecta comparando sitemap vs canonical (ambos salen del MISMO
//   `trailingSlash`, así que coinciden entre sí y los dos están mal): hay que
//   contrastarlos contra los ARCHIVOS que el build realmente emitió.
//
// QUÉ COMPRUEBA, para cada <loc> de dist/sitemap*.xml:
//   A) forma del sitemap  ==  forma que dist puede servir (archivo plano x.html
//      → /x ; carpeta x/index.html → /x/). Mismatch = 308 garantizado.
//   B) forma del sitemap  ==  <link rel="canonical"> del HTML que la sirve.
//
// Falla con exit 1 si alguna URL discrepa. Uso:
//   node scripts/check-url-shape.mjs [--dist dist] [--sample 10]
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const flag = (name, dflt) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? dflt : (argv[i + 1] ?? true);
};
const DIST = path.resolve(String(flag('dist', 'dist')));
const SAMPLE = Number(flag('sample', 0)) || 0;

if (!fs.existsSync(DIST)) {
  console.error(`✗ check:url-shape — no existe ${DIST}/. Corre el build antes del gate.`);
  process.exit(1);
}

// ── 1) URLs del sitemap ─────────────────────────────────────────────────────
// Ojo: el XML del sitemap viene en UNA sola línea; grep -c miente. Se parsea
// con matchAll sobre el contenido completo.
const sitemaps = fs.readdirSync(DIST).filter((f) => /^sitemap.*\.xml$/i.test(f));
if (!sitemaps.length) {
  console.error(`✗ check:url-shape — no hay sitemap*.xml en ${DIST}/. ¿Falta @astrojs/sitemap?`);
  process.exit(1);
}

const locs = [];
for (const f of sitemaps) {
  const xml = fs.readFileSync(path.join(DIST, f), 'utf8');
  for (const m of xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)) {
    const u = m[1].trim();
    if (/\.xml$/i.test(u)) continue; // entradas del sitemap-index → otros sitemaps
    if (!locs.includes(u)) locs.push(u);
  }
}
if (!locs.length) {
  console.error(`✗ check:url-shape — el sitemap no contiene URLs.`);
  process.exit(1);
}

// ── 2) helpers ──────────────────────────────────────────────────────────────
/** pathname decodificado de una URL absoluta del sitemap. */
function pathnameOf(u) {
  const p = new URL(u).pathname || '/';
  try { return decodeURIComponent(p); } catch { return p; }
}
/** Forma declarada por el sitemap: 'root' | 'slash' | 'noslash'. */
function shapeOf(pathname) {
  if (pathname === '' || pathname === '/') return 'root';
  return pathname.endsWith('/') ? 'slash' : 'noslash';
}
/** Extrae el href del <link rel="canonical"> (tolerante al orden de atributos). */
function canonicalOf(html) {
  const tags = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)
            || html.match(/<link\b[^>]*href=[^>]*rel=["']canonical["'][^>]*>/i);
  if (!tags) return null;
  const href = tags[0].match(/href=["']([^"']+)["']/i);
  return href ? href[1] : null;
}
/** Normaliza para comparar: la raíz con y sin barra son la MISMA URL (RFC 3986). */
function normalize(u) {
  try {
    const { origin, pathname } = new URL(u);
    return origin + (pathname === '/' ? '' : pathname);
  } catch { return u; }
}

// ── 3) auditoría URL por URL ────────────────────────────────────────────────
const rows = [];
for (const loc of locs.sort()) {
  const pathname = pathnameOf(loc);
  const rel = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const isRoot = rel === '';

  const flatFile = isRoot ? null : path.join(DIST, `${rel}.html`);
  const dirFile = path.join(DIST, rel, 'index.html');
  const hasFlat = !!flatFile && fs.existsSync(flatFile);
  const hasDir = fs.existsSync(dirFile);

  // Forma que el HOST puede servir con estos archivos.
  //   x.html          → /x        (formato 'file')
  //   x/index.html    → /x/       (formato 'directory'; pedir /x da 308)
  let served, file;
  if (isRoot) { served = 'root'; file = hasDir ? dirFile : null; }
  else if (hasFlat && hasDir) { served = 'both'; file = flatFile; }
  else if (hasFlat) { served = 'noslash'; file = flatFile; }
  else if (hasDir) { served = 'slash'; file = dirFile; }
  else { served = 'missing'; file = null; }

  const declared = shapeOf(pathname);
  const canonical = file && fs.existsSync(file) ? canonicalOf(fs.readFileSync(file, 'utf8')) : null;

  const problems = [];
  if (served === 'missing') {
    problems.push(`el sitemap lista ${pathname} pero dist/ no emitió ni ${rel}.html ni ${rel}/index.html`);
  } else if (served !== 'root' && served !== 'both' && declared !== served) {
    problems.push(
      `forma de URL incoherente: el sitemap emite «${pathname}» (${declared}) ` +
      `pero dist/ solo sirve «/${rel}${served === 'slash' ? '/' : ''}» (${served}, ${path.relative(DIST, file)}) → el host responderá 308`
    );
  }
  if (canonical === null) {
    problems.push(`sin <link rel="canonical"> en ${file ? path.relative(DIST, file) : '(sin archivo)'}`);
  } else if (normalize(canonical) !== normalize(loc)) {
    problems.push(`canonical «${canonical}» ≠ URL del sitemap «${loc}»`);
  }

  rows.push({ loc, pathname, declared, served, file, canonical, problems });
}

// ── 4) muestra opcional (--sample N): la evidencia, pase o falle ────────────
if (SAMPLE > 0) {
  console.log(`\nMuestra de ${Math.min(SAMPLE, rows.length)} de ${rows.length} URLs (sitemap · canonical · archivo en dist):`);
  for (const r of rows.slice(0, SAMPLE)) {
    console.log(`  sitemap:   ${r.loc}`);
    console.log(`  canonical: ${r.canonical ?? '(ninguno)'}`);
    console.log(`  dist:      ${r.file ? path.relative(DIST, r.file) : '(no emitido)'}  → sirve ${r.served}`);
    console.log(`  veredicto: ${r.problems.length ? 'MISMATCH' : 'ok'}\n`);
  }
}

// ── 5) veredicto ────────────────────────────────────────────────────────────
const bad = rows.filter((r) => r.problems.length);
const fmtCount = rows.reduce((a, r) => ((a[r.served] = (a[r.served] || 0) + 1), a), {});

if (!bad.length) {
  console.log(
    `✓ check:url-shape — ${rows.length} URL(s) del sitemap coinciden con el canonical ` +
    `y con la forma que dist/ sirve (${Object.entries(fmtCount).map(([k, v]) => `${k}:${v}`).join(' ')}).`
  );
  process.exit(0);
}

console.error(`✗ check:url-shape — ${bad.length} de ${rows.length} URL(s) con forma incoherente:\n`);
for (const r of bad.slice(0, 25)) {
  console.error(`  ${r.pathname}`);
  for (const p of r.problems) console.error(`     · ${p}`);
}
if (bad.length > 25) console.error(`  … y ${bad.length - 25} más.`);
console.error(
  `\nCausa típica: en astro.config.mjs hay \`trailingSlash: 'never'\` SIN \`build: { format: 'file' }\`` +
  `\n(o al revés). La forma que sirve el HOST manda: alinea trailingSlash + build.format y re-corre el build.` +
  `\n  · 'never'  ⇄ build: { format: 'file' }        → /pagina` +
  `\n  · 'always' ⇄ build: { format: 'directory' }   → /pagina/`
);
process.exit(1);
