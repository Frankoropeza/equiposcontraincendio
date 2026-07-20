# Decisiones de arquitectura — variantes de producto

**Fecha:** 2026-07-20
**Estado:** aprobado por el PROMPT MAESTRO v1.0
**Alcance:** catálogo de `productos`; entrega local sin push.

## Contexto y línea base

- Astro 6 SSG con Content Collections y Zod `.strict()`.
- Seis productos, cero variantes y cinco categorías declaradas; `accesorios` está vacía.
- Línea base: `npm run build` en `main` terminó con exit 0 y generó 55 páginas. `astro check` informó 0 errores y 104 hints preexistentes.
- Existe un archivo de usuario no rastreado, `docs/PROMPT-VARIANTES-PRODUCTOS-2026-07-20.md`; queda fuera del alcance.

## D1 — Modelado canónico

Se añade exclusivamente `variantes?: Variante[]` al schema Zod de `productos`, con los límites definidos por el PROMPT MAESTRO. La variante vive dentro del frontmatter de su familia; no se duplica en TypeScript ni en el componente.

El contrato es:

- `nombre`: 5–80 caracteres.
- `badge`: opcional, máximo 30 caracteres.
- `desc`: 50–300 caracteres.
- `specs`: 20–200 caracteres y valores separados por ` · `.
- `imagen`: opcional y validada con `imagePath`; si falta, se usa la imagen de la familia.
- `waText`: mínimo 20 caracteres.
- El arreglo es opcional por compatibilidad de despliegue, pero cuando existe contiene al menos una variante.

## D2 — Familia y presentación

Se adopta la promoción recomendada de los tres extintores:

| Slug anterior | Slug canónico | Acción |
|---|---|---|
| `extintor-pqs-6kg` | `extintor-pqs` | 301 permanente |
| `extintor-co2-45kg` | `extintor-co2` | 301 permanente |
| `extintor-clase-k-6l` | `extintor-clase-k` | 301 permanente |

La capacidad actual pasa a ser una variante de la familia. Se actualizan las referencias internas si existen. No se renombran otras familias ni se crean categorías.

## D3 — Render y conversión

`VariantesProducto.astro` recibe las variantes, la imagen fallback y genera una cuadrícula estática, sin JavaScript de cliente. Cada tarjeta muestra imagen, badge opcional, nombre, descripción, especificaciones y CTA.

El CTA usa `waUrl(variante.waText)`, que aplica `encodeURIComponent` y el número canónico de `CONTACT`; no se construyen URLs externas desde contenido. El componente se monta condicionalmente en la página dinámica cuando `d.variantes?.length` es verdadero.

## D4 — Datos estructurados

Se mantiene el schema `Product` de la familia y se pospone `ProductGroup/hasVariant`. Las variantes no tienen todavía URL canónica propia, SKU estable, precio verificable ni identidad de marca/modelo consistente; emitir `hasVariant` ahora produciría entidades incompletas y difíciles de validar. El backlog requiere definir identificadores, URLs y disponibilidad reales antes de reconsiderarlo.

## Catálogo, investigación y contenido

- Se crea la familia `soportes-accesorios-extintor` dentro de la categoría existente `accesorios`.
- Cada presentación se publica solo si existe evidencia primaria del fabricante o autoridad, o evidencia comercial mexicana documentada.
- Las normas se describen como marco aplicable o referencia técnica; no se atribuye certificación a un SKU genérico.
- Todos los precios permanecen como `Cotizar`.
- Si una familia no alcanza cinco presentaciones genuinamente distintas, se documenta la excepción; no se rellena con paráfrasis.
- No se crean fotografías. Las variantes heredan el SVG de su familia y la deuda fotográfica queda registrada.

## Pruebas y gates

Se añade un verificador programático con pruebas unitarias para leer el bloque `variantes` del frontmatter, detectar productos sin cinco variantes y admitir únicamente excepciones documentadas de forma explícita. Las pruebas también cubren schema, montaje del componente, uso de `waUrl`, slugs canónicos y redirects.

La aceptación final exige: pruebas rojo‑verde, `npm run build`, conteo programático, grep de integridad en `dist`, `npm run audit:meta`, verificación de `_redirects` y revisión visual desktop/mobile de dos fichas.

## Gobernanza y limitaciones de esta sesión

No se hará push ni deploy. Desktop Commander no está disponible entre las herramientas de esta sesión, por lo que las mutaciones Git (rama y commits) no se suplirán silenciosamente con otra herramienta. Los cambios se entregarán localmente y esta limitación se reflejará en el reporte final.

## Resultado de ejecución

- Catálogo final: 7 familias, 37 variantes y 5/5 categorías con al menos un producto.
- Excepción editorial: Clase K conserva 3 capacidades verificadas en México; el verificador enlaza al expediente y falla si el conteo cambia.
- Verificación automatizada: 9/9 pruebas, `check:variants` sin incumplimientos, `audit:meta` sin fallos, build de 56 páginas con 0 errores e integridad de `dist/` limpia.
- Revisión visual: las fichas PQS y accesorios se inspeccionaron en escritorio y en un viewport móvil real de 390 × 844 px; se confirmaron cuadrícula móvil de una columna, tarjetas de 343 px, fallback completo, mensajes de WhatsApp codificados, ausencia de overflow y cero errores de consola. Se cambió el fallback de `cover` a `contain` al detectar recorte del SVG.
- Diagnóstico del viewport: la sesión inicial mantuvo un ancho mínimo pese al override. Una conexión nueva con secuencia `reset → set` reprodujo correctamente 390 × 844 px; el problema era estado transitorio de la superficie de prueba, no del CSS del sitio.
- Redirects: los tres mapeos se probaron con Wrangler 4.112 y Cloudflare Pages local; cada ruta antigua respondió `301 Moved Permanently` con `Location` hacia su slug canónico. `astro preview` devuelve 404 porque no procesa `_redirects`.
- Advertencia preexistente: Wrangler omite localmente la regla absoluta `www → apex` de la cuarta línea de `_redirects`. No afecta las tres reglas relativas nuevas; `CHANGELOG-SEO-2026-07-10.md` ya asigna el redirect de dominio a una Redirect Rule de Cloudflare.
