# scripts/plantillas — generadores de los formatos descargables

Reproducen los archivos de `public/plantillas/` que se publican en `/plantillas/`.
Se corren a mano cuando cambia un formato (o la norma de la que sale), no en el build:
son documentos estables y no conviene depender de Python en el pipeline de Cloudflare Pages.

## Requisitos

    pip install openpyxl python-docx
    # para el PDF: LibreOffice (soffice) en el PATH

## Uso

    python3 gen-plantillas-xlsx.py     # bitácora de extintores y censo de brigada (.xlsx)
    python3 gen-plantillas-acta.py     # acta de simulacro (.docx)
    soffice --headless --convert-to pdf <archivo> --outdir .

Después copia los archivos a `public/plantillas/` y ajusta el peso declarado en
el frontmatter de `src/content/plantillas/*.md` (campo `files[].size`).

## Criterios normativos usados

- Revisión **mensual** del equipo y mantenimiento **al menos anual** (NOM-002-STPS-2010).
- Altura máxima de la parte más alta del extintor: **1.50 m** sobre el nivel del piso.
- El servicio de mantenimiento y recarga se rige por la **NOM-154-SCFI-2005**.

Verificados el 2026-09-09 contra el texto de la NOM-002-STPS-2010. Si cambia la norma,
se actualizan los textos de los formatos **y** las páginas de `/plantillas/`.
