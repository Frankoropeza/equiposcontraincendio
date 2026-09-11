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
  'detector-humo-fotoelectrico': {
    heroBadge: 'Fotoeléctrico · Autónomo, interconectado o para panel',
    heroTitle: 'Detectores de humo',
    heroAccent: 'que avisan a tiempo',
    descRight: [
      'Elige entre modelos autónomos, interconectados, combinados con monóxido de carbono o compatibles con panel de alarma.',
      'Así puedes cubrir un espacio sin panel, mantener respaldo por batería o llevar la alerta entre equipos compatibles.',
    ],
    pillars: [
      { icon: 'check', title: 'Alerta donde estás', desc: 'Los modelos autónomos avisan con sonido dentro del espacio protegido.' },
      { icon: 'shield', title: 'Opciones conectadas', desc: 'Interconecta equipos compatibles o intégralos a un sistema de dos hilos.' },
      { icon: 'doc', title: 'Compatibilidad por modelo', desc: 'Confirma base, panel, tensión y notificación antes de instalar.' },
      { icon: 'pin', title: 'Montaje interior', desc: 'Hay opciones para plafón y otros espacios interiores.' },
    ],
    norma: 'NOM-002-STPS-2010',
    claves: [
      { label: 'Sensor', value: 'Fotoeléctrico' },
      { label: 'Alimentación', value: 'Batería AA, sellada o 120 V con respaldo' },
      { label: 'Interconexión', value: 'Cableada, inalámbrica o circuito de 2 hilos' },
      { label: 'Integración', value: 'Autónomo o panel compatible' },
    ],
    showcaseTitle: 'Datos clave de los detectores de humo',
    faqAccent: 'sobre detectores de humo',
    guia: { title: 'Cómo elegir tu', titleAccent: 'detector de humo', desc: 'Compara alimentación, interconexión y compatibilidad para elegir el detector que necesita tu inmueble.' },
  },
  'gabinete-manguera-contra-incendio': {
    heroBadge: 'Manguera 1½ pulg · Sobreponer, empotrable o combinado',
    heroTitle: 'Gabinetes con manguera',
    heroAccent: 'para la red hidráulica',
    descRight: [
      'Elige gabinetes sobrepuestos o empotrables con mangueras de 15 o 30 metros, o una configuración combinada con extintor.',
      'Antes de instalar, revisa presión, caudal, alcance y ubicación contra el proyecto hidráulico de tu inmueble.',
    ],
    pillars: [
      { icon: 'check', title: 'Alcance según recorrido', desc: 'Elige 15 o 30 metros según la distancia que deba cubrir la manguera.' },
      { icon: 'shield', title: 'Acceso inmediato', desc: 'La puerta con visor mantiene disponibles manguera, válvula y chiflón.' },
      { icon: 'doc', title: 'Listo para tu red', desc: 'Define conexiones y accesorios de acuerdo con la red hidráulica existente.' },
      { icon: 'pin', title: 'Montaje a la medida', desc: 'Escoge la instalación que mejor funcione con tu muro y circulación.' },
    ],
    norma: 'NFPA 14 como referencia técnica',
    claves: [
      { label: 'Manguera', value: '1½ pulgadas' },
      { label: 'Longitudes', value: '15 m o 30 m' },
      { label: 'Montaje', value: 'Sobreponer o empotrable' },
      { label: 'Complemento', value: 'Extintor portátil en modelo combinado' },
    ],
    showcaseTitle: 'Datos clave de los gabinetes con manguera',
    faqAccent: 'sobre gabinetes con manguera',
    guia: { title: 'Cómo elegir tu', titleAccent: 'gabinete con manguera', desc: 'Revisa recorrido, montaje y red hidráulica para pedir el gabinete que funcione en tu inmueble.' },
  },
  'senalizacion-fotoluminiscente': {
    heroBadge: 'Evacuación · Equipo contra incendio · NOM-003-SSPC-2011',
    heroTitle: 'Señalización fotoluminiscente',
    heroAccent: 'que se ve sin luz',
    descRight: [
      'Encuentra señales para rutas, salidas, extintores, hidrantes, puntos de reunión y primeros auxilios.',
      'El levantamiento de tu inmueble define mensaje, tamaño, orientación y cantidad según la distancia de observación.',
    ],
    pillars: [
      { icon: 'check', title: 'Orienta la salida', desc: 'Indica recorridos y puertas de emergencia para facilitar la evacuación.' },
      { icon: 'shield', title: 'Identifica equipos', desc: 'Ayuda a localizar extintores, hidrantes y puntos de atención.' },
      { icon: 'doc', title: 'Visibilidad nocturna', desc: 'El material conserva una referencia visual cuando el lugar queda oscuro.' },
      { icon: 'pin', title: 'Ubicación precisa', desc: 'Ajusta cada señal a las rutas, equipos y condiciones reales del inmueble.' },
    ],
    norma: 'NOM-003-SSPC-2011',
    claves: [
      { label: 'Evacuación', value: 'Ruta y salida de emergencia' },
      { label: 'Equipo', value: 'Extintor e hidrante' },
      { label: 'Condición segura', value: 'Punto de reunión y primeros auxilios' },
      { label: 'Material', value: 'Sustrato fotoluminiscente' },
    ],
    showcaseTitle: 'Datos clave de la señalización fotoluminiscente',
    faqAccent: 'sobre señalización fotoluminiscente',
    guia: { title: 'Cómo elegir tu', titleAccent: 'señalización', desc: 'Define mensaje, color, tamaño y ubicación para orientar a las personas y localizar equipos.' },
  },
  'soportes-accesorios-extintor': {
    heroBadge: 'Soportes · Gabinetes · Abrazaderas · Montaje mural y vehicular',
    heroTitle: 'Soportes y accesorios',
    heroAccent: 'para extintores',
    descRight: [
      'Encuentra soportes de pared, abrazaderas, bases vehiculares y gabinetes de sobreponer o empotrables.',
      'Comparte las medidas del extintor y el lugar de montaje para revisar diámetro, peso, ambiente y anclaje.',
    ],
    pillars: [
      { icon: 'check', title: 'Fijación estable', desc: 'Mantén el extintor visible, protegido de golpes y separado del piso.' },
      { icon: 'shield', title: 'Retiro sin herramientas', desc: 'Usa soluciones que permitan liberar el equipo cuando necesites atender una emergencia.' },
      { icon: 'doc', title: 'Compatibilidad comprobable', desc: 'Parte de la capacidad, marca o medidas del extintor que ya tienes.' },
      { icon: 'pin', title: 'Para muro o vehículo', desc: 'Escoge una alternativa para instalación mural, vehículo, maquinaria o gabinete.' },
    ],
    norma: 'Compatibilidad con tu extintor',
    claves: [
      { label: 'Montaje', value: 'Mural, vehicular o gabinete' },
      { label: 'Compatibilidad', value: 'Diámetro, peso y geometría del cilindro' },
      { label: 'Material', value: 'Acero, correa y acabado a definir' },
      { label: 'Instalación', value: 'Anclaje según muro, vehículo o maquinaria' },
    ],
    showcaseTitle: 'Datos clave de soportes y accesorios',
    faqAccent: 'sobre soportes y accesorios',
    guia: { title: 'Cómo elegir tu', titleAccent: 'soporte o gabinete', desc: 'Compara diámetro, peso, ambiente y anclaje antes de montar o proteger tu extintor.' },
  },
  // ── Tanda 3 de Ahrefs (2026-09-11): L4 nuevas por decisión de Frank (D-E2…D-E4). ──
  'senalamientos-de-seguridad': {
    heroBadge: 'Prohibición · Obligación · Precaución · Información · NOM-026-STPS-2008',
    heroTitle: 'Señalamientos de seguridad',
    heroAccent: 'para tu centro de trabajo',
    descRight: [
      'Señales industriales y de protección civil: prohibido fumar, uso obligatorio de equipo de protección, riesgo eléctrico, ruta de evacuación, salida y extintor.',
      'El color, la forma y el tamaño salen de la NOM-026-STPS-2008; el tamaño se calcula con la distancia desde la que se lee cada señal.',
    ],
    pillars: [
      { icon: 'check', title: 'La señal que toca', desc: 'Color, forma y símbolo según la NOM-026 y la NOM-003-SSPC.' },
      { icon: 'doc', title: 'Tamaño calculado', desc: 'Cada señal dimensionada a su distancia de observación.' },
      { icon: 'shield', title: 'Industriales y de PC', desc: 'Riesgo eléctrico, EPP, prohibiciones, rutas y equipo contra incendio.' },
      { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
    ],
    norma: 'NOM-026-STPS-2008 · NOM-003-SSPC-2011',
    claves: [
      { label: 'Tipos', value: 'Prohibición, obligación, precaución, información' },
      { label: 'Colores', value: 'Rojo, azul, amarillo y verde' },
      { label: 'Tamaño', value: 'S ≥ L²/2000 (NOM-026)' },
      { label: 'Versiones', value: 'Estándar y fotoluminiscente' },
    ],
    showcaseTitle: 'Datos clave de los señalamientos de seguridad',
    faqAccent: 'sobre señalamientos de seguridad',
    guia: { title: 'Qué señal va', titleAccent: 'en cada área', desc: 'Tipos, colores, ubicación y tamaño de los señalamientos de un centro de trabajo.' },
  },
  'lamparas-de-emergencia': {
    heroBadge: 'LED · Batería de respaldo · NOM-025-STPS-2008, 5.11',
    heroTitle: 'Lámparas de emergencia',
    heroAccent: 'para rutas y salidas',
    descRight: [
      'Lámparas LED de dos faros, de sobreponer, industriales y señales de salida iluminadas que encienden solas al cortarse la energía.',
      'Se colocan en la ruta de evacuación, escaleras y salidas, donde un corte de luz se vuelve un riesgo.',
    ],
    pillars: [
      { icon: 'check', title: 'Encienden solas', desc: 'Detectan el corte de energía y alumbran con su batería.' },
      { icon: 'shield', title: 'Ruta visible', desc: 'Escaleras, cambios de dirección y puertas de salida iluminados.' },
      { icon: 'doc', title: 'Lo que pide la NOM-025', desc: 'Iluminación de emergencia donde el corte de luz es un riesgo.' },
      { icon: 'pin', title: 'Instalación incluida', desc: 'Las montamos en CDMX y el Estado de México.' },
    ],
    norma: 'NOM-025-STPS-2008, 5.11',
    claves: [
      { label: 'Fuente', value: 'LED con batería recargable' },
      { label: 'Modelos', value: 'Dos faros, sobreponer, industrial y salida' },
      { label: 'Autonomía de referencia', value: '90 min (NFPA 101)' },
      { label: 'Ubicación', value: 'Rutas, escaleras y salidas' },
    ],
    showcaseTitle: 'Datos clave de las lámparas de emergencia',
    faqAccent: 'sobre lámparas de emergencia',
    guia: { title: 'Dónde van las', titleAccent: 'lámparas de emergencia', desc: 'Lo que pide la norma, dónde se colocan y cómo elegir el modelo para cada punto.' },
  },
  'botiquin-primeros-auxilios': {
    heroBadge: 'De pared · Portátil · Vehicular · LFT art. 504',
    heroTitle: 'Botiquín de primeros auxilios',
    heroAccent: 'para tu empresa',
    descRight: [
      'Botiquines de pared para cada área, portátiles para la brigada y compactos para vehículos, con su señal de primeros auxilios.',
      'La Ley Federal del Trabajo pide tener el material de curación a la mano; el contenido se ajusta a los riesgos de tu centro de trabajo.',
    ],
    pillars: [
      { icon: 'check', title: 'A la mano', desc: 'Visible, señalizado y cerca de las áreas de mayor riesgo.' },
      { icon: 'shield', title: 'Para la brigada', desc: 'Versión portátil para atender en el punto de reunión.' },
      { icon: 'doc', title: 'Lo que pide la ley', desc: 'LFT art. 504 y medidas mínimas de protección civil.' },
      { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos en toda la zona metropolitana.' },
    ],
    norma: 'Ley Federal del Trabajo, art. 504',
    claves: [
      { label: 'Formatos', value: 'Pared, portátil y vehicular' },
      { label: 'Contenido', value: 'Según los riesgos del centro de trabajo' },
      { label: 'Señal', value: 'Primeros auxilios (verde)' },
      { label: 'Revisión', value: 'Mensual, con bitácora' },
    ],
    showcaseTitle: 'Datos clave del botiquín de primeros auxilios',
    faqAccent: 'sobre el botiquín de primeros auxilios',
    guia: { title: 'Qué debe tener', titleAccent: 'el botiquín de tu empresa', desc: 'Lo que pide la ley, el contenido base y dónde colocarlo.' },
  },
  'rociadores-contra-incendio': {
    heroBadge: 'Colgante · Montante · Pared · Oculto · NFPA 13 como referencia',
    heroTitle: 'Rociadores contra incendio',
    heroAccent: 'que actúan solos',
    descRight: [
      'Rociadores automáticos colgantes, montantes, de pared y ocultos, e instalación de la red a partir del proyecto del inmueble.',
      'Se abren solo los rociadores que alcanzan su temperatura y controlan el fuego mientras empieza, sin esperar a que alguien lo vea.',
    ],
    pillars: [
      { icon: 'check', title: 'Actúan solos', desc: 'El calor abre el rociador que está sobre el fuego.' },
      { icon: 'shield', title: 'Sistema a la medida', desc: 'Húmedo, seco o preacción, según el inmueble.' },
      { icon: 'doc', title: 'Cuándo son obligatorios', desc: 'NTC 2024 en CDMX y sistemas fijos de la NOM-002 en riesgo alto.' },
      { icon: 'pin', title: 'Instalación', desc: 'Instalamos la red en CDMX y el Estado de México.' },
    ],
    norma: 'NTC-PA 2024 (CDMX) · NFPA 13 y 25 como referencia',
    claves: [
      { label: 'Tipos', value: 'Colgante, montante, de pared y oculto' },
      { label: 'Sistemas', value: 'Húmedo, seco, preacción y diluvio' },
      { label: 'Bulbo', value: 'Naranja 57 °C · rojo 68 °C · amarillo 79 °C' },
      { label: 'Obligatorios', value: 'Según uso y altura; siempre arriba de 23 m' },
    ],
    showcaseTitle: 'Datos clave de los rociadores contra incendio',
    faqAccent: 'sobre rociadores contra incendio',
    guia: { title: 'Cómo funciona un', titleAccent: 'sistema de rociadores', desc: 'Cuándo son obligatorios, tipos de sistema, colores del bulbo y cómo se cotiza.' },
  },
  'detector-de-gas': {
    heroBadge: 'Gas LP · Gas natural · NTC-PA 2024, 4.4.5.2',
    heroTitle: 'Detector de gas',
    heroAccent: 'para cocinas y cuartos de máquinas',
    descRight: [
      'Detectores de gas LP y gas natural para cocinas comerciales, calderas y cuartos de máquinas: autónomos, con electroválvula de corte o conectados al panel de alarma.',
      'Avisan de la fuga antes de que se convierta en incendio o explosión y, con electroválvula, cierran el paso del gas sin esperar a nadie.',
    ],
    pillars: [
      { icon: 'check', title: 'Aviso antes del fuego', desc: 'Alarma sonora y visual en cuanto registra la fuga.' },
      { icon: 'shield', title: 'Corte automático', desc: 'Con electroválvula, cierra la línea de gas por sí solo.' },
      { icon: 'doc', title: 'Cuándo es obligatorio', desc: 'NTC 2024 en CDMX: obra nueva, remodelación o cambio de uso.' },
      { icon: 'pin', title: 'Instalación', desc: 'Lo instalamos en CDMX y el Estado de México.' },
    ],
    norma: 'NTC-PA 2024 (CDMX), numeral 4.4.5.2',
    claves: [
      { label: 'Gases', value: 'Gas LP y gas natural' },
      { label: 'Colocación', value: 'LP cerca del piso · natural cerca del techo' },
      { label: 'Corte', value: 'Electroválvula en la línea de gas' },
      { label: 'Integración', value: 'Autónomo o panel de alarma' },
    ],
    showcaseTitle: 'Datos clave del detector de gas',
    faqAccent: 'sobre detectores de gas',
    guia: { title: 'Cómo elegir tu', titleAccent: 'detector de gas', desc: 'Tipo de gas, dónde se coloca, corte automático y lo que pide la norma en la CDMX.' },
  },
};
