function asArray(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function collectNodes(value, nodes = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectNodes(item, nodes));
    return nodes;
  }
  if (!value || typeof value !== 'object') return nodes;

  nodes.push(value);
  if (Array.isArray(value['@graph'])) collectNodes(value['@graph'], nodes);
  return nodes;
}

export function extractJsonLd(html) {
  const nodes = [];
  const scripts = html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);

  for (const match of scripts) {
    const parsed = JSON.parse(match[1]);
    collectNodes(parsed, nodes);
  }

  return nodes;
}

export function findProductOfferIssues(nodes) {
  const issues = [];
  const allowedAvailability = new Set([
    'https://schema.org/InStock',
    'https://schema.org/OutOfStock',
    'https://schema.org/PreOrder',
  ]);

  for (const product of nodes.filter((node) => asArray(node['@type']).includes('Product'))) {
    for (const offer of asArray(product.offers)) {
      if (!offer || typeof offer !== 'object') continue;
      const specification = offer.priceSpecification;
      const price = offer.price ?? specification?.price;
      const normalizedPrice = typeof price === 'string' ? price.trim() : String(price ?? '').trim();
      const numericPrice = Number(normalizedPrice);
      const currency = offer.priceCurrency ?? specification?.priceCurrency;
      const validPrice = normalizedPrice !== '' && Number.isFinite(numericPrice) && numericPrice > 0;
      const validCurrency = typeof currency === 'string' && /^[A-Z]{3}$/.test(currency);
      const validAvailability = allowedAvailability.has(offer.availability);

      if (!validPrice || !validCurrency || !validAvailability) {
        const reasons = [
          ...(!validPrice ? ['price positivo y numérico'] : []),
          ...(!validCurrency ? ['priceCurrency ISO 4217'] : []),
          ...(!validAvailability ? ['availability Schema.org permitida'] : []),
        ];
        issues.push(`Product "${product.name ?? '(sin nombre)'}": Offer inválido (${reasons.join(', ')})`);
      }
    }
  }

  return issues;
}
