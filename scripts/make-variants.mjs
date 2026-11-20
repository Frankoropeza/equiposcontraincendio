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
    if (!entry.name.endsWith('.avif') || /-(320|400|640|800)\.avif$/.test(entry.name)) continue
    const meta = await sharp(file).metadata()
    // Escalera medida el 2026-11-19 con playwright contra el build local
    // (ver sizes de los componentes): el hueco real va de 138 px (miniaturas
    // de CategoryFeature a 320 de viewport) a 396 px (tarjeta de .card-grid a
    // 1920). Con solo 640/800 el escalón más chico ya era 2.1× el ancho útil
    // en desktop, así que 320 y 400 cubren DPR 1 y los huecos de 2 y 4
    // columnas; 640 y 800 siguen cubriendo DPR 2-3 en móvil.
    for (const width of [320, 400, 640, 800]) {
      if (width >= (meta.width ?? 0)) continue
      const destination = file.replace(/\.avif$/, `-${width}.avif`)
      try { await fs.access(destination); continue } catch {}
      await sharp(file).resize({ width }).avif({ quality: 55 }).toFile(destination)
      created++
      bytes += (await fs.stat(destination)).size
    }
  }
}
await walk(root)
console.log(`Created ${created} variants (${bytes} bytes)`)
