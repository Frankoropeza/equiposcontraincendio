import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const ROOT = path.resolve(import.meta.dirname, '..')
const read = (relativePath) =>
  fs.readFileSync(path.join(ROOT, relativePath), 'utf8')

test('la paginación de categorías genera una descripción propia por página', () => {
  const source = read('src/pages/blog/categoria/[...categoria].astro')

  assert.match(source, /const pageDescription\s*=/)
  assert.match(source, /página \$\{page\} de \$\{total\}/)
  assert.match(source, /description:\s*pageDescription/)
  assert.match(source, /description=\{pageDescription\}/)
})

test('las L3 enlazan contextualmente las tres fichas que faltaban', () => {
  const detection = read('src/content/l3/productos/deteccion-alarmas.md')
  const suppression = read('src/content/l3/productos/supresion-fija.md')

  assert.match(
    detection,
    /ctaSecondaryHref: \/productos\/modulo-direccionable-monitor-y-control\//,
  )
  assert.match(
    detection,
    /ctaSecondaryHref: \/productos\/panel-de-voz-y-evacuacion\//,
  )
  assert.match(
    suppression,
    /ctaSecondaryHref: \/productos\/bomba-jockey-presurizadora\//,
  )
})
