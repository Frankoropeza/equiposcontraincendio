import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const workflow = fs.readFileSync(
  path.resolve(import.meta.dirname, '../.github/workflows/deploy.yml'),
  'utf8',
);

test('el deploy ejecuta la suite antes del build', () => {
  const testIndex = workflow.indexOf('run: npm test');
  const buildIndex = workflow.indexOf('run: npm run build');

  assert.ok(testIndex >= 0, 'Falta `npm test` en el workflow de deploy');
  assert.ok(buildIndex >= 0, 'Falta `npm run build` en el workflow de deploy');
  assert.ok(testIndex < buildIndex, '`npm test` debe ejecutarse antes del build');
});

test('todas las acciones externas están fijadas a un SHA completo', () => {
  const actions = [...workflow.matchAll(/^\s+(?:-\s+)?uses:\s*(\S+)/gm)].map((match) => match[1]);
  assert.ok(actions.length >= 3, 'se esperaban checkout, setup-node y wrangler-action');
  for (const action of actions) {
    assert.match(action, /^[^@]+@[0-9a-f]{40}\b/, `${action} debe usar un SHA inmutable`);
  }
});

test('los deploys de producción se serializan y cancelan ejecuciones obsoletas', () => {
  assert.match(workflow, /concurrency:\s*\n\s+group:\s*production-/);
  assert.match(workflow, /cancel-in-progress:\s*true/);
});

test('el gate en producción comprueba los encabezados de seguridad', () => {
  assert.match(workflow, /strict-transport-security/i);
  assert.match(workflow, /content-security-policy:/i);
  assert.doesNotMatch(workflow, /content-security-policy-report-only/i);
});
