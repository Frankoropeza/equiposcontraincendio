import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const read = (path) => readFileSync(new URL(path, root), 'utf8')

test('el proyecto declara controles reproducibles de lint y formato', () => {
  const pkg = JSON.parse(read('package.json'))
  assert.equal(pkg.scripts.lint, 'eslint .')
  assert.equal(
    pkg.scripts.format,
    'prettier eslint.config.js playwright.config.ts prettier.config.js e2e --write',
  )
  assert.equal(pkg.scripts['format:all'], 'prettier . --write')
  assert.equal(
    pkg.scripts['format:check'],
    'prettier eslint.config.js playwright.config.ts prettier.config.js e2e --check',
  )
  assert.match(read('eslint.config.js'), /eslintPluginAstro\.configs\.recommended/)
  assert.match(read('prettier.config.js'), /prettier-plugin-astro/)
})

test('el deploy bloquea errores de lint antes del build', () => {
  const workflow = read('.github/workflows/deploy.yml')
  const lint = workflow.indexOf('npm run lint')
  const build = workflow.indexOf('npm run build')

  assert.ok(lint >= 0, 'falta ejecutar ESLint en CI')
  assert.ok(lint < build, 'ESLint debe correr antes del build')
})
