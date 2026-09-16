import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('public/images')
let created = 0
let bytes = 0
async function walk(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) { if (entry.name !== 'og') await walk(file); continue }
    if (!entry.name.endsWith('.avif') || entry.name.endsWith('-640.avif')) continue
    const meta = await sharp(file).metadata()
    if ((meta.width ?? 0) <= 800) continue
    const destination = file.replace(/\.avif$/, '-640.avif')
    try { await fs.access(destination); continue } catch {}
    await sharp(file).resize({ width: 640 }).avif({ quality: 55 }).toFile(destination)
    created++
    bytes += (await fs.stat(destination)).size
  }
}
await walk(root)
console.log(`Created ${created} variants (${bytes} bytes)`)
