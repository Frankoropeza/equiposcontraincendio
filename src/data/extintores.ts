// ============================================================================
// src/data/extintores.ts — Datos de la L3 /productos/extintores/.
// ----------------------------------------------------------------------------
// PRIMERA L3 DEL SITIO (2026-09-10). Catálogo ampliado el mismo día: ver
// src/data/extintores-catalogo.ts (filtros, tablas, marcas) y las variantes
// estructuradas de cada ficha. Jerarquía de productos:
//   L2 /productos/  →  L3 /productos/extintores/  →  L4 /productos/<ficha>/
// Las fichas se quedan en URL plana (/productos/extintor-pqs/, etc.): la
// jerarquía la dan las migas y el BreadcrumbList, sin redirecciones.
//
// PATRÓN: el mismo esqueleto de las L2 (paridad de diseño), página .astro
// fina y todo el contenido aquí:
//   Hero → SectionMenu → TrustBar → vitrina de fichas → módulos
//   CategoryFeature (uno por ficha) → RiskGuide → NormsTable → ProcessSteps
//   → CompanyAbout → RelatedLinks → FAQ + Contacto
//
// ÁNGULO DE ESTA L3 — cada nivel responde una pregunta distinta:
//   · /                  «¿con quién me equipo?»
//   · /productos/        «¿qué equipo pide mi TIPO DE INMUEBLE y de qué capacidad?»
//   · /productos/extintores/  «¿QUÉ AGENTE apaga mi fuego, dónde NO se usa
//                              y qué le toca al extintor después de comprarlo?»
//   · la ficha L4        «¿qué presentación exacta cotizo?»
// Por eso la tabla de esta página es por CLASE DE FUEGO (la de /productos/ es
// por tipo de inmueble) y el proceso es el CICLO DE VIDA del extintor (el de
// /productos/ es el proceso de compra). No copiar copy entre niveles.
//
// Deslinde con el blog: el pilar informativo «tipos de extintores» vive en
// /blog/como-elegir-extintor-clase-fuego/. Esta L3 es comercial (venta y
// servicio); lo enlaza en RelatedLinks en lugar de competir con él.
//
// Normas de producto verificadas el 2026-09-10 en el catálogo de normas de la
// Secretaría de Economía (platiica.economia.gob.mx): NOM-100, NOM-102 y
// NOM-103-STPS-1994 figuran VIGENTES, confirmadas en la revisión sistemática
// del 29-09-2022. La NOM-103 cubre agua con presión contenida INCLUIDOS los
// aditivos espumantes (AFFF/FFFP), para fuegos clase A y B. La clase K no
// tiene NOM de producto: se cita NFPA 10 como referencia técnica.
// ============================================================================

export type Feature = { label: string; desc: string };
export type GalleryImage = { src: string; alt: string };
export type RiskRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export type NormRow = { norma: string; alcance: string; aplica: string };
export type Step = { num: string; title: string; desc: string };

// ── Hero (2026-09-10, catálogo ampliado) ─────────────────────────────────────
// Título y acento en extSeo (src/data/extintores-catalogo.ts).
export const extintoresHero = {
  badge: 'Extintores nuevos · entrega en CDMX y Edomex',
  subtitle:
    'PQS, CO₂, clase K, agua, espuma y agente limpio, portátiles y sobre ruedas. Te ayudamos a elegir el correcto y después le damos la recarga y el mantenimiento que pide la norma.',
  descRight: [
    'El extintor correcto depende de lo que puede arder en cada zona: cartón en la bodega, aceite en la cocina, tableros en el cuarto eléctrico. Con el agente equivocado, el fuego puede no apagarse o quien lo usa puede salir lastimado.',
    'Aquí están las 29 presentaciones que cotizamos, con su capacidad, las clases de fuego que cubren y el tipo de negocio donde convienen. Si prefieres que lo veamos juntos, escríbenos por WhatsApp.',
  ],
};

// ── Barra de confianza ───────────────────────────────────────────────────────
export const extintoresPillars = [
  { icon: 'check', title: 'Asesoría por zona', desc: 'Te decimos qué agente va en cada área de tu inmueble, en lugar de uno para todo.' },
  { icon: 'doc', title: 'Papeles en orden', desc: 'Ficha técnica del equipo y etiqueta de servicio para tu expediente de Protección Civil.' },
  { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Mantenimiento anual, recarga y prueba hidrostática con quien te vendió el equipo.' },
  { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
];

// ── Vitrina: badge, texto y anchor de cada ficha L4 ──────────────────────────
// blurb ≤ 90 caracteres (contrato de tarjeta: la caja reserva 3 líneas). No se
// usa la `description` del frontmatter porque mide 180–230 caracteres y la
// tarjeta la cortaba con elipsis — medido en el navegador el 2026-09-10.
// ctaLabel = keyword limpia del destino (regla de anchor text, tope ~24 car.).
// image/imageAlt: fotografía de CONTEXTO de uso para la tarjeta de familia
// (2026-09-10, a falta de foto de producto por agente). No sustituye a la
// `image` de la ficha, que alimenta el schema Product y el OG: ahí se queda el
// cartel hasta tener foto real del producto, salvo PQS, cuya foto sí muestra
// extintores de la familia. El alt describe lo que se ve, no el producto.
export const extintoresFichas: Record<string, { badge: string; blurb: string; ctaLabel: string; image?: string; imageAlt?: string }> = {
  'extintor-pqs': { badge: 'Clases A · B · C', blurb: 'Un solo agente para sólidos, líquidos inflamables y equipo eléctrico. De 1 a 70 kg.', ctaLabel: 'Extintores PQS ABC', image: '/images/showcase/extintores-catalogo-profesional.avif', imageAlt: 'Extintores portátiles de distintas capacidades sobre piso de concreto' },
  'extintor-co2': { badge: 'Clases B · C', blurb: 'Sin residuo para tableros, sites y electrónica. Portátil y móvil sobre ruedas.', ctaLabel: 'Extintores de CO₂', image: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif', imageAlt: 'Muro con señalética de emergencia, extintor y estación manual en planta' },
  'extintor-clase-k': { badge: 'Clase K · Cocina', blurb: 'Químico húmedo para aceites y grasas de cocción. Complementa el sistema de la campana.', ctaLabel: 'Extintores clase K', image: '/images/servicios/supresion-cocina-comercial.avif', imageAlt: 'Cocina comercial con campana y supresión clase K' },
  'extintor-agua': { badge: 'Agua y espuma AFFF', blurb: 'Agua a presión para sólidos, nebulizada junto a equipo eléctrico y espuma para líquidos.', ctaLabel: 'Extintores de agua', image: '/images/servicios/instalacion-equipo-almacen.avif', imageAlt: 'Instalación de extintor y gabinete en almacén' },
  'extintor-agente-limpio': { badge: 'Sin residuo', blurb: 'Halotron I y FE-36: sin residuo ni conductividad, para sites y equipo electrónico.', ctaLabel: 'Agente limpio', image: '/images/servicios/supresion-agente-limpio-data-center.avif', imageAlt: 'Cilindros de agente limpio protegiendo un data center' },
};

// ── Módulos por agente (CategoryFeature) ─────────────────────────────────────
// Uno por ficha, en el orden de la colección. El CTA primario lleva a la
// ficha L4 (anchor = keyword del destino); el secundario cotiza por WhatsApp.
export const extintoresFeatures = [
  {
    id: 'extintor-pqs',
    eyebrow: 'PQS ABC · Clases A, B y C · NOM-100-STPS',
    title: 'Extintores PQS,',
    titleAccent: 'el más versátil',
    description:
      'Es el extintor que más se instala, y con razón: un solo equipo cubre papel, gasolina y un tablero con corriente. El costo está en la limpieza. El polvo es muy fino, se mete en los equipos y hay que limpiar a fondo después de usarlo. Por eso junto a los servidores o bajo la campana de la cocina va otro agente.',
    features: [
      { label: 'Tres clases en un equipo', desc: 'Sólidos, líquidos inflamables y riesgo eléctrico con el mismo extintor.' },
      { label: 'De 1 a 70 kg', desc: 'Del vehículo a la nave industrial: cinco portátiles y tres unidades sobre ruedas.' },
      { label: 'Deja residuo', desc: 'El polvo cubre el área y puede dañar electrónica; hay que limpiar después.' },
      { label: 'No va en la cocina', desc: 'Contra aceite de cocción no basta: bajo la campana va agente K.' },
    ],
    ctaLabel: 'Extintores PQS ABC',
    ctaHref: '/productos/extintor-pqs/',
    ctaSecondaryLabel: 'Cotizar PQS',
    ctaMsg: 'Hola, quiero cotizar extintores PQS ABC. ¿Me ayudan a elegir la capacidad?',
    imgMain: { src: '/images/showcase/extintores-catalogo-profesional.avif', alt: 'Extintores PQS, CO₂ y agente K de distintas capacidades' },
    imgA: { src: '/images/general/inventario-proveedor-equipo-contra-incendio.avif', alt: 'Inventario de equipo de protección y extintores en bodega' },
    imgB: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Instalación de extintor y gabinete en almacén' },
  },
  {
    id: 'extintor-co2',
    eyebrow: 'CO₂ · Clases B y C · NOM-102-STPS',
    title: 'Extintores de CO₂,',
    titleAccent: 'sin residuo',
    description:
      'El CO₂ le quita el oxígeno a la flama y se disipa sin dejar rastro. Por eso es el extintor que se pone junto a tableros, sites y equipo electrónico. Sobre papel o madera se queda corto: apaga la flama, pero la brasa sigue caliente y puede volver a encender cuando el gas se va.',
    features: [
      { label: 'Clases B y C', desc: 'Líquidos inflamables y equipo eléctrico energizado.' },
      { label: 'No deja residuo', desc: 'El gas se disipa: no hay que limpiar tableros ni servidores.' },
      { label: 'No es para sólidos', desc: 'Sobre papel o madera la brasa puede volver a encender.' },
      { label: 'Cuidado en cuartos chicos', desc: 'En un recinto cerrado reduce el oxígeno disponible para quien lo usa.' },
    ],
    ctaLabel: 'Extintores de CO₂',
    ctaHref: '/productos/extintor-co2/',
    ctaSecondaryLabel: 'Cotizar CO₂',
    ctaMsg: 'Hola, quiero cotizar extintores de CO₂ para riesgo eléctrico. ¿Qué capacidad me recomiendan?',
    imgMain: { src: '/images/servicios/supresion-agente-limpio-data-center.avif', alt: 'Site de servidores, el tipo de área donde se prefiere un agente sin residuo' },
    imgA: { src: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif', alt: 'Revisión del tablero de alarma en una planta industrial' },
    imgB: { src: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif', alt: 'Señalética de emergencia, extintor y estación manual en muro de planta' },
  },
  {
    id: 'extintor-clase-k',
    eyebrow: 'Agente K · Clase K · Cocinas comerciales',
    title: 'Extintor tipo K',
    titleAccent: 'para cocinas',
    description:
      'El aceite de una freidora arde tan caliente que el agua lo hace estallar y el polvo no alcanza a enfriarlo. El químico húmedo reacciona con la grasa y forma una capa que la separa del aire mientras la enfría. En una cocina comercial trabaja junto al sistema fijo de la campana; no lo reemplaza.',
    features: [
      { label: 'Hecho para freidoras', desc: 'Aceites y grasas de cocción, donde los demás agentes fallan.' },
      { label: 'Descarga en niebla', desc: 'Aplica el agente sin salpicar el aceite encendido.' },
      { label: 'A 10 m como máximo', desc: 'Distancia máxima de recorrido para la clase K en la NOM-002-STPS.' },
      { label: 'No sustituye la campana', desc: 'El sistema fijo de supresión sigue siendo la primera línea.' },
    ],
    ctaLabel: 'Extintores clase K',
    ctaHref: '/productos/extintor-clase-k/',
    ctaSecondaryLabel: 'Cotizar clase K',
    ctaMsg: 'Hola, quiero cotizar extintores clase K para una cocina comercial.',
    imgMain: { src: '/images/servicios/supresion-cocina-comercial.avif', alt: 'Cocina comercial con campana y supresión clase K' },
    imgA: { src: '/images/showcase/extintores-variedad-colores-catalogo.avif', alt: 'Extintores de PQS, CO₂, agua y agente K comparados por agente' },
    imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Colocación de etiqueta y collarín de servicio en el extintor' },
  },
  {
    id: 'extintor-agua',
    eyebrow: 'Agua y espuma AFFF · Clases A y B · NOM-103-STPS',
    title: 'Extintores de agua',
    titleAccent: 'y espuma AFFF',
    description:
      'El agua enfría, y enfriar es lo que mejor apaga el papel, la madera, el cartón y la tela. Con espumante AFFF también controla líquidos inflamables. En su versión nebulizada, con agua desionizada, se puede usar donde hay equipo eléctrico. El agua a presión y la espuma, en cambio, nunca se dirigen a algo con corriente.',
    features: [
      { label: 'Agua a presión', desc: 'Sólidos combustibles, sin polvo que limpiar después.' },
      { label: 'Agua nebulizada', desc: 'Desionizada y con clasificación 2A:C, para sólidos junto a equipo eléctrico.' },
      { label: 'Espuma AFFF', desc: 'Forma una película sobre el líquido inflamable; cubre clases A y B.' },
      { label: 'Portátil y sobre ruedas', desc: 'De 6 a 9.46 L en portátil y unidades móviles de 50 L.' },
    ],
    ctaLabel: 'Extintores de agua',
    ctaHref: '/productos/extintor-agua/',
    ctaSecondaryLabel: 'Cotizar agua o espuma',
    ctaMsg: 'Hola, quiero cotizar extintores de agua o de espuma AFFF. ¿Cuál me conviene?',
    imgMain: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Técnico uniformado revisando equipo contra incendio en almacén' },
    imgA: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Recarga y mantenimiento de extintores en taller de servicio' },
    imgB: { src: '/images/servicios/prueba-hidrostatica-extintor.avif', alt: 'Prueba hidrostática de extintor en el taller de servicio' },
  },
  {
    id: 'extintor-agente-limpio',
    eyebrow: 'Agente limpio · Halotron I y FE-36 · Clases B, C y A',
    title: 'Extintores de agente limpio',
    titleAccent: 'para equipo sensible',
    description:
      'El agente se evapora al salir: no conduce la electricidad y no deja residuo. Protege servidores y equipo delicado sin dañarlos. Es la opción cuando el PQS obligaría a una limpieza cara y el CO₂ no basta porque en el cuarto también hay papel, cartón o mobiliario.',
    features: [
      { label: 'Sin residuo', desc: 'El agente se evapora; el equipo protegido no se ensucia.' },
      { label: 'No conduce', desc: 'Se usa junto a equipo eléctrico energizado.' },
      { label: 'Clase A desde 4.3 kg', desc: 'Las presentaciones mayores también cubren sólidos (según fabricante).' },
      { label: 'Dos agentes', desc: 'Halotron I de 1.1 a 7 kg y FE-36 de 4.3 y 6 kg.' },
    ],
    ctaLabel: 'Agente limpio',
    ctaHref: '/productos/extintor-agente-limpio/',
    ctaSecondaryLabel: 'Cotizar agente limpio',
    ctaMsg: 'Hola, quiero cotizar extintores de agente limpio para un site o equipo electrónico.',
    imgMain: { src: '/images/servicios/supresion-agente-limpio-data-center.avif', alt: 'Cilindros de agente limpio protegiendo un data center' },
    imgA: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Ruta de evacuación señalizada junto a extintor en nave industrial' },
    imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Colocación de etiqueta y collarín de servicio en el extintor' },
  },
];

// ── Qué agente apaga cada clase de fuego ─────────────────────────────────────
// La tabla de esta L3. En /productos/ la guía va por TIPO DE INMUEBLE; aquí va
// por CLASE DE FUEGO e incluye la columna que casi nadie publica: con qué
// agente NO se debe atacar cada fuego.
export const extintoresClases: RiskRow[] = [
  {
    nivel: 'Clase A',
    ejemplos: 'Papel, madera, cartón, textiles y plásticos',
    minimo: 'Agua a presión, agua nebulizada, espuma AFFF o PQS ABC',
    complementos: 'CO₂: apaga la flama, pero la brasa puede reavivarse',
  },
  {
    nivel: 'Clase B',
    ejemplos: 'Gasolina, diésel, solventes, pinturas y gas',
    minimo: 'PQS ABC, CO₂, espuma AFFF o agente limpio',
    complementos: 'Agua a presión: esparce el líquido encendido',
  },
  {
    nivel: 'Clase C',
    ejemplos: 'Tableros, motores y cableado energizados',
    minimo: 'CO₂, agente limpio, PQS ABC o agua nebulizada con clasificación C',
    complementos: 'Agua a presión y espuma AFFF: conducen la corriente',
  },
  {
    nivel: 'Clase K',
    ejemplos: 'Aceites y grasas de cocción',
    minimo: 'Agente K de químico húmedo',
    complementos: 'Agua: proyecta el aceite; el PQS no lo enfría lo suficiente',
  },
  {
    nivel: 'Clase D',
    ejemplos: 'Metales combustibles: magnesio, sodio o titanio',
    minimo: 'Polvo especial para el metal de que se trate',
    complementos: 'Ninguno de los agentes de este catálogo',
  },
];

// ── Qué norma certifica cada agente ─────────────────────────────────────────
// En /productos/ la tabla dice qué norma aplica a cada FAMILIA del catálogo;
// aquí baja un nivel: la norma de producto de cada AGENTE.
export const extintoresNormRows: NormRow[] = [
  { norma: 'NOM-100-STPS-1994', alcance: 'Especificaciones de seguridad de los extintores de polvo químico seco con presión contenida', aplica: 'Extintores PQS' },
  { norma: 'NOM-102-STPS-1994', alcance: 'Seguridad de los extintores a base de bióxido de carbono, parte 1: recipientes', aplica: 'Extintores de CO₂' },
  { norma: 'NOM-103-STPS-1994', alcance: 'Extintores a base de agua con presión contenida, incluidos los aditivos espumantes, para clases A y B', aplica: 'Agua a presión y espuma AFFF' },
  { norma: 'NFPA 10 (ref.)', alcance: 'Clasificación de fuegos, incluida la clase K, y criterios de selección y ubicación de extintores', aplica: 'Extintores clase K' },
  { norma: 'Clasificación del fabricante', alcance: 'Sin NOM mexicana de producto específica: la clase de fuego y el rango constan en la etiqueta del modelo', aplica: 'Agente limpio (Halotron I, FE-36)' },
  { norma: 'NOM-106-SCFI-2017', alcance: 'Diseño y uso de la contraseña oficial que identifica al producto certificado', aplica: 'Extintores sujetos a norma de producto' },
  { norma: 'NOM-002-STPS-2010', alcance: 'Extintor acorde a la clase de fuego, distancia máxima de recorrido y revisión mensual (7.18)', aplica: 'Selección y colocación en el centro de trabajo' },
  { norma: 'NOM-154-SCFI-2005', alcance: 'Mantenimiento, recarga y prueba hidrostática al menos cada 5 años (5.6)', aplica: 'Todos los extintores del catálogo' },
];

// ── Ciclo de vida del extintor ───────────────────────────────────────────────
// En /productos/ el proceso es la COMPRA; aquí es lo que le toca al extintor
// desde que se elige hasta que se retimbra o se da de baja.
export const extintoresSteps: Step[] = [
  { num: '01', title: 'Se elige por clase de fuego', desc: 'El agente sale de lo que puede arder en cada zona; la capacidad, de la superficie y del nivel de riesgo.' },
  { num: '02', title: 'Se coloca donde se alcanza', desc: 'A no más de 1.50 m del piso, señalizado, sin obstáculos y dentro de la distancia de recorrido de su clase.' },
  { num: '03', title: 'Se revisa cada mes', desc: 'Lo hace tu propio personal: presión, seguro, manguera y acceso libre, con registro en la bitácora.' },
  { num: '04', title: 'Se mantiene cada año', desc: 'Un proveedor lo revisa y recarga conforme a la NOM-154, y deja etiqueta y collarín. También tras cualquier descarga.' },
  { num: '05', title: 'Prueba hidrostática a 5 años', desc: 'Si el cilindro pasa la prueba, se retimbra y sigue en servicio; si no la pasa, se da de baja.' },
];

export const extintoresCompany = {
  que: {
    title: 'Qué encuentras aquí',
    body: [
      'Cinco familias de extintores contra incendio, en portátil y sobre ruedas: polvo químico seco ABC, CO₂, clase K para cocina, la familia a base de agua (agua a presión, agua nebulizada y espuma AFFF) y agente limpio. Cada familia tiene su ficha con todas sus capacidades.',
      'Además de venderlos, les damos el servicio que la norma pide mientras estén en uso: mantenimiento anual, recarga y prueba hidrostática. El extintor que compras aquí tiene a quién volver.',
      'Y si tu inmueble necesita más que extintores, surtimos el resto del equipo contra incendio (detección y alarmas, gabinetes e hidrantes, señalización) y damos capacitación a tu brigada, para que la seguridad contra incendios quede con un solo proveedor.',
    ],
  },
  como: {
    title: 'Cómo lo elegimos contigo',
    pillars: [
      { title: 'Primero, qué puede arder', desc: 'El agente se decide por lo que hay en cada zona, no por el extintor que ya tenías.' },
      { title: 'Luego, la capacidad', desc: 'Superficie, grado de riesgo y quién lo va a operar definen el tamaño.' },
      { title: 'Y el servicio desde el primer día', desc: 'Sale con la fecha de su mantenimiento y de su prueba hidrostática.' },
    ],
  },
};

export const extintoresRelated = [
  { label: 'Prueba hidrostática', href: '/servicios/prueba-hidrostatica/', desc: 'Retimbrado del cilindro cada 5 años.' },
  { label: 'Instalación de extintores', href: '/servicios/instalacion/', desc: 'Montaje a la altura correcta y señalización.' },
  { label: 'Inspección y dictamen', href: '/servicios/inspeccion/', desc: 'Revisión del equipo instalado y su reporte.' },
  { label: 'Capacitación en extintores', href: '/servicios/capacitacion-dc3/', desc: 'Uso de extintores para tu brigada, con DC-3.' },
  { label: 'Señalamiento de extintor', href: '/productos/senalizacion-fotoluminiscente/', desc: 'Señal fotoluminiscente de ubicación.' },
  { label: 'Gabinetes con manguera', href: '/productos/gabinete-manguera-contra-incendio/', desc: 'Cuando el conato supera al extintor.' },
  { label: 'Tipos de extintores', href: '/blog/como-elegir-extintor-clase-fuego/', desc: 'Clases de fuego y agentes, explicados.' },
  { label: 'Cotizar extintores', href: '/contacto/', desc: 'Escríbenos con tu giro y superficie.' },
];

// ── FAQ propio de la L3 ──────────────────────────────────────────────────────
// Sin repetir el de /productos/ (stock, factura, entregas) ni el de las fichas.
export const extintoresFaqs = [
  {
    question: '¿Dónde comprar extintores en la CDMX?',
    answer: 'Aquí mismo. Nos escribes por WhatsApp con tu giro, la superficie y lo que se guarda en el lugar, y te cotizamos los extintores (o extinguidores, como también se les dice) con precio y disponibilidad. Entregamos en la CDMX y en el Estado de México, y si lo necesitas, también instalamos y damos la recarga y el mantenimiento.',
  },
  {
    question: '¿Cuánto cuesta un extintor?',
    answer: 'Depende del agente, la capacidad, la cantidad y de si incluye instalación o servicio. Un PQS de 6 kg no cuesta lo mismo que un agente limpio de la misma capacidad. Por eso no publicamos una lista que no aplique a tu caso: dinos qué necesitas y te cotizamos con precio real.',
  },
  {
    question: '¿Qué incluye la compra de un extintor?',
    answer: 'El equipo nuevo con su ficha técnica para tu expediente. Si lo pides, lo instalamos a la altura correcta con su señalamiento y te indicamos cuándo le toca su mantenimiento anual y su prueba hidrostática.',
  },
  {
    question: '¿Hay un extintor que sirva para todo?',
    answer: 'El que más se acerca es el PQS ABC, que cubre sólidos, líquidos inflamables y equipo eléctrico. Aun así, no es el agente para el aceite de cocina, donde va el clase K, y su polvo daña la electrónica. Por eso casi ningún negocio se protege con un solo tipo de extintor.',
  },
  {
    question: '¿Qué extintor necesita un restaurante?',
    answer: 'Un extintor clase K junto a la línea de cocción, porque es el agente hecho para aceites y grasas, y extintores PQS ABC en el comedor y los pasillos. La NOM-002-STPS-2010 marca 10 m como distancia máxima de recorrido a un clase K. Si la campana tiene sistema fijo de supresión, el extintor lo complementa.',
  },
  {
    question: '¿Cuántos extintores necesita mi empresa?',
    answer: 'La NOM-002-STPS-2010 pide al menos uno por cada 300 m² en riesgo ordinario y uno por cada 200 m² en riesgo alto, y además hay que respetar la distancia máxima de recorrido de cada clase de fuego. Nuestra calculadora te da un primer número; la cantidad final sale del plano del inmueble.',
  },
  {
    question: '¿Por qué el CO₂ no sirve para papel o madera?',
    answer: 'Porque no enfría lo suficiente. Le quita el oxígeno a la flama y la apaga, pero la brasa conserva el calor y puede volver a encender cuando el gas se va. Por eso el CO₂ está clasificado para las clases B y C, y no para la A.',
  },
  {
    question: '¿El polvo químico seco daña los equipos?',
    answer: 'Puede dañarlos. Es un polvo muy fino que se mete en contactos, ventiladores y tarjetas, y con la humedad los puede corroer. Junto a servidores, tableros o equipo de laboratorio conviene CO₂, agente limpio o agua nebulizada con clasificación C.',
  },
  {
    question: '¿Qué es un extintor de agente limpio?',
    answer: 'Es un extintor cuyo agente se evapora al descargarse: no conduce la electricidad y no deja residuo. Se usa en sites, telecomunicaciones y equipo delicado. Las presentaciones chicas cubren las clases B y C; desde 4.3 kg (FE-36) o 5 kg (Halotron I) el fabricante también las clasifica para clase A.',
  },
  {
    question: '¿Tengo que recargar un extintor que usé solo un poco?',
    answer: 'Sí. La NOM-002-STPS-2010 pide recargarlo después de su uso, aunque haya sido un disparo corto. Con menos agente y menos presión, el extintor ya no garantiza su descarga completa la próxima vez.',
  },
  {
    question: '¿Cuánto dura un extintor?',
    answer: 'En México el cilindro no tiene una fecha de caducidad fija. Sigue en servicio mientras pase la prueba hidrostática, que se hace al menos cada 5 años (NOM-154-SCFI-2005, 5.6), y no tenga corrosión, golpes ni deformaciones. Los 12 años que a veces se mencionan vienen de la NFPA 10 y no aplican aquí.',
  },
  {
    question: '¿Es obligatorio llevar extintor en el auto?',
    answer: 'Depende de la entidad. En el Estado de México, el Reglamento de Tránsito pide portar un extinguidor en buenas condiciones (art. 17, fracción V) y el artículo 35 lo exige a los vehículos de uso comercial y público. En otras entidades revisa el reglamento local vigente. Para un auto, lo habitual es un PQS ABC de 1 a 2 kg.',
  },
  {
    question: '¿Qué marcas de extintores manejan?',
    answer: 'La marca y el modelo se confirman al cotizar, según disponibilidad. En esta página listamos marcas reconocidas del mercado mexicano como referencia; que aparezcan no significa que las distribuyamos. Si tu corporativo o tu aseguradora piden una marca específica, dinos cuál.',
  },
  {
    question: '¿Venden extintores para metales (clase D)?',
    answer: 'No están en este catálogo, porque el agente depende del metal: magnesio, sodio o titanio piden polvos distintos. Si tu proceso trabaja con alguno, revisamos el caso y lo cotizamos como equipo especializado.',
  },
];


// ── Vitrina canónica L3: 8 fichas con specs (PATRÓN L3, 2026-09-10) ─────────
// Regla del sitio: retícula de 4 por fila y total en múltiplos de 4. Las
// cinco familias (fichas L4) más tres fichas de ciclo de vida: recarga y
// mantenimiento (L3 de servicio), soportes y gabinetes (L4) y la calculadora.
// Se pinta con ServiceCard + `specs`, el mismo diseño aprobado en
// /servicios/mantenimiento/. Los specs salen de las `variantes` de cada ficha
// (capacidades mínima y máxima reales) y de las normas ya verificadas arriba.
// Contrato medido a 1280 px: title ≤ 40, description ≤ ~85, spec.label ≤ 14,
// spec.value ≤ 18, ctaLabel ≤ 24 (keyword del destino).
export type Spec = { label: string; value: string };
export type Tarjeta = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  description: string;
  specs: Spec[];
  ctaLabel: string;
};
const f = extintoresFichas;
export const extintoresTarjetas: Tarjeta[] = [
  {
    title: 'Extintores PQS ABC',
    href: '/productos/extintor-pqs/',
    image: f['extintor-pqs'].image!,
    imageAlt: f['extintor-pqs'].imageAlt!,
    badge: 'Polvo químico seco',
    description: 'Un solo agente para sólidos, líquidos inflamables y equipo eléctrico.',
    specs: [
      { label: 'Clases', value: 'A · B · C' },
      { label: 'Capacidad', value: '1 a 70 kg' },
      { label: 'Norma', value: 'NOM-100-STPS' },
    ],
    ctaLabel: f['extintor-pqs'].ctaLabel,
  },
  {
    title: 'Extintores de CO₂',
    href: '/productos/extintor-co2/',
    image: f['extintor-co2'].image!,
    imageAlt: f['extintor-co2'].imageAlt!,
    badge: 'Sin residuo',
    description: 'Para tableros, sites y electrónica. Portátil y móvil sobre ruedas.',
    specs: [
      { label: 'Clases', value: 'B · C' },
      { label: 'Capacidad', value: '2.27 a 45.4 kg' },
      { label: 'Norma', value: 'NOM-102-STPS' },
    ],
    ctaLabel: f['extintor-co2'].ctaLabel,
  },
  {
    title: 'Extintores clase K',
    href: '/productos/extintor-clase-k/',
    image: f['extintor-clase-k'].image!,
    imageAlt: f['extintor-clase-k'].imageAlt!,
    badge: 'Cocinas comerciales',
    description: 'Químico húmedo para aceites y grasas de cocción. Complementa la campana.',
    specs: [
      { label: 'Clase', value: 'K' },
      { label: 'Capacidad', value: '4 a 9.46 L' },
      { label: 'Referencia', value: 'NFPA 10' },
    ],
    ctaLabel: f['extintor-clase-k'].ctaLabel,
  },
  {
    title: 'Extintores de agua y espuma',
    href: '/productos/extintor-agua/',
    image: f['extintor-agua'].image!,
    imageAlt: f['extintor-agua'].imageAlt!,
    badge: 'Agua · Espuma AFFF',
    description: 'Agua a presión para sólidos, nebulizada junto a equipo eléctrico y espuma.',
    specs: [
      { label: 'Tipos', value: 'Agua, niebla, AFFF' },
      { label: 'Capacidad', value: '6 a 50 L' },
      { label: 'Norma', value: 'NOM-103-STPS' },
    ],
    ctaLabel: f['extintor-agua'].ctaLabel,
  },
  {
    title: 'Extintores de agente limpio',
    href: '/productos/extintor-agente-limpio/',
    image: f['extintor-agente-limpio'].image!,
    imageAlt: f['extintor-agente-limpio'].imageAlt!,
    badge: 'Clases B · C',
    description: 'Sin residuo ni conductividad, para sites y equipo electrónico sensible.',
    specs: [
      { label: 'Agentes', value: 'Halotron I · FE-36' },
      { label: 'Capacidad', value: '1.1 a 7 kg' },
      { label: 'Clase A', value: 'Desde 4.3 kg' },
    ],
    ctaLabel: f['extintor-agente-limpio'].ctaLabel,
  },
  {
    title: 'Recarga de extintores',
    href: '/servicios/mantenimiento/',
    image: '/images/servicios/inspeccion-recarga-extintores.avif',
    imageAlt: 'Recarga y mantenimiento de extintores en taller de servicio',
    badge: 'Servicio NOM-154',
    description: 'Mantenimiento anual, recarga tras cualquier uso y prueba hidrostática.',
    specs: [
      { label: 'Periodicidad', value: 'Al menos anual' },
      { label: 'Norma', value: 'NOM-154-SCFI' },
      { label: 'Evidencia', value: 'Etiqueta nueva' },
    ],
    ctaLabel: 'Recarga de extintores',
  },
  {
    title: 'Soportes y gabinetes para extintor',
    href: '/productos/soportes-accesorios-extintor/',
    image: '/images/productos/extintor-oficina-gabinete.avif',
    imageAlt: 'Extintor montado en gabinete dentro de una oficina',
    badge: 'Instalación',
    description: 'Soportes de pared y vehículo, y gabinetes para tener el extintor a la mano.',
    specs: [
      { label: 'Montaje', value: 'Pared o vehículo' },
      { label: 'Altura máx.', value: '1.50 m' },
      { label: 'Norma', value: 'NOM-002-STPS' },
    ],
    ctaLabel: 'Soportes para extintor',
  },
  {
    title: '¿Cuántos extintores necesito?',
    href: '/herramientas/cuantos-extintores-necesito/',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Levantamiento de riesgo de incendio en una planta',
    badge: 'Calculadora gratis',
    description: 'Calcula el mínimo que pide la NOM-002 según superficie y nivel de riesgo.',
    specs: [
      { label: 'Ordinario', value: '1 por 300 m²' },
      { label: 'Riesgo alto', value: '1 por 200 m²' },
      { label: 'Recorrido', value: '23 m, clase A' },
    ],
    ctaLabel: 'Cuántos extintores',
  },
];
