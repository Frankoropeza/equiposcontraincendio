import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const workflow = readFileSync(
  new URL('../.github/workflows/validate.yml', import.meta.url),
  'utf8',
)

test('los pull requests ejecutan todos los gates sin desplegar', () => {
  assert.match(workflow, /pull_request:/)
  for (const command of ['npm test', 'npm run lint', 'npm run build', 'npm run test:e2e']) {
    assert.match(workflow, new RegExp(command.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
  assert.doesNotMatch(workflow, /wrangler-action|pages deploy/)
})

test('las acciones de validación usan SHAs inmutables', () => {
  const actions = [...workflow.matchAll(/^\s+(?:-\s+)?uses:\s*(\S+)/gm)].map(
    (match) => match[1],
  )
  assert.ok(actions.length >= 2)
  for (const action of actions) assert.match(action, /^[^@]+@[0-9a-f]{40}\b/)
})
