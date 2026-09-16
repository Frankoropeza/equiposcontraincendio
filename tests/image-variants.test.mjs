import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import sharp from 'sharp'

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name)
    return entry.isDirectory() ? (entry.name === 'og' ? [] : files(file)) : [file]
  })
}

test('each AVIF wider than 800px has 640px and 800px variants', async () => {
  for (const file of files('public/images').filter((file) => file.endsWith('.avif') && !/-(640|800)\.avif$/.test(file))) {
    const { width } = await sharp(file).metadata()
    if ((width ?? 0) > 800) for (const w of [640, 800]) assert.ok(fs.existsSync(file.replace(/\.avif$/, `-${w}.avif`)), `Missing ${w}px variant of ${file}`)
  }
})
