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
  title: 'Extintores en México: venta de PQS, CO₂ y clase K', // 49 car.
  description:
    'Catálogo de extintores PQS, CO₂, clase K, agua, espuma y agente limpio, portátiles y sobre ruedas. Venta, recarga y mantenimiento con entrega en CDMX y Edomex.',
  heroTitle: 'Venta de extintores en México,',
  heroAccent: 'por agente y capacidad',
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
const MANT_BASE = 'Revisión mensual, mantenimiento anual y recarga después de cualquier uso; prueba hidrostática cada 5 años.';
export const EXT_AGENTE_INFO: Record<ExtAgente, { ventajas: [string, string]; limitacion: string; mantenimiento: string }> = {
  pqs: {
    ventajas: ['Cubre clases A, B y C con un solo equipo', 'La gama más amplia: de 1 kg a unidades móviles'],
    limitacion: 'Deja un polvo fino que daña electrónica; no apto bajo campana de cocina.',
    mantenimiento: `${MANT_BASE} Lleva collarín de servicio.`,
  },
  co2: {
    ventajas: ['No deja residuo ni conduce electricidad', 'Indicado junto a tableros y equipo electrónico'],
    limitacion: 'No está clasificado para clase A; en cuartos cerrados reduce el oxígeno.',
    mantenimiento: `${MANT_BASE} Se verifica que conserve su capacidad nominal.`,
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
export type UsoRow = { uso: ExtUso; titulo: string; arde: string; recomendado: string; nota: string };
export const extUsos: UsoRow[] = [
  { uso: 'oficina', titulo: 'Extintores para oficinas', arde: 'Papel, mobiliario, equipo de cómputo y contactos', recomendado: 'PQS ABC de 4.5 a 6 kg en áreas comunes; CO₂ o agente limpio junto al site', nota: 'El polvo del PQS daña equipo: junto a servidores conviene un agente sin residuo.' },
  { uso: 'comercio', titulo: 'Extintores para comercios', arde: 'Mercancía, empaque, mobiliario y tablero eléctrico', recomendado: 'PQS ABC de 6 kg en piso de venta; CO₂ junto al tablero', nota: 'La ruta al extintor no debe quedar bloqueada por mercancía ni exhibidores.' },
  { uso: 'restaurante', titulo: 'Extintores para restaurantes', arde: 'Aceites de cocción, gas, comedor y mobiliario', recomendado: 'Clase K de 6 L junto a la línea de cocción; PQS ABC en comedor y pasillo', nota: 'El recorrido máximo a un extintor clase K es de 10 m (NOM-002, Tabla 1).' },
  { uso: 'hotel', titulo: 'Extintores para hoteles', arde: 'Habitaciones, textiles, cocina, lavandería y cuartos de máquinas', recomendado: 'PQS ABC o agua en pasillos; clase K en cocina; CO₂ en cuartos eléctricos', nota: 'Cada área se protege por lo que arde en ella, no con un solo agente para todo el edificio.' },
  { uso: 'bodega', titulo: 'Extintores para bodegas', arde: 'Tarima, cartón, plástico, montacargas y cargadores', recomendado: 'PQS ABC de 9 kg; unidades móviles de PQS o agua en naves amplias', nota: 'Con riesgo alto, la NOM-002 pide un extintor por cada 200 m² (7.17).' },
  { uso: 'industria', titulo: 'Extintores industriales', arde: 'Procesos, solventes, combustibles y tableros', recomendado: 'PQS ABC de 9 kg y móviles; espuma AFFF con líquidos inflamables; CO₂ en tableros', nota: 'En riesgo alto y clase B, un extintor móvil puede ubicarse hasta a 15 m (Tabla 1, nota).' },
  { uso: 'vehiculo', titulo: 'Extintores para vehículo', arde: 'Motor, combustible y cableado', recomendado: 'PQS ABC de 1 a 2 kg, sujeto con su soporte', nota: 'En el Estado de México el Reglamento de Tránsito pide portar extinguidor (art. 17, fr. V).' },
  { uso: 'site', titulo: 'Extintores para site y telecom', arde: 'Servidores, UPS, baterías y cableado', recomendado: 'CO₂ o agente limpio; agua nebulizada con clasificación C', nota: 'Un agente sin residuo evita que el remedio dañe el equipo que se quería salvar.' },
];

// ── Catálogo por capacidad ───────────────────────────────────────────────────
export type CapRow = { rango: string; perfil: string; conviene: string; considera: string };
export const extCapacidades: CapRow[] = [
  { rango: 'PQS de 1 a 2 kg · CO₂ o agente limpio de 2.5 a 5 lb', perfil: 'Compacto', conviene: 'Vehículos, riesgos puntuales, equipo específico', considera: 'Complementa al extintor de área; poco tiempo de descarga' },
  { rango: 'PQS de 4.5 a 6 kg · clase K o agua nebulizada de 6 L · CO₂ de 10 lb', perfil: 'Uso general', conviene: 'Oficinas, comercios, escuelas, consultorios, cocinas', considera: 'Manejable por una persona capacitada' },
  { rango: 'PQS de 9 kg · agua o espuma de 9 L · CO₂ de 15 a 20 lb', perfil: 'Mayor carga portátil', conviene: 'Bodegas, talleres, naves, cuartos eléctricos', considera: 'Pesa más: confirma quién lo va a operar' },
  { rango: 'PQS de 35 a 70 kg · agua o espuma de 50 L · CO₂ de 50 a 100 lb', perfil: 'Sobre ruedas', conviene: 'Industria, patios de maniobra, combustibles', considera: 'Requiere ruta libre y personal entrenado en su despliegue' },
];

// ── Comparativa de agentes (5 columnas) ──────────────────────────────────────
export const extAgentesCols = ['Agente', 'Clases de fuego', 'Residuo', 'Junto a equipo energizado', 'Limitación principal'] as const;
export const extAgentesRows: string[][] = [
  ['PQS ABC', 'A, B y C', 'Sí: polvo fino', 'Sí', 'No apto para aceite de cocina'],
  ['CO₂', 'B y C', 'No', 'Sí', 'No clasificado para clase A'],
  ['Clase K (químico húmedo)', 'K; algunos modelos también A', 'Mínimo, se limpia', 'No, sin clasificación C', 'Complementa la supresión de campana'],
  ['Agua a presión', 'A', 'No', 'No: conduce', 'Solo sólidos combustibles'],
  ['Agua nebulizada', 'A y C', 'No', 'Sí, con clasificación C del fabricante', 'No es para líquidos inflamables'],
  ['Espuma AFFF', 'A y B', 'Espuma, se limpia', 'No: conduce', 'No para alcoholes ni solventes polares'],
  ['Agente limpio', 'B y C; A en presentaciones mayores', 'No', 'Sí', 'Las presentaciones chicas no cubren clase A'],
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

// ── Compra vs mantenimiento y recarga (3 columnas) ───────────────────────────
export const extServicioCols = ['', 'Compra del extintor', 'Mantenimiento y recarga'] as const;
export const extServicioRows: string[][] = [
  ['Cuándo', 'Equipo nuevo, ampliación del inmueble o reemplazo por baja', 'Cada año y después de cualquier uso'],
  ['Quién', 'El proveedor del equipo', 'Un prestador del servicio conforme a la NOM-154-SCFI-2005'],
  ['Qué evidencia deja', 'Ficha técnica y contraseña oficial del producto', 'Etiqueta con mes y año del servicio y, en PQS, collarín'],
  ['Norma que lo rige', 'NOM de producto del agente (NOM-100, 102 o 103-STPS)', 'NOM-154-SCFI-2005 y NOM-002-STPS-2010 (7.18 y 7.19)'],
  ['Cilindro', 'Nuevo, con su fecha de fabricación', 'Prueba hidrostática al menos cada 5 años'],
];

// ── Marcas del mercado ───────────────────────────────────────────────────────
// Verificadas el 2026-09-10 (sitio oficial o distribuidor mexicano). Se
// EXCLUYEN Stelfire y Suprema (no se encontró evidencia de que existan como
// marcas de extintores), ESICSA y DAHFSA (empresas, no marcas de extintor),
// Pyro-Chem y Strike First (sin presencia de extintores confirmada en México).
export type Marca = { nombre: string; tipo: 'Internacional' | 'Fabricante mexicano'; origen: string; productos: string; nota?: string };
export const extMarcasNota =
  'Marcas reconocidas que pueden encontrarse en el mercado mexicano. Su mención es informativa: no implica que las distribuyamos ni que estén disponibles. La marca y el modelo se confirman al cotizar. Las marcas pertenecen a sus respectivos titulares.';
export const extMarcas: Marca[] = [
  { nombre: 'Amerex', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, agua, agua nebulizada, clase K, Halotron, clase D y sobre ruedas', nota: 'Con distribuidores en México' },
  { nombre: 'Kidde', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, agua, químico húmedo y sobre ruedas' },
  { nombre: 'Badger', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, agua, clase K y sobre ruedas' },
  { nombre: 'Buckeye', tipo: 'Internacional', origen: 'Estados Unidos', productos: 'PQS, CO₂, Halotron, químico húmedo y sobre ruedas', nota: 'Hojas de seguridad en español conforme a la NOM-018-STPS-2015' },
  { nombre: 'Ansul', tipo: 'Internacional', origen: 'Johnson Controls', productos: 'PQS y CO₂, unidades sobre ruedas y clase K para cocina' },
  { nombre: 'FANEX', tipo: 'Fabricante mexicano', origen: 'Fábrica Nacional de Extintores', productos: 'PQS portátil y móvil, y unidades móviles de espuma' },
  { nombre: 'EXAIN', tipo: 'Fabricante mexicano', origen: 'México, desde 1984', productos: 'PQS, CO₂, agua, espuma AFFF, clase K, agentes limpios y móviles', nota: 'También distribuye equipo importado' },
  { nombre: 'Extin-Flam', tipo: 'Fabricante mexicano', origen: 'México', productos: 'PQS portátil y móvil, CO₂ móvil, agua y espuma' },
  { nombre: 'Valtin', tipo: 'Fabricante mexicano', origen: 'Estado de México', productos: 'PQS de fabricación propia; CO₂ y clase K importados' },
  { nombre: 'Aipieci Fire', tipo: 'Fabricante mexicano', origen: 'Estado de México', productos: 'PQS de 0.75 a 50 kg, agua y espuma, y unidades móviles' },
];

// ── Copy de las secciones nuevas (encabezados e introducciones) ─────────────
// Formato de SectionHeading layout="duo": eyebrow, title + titleAccent, desc,
// body (2 párrafos). `cta*` opcional.
export const extSecciones = {
  familias: {
    eyebrow: 'Por familia de agente',
    title: 'Cinco agentes,',
    titleAccent: 'una ficha por cada uno',
    desc: 'Cada ficha reúne todas las presentaciones de un mismo agente extintor.',
    body: [
      'Empieza por la familia si ya sabes qué agente necesitas; si no, el catálogo completo de abajo se filtra por uso, capacidad y clase de fuego.',
      'Todas las familias incluyen presentaciones portátiles y, donde existen en el mercado, unidades sobre ruedas.',
    ],
  },
  catalogo: {
    eyebrow: 'Catálogo completo',
    title: 'Todas las presentaciones,',
    titleAccent: 'filtradas a tu medida',
    desc: 'Filtra por agente, formato, tipo de negocio o clase de fuego y cotiza la presentación exacta.',
    body: [
      'Cada tarjeta es una presentación concreta: agente, capacidad, clases de fuego que cubre, dónde conviene, su limitación principal y el mantenimiento que pide.',
      'Las capacidades publicadas son las que se documentan en el mercado mexicano. La marca, el modelo y la disponibilidad se confirman al cotizar.',
    ],
  },
  negocio: {
    eyebrow: 'Por tipo de negocio',
    title: 'Extintores para empresas,',
    titleAccent: 'según su giro',
    desc: 'Qué suele arder en cada tipo de inmueble y con qué agente conviene arrancar.',
    body: [
      'Es un punto de partida, no un dictamen: la cantidad y la ubicación salen del plano del inmueble y de su grado de riesgo de incendio.',
      'Cada tarjeta abre el catálogo ya filtrado con las presentaciones que aplican a ese giro.',
    ],
  },
  capacidad: {
    eyebrow: 'Por capacidad',
    title: 'Qué capacidad',
    titleAccent: 'conviene en cada caso',
    desc: 'La capacidad se elige por superficie, riesgo y por quién va a operar el equipo.',
    body: [
      'Un extintor más grande no siempre protege mejor: si nadie en el turno puede retirarlo del soporte y dirigirlo, no sirve.',
      'La NOM-002-STPS-2010 pide al menos un extintor por cada 300 m² en riesgo ordinario y por cada 200 m² en riesgo alto.',
    ],
    ctaLabel: 'Cuántos extintores necesito',
    ctaHref: '/herramientas/cuantos-extintores-necesito/',
  },
  comparativa: {
    eyebrow: 'Comparativa de agentes',
    title: 'Siete agentes',
    titleAccent: 'frente a frente',
    desc: 'Clases que cubre cada uno, si deja residuo y si puede usarse junto a equipo energizado.',
    body: [
      'Ningún agente es universal. La comparación que más pesa en la práctica es la del residuo y la de la electricidad: ahí se decide si el extintor protege el equipo o lo termina de dañar.',
      'La clasificación exacta de cada presentación está en la etiqueta del fabricante y en su ficha técnica.',
    ],
  },
  formato: {
    eyebrow: 'Portátil o sobre ruedas',
    title: 'Cuándo un portátil',
    titleAccent: 'se queda corto',
    desc: 'Las unidades sobre ruedas cargan de 35 a 70 kg de agente y necesitan su propia logística.',
    body: [
      'El portátil es la primera respuesta en casi cualquier inmueble. La unidad sobre ruedas se suma donde el conato puede crecer más rápido de lo que un portátil alcanza a controlar.',
      'Antes de elegir una unidad móvil hay que revisar la ruta: pasillos libres, rampas y quién la va a desplegar.',
    ],
  },
  marcas: {
    eyebrow: 'Marcas del mercado',
    title: 'Marcas reconocidas',
    titleAccent: 'en México',
    desc: 'Fabricantes internacionales y mexicanos que pueden encontrarse en el mercado.',
    body: [
      'Elegir marca importa menos que elegir bien el agente y la capacidad, y que el equipo tenga su certificación y su servicio al día.',
      'Si tu corporativo o tu aseguradora piden una marca específica, dínoslo al cotizar y confirmamos disponibilidad.',
    ],
  },
  accesorios: {
    title: 'Accesorios y equipo complementario',
    desc: 'Lo que acompaña al extintor para que esté visible, accesible y a la altura correcta.',
  },
  mantenimiento: {
    eyebrow: 'Mantenimiento y recarga',
    title: 'Comprar el extintor',
    titleAccent: 'es solo el principio',
    desc: 'La compra y el servicio son dos obligaciones distintas, con evidencias distintas.',
    body: [
      'La NOM-002-STPS-2010 pide revisión mensual, mantenimiento al menos una vez al año y recarga después de cualquier uso. El servicio lo presta un proveedor conforme a la NOM-154-SCFI-2005.',
      'Nosotros damos ese servicio a los extintores que vendemos y a los que ya tienes instalados, con etiqueta y collarín para tu expediente.',
    ],
    ctaLabel: 'Recarga de extintores',
    ctaHref: '/servicios/mantenimiento/',
  },
};

// Enlaces de accesorios (RelatedLinks) — anchor = keyword del destino.
export const extAccesoriosLinks = [
  { label: 'Soportes para extintor', href: '/productos/soportes-accesorios-extintor/', desc: 'Soportes de pared, gabinetes y accesorios de montaje.' },
  { label: 'Señalización fotoluminiscente', href: '/productos/senalizacion-fotoluminiscente/', desc: 'Señal de ubicación del extintor y rutas de evacuación.' },
  { label: 'Gabinetes con manguera', href: '/productos/gabinete-manguera-contra-incendio/', desc: 'La segunda línea de defensa cuando el conato crece.' },
  { label: 'Detectores de humo', href: '/productos/detector-humo-fotoelectrico/', desc: 'Detección temprana para usar el extintor a tiempo.' },
];
