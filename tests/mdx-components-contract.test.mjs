import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(import.meta.dirname, '..');
const COMPONENTS = [
  'Aviso.astro',
  'KeyTakeaways.astro',
  'Pasos.astro',
  'FichaNorma.astro',
  'TablaComparativa.astro',
  'Calculadora.astro',
  'Fuentes.astro',
  'ActualizadoBadge.astro',
];

const componentSource = (file) => fs.readFileSync(path.join(ROOT, 'src', 'components', file), 'utf8');

test('los ocho componentes MDX existen y declaran Props exportadas', () => {
  for (const file of COMPONENTS) {
    const fullPath = path.join(ROOT, 'src', 'components', file);
    assert.ok(fs.existsSync(fullPath), `${file} debe existir`);
    assert.match(componentSource(file), /export\s+interface\s+Props\b/, `${file} debe exportar interface Props`);
  }
});

test('los componentes MDX no introducen colores hardcodeados ni :global inválido', () => {
  for (const file of COMPONENTS) {
    const source = componentSource(file);
    assert.doesNotMatch(source, /#[0-9a-f]{3,4}\b|#[0-9a-f]{6}\b|#[0-9a-f]{8}\b/i, `${file} contiene un color hexadecimal`);
    assert.doesNotMatch(source, /rgba?\s*\(/i, `${file} contiene rgb() o rgba()`);
    assert.doesNotMatch(source, /:global\s*\(/, `${file} contiene :global() fuera de un bloque is:global`);
  }
});

test('las fechas visibles de fuentes y normas se formatean en UTC', () => {
  for (const file of ['FichaNorma.astro', 'Fuentes.astro']) {
    assert.match(componentSource(file), /timeZone:\s*['"]UTC['"]/, `${file} debe fijar timeZone: 'UTC'`);
  }
});

async function loadSeoModule() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mdx-seo-'));
  const tempSeo = path.join(tempDir, 'seo.ts');
  const configUrl = pathToFileURL(path.join(ROOT, 'src', 'config', 'site.ts')).href;
  const source = fs
    .readFileSync(path.join(ROOT, 'src', 'lib', 'seo.ts'), 'utf8')
    .replace("from '@config/site'", `from '${configUrl}'`);

  fs.writeFileSync(tempSeo, source);
  try {
    return await import(`${pathToFileURL(tempSeo).href}?contract=${Date.now()}`);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

test('howToSchema se exporta y buildSchema lo emite solo para artículos con howTo', async () => {
  const { buildSchema, howToSchema } = await loadSeoModule();
  const howTo = {
    name: 'Revisar un extintor',
    steps: [{ name: 'Leer la etiqueta', text: 'Confirma que el extintor corresponde al riesgo.' }],
    totalTime: 'PT5M',
  };

  assert.deepEqual(howToSchema(howTo), {
    '@type': 'HowTo',
    name: howTo.name,
    totalTime: howTo.totalTime,
    step: [{ '@type': 'HowToStep', ...howTo.steps[0] }],
  });
  assert.ok(buildSchema('article', { howTo }).some((node) => node['@type'] === 'HowTo'));
  assert.ok(!buildSchema('article', {}).some((node) => node['@type'] === 'HowTo'));
});
