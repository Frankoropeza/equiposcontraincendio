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

test('each AVIF wider than 800px has a 640px variant', async () => {
  for (const file of files('public/images').filter((file) => file.endsWith('.avif') && !file.endsWith('-640.avif'))) {
    const { width } = await sharp(file).metadata()
    if ((width ?? 0) > 800) assert.ok(fs.existsSync(file.replace(/\.avif$/, '-640.avif')), `Missing ${file.replace(/\.avif$/, '-640.avif')}`)
  }
})
