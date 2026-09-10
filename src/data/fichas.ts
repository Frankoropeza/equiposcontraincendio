// ============================================================================
// src/data/fichas.ts — Datos de presentación de las fichas de producto (L4).
// ----------------------------------------------------------------------------
// 2026-09-10 · Homologación de la ficha L4 con el sistema del sitio (Hero
// oscuro, SectionMenu, TrustBar, SectionHeading duo, card-grid, DataTable,
// RelatedLinks, FAQWithContact). El contenido técnico y comercial sigue en la
// Content Collection `productos` (frontmatter + cuerpo markdown); aquí vive
// solo lo que la plantilla necesita para PRESENTAR la ficha: el hero, los
// pilares, el encabezado de la guía y la norma que se resume en la vitrina.
//
// Si una ficha no está en FICHAS, ProductLayout usa FICHA_DEFAULT y deriva lo
// demás del frontmatter: la plantilla nunca se rompe por falta de datos.
//
// Regla de copy: nada que no esté en el frontmatter o en la hoja de hechos
// verificados del catálogo (bitácora de Obsidian, 2026-09-10).
// ============================================================================

export type Pillar = { icon: 'shield' | 'doc' | 'chat' | 'pin' | 'check' | 'clock'; title: string; desc: string };

export type FichaData = {
  /** Badge del hero: agente · clases · norma. */
  heroBadge: string;
  /** H1 = heroTitle + heroAccent (el accent va en rojo). */
  heroTitle: string;
  heroAccent?: string;
  /** Dos párrafos de la columna derecha del hero. */
  descRight: [string, string];
  /** Pilares de la TrustBar (4). */
  pillars: Pillar[];
  /** Vitrina: datos clave resumidos (el rango de capacidades se deriva de las variantes). */
  norma: string;
  claves: { label: string; value: string }[];
  /** Encabezado de la guía de compra (el cuerpo markdown va debajo). */
  guia: { title: string; titleAccent: string; desc: string };
  /** H2 de la vitrina de datos clave. */
  showcaseTitle: string;
  /** Acento del H2 de preguntas frecuentes («Preguntas frecuentes» + esto). */
  faqAccent: string;
};

const PILLARS_DEFAULT: Pillar[] = [
  { icon: 'doc', title: 'Ficha técnica incluida', desc: 'Cada equipo sale con su ficha técnica para tu expediente.' },
  { icon: 'check', title: 'Instalación y señalamiento', desc: 'Lo montamos a la altura correcta y con su señal, si lo necesitas.' },
  { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Servicio anual y recarga con el mismo proveedor que te lo vendió.' },
  { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
];

export const FICHA_DEFAULT: Omit<FichaData, 'heroBadge' | 'heroTitle' | 'descRight' | 'norma' | 'claves'> = {
  pillars: PILLARS_DEFAULT,
  showcaseTitle: 'Datos clave del equipo',
  faqAccent: 'sobre este equipo',
  guia: { title: 'Lo que conviene saber', titleAccent: 'antes de comprar', desc: 'Dónde conviene, cómo elegir, dónde colocarlo y qué servicio pide.' },
};

export const FICHAS: Record<string, FichaData> = {
  'extintor-pqs': {
    heroBadge: 'PQS ABC · Clases A, B y C · NOM-100-STPS',
    heroTitle: 'Extintores PQS ABC,',
    heroAccent: 'el más versátil',
    descRight: [
      'Con un solo equipo cubres papel y cartón, gasolina o solventes, y equipo eléctrico con corriente. Por eso es el extintor que más se instala en oficinas, comercios, bodegas y vehículos.',
      'Abajo comparas sus ocho presentaciones y encuentras cómo elegir la capacidad, dónde colocarlo y qué mantenimiento pide.',
    ],
    pillars: [
      { icon: 'check', title: 'Tres clases, un equipo', desc: 'Sólidos, líquidos inflamables y equipo eléctrico con el mismo extintor.' },
      { icon: 'doc', title: 'Ficha y collarín', desc: 'Sale con ficha técnica; con el servicio lleva etiqueta y collarín.' },
      { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Servicio anual y prueba hidrostática con quien te lo vendió.' },
      { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
    ],
    norma: 'NOM-100-STPS-1994',
    claves: [
      { label: 'Agente', value: 'Polvo químico seco ABC' },
      { label: 'Clases de fuego', value: 'A, B y C' },
      { label: 'Norma de producto', value: 'NOM-100-STPS-1994' },
      { label: 'Servicio', value: 'NOM-154-SCFI-2005 · con collarín' },
    ],
    showcaseTitle: 'Datos clave del extintor PQS',
    faqAccent: 'sobre extintores PQS',
    guia: { title: 'Cómo elegir tu', titleAccent: 'extintor PQS', desc: 'Dónde conviene, qué capacidad elegir, dónde colocarlo y qué mantenimiento pide.' },
  },
  'extintor-co2': {
    heroBadge: 'CO₂ · Clases B y C · NOM-102-STPS',
    heroTitle: 'Extintores de CO₂,',
    heroAccent: 'sin residuo',
    descRight: [
      'El CO₂ le quita el oxígeno a la flama, no conduce la electricidad y se disipa sin dejar rastro. Es el extintor que va junto a tableros, sites y equipo electrónico.',
      'Abajo comparas sus presentaciones y encuentras sus límites: no está clasificado para papel, madera ni cartón.',
    ],
    pillars: [
      { icon: 'check', title: 'Sin residuo', desc: 'No deja polvo sobre tableros, servidores ni equipo electrónico.' },
      { icon: 'shield', title: 'No conduce', desc: 'Se usa junto a equipo eléctrico con corriente.' },
      { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Servicio anual y prueba hidrostática con quien te lo vendió.' },
      { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
    ],
    norma: 'NOM-102-STPS-1994',
    claves: [
      { label: 'Agente', value: 'Dióxido de carbono (CO₂)' },
      { label: 'Clases de fuego', value: 'B y C' },
      { label: 'Norma de producto', value: 'NOM-102-STPS-1994' },
      { label: 'Servicio', value: 'NOM-154-SCFI-2005' },
    ],
    showcaseTitle: 'Datos clave del extintor de CO₂',
    faqAccent: 'sobre extintores de CO₂',
    guia: { title: 'Cómo elegir tu', titleAccent: 'extintor de CO₂', desc: 'Dónde conviene, qué capacidad elegir, dónde colocarlo y qué mantenimiento pide.' },
  },
  'extintor-clase-k': {
    heroBadge: 'Agente K · Clase K · Cocinas comerciales',
    heroTitle: 'Extintores tipo K,',
    heroAccent: 'para cocinas',
    descRight: [
      'El químico húmedo sale en niebla, no salpica el aceite y forma una capa que lo aísla del aire mientras lo enfría. Es el extintor para la freidora y la línea de cocción.',
      'Complementa, no sustituye, el sistema fijo de la campana. Abajo encuentras cómo elegir la capacidad para tu cocina y dónde colocarlo.',
    ],
    pillars: [
      { icon: 'check', title: 'Hecho para aceite', desc: 'Formulado para aceites y grasas de cocción.' },
      { icon: 'shield', title: 'A 10 m como máximo', desc: 'Distancia de recorrido para clase K en la NOM-002-STPS.' },
      { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Servicio anual y prueba hidrostática con quien te lo vendió.' },
      { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
    ],
    norma: 'Referencia técnica NFPA 10',
    claves: [
      { label: 'Agente', value: 'Químico húmedo' },
      { label: 'Clase de fuego', value: 'K (aceites y grasas de cocción)' },
      { label: 'Norma de producto', value: 'Sin NOM específica · ref. NFPA 10' },
      { label: 'Servicio', value: 'NOM-154-SCFI-2005' },
    ],
    showcaseTitle: 'Datos clave del extintor tipo K',
    faqAccent: 'sobre extintores tipo K',
    guia: { title: 'Cómo elegir tu', titleAccent: 'extintor tipo K', desc: 'Dónde va, qué capacidad elegir, dónde colocarlo y qué mantenimiento pide.' },
  },
  'extintor-agua': {
    heroBadge: 'Agua, nebulizada y AFFF · NOM-103-STPS',
    heroTitle: 'Extintores de agua',
    heroAccent: 'y espuma AFFF',
    descRight: [
      'Tres extintores que apagan enfriando: agua a presión para sólidos, agua nebulizada para sólidos junto a equipo eléctrico y espuma AFFF para líquidos inflamables.',
      'El agua a presión y la espuma conducen la electricidad. Abajo comparas los tres y ves cuál conviene en cada caso.',
    ],
    pillars: [
      { icon: 'check', title: 'Apaga enfriando', desc: 'Lo más eficaz contra papel, madera, cartón y tela.' },
      { icon: 'shield', title: 'Tres agentes', desc: 'Agua a presión (A), nebulizada (A y C) y espuma AFFF (A y B).' },
      { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Servicio anual y prueba hidrostática con quien te lo vendió.' },
      { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
    ],
    norma: 'NOM-103-STPS-1994',
    claves: [
      { label: 'Agentes', value: 'Agua a presión · agua nebulizada · espuma AFFF' },
      { label: 'Clases de fuego', value: 'A · A y C · A y B, según el agente' },
      { label: 'Norma de producto', value: 'NOM-103-STPS-1994' },
      { label: 'Servicio', value: 'NOM-154-SCFI-2005' },
    ],
    showcaseTitle: 'Datos clave de los extintores de agua',
    faqAccent: 'sobre extintores de agua',
    guia: { title: 'Cómo elegir tu', titleAccent: 'extintor de agua', desc: 'Cuál de los tres te conviene, qué capacidad elegir y qué mantenimiento piden.' },
  },
  'extintor-agente-limpio': {
    heroBadge: 'Agente limpio · Halotron I y FE-36 · Clases B, C y A',
    heroTitle: 'Extintores de agente limpio,',
    heroAccent: 'para equipo sensible',
    descRight: [
      'El agente se evapora al salir: no conduce la electricidad y no deja residuo. Protege servidores y equipo delicado sin dañarlos.',
      'Las presentaciones chicas cubren clases B y C; desde 4.3 kg (FE-36) o 5 kg (Halotron I) también la A.',
    ],
    pillars: [
      { icon: 'check', title: 'Sin residuo', desc: 'El agente se evapora; el equipo protegido no se ensucia.' },
      { icon: 'shield', title: 'No conduce', desc: 'Se usa junto a equipo eléctrico con corriente.' },
      { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Servicio anual y prueba hidrostática con quien te lo vendió.' },
      { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
    ],
    norma: 'Clasificación del fabricante',
    claves: [
      { label: 'Agentes', value: 'Halotron I · FE-36 (HFC-236fa)' },
      { label: 'Clases de fuego', value: 'B y C; A desde 4.3 o 5 kg' },
      { label: 'Norma de producto', value: 'Sin NOM específica · clasificación UL del fabricante' },
      { label: 'Servicio', value: 'NOM-154-SCFI-2005' },
    ],
    showcaseTitle: 'Datos clave del extintor de agente limpio',
    faqAccent: 'sobre agente limpio',
    guia: { title: 'Cómo elegir tu', titleAccent: 'extintor de agente limpio', desc: 'Qué clasificación necesitas, qué capacidad elegir y qué mantenimiento pide.' },
  },
};
