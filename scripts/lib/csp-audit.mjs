const NON_EXECUTABLE_TYPES = new Set([
  'application/json',
  'application/ld+json',
  'application/schema+json',
])

export function findInlineExecutableScripts(html) {
  const issues = []
  const scripts = html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)

  for (const match of scripts) {
    const attributes = match[1]
    if (/\bsrc\s*=/i.test(attributes)) continue

    const type = attributes.match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? ''
    if (NON_EXECUTABLE_TYPES.has(type)) continue

    issues.push({
      type: type || 'text/javascript',
      preview: match[2].trim().replace(/\s+/g, ' ').slice(0, 120),
    })
  }

  return issues
}
