# Revisión técnica del sitio — junio 2026

Revisión de todo el trabajo de homologación + legales. Incluye diagnóstico del
compilador (`astro check`), auditoría del HTML generado y una auditoría
independiente del código. Estado base: **0 errores de tipos, 30/30 páginas
compilan, 1 solo `<h1>` por página, sin enlaces internos rotos**.

---

## 1. Errores corregidos en este pase

| # | Severidad | Qué estaba mal | Corrección |
|---|-----------|----------------|------------|
| 1 | **Alta** | Los 8 módulos `CategoryFeature` usaban `<h3>` siendo secciones de primer nivel → jerarquía rota (h2 → h3 huérfanos) en home, productos, servicios y cobertura. | Título de `CategoryFeature` cambiado a `<h2>`. Ahora el esquema es `h1 → h2(sección) → h3(tarjetas)` correcto en todo el sitio. |
| 2 | Media | Meta description de **servicios** (162) y **blog** (164) se truncaban y perdían keywords/localidad. | Reescritas a ≤160 conservando "CDMX y Estado de México", NOM-154 y el CTA. |
| 3 | Baja | CTA externo de `SectionMenu` abría con `rel="noopener"` sin `noreferrer` (inconsistente con el resto). | Añadido `noreferrer`. |
| 4 | Baja | Bloques en blanco residuales dentro de `.container` en contacto y nosotros. | Eliminados. |
| 5 | Baja | El `<h1>` de productos era casi idéntico al de la home. | Cambiado a "Catálogo de equipo, para cada riesgo". |

Todas verificadas con build limpio (30/30) y `astro check` sin errores.

---

## 2. Acciones que dependen de ti (no las toqué — son decisiones tuyas)

**Prioridad alta**

1. **Datos reales en `src/config/site.ts`.** Hoy `CONTACT` y `SITE.organization`
   son de ejemplo (teléfono `55 1234 5678`, domicilio, razón social, RFC). El
   `check:demo` del build bloquea publicar con ellos. Sustitúyelos por los reales.
2. **Revisión legal.** Los 3 documentos (privacidad, términos, cookies) son una
   base profesional conforme a la LFPDPPP vigente, **no asesoría legal**. Que un
   abogado los valide antes de publicar.
3. **Marcas "disponibles".** Los módulos `CategoryFeature` listan marcas reales
   (Honeywell, 3M, Tyco, DuPont, MSA, etc.) bajo "Marcas disponibles". Es un claim
   comercial: **confirma que realmente las distribuyes**. Si no, conviene
   relabelar a "Marcas de referencia" o vaciar la lista. (Te lo dejo listo para
   cambiar en cuanto me digas.)

**Prioridad media**

4. **Fotos reales.** Todo el catálogo usa el placeholder "Imagen próximamente".
   En páginas como `/productos` eso son ~30 imágenes idénticas. Es lo esperado por
   ahora, pero prioriza fotos reales de productos/servicios. Se reemplazan por el
   archivo en su misma ruta (ver `public/images/_placeholder/LEEME.md`).
5. **Texto alternativo de imágenes.** Algunas `alt` reutilizan el título o
   describen un equipo distinto al de la imagen (porque se reusan SVGs). No molesta
   mientras sean placeholders, pero al cargar fotos reales ajusta cada `alt` a lo
   que la imagen realmente muestra.

---

## 3. Verificado y correcto (sin acción)

- **Sin contenido duplicado** entre la home y `/productos`: aunque ambas usan
  `CategoryFeature`, el copy (descripciones y bullets) es genuinamente distinto.
- **JSON-LD de FAQ se emite una sola vez** (no se duplica).
- **Un solo `<h1>` por página** (siempre del Hero).
- **Enlaces internos** a fichas (`/productos/<slug>`, `/servicios/<slug>`,
  `/blog/<slug>`, `/cobertura/<slug>`) resuelven; las imágenes referenciadas existen.
- **Anti-CLS**: todas las imágenes llevan `width`/`height`; `loading` eager/lazy
  correcto (LCP eager, módulos bajo el fold lazy).
- **Claves de config** (`WA_MESSAGES`, `CONTACT`, `SITE`, `pageType`) y props de
  componentes: todas existen y se pasan bien. Sin errores de TypeScript.
- **Sin guía-speak**: copy de cara al cliente en todas las páginas.
- **TrustBar** se omite a propósito en blog y nosotros (no son páginas de catálogo).

---

## 4. Estado técnico

- `astro check`: **0 errores, 0 warnings**, 103 hints (todos `is:inline` en
  scripts JSON-LD — benignos).
- Build: **30/30 páginas**, sin warnings.
- Los cambios de este pase están en el árbol de trabajo, **sin commitear**.
