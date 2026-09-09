// astro.config.mjs — config Astro 6 SSG. trailingSlash:'always' + build.format:'directory'
// MEDIDO en producción (Cloudflare Pages) 2026-08-12 — ver comentario junto a defineConfig.
// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { execSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

// ─── Sitemap lastmod dinámico (patrón EVENTECH · SOP SEO 2026-07-10) ────────
// Resuelve URL → archivo fuente → fecha real (git log → mtime → OMITIR).
// Mejor omitir lastmod que mentir con la fecha del build (new Date() en cada
// build hace que Google ignore el campo). Requiere `fetch-depth: 0` en el
// checkout del workflow: sin historia completa, git log devuelve la fecha del
// HEAD para todos los archivos.
const ROOT = dirname(fileURLToPath(import.meta.url));
const _dateCache = new Map();

/** @param {string} relPath */
function sourceDate(relPath) {
  if (_dateCache.has(relPath)) return _dateCache.get(relPath);
  /** @type {Date | null} */
  let date = null;
  const abs = join(ROOT, relPath);
  if (existsSync(abs)) {
    try {
      const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (out) date = new Date(out);
    } catch {}
    if (!date) {
      try {
        date = statSync(abs).mtime;
      } catch {}
    }
  }
  _dateCache.set(relPath, date);
  return date;
}

/** @param {string} url */
function lastmodForUrl(url) {
  const path = new URL(url).pathname.replace(/\/+$/, '');
  const rel = path === '' ? 'index' : path.replace(/^\//, '');
  const seg = rel.split('/');
  const last = seg[seg.length - 1] ?? rel;
  const candidates = [`src/pages/${rel}/index.astro`, `src/pages/${rel}.astro`];
  // Alias ruta→colección: /blog/* vive en `articulos`, /cobertura/* en `zonas`.
  /** @type {Record<string, string>} */
  const colAlias = { blog: 'articulos', cobertura: 'zonas' };
  const col = colAlias[seg[0] ?? ''] ?? seg[0];
  if (col && seg.length > 1) {
    const sub = seg.slice(1).join('/');
    for (const ext of ['md', 'mdx']) {
      candidates.push(`src/content/${col}/${sub}.${ext}`);
      candidates.push(`src/content/${col}/${sub}/index.${ext}`);
      candidates.push(`src/content/${col}/${last}.${ext}`);
    }
  }
  for (const c of candidates) {
    const d = sourceDate(c);
    if (d) return d;
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// PATH ALIASES (resolve.alias) — DEBEN coincidir con compilerOptions.paths de
// tsconfig.json. tsconfig resuelve los tipos; Vite/Rollup resuelve el bundle en
// build. Sin esto, los layouts/páginas que importan "@components/*" compilan en
// el editor pero REVIENTAN en `astro build` (Could not resolve). Los alias hacen
// que los imports funcionen a cualquier profundidad de ruta (no más ../../).
// ─────────────────────────────────────────────────────────────────────────────
/** @param {string} p */
const r = (p) => fileURLToPath(new URL(p, import.meta.url));

// ─────────────────────────────────────────────────────────────────────────────
// Opciones de sitemap. Origen del patrón: PROYECTORED (filter + serialize con
// prioridades por sección). trailingSlash 'always' (medido en Cloudflare Pages)
// + site correcto → canonical normalizado. Ajusta el regex de categorías a los slugs
// reales del cliente (deben coincidir con TAXONOMY en src/config/site.ts).
// ─────────────────────────────────────────────────────────────────────────────
/** @type {import('@astrojs/sitemap').SitemapOptions} */
const sitemapOptions = {
  // Excluye rutas internas, drafts y páginas que no deben indexarse.
  // AUDITORÍA 2026-09-09 · P1-2: fuera los archivos de etiqueta del blog.
  // Eran 26 de las 56 URLs del sitemap (46 %) — listados casi vacíos que
  // competían en el índice contra las 7 guías reales. La plantilla de tag
  // emite `noindex, follow`: siguen navegables y siguen pasando enlaces.
  filter: (page) =>
    !page.includes('/404') &&
    !page.includes('/blog/tag/') &&
    !page.includes('/_') &&
    !page.includes('/admin'),

  // Prioridades por tipo de página: home y categorías empujan más que fichas.
  serialize(item) {
    const url = item.url;

    // Home
    if (url === 'https://equiposcontraincendio.com/') {
      item.priority = 1.0;
      item.changefreq = /** @type {any} */ ('weekly');
    }
    // Landing de categoría (L2) — reemplaza con los slugs reales del cliente.
    else if (/\/(productos|servicios|blog|cobertura)\/?$/.test(url)) {
      item.priority = 0.9;
      item.changefreq = /** @type {any} */ ('monthly');
    }
    // Fichas internas (L3/L4): producto/servicio/zona individual.
    else if (/\/(productos|servicios|blog|cobertura)\/[^/]+\/?$/.test(url)) {
      item.priority = 0.8;
      item.changefreq = /** @type {any} */ ('monthly');
    }
    // Blog
    else if (url.includes('/blog/')) {
      item.priority = 0.6;
      item.changefreq = /** @type {any} */ ('monthly');
    }
    // Resto (contacto, nosotros, etc.)
    else {
      item.priority = 0.7;
      item.changefreq = /** @type {any} */ ('monthly');
    }

    // lastmod REAL por archivo fuente (git log → mtime); si la URL no resuelve
    // a un archivo, se OMITE — nunca new Date() del build. — SOP SEO 2026-07-10
    const lm = lastmodForUrl(url);
    if (lm) {
      item.lastmod = lm.toISOString();
    } else {
      delete item.lastmod;
    }
    return item;
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Config canónica del Master System: Astro 6 SSG, salida estática, sitemap +
// mdx como integraciones base (A3). mdx es OBLIGATORIO porque el blog vive en
// colección .mdx (content.config.ts → `articulos`). Usa @astrojs/mdx@^6 (peer
// astro@^6.4); @astrojs/mdx@^4 ROMPE con astro@^6. NO agregar adapter: SSG (A1).
// Si el proyecto NO tiene blog .mdx, puedes quitar mdx() y la dep del package.json.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://equiposcontraincendio.com', // URL canónica con protocolo, sin slash final.
  output: 'static',
  // MEDIDO en vivo 2026-08-12: Cloudflare Pages sirve /ruta → 308 → /ruta/ (200).
  // El dominio real usa trailingSlash 'always' + build.format 'directory'
  // (mismo patrón detectado y corregido en PODIUMEX). El valor 'never' anterior
  // no coincidía con lo que el hosting sirve → canonicals/sitemap desalineados.
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },

  integrations: [sitemap(sitemapOptions), mdx()],

  vite: {
    // cacheDir local: evita colisiones de permisos entre sesiones/worktrees.
    cacheDir: 'node_modules/.vite',
    resolve: {
      // Espejo EXACTO de tsconfig.json compilerOptions.paths (sin el /*).
      alias: {
        '@config': r('./src/config'),
        '@lib': r('./src/lib'),
        '@layouts': r('./src/layouts'),
        '@components': r('./src/components'),
        '@content': r('./src/content'),
      },
    },
  },
});
