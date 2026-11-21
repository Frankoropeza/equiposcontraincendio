import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const REFERENCE_FIELDS = new Map([
  ['relatedProducts', 'productos'],
  ['relatedServices', 'servicios'],
  ['relatedPosts', 'articulos'],
  ['availableServices', 'servicios'],
  ['nearbyZones', 'zonas'],
  ['relatedZones', 'zonas'],
]);

const CONTENT_EXTENSIONS = new Set(['.md', '.mdx']);

function walk(root, files = []) {
  if (!fs.existsSync(root)) return files;

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) walk(file, files);
    else if (CONTENT_EXTENSIONS.has(path.extname(entry.name))) files.push(file);
  }

  return files;
}

function entryId(collectionRoot, file) {
  return path
    .relative(collectionRoot, file)
    .replace(/\.(md|mdx)$/i, '')
    .split(path.sep)
    .join('/');
}

function readFrontmatter(file) {
  const source = fs.readFileSync(file, 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return {};
  return YAML.parse(match[1]) ?? {};
}

export function validateContentReferences(contentRoot) {
  const entries = new Map();

  for (const collectionEntry of fs.readdirSync(contentRoot, { withFileTypes: true })) {
    if (!collectionEntry.isDirectory()) continue;
    const collectionRoot = path.join(contentRoot, collectionEntry.name);
    entries.set(
      collectionEntry.name,
      new Set(walk(collectionRoot).map((file) => entryId(collectionRoot, file))),
    );
  }

  const failures = [];

  for (const [sourceCollection, ids] of entries) {
    const sourceRoot = path.join(contentRoot, sourceCollection);
    for (const sourceId of ids) {
      const extension = ['.md', '.mdx'].find((suffix) =>
        fs.existsSync(path.join(sourceRoot, `${sourceId}${suffix}`)),
      );
      if (!extension) continue;

      const file = path.join(sourceRoot, `${sourceId}${extension}`);
      const data = readFrontmatter(file);

      for (const [field, targetCollection] of REFERENCE_FIELDS) {
        const references = data[field];
        if (!Array.isArray(references)) continue;

        references.forEach((targetId, index) => {
          if (typeof targetId !== 'string') return;
          if (entries.get(targetCollection)?.has(targetId)) return;
          failures.push(
            `${sourceCollection}/${sourceId}${extension}: ${field}[${index}] referencia ${targetCollection}/${targetId}, pero no existe`,
          );
        });
      }
    }
  }

  return failures.sort();
}
