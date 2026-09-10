# Generar imágenes con fal.ai
1. Prepara un JSON con objetos `{ "output": "ruta/nombre.png", "prompt": "..." }`.
2. Define `FAL_KEY`, la variable obligatoria de fal.ai.
3. Opcionalmente define `FAL_MODEL`; por defecto usa `fal-ai/flux/dev`.
4. Usa Node.js 20 o superior, que incluye `fetch` global.
5. Ejecuta: `FAL_KEY=tu_clave node scripts/generate-fal-images.mjs input.json public/images`.
6. Las subcarpetas de `output` se crean y los archivos existentes se sobrescriben.
7. Cada imagen intenta generarse hasta tres veces con backoff y pausa entre éxitos.
8. El proceso continúa con las demás entradas si una imagen falla.
9. Al final muestra imágenes generadas y la lista de salidas fallidas.
