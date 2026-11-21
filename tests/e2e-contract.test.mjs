import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const read = (path) => readFileSync(new URL(path, root), 'utf8')

test('el proyecto declara la suite E2E y su configuración', () => {
  const pkg = JSON.parse(read('package.json'))
  assert.equal(pkg.scripts['test:e2e'], 'playwright test')
  assert.match(read('playwright.config.ts'), /webServer:/)
  assert.match(read('playwright.config.ts'), /testDir:\s*['"]\.\/e2e['"]/)
  assert.doesNotMatch(read('playwright.config.ts'), /channel:\s*localChrome/)
})

test('el deploy ejecuta E2E después de construir el sitio', () => {
  const workflow = read('.github/workflows/deploy.yml')
  const build = workflow.indexOf('npm run build')
  const e2e = workflow.indexOf('npm run test:e2e')

  assert.ok(build >= 0, 'falta el build en CI')
  assert.ok(e2e > build, 'E2E debe correr sobre el dist recién construido')
  assert.match(workflow, /playwright install --with-deps chromium/)
})
