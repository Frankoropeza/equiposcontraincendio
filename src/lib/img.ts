import fs from 'node:fs'
import path from 'node:path'

export function srcsetFor(src: string): string | undefined {
  if (!src.startsWith('/images/') || !src.endsWith('.avif')) return undefined
  const variant = src.replace(/\.avif$/, '-640.avif')
  return fs.existsSync(path.join(process.cwd(), 'public', variant))
    ? `${variant} 640w, ${src} 1200w`
    : undefined
}
