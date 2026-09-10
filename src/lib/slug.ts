/* ============================================================================
 * src/lib/slug.ts — slugificador canónico de URLs.
 * ----------------------------------------------------------------------------
 * POR QUÉ EXISTE (auditoría 2026-09-09 · hallazgo P1-3): las etiquetas del blog
 * se usaban TAL CUAL como segmento de ruta, así que un tag como «protección
 * contra incendio» producía la URL
 *     /blog/tag/protecci%C3%B3n%20contra%20incendio/
 * y, en el artefacto de build, un directorio con espacios y acentos. URLs
 * frágiles (doble codificación al compartirlas) y feas en la SERP.
 *
 * REGLA: cualquier valor de contenido que se convierta en segmento de URL pasa
 * por slugify(). La etiqueta legible se conserva aparte para mostrarla en
 * pantalla — se slugifica la RUTA, nunca el texto visible.
 * ========================================================================== */

/**
 * Convierte un texto libre en un slug seguro para URL:
 * minúsculas, sin diacríticos, separadores colapsados en un guion.
 *
 *   slugify('Protección contra incendio') → 'proteccion-contra-incendio'
 *   slugify('NOM-154-SCFI')               → 'nom-154-scfi'
 *   slugify('clases de fuego')            → 'clases-de-fuego'
 */
export function slugify(input: string): string {
  return (input ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita diacríticos
    .replace(/₂/g, '2')
    .replace(/[ºª]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
