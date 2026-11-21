import { test } from 'node:test';
import assert from 'node:assert/strict';

import { findProductOfferIssues } from '../scripts/lib/schema-audit.mjs';

test('rechaza Offer sin precio verificable', () => {
  const nodes = [{ '@type': 'Product', name: 'Extintor', offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' } }];
  assert.deepEqual(findProductOfferIssues(nodes), [
    'Product "Extintor": Offer inválido (price positivo y numérico, priceCurrency ISO 4217)',
  ]);
});

test('acepta Product informativo sin Offer', () => {
  const nodes = [{ '@type': 'Product', name: 'Extintor' }];
  assert.deepEqual(findProductOfferIssues(nodes), []);
});

test('acepta Offer con precio y disponibilidad explícitos', () => {
  const nodes = [{
    '@type': 'Product',
    name: 'Extintor',
    offers: { '@type': 'Offer', price: '1250', priceCurrency: 'MXN', availability: 'https://schema.org/InStock' },
  }];
  assert.deepEqual(findProductOfferIssues(nodes), []);
});

for (const price of ['0', '  ', '-50', 'Cotizar', '1,250']) {
  test(`rechaza precio no verificable: ${JSON.stringify(price)}`, () => {
    const nodes = [{
      '@type': 'Product',
      name: 'Extintor',
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'MXN',
        availability: 'https://schema.org/InStock',
      },
    }];
    assert.equal(findProductOfferIssues(nodes).length, 1);
  });
}

test('rechaza Offer sin moneda o disponibilidad Schema.org válida', () => {
  const nodes = [
    { '@type': 'Product', name: 'Sin moneda', offers: { '@type': 'Offer', price: '1250', availability: 'https://schema.org/InStock' } },
    { '@type': 'Product', name: 'Sin disponibilidad', offers: { '@type': 'Offer', price: '1250', priceCurrency: 'MXN' } },
    { '@type': 'Product', name: 'Disponibilidad libre', offers: { '@type': 'Offer', price: '1250', priceCurrency: 'MXN', availability: 'disponible' } },
  ];
  assert.equal(findProductOfferIssues(nodes).length, 3);
});
