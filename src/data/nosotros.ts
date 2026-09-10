// ============================================================================
// src/data/nosotros.ts — Datos de /nosotros/ (ficha institucional de CONINC).
// ----------------------------------------------------------------------------
// ÁNGULO DE LA PÁGINA: «¿quién es CONINC y por qué puedo confiarle mi inmueble?».
// Es la página que documenta a la empresa: nombre, trayectoria, domicilio,
// canales, horario, cobertura, qué vende, qué servicios da y —igual de
// importante— qué NO hace.
//
// REGLA DE HONESTIDAD (2026-09-10): todo dato institucional sale de COMPANY y
// CONTACT en site.ts, confirmados por Frank. Aquí no se agregan clientes,
// certificaciones, premios ni un año de fundación: la trayectoria se publica
// como «más de 35 años» y nada más. Razón social y RFC quedan fuera hasta que
// el negocio los entregue (COMPANY.legalName / COMPANY.rfc).
// ============================================================================
import { COMPANY, CONTACT, SERVICES } from '@config/site'

export const nosotrosMeta = {
  title: 'CONINC: más de 35 años en equipos contra incendios',
  description:
    'CONINC vende, instala y da mantenimiento a equipos contra incendios en CDMX y Estado de México, con más de 35 años en el mercado mexicano. Conoce la empresa.',
}

export const nosotrosHero = {
  badge: 'Quiénes somos · Más de 35 años',
  title: 'CONINC: más de 35 años en',
  accent: 'equipos contra incendios',
  subtitle:
    'Somos una empresa con sede en la Ciudad de México dedicada a la venta, instalación y mantenimiento de equipo contra incendio. Hoy atendemos toda la Ciudad de México y el Estado de México desde nuestras oficinas en Miguel Hidalgo.',
  descRight: [
    'CONINC viene de «contra incendios». Es el nombre de una empresa que lleva más de 35 años en el mercado mexicano vendiendo extintores, detección y alarma, hidrantes, señalización y equipo de protección, y dando el servicio que los mantiene vigentes.',
    'Esa trayectoria se traduce en algo concreto para quien nos contrata: sabemos qué pide la norma para cada giro, qué revisa un inspector y qué documentación tiene que quedar en el expediente. Lo aplicamos antes de cotizar, no después.',
  ],
}

// ── Ficha de la empresa (DataTable: Dato | Detalle) ──────────────────────────
export const fichaEmpresa = {
  eyebrow: 'Datos de la empresa',
  title: 'La ficha de',
  titleAccent: 'CONINC',
  desc: 'Los datos oficiales de la empresa en un solo lugar, para que sepas con quién tratas antes de cotizar.',
  columns: ['Dato', 'Detalle'] as const,
  rows: [
    ['Nombre comercial', COMPANY.name],
    ['Origen del nombre', COMPANY.nameOrigin],
    ['Trayectoria', `${COMPANY.experience.long}.`],
    ['Actividad', 'Venta, instalación, mantenimiento, recarga e inspección de equipo contra incendio; capacitación de brigadas y gestión documental.'],
    ['Oficinas', COMPANY.office],
    ['Teléfono y WhatsApp', `${CONTACT.phone} (misma línea para llamada y WhatsApp)`],
    ['Correo electrónico', CONTACT.email],
    ['Horario de atención', `${CONTACT.hours.weekdays} · ${CONTACT.hours.saturday} · ${CONTACT.hours.sunday}`],
    ['Cobertura de servicio', `${COMPANY.coverage}.`],
    ['Cómo se cotiza', 'Por WhatsApp, teléfono o correo. Con giro, superficie y ubicación del inmueble preparamos la propuesta.'],
  ] as string[][],
}

// ── Trayectoria (prose) ──────────────────────────────────────────────────────
export const trayectoria = {
  eyebrow: 'Trayectoria',
  title: 'Más de 35 años en el',
  titleAccent: 'mercado mexicano',
  paragraphs: [
    'Durante más de 35 años, CONINC ha vendido equipo contra incendio a empresas e inmuebles en México. En ese tiempo han cambiado las normas, los agentes extintores y la forma en que la autoridad verifica, pero el trabajo de fondo sigue siendo el mismo: que el equipo correcto esté en el lugar correcto, funcionando y con su documentación en regla.',
    'Esa experiencia es la que nos permite hacer una recomendación con criterio. Un extintor de PQS no sirve igual en una cocina que en un site de cómputo; una bodega de riesgo alto no se equipa como un piso de oficinas. Antes de cotizar entendemos qué se puede quemar en tu inmueble, qué exige la NOM-002-STPS-2010 para tu grado de riesgo y qué te van a pedir en la visita de Protección Civil.',
    'Hoy concentramos el servicio en toda la Ciudad de México y el Estado de México. Es la zona donde podemos entregar, instalar y dar mantenimiento en sitio con el nivel de atención que un cliente espera de una empresa con esta trayectoria.',
  ],
  quote: {
    eyebrow: 'Atención directa',
    title: 'Cotiza con CONINC',
    items: [
      'Recomendación según el riesgo real del inmueble',
      'Equipo conforme a la norma mexicana aplicable',
      'Ficha técnica y constancias para tu expediente',
      'Mantenimiento y recarga con aviso de vencimiento',
    ],
    itemsLabel: 'Qué recibes',
    ctaLabel: 'Cotizar por WhatsApp',
  },
}

// ── Servicios (DataTable: Servicio | Qué resuelve | Página) ───────────────────
// Derivado de TAXONOMY.services para que no diverja del menú.
export const serviciosTabla = {
  eyebrow: 'Qué hacemos',
  title: 'Servicios de',
  titleAccent: 'CONINC',
  desc: `Los ${SERVICES.length} servicios con que acompañamos al equipo desde que se instala hasta cada renovación.`,
  columns: ['Servicio', 'Qué resuelve'] as const,
  rows: SERVICES.map((s) => [s.label, s.desc]) as string[][],
  ctaLabel: 'Servicios contra incendio',
  ctaHref: '/servicios/',
}

// ── Principios (4 tarjetas: regla de múltiplos de 4) ──────────────────────────
export const principios = [
  { t: 'Asesoría honesta', d: 'Recomendamos el equipo que pide tu riesgo real, en lenguaje claro y sin venderte de más.' },
  { t: 'Conforme a norma', d: 'Trabajamos con la NOM-002-STPS-2010 y la NOM-154-SCFI-2005 como referencia de cada propuesta y cada servicio.' },
  { t: 'Servicio documentado', d: 'Cada equipo y cada servicio se entregan con su soporte: ficha técnica y constancias para tu expediente.' },
  { t: 'Trato directo', d: 'Hablas con quien resuelve, por WhatsApp, teléfono o correo, en horario de atención.' },
]

// ── Qué NO hacemos (límite de honestidad comercial) ──────────────────────────
// Acordado en la investigación por giro (2026-09-10): el Programa Interno lo
// firma un Tercero Acreditado y los dictámenes los emite la autoridad.
export const loQueNoHacemos = {
  eyebrow: 'Con claridad',
  title: 'Lo que hacemos y',
  titleAccent: 'lo que no',
  desc: 'Decirlo desde el principio evita malentendidos con la autoridad y con tu presupuesto.',
  columns: ['Tema', 'Qué hace CONINC', 'Quién lo resuelve'] as const,
  rows: [
    ['Equipo contra incendio', 'Lo vende, lo instala y le da mantenimiento', 'CONINC'],
    ['Constancias de servicio y DC-3', 'Las entrega con cada servicio o curso', 'CONINC'],
    ['Programa Interno de Protección Civil', 'Deja listo el equipo y su expediente, que el programa necesita', 'Un Tercero Acreditado lo elabora y lo firma'],
    ['Dictamen de Bomberos o de gas LP', 'Prepara el inmueble para la revisión', 'La autoridad o la unidad facultada lo emite'],
  ] as string[][],
}

// ── FAQ (8) ──────────────────────────────────────────────────────────────────
export const nosotrosFaqs = [
  {
    question: '¿Qué es CONINC?',
    answer: `CONINC es una empresa de equipos contra incendios con sede en la Ciudad de México y más de 35 años en el mercado mexicano. El nombre viene de «contra incendios». Vende, instala y da mantenimiento a extintores, detección y alarma, hidrantes, señalización y equipo de protección para empresas e inmuebles.`,
  },
  {
    question: '¿Cuánto tiempo tiene CONINC en el mercado?',
    answer: 'Más de 35 años vendiendo equipo contra incendio en el mercado mexicano.',
  },
  {
    question: '¿Dónde están las oficinas de CONINC?',
    answer: `En ${COMPANY.office}. Si quieres visitarnos o coordinar una entrega, escríbenos antes por WhatsApp para confirmar.`,
  },
  {
    question: '¿En qué zonas dan servicio?',
    answer: `Por el momento en ${COMPANY.coverage.charAt(0).toLowerCase()}${COMPANY.coverage.slice(1)}: entrega, instalación, mantenimiento e inspección en sitio.`,
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer: `${CONTACT.hours.weekdays} y ${CONTACT.hours.saturday.charAt(0).toLowerCase()}${CONTACT.hours.saturday.slice(1)}. Domingo cerrado.`,
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: `Por WhatsApp o llamada al ${CONTACT.phone}, o por correo a ${CONTACT.email}. Indícanos el giro, la superficie aproximada y la ubicación del inmueble para preparar la propuesta.`,
  },
  {
    question: '¿Entregan documentación para Protección Civil y STPS?',
    answer: 'Sí. Con el equipo entregamos su ficha técnica y, con cada servicio, la constancia correspondiente; los cursos de brigada llevan constancia DC-3. Es la evidencia que integra tu expediente.',
  },
  {
    question: '¿CONINC elabora el Programa Interno de Protección Civil?',
    answer: 'No. El Programa Interno lo elabora y firma un Tercero Acreditado. CONINC se encarga del equipo contra incendio y de su documentación, que es lo que ese programa necesita que exista.',
  },
]
