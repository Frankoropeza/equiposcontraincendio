# Placeholder temporal — "Imagen próximamente"

Mientras llegan las fotos reales, **todas** las tarjetas del sitio (productos,
servicios, artículos, showcase, zonas, casos) muestran el mismo placeholder de
marca: `proximamente.svg` (rojo #c62828, 800×500, 16:10).

## Cómo poner una foto real

No hace falta tocar el código ni el frontmatter. Solo **reemplaza el archivo**
conservando el mismo nombre y ruta. Ejemplos:

- `public/images/productos/extintor-pqs-6kg.svg`  → pon ahí la foto del PQS 6 kg
- `public/images/showcase/deteccion-humo-alarma.svg` → foto de detección/alarma

Recomendado para la foto real:
- Relación 16:9 o 16:10 (las cards recortan a `object-fit: cover`).
- ~1600×1000 px, optimizada. Puedes usar `.webp`/`.jpg`/`.png` o `.svg`.
- Si cambias de extensión (ej. `.svg` → `.webp`), actualiza la ruta `image:`
  en el frontmatter del contenido correspondiente (`src/content/...`) o en
  `src/config/site.ts` (showcase).

## Revertir / re-aplicar el placeholder

El maestro está aquí: `public/images/_placeholder/proximamente.svg`.
Para volver a aplicarlo a un archivo, cópialo encima con el nombre destino.

> Intactos a propósito: `brand/logo.svg` y `og/default.*` (no son placeholders).
