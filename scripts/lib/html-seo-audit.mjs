export const TITLE_MAX = 60
export const DESC_MAX = 155
export const NON_PAGE_HTML_FILE = /^google[0-9a-f]+\.html$/

function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8209;/g, '-')
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, 'i'))
  return match ? decode((match[1] ?? match[2]).trim()) : null
}

function tagsWithAttribute(html, tagName, attributeName, expectedValue) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) ?? []
  return tags.filter((tag) =>
    attribute(tag, attributeName)
      ?.toLowerCase()
      .split(/\s+/)
      .includes(expectedValue),
  )
}

export function extractPageSeo(html) {
  const titleMatches = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)]
  const descriptionTags = tagsWithAttribute(html, 'meta', 'name', 'description')
  const canonicalTags = tagsWithAttribute(html, 'link', 'rel', 'canonical')

  return {
    title: titleMatches[0] ? decode(titleMatches[0][1].trim()) : null,
    description: descriptionTags[0]
      ? attribute(descriptionTags[0], 'content')
      : null,
    canonical: canonicalTags[0] ? attribute(canonicalTags[0], 'href') : null,
    titleCount: titleMatches.length,
    descriptionCount: descriptionTags.length,
    canonicalCount: canonicalTags.length,
    h1Count: (html.match(/<h1\b[^>]*>/gi) ?? []).length,
  }
}

function canonicalProblems(canonical, pageUrl, siteUrl) {
  if (!canonical) return []

  let parsed
  try {
    parsed = new URL(canonical)
  } catch {
    return ['canonical no es una URL absoluta válida']
  }

  const expectedSite = new URL(siteUrl)
  if (parsed.protocol !== 'https:') return ['canonical debe usar HTTPS']
  if (parsed.origin !== expectedSite.origin)
    return ['canonical fuera del origen del sitio']

  const expected = new URL(pageUrl, `${expectedSite.origin}/`)
  if (parsed.href !== expected.href)
    return [`canonical no autorreferente (debe ser ${expected.href})`]
  return []
}

function addDuplicateProblems(rows, field, label) {
  const groups = new Map()

  for (const row of rows) {
    const value = row[field]
    if (!value) continue
    const group = groups.get(value) ?? []
    group.push(row)
    groups.set(value, group)
  }

  for (const group of groups.values()) {
    if (group.length < 2) continue
    for (const row of group) {
      const otherUrls = group
        .filter((candidate) => candidate !== row)
        .map((candidate) => candidate.url)
      row.problems.push(`${label} con ${otherUrls.join(', ')}`)
    }
  }
}

export function auditHtmlPages(
  pages,
  { siteUrl = 'https://example.com' } = {},
) {
  const rows = pages.map(({ url, html }) => {
    const seo = extractPageSeo(html)
    const problems = []

    if (!seo.title) problems.push('sin <title>')
    else if (seo.titleCount !== 1)
      problems.push(
        `${seo.titleCount} elementos <title> (debe existir exactamente 1)`,
      )
    else if (seo.title.length > TITLE_MAX)
      problems.push(`title ${seo.title.length} > ${TITLE_MAX}`)

    if (!seo.description) problems.push('sin meta description')
    else if (seo.descriptionCount !== 1)
      problems.push(
        `${seo.descriptionCount} meta descriptions (debe existir exactamente 1)`,
      )
    else if (seo.description.length > DESC_MAX) {
      problems.push(`description ${seo.description.length} > ${DESC_MAX}`)
    }

    if (!seo.canonical) problems.push('sin canonical')
    else if (seo.canonicalCount !== 1)
      problems.push(
        `${seo.canonicalCount} canonicals (debe existir exactamente 1)`,
      )
    problems.push(...canonicalProblems(seo.canonical, url, siteUrl))
    if (seo.h1Count !== 1) {
      problems.push(
        `${seo.h1Count} elementos <h1> (debe existir exactamente 1)`,
      )
    }

    return { url, ...seo, problems }
  })

  addDuplicateProblems(rows, 'title', 'title duplicado')
  addDuplicateProblems(rows, 'description', 'description duplicada')
  addDuplicateProblems(rows, 'canonical', 'canonical duplicado')

  return { rows, failures: rows.filter((row) => row.problems.length > 0) }
}
