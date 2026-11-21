import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const assetPath = path.join(
  projectRoot,
  'public/images/brand/logo-coninc-equipo-contra-incendio.webp',
);
const siteSource = fs.readFileSync(path.join(projectRoot, 'src/config/site.ts'), 'utf8');
const headerSource = fs.readFileSync(path.join(projectRoot, 'src/components/Header.astro'), 'utf8');
const footerSource = fs.readFileSync(path.join(projectRoot, 'src/components/Footer.astro'), 'utf8');
const seoSource = fs.readFileSync(path.join(projectRoot, 'src/lib/seo.ts'), 'utf8');
const mobileSource = fs.readFileSync(path.join(projectRoot, 'src/styles/mobile.css'), 'utf8');
const manifest = JSON.parse(
  fs.readFileSync(path.join(projectRoot, 'public/site.webmanifest'), 'utf8'),
);

function readWebpExtendedDimensions(filePath) {
  const image = fs.readFileSync(filePath);
  assert.equal(image.toString('ascii', 0, 4), 'RIFF');
  assert.equal(image.toString('ascii', 8, 12), 'WEBP');
  assert.equal(image.toString('ascii', 12, 16), 'VP8X');

  const readUint24 = (offset) =>
    image[offset] | (image[offset + 1] << 8) | (image[offset + 2] << 16);

  return {
    width: readUint24(24) + 1,
    height: readUint24(27) + 1,
  };
}

test('el logo corporativo optimizado existe y es la fuente de verdad de la marca', () => {
  assert.ok(fs.existsSync(assetPath), 'Falta el WebP optimizado del logo de CONINC');
  assert.deepEqual(readWebpExtendedDimensions(assetPath), { width: 600, height: 200 });
  assert.match(
    siteSource,
    /logo:\s*'\/images\/brand\/logo-coninc-equipo-contra-incendio\.webp'/,
  );
});

test('header y footer usan el logo corporativo con dimensiones y texto alternativo', () => {
  for (const [component, source] of [
    ['Header', headerSource],
    ['Footer', footerSource],
  ]) {
    assert.match(source, /<img[\s\S]*?src=\{SITE\.organization\.logo\}/, `${component} no usa el logo`);
    assert.match(source, /width="600"/, `${component} no declara el ancho intrínseco`);
    assert.match(source, /height="200"/, `${component} no declara el alto intrínseco`);
    assert.match(
      source,
      /alt="CONINC — equipos contra incendios"/,
      `${component} no describe correctamente la marca`,
    );
  }
});

test('los tamaños visuales del logo corresponden al header y footer aprobados', () => {
  const mobileMenuStart = headerSource.indexOf('@media (max-width: 1023px)');
  const componentStyleEnd = headerSource.indexOf('</style>', mobileMenuStart);
  const mobileMenuStyles = headerSource.slice(mobileMenuStart, componentStyleEnd);

  assert.ok(mobileMenuStart >= 0 && componentStyleEnd > mobileMenuStart);
  assert.match(headerSource, /\.hdr-logo__image\s*\{[\s\S]*?width:\s*152px;/);
  assert.match(mobileMenuStyles, /\.hdr-logo__image\s*\{[\s\S]*?width:\s*138px;/);
  assert.match(footerSource, /\.footer__logo-image\s*\{[\s\S]*?width:\s*188px;/);
  assert.match(footerSource, /\.footer__logo\s*\{[\s\S]*?background:\s*#[fF]7[fF]5[fF]2;/);
});

test('Schema.org publica el logo absoluto con sus dimensiones reales', () => {
  assert.match(
    seoSource,
    /logo:\s*\{[\s\S]*?url:\s*absImage\(SITE\.organization\?\.logo\)[\s\S]*?width:\s*600,\s*height:\s*200/,
  );
});

test('el manifest conserva un icono cuadrado y no reutiliza el logo horizontal', () => {
  assert.ok(
    manifest.icons.some(
      (icon) => icon.src === '/images/brand/logo.png' && icon.sizes === '512x512',
    ),
  );
  assert.ok(
    manifest.icons.every(
      (icon) => icon.src !== '/images/brand/logo-coninc-equipo-contra-incendio.webp',
    ),
  );
});

test('el CSS móvil no conserva selectores del lockup anterior', () => {
  assert.doesNotMatch(mobileSource, /\.hdr-logo__(?:mark|word|lockup|descriptor)\b/);
});
