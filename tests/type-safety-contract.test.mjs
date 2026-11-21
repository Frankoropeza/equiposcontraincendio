import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../src');

function walk(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file, files);
    else if (/\.(astro|ts)$/.test(entry.name)) files.push(file);
  }
  return files;
}

test('el código de aplicación no evade TypeScript con any explícito', () => {
  const offenders = [];
  for (const file of walk(root)) {
    fs.readFileSync(file, 'utf8').split('\n').forEach((line, index) => {
      if (/\bas any\b|:\s*any\b|<any>/.test(line)) {
        offenders.push(`${path.relative(root, file)}:${index + 1}`);
      }
    });
  }

  assert.deepEqual(offenders, []);
});
