import fs from 'node:fs'
import path from 'node:path'

// Variantes generadas por scripts/make-variants.mjs junto al original de 1200.
// 320 y 400 se añadieron el 2026-11-19: los huecos medidos van de 138 a 396 px
// CSS, y con la escalera anterior (solo 640/800) el candidato más chico ya era
// 2.1× el ancho útil en desktop y 3.7× en las miniaturas de CategoryFeature.
const WIDTHS = [320, 400, 640, 800] as const

export function srcsetFor(src: string): string | undefined {
  if (!src.startsWith('/images/') || !src.endsWith('.avif')) return undefined
  const parts = WIDTHS
    .map((w) => ({ w, file: src.replace(/\.avif$/, `-${w}.avif`) }))
    .filter(({ file }) => fs.existsSync(path.join(process.cwd(), 'public', file)))
    .map(({ w, file }) => `${file} ${w}w`)
  return parts.length ? [...parts, `${src} 1200w`].join(', ') : undefined
}
