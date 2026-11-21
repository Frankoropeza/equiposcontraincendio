#!/usr/bin/env node
import path from 'node:path';

import { validateContentReferences } from './lib/content-references.mjs';

const contentRoot = path.resolve(import.meta.dirname, '../src/content');
const failures = validateContentReferences(contentRoot);

if (failures.length) {
  console.error('Referencias de contenido inválidas:');
  failures.forEach((failure) => console.error(`  - ${failure}`));
  process.exit(1);
}

console.log('✓ check:references — todas las referencias de colecciones tienen destino.');
