import fs from 'node:fs'
import path from 'node:path'

// Variantes generadas por scripts/make-variants.mjs (640 y 800 px) junto al original de 1200.
const WIDTHS = [640, 800] as const

export function srcsetFor(src: string): string | undefined {
  if (!src.startsWith('/images/') || !src.endsWith('.avif')) return undefined
  const parts = WIDTHS
    .map((w) => ({ w, file: src.replace(/\.avif$/, `-${w}.avif`) }))
    .filter(({ file }) => fs.existsSync(path.join(process.cwd(), 'public', file)))
    .map(({ w, file }) => `${file} ${w}w`)
  return parts.length ? [...parts, `${src} 1200w`].join(', ') : undefined
}
