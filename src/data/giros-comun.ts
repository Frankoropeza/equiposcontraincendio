// ============================================================================
// src/data/giros-comun.ts — Datos compartidos del Directorio de Protección
// Civil por giro (/proteccion-civil/ y /proteccion-civil/<giro>/).
// ----------------------------------------------------------------------------
// Autor del contenido: Claude (2026-09-11). Lo consume GiroL3.astro y
// GiroDirectory.astro. Cada ficha vive en src/content/giros/<slug>.md; aquí
// solo está lo que se repite en todas, escrito una vez y en corto, para que
// cada ficha dedique su espacio al contenido propio del giro (regla anti-thin
// content del estudio del 2026-09-11, §7.3).
//
// FUENTES: estudio «Directorio de Protección Civil por giro (Fases 1-8)» en el
// vault del proyecto. Ley de GIRPC CDMX arts. 58, 62, 64; Reglamento arts. 39,
// 40 TER, 56 TER; LEM art. 10; Código Administrativo Edomex arts. 6.23 y
// 6.25 Bis; NOM-002-STPS-2010.
// NO se afirma: aprobación, plazos de respuesta de la autoridad, precios.
// ============================================================================

export type GrupoGiro =
  | 'alimentos-y-bebidas'
  | 'hospedaje-y-eventos'
  | 'oficinas-y-servicios'
  | 'educacion-y-cuidado'
  | 'salud'
  | 'comercio'
  | 'deporte-y-bienestar'
  | 'industria-y-logistica'
  | 'movilidad'
  | 'habitacional'
  | 'por-nivel-de-riesgo';

/** Etiqueta visible de cada grupo (chips del filtro del directorio). */
export const GRUPOS: Record<GrupoGiro, string> = {
  'alimentos-y-bebidas': 'Alimentos y bebidas',
  'hospedaje-y-eventos': 'Hospedaje y eventos',
  'oficinas-y-servicios': 'Oficinas y servicios',
  'educacion-y-cuidado': 'Educación y cuidado',
  salud: 'Salud',
  comercio: 'Comercio',
  'deporte-y-bienestar': 'Deporte',
  'industria-y-logistica': 'Industria y logística',
  movilidad: 'Movilidad',
  habitacional: 'Habitacional',
  'por-nivel-de-riesgo': 'Por nivel de riesgo',
};

export type Riesgo = 'bajo' | 'bajo-medio' | 'medio' | 'medio-alto' | 'alto';

/** Etiqueta del badge de riesgo en tarjeta y hero. */
export const RIESGO_LABEL: Record<Riesgo, string> = {
  bajo: 'Riesgo bajo',
  'bajo-medio': 'Riesgo bajo a medio',
  medio: 'Riesgo medio',
  'medio-alto': 'Riesgo medio a alto',
  alto: 'Riesgo alto',
};

/** Filtro por nivel: qué valores de `riesgoProbable` entran en cada chip. */
export const FILTRO_RIESGO: { id: 'bajo' | 'medio' | 'alto'; label: string; incluye: Riesgo[] }[] = [
  { id: 'bajo', label: 'Riesgo bajo', incluye: ['bajo', 'bajo-medio'] },
  { id: 'medio', label: 'Riesgo medio', incluye: ['bajo-medio', 'medio', 'medio-alto'] },
  { id: 'alto', label: 'Riesgo alto', incluye: ['medio-alto', 'alto'] },
];

/** Etiquetas de fundamento que se muestran como badge en los checklists. */
export const TAG_LABEL = {
  OL: { label: 'Obligación', title: 'Obligación legal con fundamento verificado' },
  RI: { label: 'Ventanilla', title: 'Lo piden en ventanilla o en la inspección; no es ley general' },
  BP: { label: 'Recomendado', title: 'Buena práctica, estándar o criterio de aseguradora' },
} as const;

/** Prioridad del equipo. */
export const PRIO_LABEL = {
  B: 'Básico',
  R: 'Recomendable',
  E: 'Según umbral',
} as const;

/** Etiqueta de la columna de entidad en el checklist de documentos. */
export const ENTIDAD_LABEL = { cdmx: 'CDMX', edomex: 'Edomex', ambas: 'CDMX y Edomex' } as const;

// ── Aviso informativo (bloque 4 de la plantilla) ─────────────────────────────
export const avisoGiro = {
  title: 'Esta guía orienta; la autoridad decide',
  body:
    'Lo que te exijan depende de tu alcaldía o municipio, del giro con que te registres, de los metros, del aforo y del nivel de riesgo que resulte de tu clasificación. Aquí reunimos lo que dicen las leyes y normas vigentes y lo que suelen pedir en ventanilla, con su fuente. No sustituye la revisión de la autoridad ni la del tercero acreditado que firme tu programa.',
};

/** Encabezados del bloque «¿Esto te aplica?» (RiskGuide con 4 columnas). */
export const aplicaColumns: [string, string, string, string] = ['Nivel', 'Cómo se define', 'Qué trámite', 'Quién firma'];

// ── Bloque común CDMX / Edomex (resumen corto con enlace a la ficha de entidad)
export const baseEntidad = {
  cdmx: {
    title: 'Lo que aplica a cualquier negocio en la CDMX',
    items: [
      'Aviso de funcionamiento (o Permiso, si tu giro es de impacto zonal) en SIAPEM.',
      'Clasificación con el Cuestionario Clasificatorio de la SGIRPC: de ahí sale si necesitas Programa Interno.',
      'Bajo riesgo: extintor señalizado, botiquín, señalización de rutas, manejo de basura, personal capacitado y directorio de emergencias.',
      'Mediano y alto riesgo: Programa Interno firmado por Tercero Acreditado, póliza de responsabilidad civil y la vigencia que marque el art. 58 para tu tipo de inmueble.',
    ],
    href: '/proteccion-civil/cdmx/',
    ctaLabel: 'Trámite en CDMX',
  },
  edomex: {
    title: 'Lo que aplica a cualquier negocio en el Estado de México',
    items: [
      'Licencia de funcionamiento municipal; el bajo riesgo se tramita por SARE.',
      'Bajo riesgo: dictamen o visto bueno de Protección Civil del municipio, renovado cada año.',
      'Mediano y alto riesgo: Programa Específico por consultor registrado, revalidado cada año.',
      'Al menos dos simulacros al año y, en mediano y alto riesgo, sistema de alerta sísmica.',
    ],
    href: '/proteccion-civil/edomex/',
    ctaLabel: 'Trámite en Edomex',
  },
};

// ── Cómo ponerte al corriente (ProcessSteps, 8 pasos) ────────────────────────
export type Step = { num: string; title: string; desc: string };
export const pasosGiro: Step[] = [
  { num: '01', title: 'Clasifica tu negocio', desc: 'Metros, aforo real, nivel del edificio y actividad. De ahí sale tu nivel de riesgo.' },
  { num: '02', title: 'Confirma tu trámite', desc: 'CDMX: Cuestionario Clasificatorio. Edomex: ventanilla de tu municipio.' },
  { num: '03', title: 'Diagnostica el inmueble', desc: 'Compara lo que tienes contra lo que pide la norma para cada área.' },
  { num: '04', title: 'Cierra la brecha de equipo', desc: 'Extintores del agente correcto, detección y lo que exija tu umbral.' },
  { num: '05', title: 'Señaliza y despeja', desc: 'Rutas, salidas, equipo y punto de reunión visibles y sin obstáculos.' },
  { num: '06', title: 'Capacita al personal', desc: 'Uso de extintor y evacuación, con constancia DC-3 y brigada si aplica.' },
  { num: '07', title: 'Documenta', desc: 'Bitácora mensual, constancias de servicio, actas de simulacro y censo.' },
  { num: '08', title: 'Presenta con quien firma', desc: 'Tercero acreditado o consultor registrado, con el inmueble ya al día.' },
];

// ── Qué hacemos y qué no (CompanyAbout) ──────────────────────────────────────
export const giroCompany = {
  que: {
    title: 'Qué hacemos y qué no',
    body: [
      'Suministramos e instalamos el equipo contra incendio de cada área, damos mantenimiento con etiqueta y collarín, capacitamos a tu personal con constancia DC-3 y ordenamos el expediente del equipo tal como se presenta.',
      'No elaboramos ni firmamos Programas Internos, ni emitimos dictámenes de Bomberos, gas LP o instalación eléctrica: los firma un tercero registrado. Nuestro trabajo es que el inmueble y los papeles del equipo estén como ese tercero necesita encontrarlos.',
    ],
  },
  como: {
    title: 'Cómo armamos este directorio',
    pillars: [
      { title: 'Con fuente oficial', desc: 'Cada requisito lleva su ley, norma o cédula municipal.' },
      { title: 'Con fecha de verificación', desc: 'Estos trámites cambian; cada ficha dice cuándo se revisó.' },
      { title: 'Obligación o recomendación', desc: 'Separamos lo que exige la ley de lo que conviene o pide el seguro.' },
    ],
  },
};
