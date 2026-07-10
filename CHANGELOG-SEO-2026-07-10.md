# CHANGELOG SEO técnico — equiposcontraincendio.com — 2026-07-10

SOP-SEO-MAESTRO-OLA (alcance TÉCNICO estricto). Astro ^6.1.1 · Cloudflare Pages vía `deploy.yml` (repo `Origenlab/equiposcontraincendio`). Primer sitio generado con `new-site.mjs` desde el template EJEMPLOS.

## Cambios aplicados (commit `db2b425`)

1. **OG compartible (SVG estático → PNG)** — 13 páginas (6 productos + 7 artículos) servían `og:image` SVG, que NO renderiza en WhatsApp/FB/X.
   - `src/lib/seo.ts` → `ogShareImage()`: reescribe `/images/**/<name>.svg|avif|webp` → `/images/og/<dir>-<name>.png` (naming aplanado dir-a-guiones), con verificación de existencia en `public/` en build-time y fallback al default REAL (`/images/og/default.png`) — nunca un og roto.
   - 13 PNG 1200×630 pre-generados con cairosvg+PIL (modo **contain** sobre fondo `#f1f3f6`, el del propio SVG; PNG porque el arte plano artifactea en JPEG) en `public/images/og/`.
   - El JSON-LD conserva la imagen SVG original (formato válido para Google Images); solo cambia og:/twitter: del head.
   - Gotcha nuevo: `import.meta.url` en `seo.ts` NO sirve para localizar `public/` (Vite bundlea el módulo; en build apunta al chunk). Se usa `process.cwd()`.
2. **`og:image:type` dinámico honesto** — `buildMeta()` deriva el MIME del archivo FINAL; `BaseLayout.astro` lo emite. Antes no existía la meta. (`og:image:alt` y width/height 1200×630 ya existían y son honestos: default.png es 1200×630 real.)
3. **Sitemap lastmod real** — antes lastmod AUSENTE por completo (omitido a propósito por el template). Ahora resolver URL→archivo fuente (patrón EVENTECH adaptado): `src/pages` exactos → colecciones con alias `/blog/*`→`articulos`, `/cobertura/*`→`zonas` → `git log -1 --format=%cI` → mtime → si no resuelve se OMITE (nunca `new Date()`). Resultado: 26/55 URLs con lastmod real (4 fechas distintas — repo joven con 6 commits, benigno), 29 omitidas honestamente (índices dinámicos, tags/categorías, cobertura data-driven desde `site.ts`).
4. **`fetch-depth: 0`** en el checkout de `deploy.yml` (sin historia, git log daría la fecha del HEAD para todo).
5. **`public/_redirects`** — `https://www.equiposcontraincendio.com/* https://equiposcontraincendio.com/:splat 301`.
6. **Logo schema** — `ImageObject` con `width: 512, height: 512` reales (viewBox de `public/images/brand/logo.svg`).

## Hallazgos NO aplicados / descartados (con razón)

- **GH Pages ZOMBI (patrón MEDEDUL, inofensivo hoy)**: `Frankoropeza/equiposcontraincendio` (público, HEAD "Create CNAME" 2026-06-21) tiene GitHub Pages activo con CNAME `equiposcontraincendio.com`. HOY no sirve el dominio (DNS apunta a Cloudflare y el contenido live = build actual de CF Pages), pero es una mina: si el DNS cambiara a GH, serviría un sitio congelado. → Desactivar Pages en ese repo (manual, cuenta Frankoropeza).
- **`git ls-remote origin` falla en local** con la cuenta activa Frankoropeza (repo Origenlab privado; acceso cruzado no configurado en esa dirección). Push funciona con `GH_TOKEN=$(gh auth token --user Origenlab)` + credential helper inline. No es bug del repo.
- **Sin `404.astro`** → CF Pages responde 200 (soft-404) en rutas inexistentes, también en el dominio. Crear una página 404 es CONTENIDO (fuera del alcance técnico de este SOP); anotado como mejora futura.
- **Chequeos de template EJEMPLOS (Ola 2): todos limpios** — `/images/og/default.png` EXISTE (1200×630 real); no hay `src/lib/blogImages.ts`; 0 hits de "Plantilla astro"; picsum/placehold solo en README/docs (no como og); favicons propios del sector (no "Ejemplos.mx"); robots.txt live = repo (sin managed override de Cloudflare, AI bots permitidos).
- **Breadcrumbs/Product/FAQ correctos**: home 0 BreadcrumbList, resto exactamente 1; 1 Product por ficha (sin duplicados); FAQPage solo en home con FAQs visibles. Sin aggregateRating/reviews fabricados (el template los gatea).
- **NAP placeholder** (conocido, teléfono/dirección demo): NO tocado — fuera de alcance por instrucción expresa. `check:demo` del template lo vigila.
- **Imágenes = placeholders SVG "Imagen próximamente"** en todo el catálogo: sustituirlas por fotos reales es contenido, no SEO técnico. Cuando lleguen fotos reales, regenerar los PNG OG o dejar que `ogShareImage()` haga fallback.

## Pendientes manuales (dashboard)

1. **Cloudflare Redirect Rule** www→apex (el `_redirects` solo aplica si `www` está adjunto al proyecto Pages; live sigue 200 duplicado en www).
2. **Desactivar GitHub Pages zombi** en `Frankoropeza/equiposcontraincendio` (Settings → Pages) y valorar archivar ese repo.
3. (Futuro, contenido) Página 404 + fotos reales + NAP real.

## Validación live (2026-07-10, post-deploy)

- Action `deploy.yml` run 29120599245: **success**.
- `/productos/extintor-pqs-6kg`: `og:image` = `.../images/og/productos-extintor-pqs-6kg.png` + `og:image:type image/png` ✅
- PNG OG live: **200 `content-type: image/png`** ✅
- Home: `og:image:type image/png` ✅
- Sitemap live: 26 `<lastmod>` con 4 fechas REALES distintas (2026-06-21 → 2026-07-09) — `fetch-depth: 0` verificado funcionando en CI ✅
- www: sigue **200** (esperado hasta la Redirect Rule manual) ⚠️
- Dominio sirve el build de Cloudflare Pages (mismo contenido que `equiposcontraincendio.pages.dev`) ✅
