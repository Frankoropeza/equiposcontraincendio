// ============================================================================
// src/data/extintores-catalogo.ts — Catálogo ampliado de la L3 /productos/extintores/
// ----------------------------------------------------------------------------
// 2026-09-10. Complementa src/data/extintores.ts (bloques del patrón L2/L3).
// Aquí vive lo que alimenta el CATÁLOGO FILTRABLE y las tablas comparativas:
//   · etiquetas de los ejes de filtro (agente, formato, clase, uso)
//   · ficha técnica por agente (ventajas, limitación, mantenimiento)
//   · accesorios por formato
//   · vistas por tipo de negocio y por capacidad
//   · comparativas (agentes, portátil vs sobre ruedas, compra vs servicio)
//   · marcas del mercado
//
// Las PRESENTACIONES (cards) NO se escriben aquí: salen de las `variantes`
// de cada ficha en src/content/productos/*.md (campos agente, capacidad,
// formato, clases, clasificacion, usos, validacion). Fuente única.
//
// REGLA DE DATOS: nada de memoria. Cada dato técnico tiene fuente anotada en
// la bitácora de Obsidian «Catálogo de extintores». Lo no confirmado se marca
// `validacion: 'pendiente'` o se redacta en genérico. Las marcas se presentan
// como «marcas del mercado»: su mención NO implica distribución.
// ============================================================================

import type { EXT_AGENTES, EXT_FORMATOS, EXT_CLASES, EXT_USOS } from '../content.config';

export type ExtAgente = (typeof EXT_AGENTES)[number];
export type ExtFormato = (typeof EXT_FORMATOS)[number];
export type ExtClase = (typeof EXT_CLASES)[number];
export type ExtUso = (typeof EXT_USOS)[number];
export type LinkItem = { label: string; href: string };

// ── SEO de la página ─────────────────────────────────────────────────────────
// Keyword principal: «extintores en México». Secundarias en H2/H3 y FAQ:
// venta de extintores, extintores para empresas / restaurantes / oficinas,
// extintores industriales, extintores PQS, CO2, tipo K, recarga y
// mantenimiento de extintores. La cobertura de entrega e instalación es
// CDMX y Edomex: se dice explícitamente para no prometer servicio nacional.
export const extSeo = {
  // NeuronWriter «venta de extintores» (2026-09-10, top 10 MX): el title de
  // la SERP usa extintor / incendio / México / venta de extintores / CDMX.
  title: 'Venta de extintores contra incendio en México y CDMX', // 51 car.
  description:
    'Venta de extintores contra incendio para empresas y negocios: PQS, CO₂, clase K, agua y agente limpio. Recarga y mantenimiento en CDMX y Edomex.',
  heroTitle: 'Venta de extintores contra incendio',
  heroAccent: 'para empresas y negocios',
  // og:image propia (antes caía en /images/og/default.png). ogShareImage()
  // la resuelve a /images/og/showcase-extintores-catalogo-profesional.jpg.
  image: '/images/showcase/extintores-catalogo-profesional.avif',
};
// ── Etiquetas de los ejes de filtro ─────────────────────────────────────────
export const EXT_AGENTE_LABEL: Record<ExtAgente, string> = {
  pqs: 'PQS ABC',
  co2: 'CO₂',
  'clase-k': 'Clase K',
  agua: 'Agua a presión',
  'agua-nebulizada': 'Agua nebulizada',
  espuma: 'Espuma AFFF',
  'agente-limpio': 'Agente limpio',
};
// Agrupación del filtro «Agente» (el agua, la nebulizada y la espuma se
// filtran juntas: son la misma familia/ficha).
export const EXT_AGENTE_FILTRO: { key: string; label: string; agentes: ExtAgente[] }[] = [
  { key: 'pqs', label: 'PQS ABC', agentes: ['pqs'] },
  { key: 'co2', label: 'CO₂', agentes: ['co2'] },
  { key: 'clase-k', label: 'Clase K', agentes: ['clase-k'] },
  { key: 'agua', label: 'Agua y espuma', agentes: ['agua', 'agua-nebulizada', 'espuma'] },
  { key: 'agente-limpio', label: 'Agente limpio', agentes: ['agente-limpio'] },
];
export const EXT_FORMATO_LABEL: Record<ExtFormato, string> = {
  portatil: 'Portátil',
  movil: 'Sobre ruedas',
};
export const EXT_CLASE_LABEL: Record<ExtClase, string> = {
  A: 'Clase A · sólidos',
  B: 'Clase B · líquidos inflamables',
  C: 'Clase C · equipo energizado',
  D: 'Clase D · metales',
  K: 'Clase K · aceites de cocina',
};
export const EXT_USO_LABEL: Record<ExtUso, string> = {
  oficina: 'Oficina',
  comercio: 'Comercio',
  restaurante: 'Restaurante',
  hotel: 'Hotel',
  bodega: 'Bodega',
  industria: 'Industria',
  vehiculo: 'Vehículo',
  site: 'Site y telecom',
};

// ── Ficha técnica por agente (se muestra en cada card) ──────────────────────
// Mantenimiento: NOM-002-STPS-2010 7.18 (revisión mensual y mantenimiento
// anual), 7.19 (recarga después de su uso) y NOM-154-SCFI-2005 5.6 (prueba
// hidrostática al menos cada 5 años); collarín solo en PQS (NOM-002 7.2 m).
// Solo lo PROPIO de cada agente: el calendario común (revisión mensual,
// mantenimiento anual, recarga tras uso, prueba hidrostática a 5 años) se dice
// una vez en la nota del catálogo y en la sección de mantenimiento. Repetirlo
// en las 29 cards era texto duplicado.
const MANT_BASE = 'Mismo calendario que el resto: revisión mensual, mantenimiento anual y recarga tras cualquier uso.';
export const EXT_AGENTE_INFO: Record<ExtAgente, { ventajas: [string, string]; limitacion: string; mantenimiento: string }> = {
  pqs: {
    ventajas: ['Cubre clases A, B y C con un solo equipo', 'La gama más amplia: de 1 kg a unidades móviles'],
    limitacion: 'Deja un polvo fino que daña electrónica; no apto bajo campana de cocina.',
    mantenimiento: 'Al darle servicio se le coloca collarín, que no se retira sin abrir el extintor.',
  },
  co2: {
    ventajas: ['No deja residuo ni conduce electricidad', 'Indicado junto a tableros y equipo electrónico'],
    limitacion: 'No está clasificado para clase A; en cuartos cerrados reduce el oxígeno.',
    mantenimiento: 'En la revisión se comprueba que conserve la capacidad nominal de su etiqueta.',
  },
  'clase-k': {
    ventajas: ['Formulado para aceites y grasas de cocción', 'Descarga suave que no salpica el aceite'],
    limitacion: 'Complementa, no sustituye, el sistema fijo de supresión de la campana.',
    mantenimiento: MANT_BASE,
  },
  agua: {
    ventajas: ['Enfría la brasa y reduce la reignición', 'Sin polvo que limpiar después'],
    limitacion: 'Conduce electricidad: nunca contra equipo energizado.',
    mantenimiento: MANT_BASE,
  },
  'agua-nebulizada': {
    ventajas: ['Agua desionizada con clasificación C del fabricante', 'Sin residuo junto a equipo sensible'],
    limitacion: 'Cubre clases A y C; no es para líquidos inflamables.',
    mantenimiento: MANT_BASE,
  },
  espuma: {
    ventajas: ['Película que corta los vapores del líquido', 'Cubre sólidos y líquidos inflamables'],
    limitacion: 'Conduce electricidad; no apta para alcoholes ni solventes polares.',
    mantenimiento: MANT_BASE,
  },
  'agente-limpio': {
    ventajas: ['No conduce ni deja residuo', 'Las presentaciones mayores también cubren clase A'],
    limitacion: 'Las presentaciones chicas solo están clasificadas para clases B y C.',
    mantenimiento: MANT_BASE,
  },
};

// ── Accesorios por formato (links de la card) ────────────────────────────────
export const EXT_ACCESORIOS: Record<ExtFormato, LinkItem[]> = {
  portatil: [
    { label: 'Soportes y gabinetes', href: '/productos/soportes-accesorios-extintor/' },
    { label: 'Señalización', href: '/productos/senalizacion-fotoluminiscente/' },
  ],
  movil: [
    { label: 'Señalización', href: '/productos/senalizacion-fotoluminiscente/' },
    { label: 'Recarga de extintores', href: '/servicios/mantenimiento/' },
  ],
};

// ── Catálogo por tipo de negocio ────────────────────────────────────────────
// Punto de partida, no dictamen: la cantidad y la ubicación salen del plano y
// del grado de riesgo (NOM-002-STPS-2010, 7.17 y Tabla 1). `uso` activa el
// filtro del catálogo (enlace ?uso=<key>#catalogo).
export type UsoRow = { uso: ExtUso; titulo: string; arde: string; recomendado: string; nota: string; guia?: LinkItem };
export const extUsos: UsoRow[] = [
  { uso: 'oficina', titulo: 'Extintores para oficinas', arde: 'Papel, mobiliario, equipo de cómputo y contactos', recomendado: 'PQS ABC de 4.5 a 6 kg en pasillos y áreas comunes; CO₂ o agente limpio junto al site', nota: 'El polvo del PQS se mete en los equipos: junto a los servidores va un agente sin residuo.' },
  { uso: 'comercio', titulo: 'Extintores para comercios', arde: 'Mercancía, empaques, mobiliario y el tablero eléctrico', recomendado: 'PQS ABC de 6 kg en el piso de venta; CO₂ junto al tablero', nota: 'Que la mercancía y los exhibidores nunca tapen el camino al extintor.' },
  { uso: 'restaurante', titulo: 'Extintores para restaurantes', arde: 'Aceite de la freidora, gas, comedor y mobiliario', recomendado: 'Clase K de 6 L junto a la línea de cocción; PQS ABC en comedor y pasillos', nota: 'El extintor clase K debe quedar a no más de 10 m de recorrido (NOM-002, Tabla 1).', guia: { label: 'Guía de Protección Civil para restaurantes', href: '/proteccion-civil/restaurantes/' } },
  { uso: 'hotel', titulo: 'Extintores para hoteles', arde: 'Habitaciones, blancos, cocina, lavandería y cuarto de máquinas', recomendado: 'PQS ABC o agua en pasillos; clase K en cocina; CO₂ en cuartos eléctricos', nota: 'Un hotel tiene varios riesgos bajo el mismo techo: cada área lleva el agente de lo que ahí arde.' },
  { uso: 'bodega', titulo: 'Extintores para bodegas', arde: 'Tarimas, cartón, plástico, montacargas y cargadores', recomendado: 'PQS ABC de 9 kg; unidades móviles de PQS o agua en naves amplias', nota: 'Si la bodega es de riesgo alto, la NOM-002 pide un extintor por cada 200 m² (7.17).' },
  { uso: 'industria', titulo: 'Extintores industriales', arde: 'Procesos, solventes, combustibles y tableros', recomendado: 'PQS ABC de 9 kg y unidades móviles; espuma AFFF donde hay líquidos inflamables; CO₂ en tableros', nota: 'Con riesgo alto y líquidos inflamables, una unidad móvil puede quedar hasta a 15 m (Tabla 1).' },
  { uso: 'vehiculo', titulo: 'Extintores para vehículo', arde: 'Motor, combustible y cableado', recomendado: 'PQS ABC de 1 a 2 kg, bien sujeto con su soporte', nota: 'En el Estado de México el Reglamento de Tránsito pide portar extinguidor (art. 17, fr. V).' },
  { uso: 'site', titulo: 'Extintores para site y telecom', arde: 'Servidores, UPS, baterías y cableado', recomendado: 'CO₂ o agente limpio; agua nebulizada con clasificación C', nota: 'Con un agente sin residuo, apagar el conato no termina de dañar el equipo.' },
];
// ── Catálogo por capacidad ───────────────────────────────────────────────────
export type CapRow = { rango: string; perfil: string; conviene: string; considera: string };
export const extCapacidades: CapRow[] = [
  { rango: 'PQS de 1 a 2 kg · CO₂ o agente limpio de 2.5 a 5 lb', perfil: 'Compacto', conviene: 'Vehículos, puntos de riesgo muy acotados, equipo específico', considera: 'Descarga corta: complementa al extintor de área, no lo sustituye' },
  { rango: 'PQS de 4.5 a 6 kg · clase K o agua nebulizada de 6 L · CO₂ de 10 lb', perfil: 'Uso general', conviene: 'Oficinas, comercios, escuelas, consultorios y cocinas', considera: 'Lo maneja sin problema una persona capacitada' },
  { rango: 'PQS de 9 kg · agua o espuma de 9 L · CO₂ de 15 a 20 lb', perfil: 'Mayor carga portátil', conviene: 'Bodegas, talleres, naves y cuartos eléctricos', considera: 'Pesa más: confirma quién lo va a descolgar y operar' },
  { rango: 'PQS de 35 a 70 kg · agua o espuma de 50 L · CO₂ de 50 a 100 lb', perfil: 'Unidad móvil', conviene: 'Industria, patios de maniobra y almacenes de combustibles', considera: 'Necesita pasillos libres y personal entrenado para desplegarla' },
];
// ── Comparativa de agentes (5 columnas) ──────────────────────────────────────
export const extAgentesCols = ['Agente', 'Dónde rinde mejor', 'Residuo', 'Junto a equipo energizado', 'Limitación principal'] as const;

// Sin columna de clases: esa información ya está en la tabla de clases de
// fuego (RiskGuide) de la misma página; aquí se compara lo que la otra no dice.
export const extAgentesRows: string[][] = [
  ['PQS ABC', 'Oficinas, comercios, bodegas y vehículos', 'Sí: polvo fino', 'Sí', 'No es el agente para aceite de cocina'],
  ['CO₂', 'Tableros, cuartos eléctricos y equipo electrónico', 'No', 'Sí', 'No está clasificado para clase A'],
  ['Clase K (químico húmedo)', 'Freidoras y líneas de cocción', 'Mínimo, se limpia', 'No, sin clasificación C', 'Complementa la supresión de la campana'],
  ['Agua a presión', 'Archivos, bodegas de material seco, madera y textiles', 'No', 'No: conduce', 'Solo sólidos combustibles'],
  ['Agua nebulizada', 'Hospitales, telecomunicaciones y cuartos limpios', 'No', 'Sí, con clasificación C del fabricante', 'No es para líquidos inflamables'],
  ['Espuma AFFF', 'Talleres, patios de maniobra y combustibles', 'Espuma, se limpia', 'No: conduce', 'No sirve para alcoholes ni solventes polares'],
  ['Agente limpio', 'Sites, salas de servidores y equipo sensible', 'No', 'Sí', 'Las presentaciones chicas no cubren clase A'],
];

// ── Portátil vs sobre ruedas (3 columnas) ────────────────────────────────────
export const extFormatoCols = ['Aspecto', 'Portátil', 'Sobre ruedas'] as const;
export const extFormatoRows: string[][] = [
  ['Capacidades', 'PQS de 1 a 9 kg, CO₂ hasta 20 lb, agua y espuma de 9 L', 'PQS de 35 a 70 kg, agua o espuma de 50 L, CO₂ de 50 a 100 lb'],
  ['Quién lo opera', 'Una persona capacitada', 'Personal entrenado en su despliegue'],
  ['Colocación', 'Muro, poste o gabinete, a no más de 1.50 m del piso', 'A nivel de piso, con ruta de acceso libre'],
  ['Dónde conviene', 'Oficinas, comercios, cocinas, vehículos, pasillos', 'Naves, patios de maniobra, almacenes de combustibles'],
  ['Distancia de recorrido', 'La de su clase de fuego (Tabla 1 de la NOM-002)', 'En riesgo alto y clase B puede ubicarse hasta a 15 m'],
];

// ── Marcas del mercado ───────────────────────────────────────────────────────
// Verificadas el 2026-09-10 (sitio oficial o distribuidor mexicano). Se
// EXCLUYEN Stelfire y Suprema (no se encontró evidencia de que existan como
// marcas de extintores), ESICSA y DAHFSA (empresas, no marcas de extintor),
// Pyro-Chem y Strike First (sin presencia de extintores confirmada en México).
// 2026-09-10 · regla de 4 por fila: la retícula queda en 8 (4 internacionales
// en la primera fila y 4 fabricantes mexicanos en la segunda). Salieron de la
// vitrina Ansul (su línea fuerte es la supresión fija de cocinas) y Aipieci
// Fire (la de menor presencia); ambas siguen verificadas si se quieren volver.
export type Marca = { nombre: string; tipo: 'Internacional' | 'Fabricante mexicano'; origen: string; productos: string; nota?: string };
export const extMarcasNota =
  'Estas son marcas reconocidas que se encuentran en el mercado mexicano. Las mencionamos como referencia: no significa que las distribuyamos ni que estén disponibles. La marca y el modelo se confirman al cotizar. Cada marca pertenece a su titular.';

export const extMarcas: Marca[] = [
  { nombre: 'Amerex', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, agua, agua nebulizada, clase K, Halotron, clase D y sobre ruedas', nota: 'Con distribuidores en México' },
  { nombre: 'Kidde', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, agua, químico húmedo y sobre ruedas' },
  { nombre: 'Badger', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, agua, clase K y sobre ruedas' },
  { nombre: 'Buckeye', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, Halotron, químico húmedo y sobre ruedas', nota: 'Hojas de seguridad en español conforme a la NOM-018-STPS-2015' },
  { nombre: 'FANEX', tipo: 'Fabricante mexicano', origen: 'Fábrica Nacional de Extintores', productos: 'PQS portátil y móvil, y unidades móviles de espuma' },
  { nombre: 'EXAIN', tipo: 'Fabricante mexicano', origen: 'México, desde 1984', productos: 'PQS, CO₂, agua, espuma AFFF, clase K, agentes limpios y móviles', nota: 'También distribuye equipo importado' },
  { nombre: 'Extin-Flam', tipo: 'Fabricante mexicano', origen: 'México', productos: 'PQS portátil y móvil, CO₂ móvil, agua y espuma' },
  { nombre: 'Valtin', tipo: 'Fabricante mexicano', origen: 'Estado de México', productos: 'PQS de fabricación propia; CO₂ y clase K importados' },
];

// ── Copy de las secciones nuevas (encabezados e introducciones) ─────────────
// Formato de SectionHeading layout="duo": eyebrow, title + titleAccent, desc,
// body (2 párrafos). `cta*` opcional.
export const extSecciones = {
  familias: {
    eyebrow: 'Tipos de extintor',
    title: 'Extintores por',
    titleAccent: 'tipo de agente',
    desc: 'Cinco familias que reúnen siete agentes, más lo que hace falta para instalarlos, calcularlos y mantenerlos.',
    body: [
      'Si ya sabes qué agente necesitas, entra directo a su ficha. Si no, el catálogo de abajo se filtra por giro, capacidad y clase de fuego.',
      'Las tres últimas fichas cierran el ciclo: el soporte o gabinete para colocarlo, la calculadora para saber cuántos te pide la norma y el servicio que le toca cada año.',
    ],
  },
  catalogo: {
    eyebrow: 'Catálogo de extintores',
    title: 'Todas las capacidades,',
    titleAccent: 'en un solo lugar',
    desc: 'Filtra por agente, formato, giro o clase de fuego y cotiza la presentación que necesitas.',
    body: [
      'Cada tarjeta es una presentación real: capacidad, clases de fuego que cubre, el negocio donde conviene y la limitación que hay que saber antes de comprar.',
      'Publicamos las capacidades que se consiguen en el mercado mexicano. La marca y el modelo los confirmamos contigo al cotizar, según disponibilidad.',
    ],
  },
  negocio: {
    eyebrow: 'Extintores por giro',
    title: 'Extintores para empresas,',
    titleAccent: 'según su giro',
    desc: 'Qué suele arder en cada tipo de negocio y con qué extintor conviene empezar.',
    body: [
      'Tómalo como punto de arranque. La cantidad exacta y el lugar de cada equipo salen del plano del inmueble y de su grado de riesgo.',
      'Cada tarjeta abre el catálogo ya filtrado con las presentaciones que aplican a ese giro.',
    ],
  },
  capacidad: {
    eyebrow: 'Capacidades',
    title: 'Qué capacidad de extintor',
    titleAccent: 'te conviene',
    desc: 'La capacidad se decide por superficie, por riesgo y por quién va a usar el equipo.',
    body: [
      'Un extintor más grande no siempre protege mejor. Si nadie en el turno puede descolgarlo y dirigirlo, sirve de poco.',
      'La NOM-002-STPS-2010 pide al menos un extintor por cada 300 m² en riesgo ordinario y uno por cada 200 m² en riesgo alto.',
    ],
    ctaLabel: 'Cuántos extintores necesito',
    ctaHref: '/herramientas/cuantos-extintores-necesito/',
  },
  comparativa: {
    eyebrow: 'Comparativa de agentes',
    title: 'PQS, CO₂, agua, clase K',
    titleAccent: 'y agente limpio',
    desc: 'Lo que de verdad cambia entre un agente y otro: residuo, electricidad y dónde rinde mejor.',
    body: [
      'En la práctica, la decisión casi siempre se juega en dos preguntas: si deja residuo y si se puede usar junto a equipo con corriente. De eso depende que el extintor salve el equipo o lo termine de dañar.',
      'Las clases de fuego de cada agente están en la tabla anterior. La clasificación exacta de cada modelo, como la clasificación UL que declara el fabricante, viene en su etiqueta.',
    ],
  },
  formato: {
    eyebrow: 'Portátil o sobre ruedas',
    title: 'Extintores portátiles',
    titleAccent: 'o unidades móviles',
    desc: 'Las unidades móviles cargan de 35 a 70 kg de agente y necesitan espacio para moverse.',
    body: [
      'El portátil es la primera respuesta en casi cualquier inmueble. La unidad móvil se suma donde un conato puede crecer más rápido de lo que un portátil alcanza a controlar.',
      'Antes de pedir una unidad móvil, revisa el recorrido: pasillos libres, rampas y quién la va a desplegar.',
    ],
  },
  marcas: {
    eyebrow: 'Marcas',
    title: 'Marcas de extintores',
    titleAccent: 'en México',
    desc: 'Fabricantes internacionales y mexicanos que se encuentran en el mercado.',
    body: [
      'Elegir bien el agente y la capacidad pesa más que la marca. Lo que no puede faltar es que el equipo esté certificado y con su servicio al día.',
      'Si tu corporativo o tu aseguradora piden una marca en particular, dínoslo al cotizar y confirmamos disponibilidad.',
    ],
  },
};

// ── Fichas de cierre del catálogo (regla de 4 por fila, 2026-09-10) ─────────
// El catálogo tiene 29 presentaciones reales y los filtros cambian el total,
// así que la última fila casi nunca cierra en 4. Frank eligió completarla con
// fichas de cierre: el componente muestra solo las que falten para llenar la
// fila (0 a 3 a 4 columnas; 0 o 1 a 2 columnas), en este orden, y las recalcula
// con cada filtro. Nunca se inventa una presentación para rellenar.
export type FichaCierre = {
  badge: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  whatsapp?: boolean;
};
export const extCatalogoCierre: FichaCierre[] = [
  {
    badge: 'Cotización a la medida',
    title: '¿No ves la capacidad que buscas?',
    description: 'Dinos el agente, capacidad y cantidad. Si se consigue, te la cotizamos.',
    href: 'Hola, busco un extintor con una capacidad o un agente que no vi en el catálogo. ¿Me ayudan a cotizarlo?',
    ctaLabel: 'Cotizar por WhatsApp',
    image: '/images/general/inventario-proveedor-equipo-contra-incendio.avif',
    imageAlt: 'Inventario de extintores y equipo contra incendio en bodega',
    whatsapp: true,
  },
  {
    badge: 'Calculadora gratis',
    title: '¿Cuántos extintores necesito?',
    description: 'Calcula el mínimo que pide la NOM-002 según la superficie y el nivel de riesgo.',
    href: '/herramientas/cuantos-extintores-necesito/',
    ctaLabel: 'Cuántos extintores',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Levantamiento de riesgo de incendio en una planta',
  },
  {
    badge: 'Servicio NOM-154',
    title: 'Recarga de extintores',
    description: 'Mantenimiento anual, recarga tras cualquier uso y prueba hidrostática del cilindro.',
    href: '/servicios/mantenimiento/',
    ctaLabel: 'Recarga de extintores',
    image: '/images/servicios/inspeccion-recarga-extintores.avif',
    imageAlt: 'Recarga y mantenimiento de extintores en taller de servicio',
  },
];
