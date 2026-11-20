// astro.config.mjs — config Astro 6 SSG. trailingSlash:'always' + build.format:'directory'
// MEDIDO en producción (Cloudflare Pages) 2026-08-12 — ver comentario junto a defineConfig.
// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { execSync } from 'node:child_process';
import { existsSync, statSync, readdirSync, readFileSync } from 'node:fs';
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

// Índice de las fichas del blog por categoría: /blog/categoria/<slug>/ no tiene
// archivo fuente propio, así que su lastmod honesto es la fecha del artículo más
// reciente de esa categoría (el slug de la URL es el valor de `category:` del
// frontmatter). Se calcula una vez y se cachea. Añadido el 2026-11-19: antes
// estas 8 URLs salían en el sitemap sin lastmod.
/** @type {Map<string, Date | null>} */
const _catCache = new Map();

/** @param {string} slug */
function lastmodForCategory(slug) {
  if (_catCache.has(slug)) return _catCache.get(slug);
  /** @type {Date | null} */
  let newest = null;
  const dir = join(ROOT, 'src/content/articulos');
  try {
    for (const name of readdirSync(dir)) {
      if (!/\.mdx?$/.test(name)) continue;
      const head = readFileSync(join(dir, name), 'utf8').slice(0, 2000);
      if (!new RegExp(`^category:\\s*["']?${slug}["']?\\s*$`, 'm').test(head)) continue;
      const d = sourceDate(`src/content/articulos/${name}`);
      if (d && (!newest || d > newest)) newest = d;
    }
  } catch {}
  _catCache.set(slug, newest);
  return newest;
}

/** @param {string} url */
function lastmodForUrl(url) {
  const path = new URL(url).pathname.replace(/\/+$/, '');
  const rel = path === '' ? 'index' : path.replace(/^\//, '');
  const seg = rel.split('/');
  const last = seg[seg.length - 1] ?? rel;

  // /blog/categoria/<slug>/ → artículo más reciente de la categoría.
  if (seg[0] === 'blog' && seg[1] === 'categoria' && seg[2] && seg.length === 3) {
    const d = lastmodForCategory(seg[2]);
    if (d) return d;
  }

  const candidates = [`src/pages/${rel}/index.astro`, `src/pages/${rel}.astro`];
  // Alias ruta→colección(es): /blog/* vive en `articulos`, /cobertura/* en
  // `zonas`, y /proteccion-civil/* se reparte entre `giros` (los 23 giros) y
  // `tramites` (cdmx, edomex) — de ahí que el alias admita varias colecciones.
  /** @type {Record<string, string[]>} */
  const colAlias = {
    blog: ['articulos'],
    cobertura: ['zonas'],
    'proteccion-civil': ['giros', 'tramites'],
  };
  const cols = colAlias[seg[0] ?? ''] ?? [seg[0] ?? ''];
  if (seg.length > 1) {
    const sub = seg.slice(1).join('/');
    for (const col of cols) {
      if (!col) continue;
      for (const ext of ['md', 'mdx']) {
        candidates.push(`src/content/${col}/${sub}.${ext}`);
        candidates.push(`src/content/${col}/${sub}/index.${ext}`);
        candidates.push(`src/content/${col}/${last}.${ext}`);
      }
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
  // Las páginas de paginación (/blog/pagina/N/, /blog/categoria/<x>/pagina/N/)
  // quedan FUERA del sitemap: son indexables y se rastrean por los enlaces de la
  // paginación, pero el sitemap debe listar contenido canónico —artículos,
  // fichas y archivos— y no el índice troceado del mismo contenido. Mismo
  // criterio que retiró los archivos de etiqueta en la Fase 1 (P1-2).
  filter: (page) =>
    !page.includes('/404') &&
    !page.includes('/blog/tag/') &&
    !page.includes('/pagina/') &&
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
// ─────────────────────────────────────────────────────────────────────────────
// rehypeExternalLinks — 2026-11-19 (auditoría): los enlaces escritos en Markdown
// salían sin `rel`/`target` (los .astro sí lo llevan). Plugin local en vez de
// una dependencia nueva: recorre el árbol hast y marca solo los href externos.
// ─────────────────────────────────────────────────────────────────────────────
function rehypeExternalLinks() {
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = node.properties?.href;
      if (typeof href === 'string' && /^https?:\/\//i.test(href) && !href.includes('equiposcontraincendio.com')) {
        node.properties.target = '_blank';
        node.properties.rel = ['noopener', 'noreferrer'];
      }
    }
    for (const child of node.children ?? []) walk(child);
  };
  /** @param {any} tree */
  return (tree) => walk(tree);
}

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
    // FASE 3 · F3.1 (2026-09-16): CSS siempre en /_astro/*.css. Antes ~28 KB de
    // <style> iban dentro de cada HTML (2.36 MB en el dist) sin caché posible;
    // ahora viajan una vez y quedan inmutables un año (public/_headers).
    inlineStylesheets: 'never',
  },

  // F3.5 (2026-09-16): el scope de los estilos va como clase (astro-XXXX) en vez
  // de atributo data-astro-cid-*. Misma especificidad (0,1,0); ~140 mil
  // atributos menos en el dist.
  scopedStyleStrategy: 'class',

  // 2026-11-19 (auditoría): sitio multipágina sin SPA, así que precargar el HTML
  // del siguiente clic ayuda. PERO `viewport` fue un error medido el mismo día:
  // con rejillas de 8+ tarjetas bajaba 8 HTML completos en la home —172 KB en el
  // cable, 1.16 MB descomprimidos, el 37 % del peso inicial— para una navegación
  // que quizá no ocurre. `hover` precarga solo lo que el visitante señala.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },

  integrations: [sitemap(sitemapOptions), mdx()],

  vite: {
    // cacheDir local: evita colisiones de permisos entre sesiones/worktrees.
    cacheDir: 'node_modules/.vite',
    // F3.1: scripts procesados como archivo externo cacheable, nunca inline.
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
    },
    resolve: {
      // Espejo EXACTO de tsconfig.json compilerOptions.paths (sin el /*).
      alias: {
        '@config': r('./src/config'),
        '@lib': r('./src/lib'),
        '@layouts': r('./src/layouts'),
        '@components': r('./src/components'),
        '@content': r('./src/content'),
        '@data': r('./src/data'),
      },
    },
  },
});
