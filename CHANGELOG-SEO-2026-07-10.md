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

---

## Sesión 2 — verificación de conformidad alcance TÉCNICO (2026-07-10, LOCAL sin push)

Re-auditoría estática del dist existente + source contra el Prompt Maestro **alcance T**
(solo técnico; sin datos de negocio → se OMITE openingHours/foundingDate/aggregateRating/sameAs).
`validate-dist.py dist equiposcontraincendio.com` → **LIMPIO** (0 canonical malos, 0 og avif/webp,
0 og dim≠1200×630, 0 BreadcrumbList>1, 0 aggregateRating; 6 Product = 6 fichas, sin duplicado Service+Product).

### Hallazgo aplicado (1)

1. **`openingHoursSpecification` con horario de EJEMPLO → OMITIDO** (`src/config/site.ts`).
   El dist emitía en el nodo LocalBusiness de la home `openingHoursSpecification` (2 entradas, `opens 09:00`)
   derivado de `SITE.business.openingHours`, que era un horario placeholder ("Horario de ejemplo").
   En alcance TÉCNICO esto es un dato de negocio NO verificado (contenido fabricado en el JSON-LD).
   Fix data-only y quirúrgico: se elimina la clave `openingHours` de `SITE.business` (queda documentada
   en comentario para reponerla con el horario REAL). Único consumidor = `localBusinessSchema()` en
   `src/lib/seo.ts`, que ya omite el bloque cuando la clave está ausente (`...((b as any).openingHours ? … : {})`);
   ningún componente/página lee `SITE.business.openingHours` (verificado por grep repo-wide). La librería
   compartida `seo.ts` NO se tocó (sigue soportando horarios reales en otros sitios del portafolio).

### Verificado conforme (sin cambios necesarios)

- **Canonical non-www**: `absUrl()` usa `SITE.url` = `https://equiposcontraincendio.com` (sin www) + `trailingSlash:'never'`. Dist: `<link rel="canonical" href="https://equiposcontraincendio.com/…">` en todas las páginas. ✅
- **`public/_redirects`**: primera (y única) línea `https://www.equiposcontraincendio.com/* https://equiposcontraincendio.com/:splat 301`. ✅
- **OG PNG 1200×630**: las 55 páginas emiten `og:image` `.png` (0 svg/avif/webp) + `og:image:type image/png` + width/height 1200/630 + `og:image:alt` + `twitter:image`. `ogShareImage()` reescribe svg/avif/webp→png con fallback al default REAL. ✅
- **Logo schema**: `ImageObject` 512×512 REALES (`identify` sobre `public/images/brand/logo.svg` = 512×512). ✅
- **BreadcrumbList único**: exactamente 1 nodo JSON-LD por página (home 0). `Breadcrumbs.astro` emite SOLO microdata visible (itemscope/itemprop), NO `<script>` JSON-LD (documentado en el propio componente). El 2º match de la cadena en el HTML es la URL de microdata `schema.org/BreadcrumbList`, no un 2º nodo. ✅
- **Product vs Service**: 6 nodos `Product` puros (fichas de producto) + 3 `Service` puros (servicios), entidades distintas — NO hay `["Service","Product"]` ni Product duplicando un Service. ✅
- **Omitidos correctamente en alcance T**: `foundingDate` (undefined en config → ausente), `sameAs` (`[]` → ausente), `aggregateRating`/`review` (gate `emitReviews()` + `allowSelfReviews:false` → nunca emitidos). ✅
- **Sitemap lastmod dinámico** (git log→mtime→OMITIR, nunca `new Date()`) ya implementado en Sesión 1 (`astro.config.mjs`). ✅

### No aplicado / fuera de alcance

- **NAP placeholder** (teléfono `+525512345678`, dirección Polanco, geo, email `equipocontraincendios737@gmail.com`): datos de ejemplo del scaffold, vigilados por `npm run check:demo`. Fuera del alcance técnico (contenido de negocio); se REPONEN 1:1 con datos reales. NO tocado.
- **Regenerar dist**: no se pudo reconstruir en este entorno (sandbox sin binarios rollup nativos). El `dist/` y los chunks `.astro/.prerender/*.mjs` reflejan el estado PRE-edición (aún con openingHours); el fix toma efecto en el **próximo build de la Action** (Mac/CI). Gate REAL = Action verde.

### Pendiente manual (sin cambios respecto a Sesión 1)

- Cloudflare **Redirect Rule www→apex 301** (el `_redirects` solo actúa si `www` está adjunto al proyecto Pages; live sigue 200 en www).
- Desactivar **GitHub Pages zombi** en `Frankoropeza/equiposcontraincendio`.
