# Programa de variantes de producto Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir los productos del catálogo en familias con variantes reales y verificadas, completar la categoría accesorios y dejar los gates locales en verde.

**Architecture:** Las variantes viven como objetos tipados dentro del frontmatter de cada producto y se renderizan mediante un componente Astro estático. Un verificador independiente mide el mínimo por familia y obliga a documentar cualquier excepción, mientras los slugs antiguos de extintores se preservan mediante redirects 301.

**Tech Stack:** Astro 6 SSG, TypeScript, Content Collections, Zod, Markdown/YAML, Node.js `node:test`, CSS scoped.

**Execution status:** Implementado y verificado localmente el 2026-07-20. Todos los gates automatizados están en verde; se completaron capturas responsive a 390 × 844 px y pruebas 301 con Cloudflare Pages local.

## Global Constraints

- Cero contenido fabricado; lo no verificable no se publica.
- No modificar `src/content.config.ts` fuera del campo `variantes` de `productos`.
- No crear categorías nuevas ni editar `TAXONOMY`.
- `title` ≤110 y `description` entre 70 y 280 caracteres.
- Todas las imágenes deben usar `/images/`; sin fotografía inventada.
- Precios no verificados: `Cotizar`.
- Sin `aggregateRating`, reseñas, certificaciones de SKU ni claims de inventario.
- Entrega local sin push.

---

### Task 1: Verificador del contrato de variantes

**Files:**
- Create: `tests/variant-frontmatter.test.mjs`
- Create: `scripts/lib/variant-frontmatter.mjs`
- Create: `scripts/check-variants.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: `parseProductFrontmatter(source)` y `auditProductVariants(productDir, exceptions)`.
- Produces: comando `npm run check:variants` con exit 1 ante incumplimiento.

- [ ] Escribir pruebas que exijan conteo correcto, error por bloque ausente, error por menos de cinco y excepción documentada.
- [ ] Ejecutar las pruebas y confirmar el fallo por módulo ausente.
- [ ] Implementar el parser mínimo del frontmatter y el auditor.
- [ ] Ejecutar pruebas y confirmar que pasan.
- [ ] Añadir el comando de package y verificar su fallo contra la línea base.

### Task 2: Schema y componente de variantes

**Files:**
- Modify: `src/content.config.ts`
- Create: `src/components/VariantesProducto.astro`
- Modify: `src/pages/productos/[...slug].astro`
- Test: `tests/variant-contract.test.mjs`

**Interfaces:**
- Consumes: `waUrl(message: string)` de `src/config/site.ts`.
- Produces: props `{ variantes, fallbackImage }` y render condicional.

- [ ] Escribir pruebas de contrato para límites Zod, import/montaje y uso de `waUrl`.
- [ ] Ejecutarlas y confirmar el fallo por implementación ausente.
- [ ] Añadir únicamente `variantes` al schema de productos.
- [ ] Crear el componente estático con HTML semántico, imagen fallback y CTA por variante.
- [ ] Montarlo condicionalmente tras la descripción de la ficha.
- [ ] Ejecutar pruebas y `astro check`.

### Task 3: Investigación y expediente editorial

**Files:**
- Create: `docs/expedientes-variantes.md`

**Interfaces:**
- Produce: una matriz por familia con eje, presentaciones, fuente, normas, vocabulario, riesgos y deuda fotográfica.

- [ ] Revisar el estudio de mercado interno.
- [ ] Verificar cada presentación con fuentes primarias/oficiales actuales.
- [ ] Distinguir normas mexicanas obligatorias de referencias NFPA.
- [ ] Registrar qué no se puede afirmar.
- [ ] Documentar excepción si una familia no llega a cinco sin duplicación.

### Task 4: Familias de extintores y redirects

**Files:**
- Create: `src/content/productos/extintor-pqs.md`
- Create: `src/content/productos/extintor-co2.md`
- Create: `src/content/productos/extintor-clase-k.md`
- Delete: los tres archivos de capacidad anteriores, después de crear sus reemplazos.
- Modify: `public/_redirects`
- Modify: referencias a los slugs antiguos, si existen.
- Test: `tests/variant-contract.test.mjs`

**Interfaces:**
- Produce: slugs de familia canónicos y redirects 301 desde los tres slugs anteriores.

- [ ] Añadir assertions para slugs y redirects y confirmar el fallo.
- [ ] Redactar variantes desde el expediente, sin exceder límites.
- [ ] Actualizar referencias tipadas.
- [ ] Añadir redirects específicos antes del redirect de dominio.
- [ ] Ejecutar pruebas y build.

### Task 5: Detección, gabinetes y señalización

**Files:**
- Modify: `src/content/productos/detector-humo-fotoelectrico.md`
- Modify: `src/content/productos/gabinete-manguera-contra-incendio.md`
- Modify: `src/content/productos/senalizacion-fotoluminiscente.md`

**Interfaces:**
- Produce: variantes verificadas con CTA inequívoco por presentación.

- [ ] Añadir las variantes del expediente familia por familia.
- [ ] Revisar que cada eje sea material y no una paráfrasis.
- [ ] Ejecutar `npm run check:variants` después de cada familia.

### Task 6: Completar accesorios

**Files:**
- Create: `src/content/productos/soportes-accesorios-extintor.md`

**Interfaces:**
- Produce: primer producto de la categoría existente `accesorios`.

- [ ] Escribir la familia con metadatos válidos, cuerpo útil y variantes verificadas.
- [ ] Confirmar cinco de cinco categorías con al menos un producto.
- [ ] Ejecutar pruebas, `check:demo` y build.

### Task 7: Verificación integral y revisión visual

**Files:**
- Modify: `docs/expedientes-variantes.md` con resumen final y backlog.

**Interfaces:**
- Consumes: `dist/` recién generado.
- Produce: evidencia medible para el reporte de entrega.

- [ ] Ejecutar `env -u NODE_ENV npm test` y `npm run check:variants`.
- [ ] Ejecutar `env -u NODE_ENV npm run build` y leer el resultado completo.
- [ ] Buscar `aggregateRating`, `0000 0000` y `Av. Demo` en `dist/`.
- [ ] Ejecutar `npm run audit:meta`.
- [x] Confirmar `_redirects` en `dist/` y resolver dos rutas antiguas.
- [x] Inspeccionar dos fichas en desktop y mobile; comprobar CTA WhatsApp.
- [ ] Revisar el diff, preservar cambios de usuario y reportar la limitación de Desktop Commander.
