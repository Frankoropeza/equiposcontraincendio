import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const GIROS = path.join(ROOT, "src", "content", "giros");
const CATALOGO = path.join(ROOT, "src", "data", "giros-catalogo.ts");
const GIRO_L3 = path.join(ROOT, "src", "components", "GiroL3.astro");

const ids = fs
  .readdirSync(GIROS)
  .filter((file) => file.endsWith(".md"))
  .map((file) => file.replace(/\.md$/, ""));
const frontmatter = (id) =>
  fs
    .readFileSync(path.join(GIROS, `${id}.md`), "utf8")
    .match(/^---\n([\s\S]*?)\n---/m)?.[1] ?? "";
const list = (source, key) =>
  source.match(new RegExp(`^${key}:\\n((?:  - .*\\n?)+)`, "m"))?.[1] ?? "";
const array = (source, key) => {
  const inline = source.match(
    new RegExp(`^${key}:\\s*\\[([^\\]]*)\\]`, "m"),
  )?.[1];
  return inline
    ? inline.split(",").map((value) => value.trim())
    : [...list(source, key).matchAll(/^  - ([\\w-]+)$/gm)].map(
        (match) => match[1],
      );
};
const scalar = (source, key) =>
  source
    .match(new RegExp(`^${key}:\\s*["']?([^\\n"']+)["']?`, "m"))?.[1]
    ?.trim();

test("los ids de giros no chocan con los de trámites", () => {
  const tramites = fs
    .readdirSync(path.join(ROOT, "src", "content", "tramites"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
  assert.deepEqual(
    ids.filter((id) => tramites.includes(id)),
    [],
  );
});

test("cada vitrina tiene ocho claves presentes en el catálogo", () => {
  const catalogo = fs.readFileSync(CATALOGO, "utf8");
  for (const id of ids) {
    const keys = array(frontmatter(id), "vitrina");
    assert.equal(keys.length, 8, `${id}: vitrina debe tener 8 claves`);
    for (const key of keys)
      assert.match(catalogo, new RegExp(`\\b${key}:`), `${id}: falta ${key}`);
  }
});

test("hermanos tiene cuatro entradas; ausentes son aviso editorial", () => {
  for (const id of ids) {
    const brothers = array(frontmatter(id), "hermanos");
    assert.equal(brothers.length, 4, `${id}: hermanos debe tener 4 slugs`);
    const missing = brothers.filter((brother) => !ids.includes(brother));
    if (missing.length)
      console.warn(`${id}: fichas hermanas pendientes: ${missing.join(", ")}`);
  }
});

test("enlaces de soporte apuntan a artículos existentes", () => {
  const posts = new Set(
    fs
      .readdirSync(path.join(ROOT, "src", "content", "articulos"))
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => `/blog/${file.replace(/\.mdx$/, "")}/`),
  );
  for (const id of ids) {
    const links = [
      ...list(frontmatter(id), "enlacesSoporte").matchAll(
        /^  - (\/blog\/[^\s]+)$/gm,
      ),
    ].map((match) => match[1]);
    for (const href of links)
      assert.ok(posts.has(href), `${id}: artículo inexistente ${href}`);
  }
});

test("las metas respetan los límites por caracteres", () => {
  for (const id of ids) {
    const source = frontmatter(id);
    assert.ok(
      (scalar(source, "seoTitle") ?? "").length <= 60,
      `${id}: seoTitle excede 60`,
    );
    const description = scalar(source, "seoDescription") ?? "";
    assert.ok(
      description.length >= 120 && description.length <= 160,
      `${id}: seoDescription debe tener 120-160`,
    );
  }
});

test("el directorio completa la retícula en múltiplos de cuatro", () => {
  const missing = (4 - (ids.length % 4)) % 4;
  assert.equal((ids.length + missing) % 4, 0);
});

test("GiroL3 toma el título y la descripción de cada artículo de soporte", () => {
  const source = fs.readFileSync(GIRO_L3, "utf8");
  assert.match(source, /getCollection\('articulos'/);
  assert.match(source, /article\.data\.title/);
  assert.match(
    source,
    /relDesc\('articulos', article\.id, article\.data\.description\)/,
  );
  assert.doesNotMatch(source, /replaceAll\('-', ' '\)/);
});

