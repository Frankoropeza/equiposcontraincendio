// ============================================================================
// src/data/productos.ts — Datos de la L2 /productos/.
// ----------------------------------------------------------------------------
// PATRÓN L2 (homologado con L1 el 2026-09-10): la página .astro queda fina —
// solo composición de componentes— y TODO el contenido vive aquí, igual que
// `src/data/home.ts` para el index. Al añadir una L2 nueva, se crea su
// `src/data/<seccion>.ts` y se repite el esqueleto:
//
//   Hero → SectionMenu → TrustBar → vitrina de tarjetas → módulos
//   CategoryFeature → listado propio → RiskGuide → NormsTable → ProcessSteps
//   → CompanyAbout → RelatedLinks → FAQ + Contacto
//
// REGLA DE COPY: el contenido de una L2 NUNCA se copia del index. Los mismos
// componentes, el mismo diseño, pero con el ángulo de esa sección. El index
// responde «¿con quién me equipo?»; esta L2 responde «¿cuál compro, de qué
// capacidad y cuántos?». Duplicar el copy canibalizaría las dos páginas.
// ============================================================================

export type RiskRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export type NormRow = { norma: string; alcance: string; aplica: string };
export type Step = { num: string; title: string; desc: string };
export type Pillar = { title: string; desc: string };

// ── Guía de selección ────────────────────────────────────────────────────────
// Ángulo propio de la L2: el index clasifica el INMUEBLE por nivel de riesgo;
// aquí se elige el AGENTE y la CAPACIDAD según lo que puede arder. Es la duda
// literal del comprador delante del catálogo.
// Datos verificados contra el texto de la NOM-002-STPS-2010: distancia máxima
// de recorrido 23 m para clases A, C y D; 15 m (riesgo ordinario) o 10 m
// (riesgo alto) para clase B; 10 m para clase K. Densidad: un extintor por
// cada 300 m² en riesgo ordinario y por cada 200 m² en riesgo alto, colocado a
// no más de 1.50 m del piso a la parte más alta del equipo.
export const productosRiskRows: RiskRow[] = [
  {
    nivel: 'Oficina y consultorio',
    ejemplos: 'Papel, mobiliario, equipo de cómputo y contactos',
    minimo: 'PQS ABC de 4.5 a 6 kg',
    complementos: 'CO₂ junto al rack o el no-break; recorrido máximo de 23 m',
  },
  {
    nivel: 'Comercio y escuela',
    ejemplos: 'Mercancía, mobiliario, almacén pequeño y tablero',
    minimo: 'PQS ABC de 6 kg',
    complementos: 'Señalización NOM-003 y lámpara de emergencia por salida',
  },
  {
    nivel: 'Cocina comercial',
    ejemplos: 'Aceites y grasas de cocción bajo campana',
    minimo: 'Clase K de químico húmedo, 6 L',
    complementos: 'PQS ABC en el pasillo; el recorrido a la clase K no pasa de 10 m',
  },
  {
    nivel: 'Cuarto eléctrico y site',
    ejemplos: 'Tableros energizados, UPS, servidores y cableado',
    minimo: 'CO₂ de 4.5 a 9 kg',
    complementos: 'Agente limpio si el equipo no tolera residuo ni descarga fría',
  },
  {
    nivel: 'Bodega y nave industrial',
    ejemplos: 'Tarima, cartón, plástico y montacargas',
    minimo: 'PQS ABC de 9 kg y móviles de 50 kg en pasillos',
    complementos: 'En riesgo alto la densidad sube a un extintor por cada 200 m²',
  },
  {
    nivel: 'Taller con líquidos inflamables',
    ejemplos: 'Solventes, pinturas, aceites y combustible',
    minimo: 'PQS BC o espuma, portátil y móvil',
    complementos: 'Clase B: el recorrido baja a 15 m, y a 10 m si el riesgo es alto',
  },
];

// ── Respaldo normativo ───────────────────────────────────────────────────────
// Ángulo propio: el index lista qué normas aplican al CENTRO DE TRABAJO; aquí
// se dice qué norma certifica CADA FAMILIA del catálogo, que es lo que revisa
// el inspector cuando levanta el equipo y busca la contraseña oficial.
// Las NFPA se rotulan como referencia técnica: no son ley federal en México,
// aunque la aseguradora o el corporativo sí puedan exigirlas.
export const productosNormRows: NormRow[] = [
  { norma: 'NOM-002-STPS-2010', alcance: 'Obliga la revisión mensual y el mantenimiento anual del extintor (7.18), la densidad por superficie y la altura máxima de 1.50 m', aplica: 'Todo el equipo instalado en un centro de trabajo' },
  { norma: 'NOM-154-SCFI-2005', alcance: 'Procedimiento de servicio, recarga y prueba hidrostática del cilindro cada 5 años (5.6)', aplica: 'Extintores portátiles y móviles' },
  { norma: 'NOM-106-SCFI-2017', alcance: 'Contraseña oficial del producto certificado: es el sello que acredita el extintor ante la autoridad', aplica: 'Extintores que se venden en México' },
  { norma: 'NOM-003-SEGOB-2011', alcance: 'Color, forma y símbolo de las señales de protección civil, incluidas las fotoluminiscentes', aplica: 'Señalización y rutas de evacuación' },
  { norma: 'NOM-026-STPS-2008', alcance: 'Colores de seguridad e identificación de fluidos en tubería', aplica: 'Red hidráulica y tubería de la instalación' },
  { norma: 'NFPA 72 (ref.)', alcance: 'Diseño, instalación y prueba del sistema de detección y alarma', aplica: 'Detectores, paneles, estaciones y sirenas' },
  { norma: 'NFPA 13 (ref.)', alcance: 'Cálculo hidráulico y densidad de descarga de rociadores automáticos', aplica: 'Sistemas fijos de supresión' },
  { norma: 'NFPA 14 (ref.)', alcance: 'Columnas de agua, gabinetes, hidrantes y conexiones siamesas', aplica: 'Red hidráulica contra incendio' },
];

// ── Cómo se compra ───────────────────────────────────────────────────────────
// Ángulo propio: el index describe la RELACIÓN con el proveedor de principio a
// fin; aquí se describe la COMPRA concreta, que es la fricción de esta página
// (no hay carrito ni precios públicos, así que hay que explicar el camino).
export const productosSteps: Step[] = [
  { num: '01', title: 'Dinos qué inmueble proteges', desc: 'Giro, superficie y niveles por WhatsApp. Con eso se dimensiona el equipo.' },
  { num: '02', title: 'Revisamos el riesgo', desc: 'Identificamos lo que puede arder y el grado de riesgo que corresponde al inmueble.' },
  { num: '03', title: 'Te decimos qué y cuánto', desc: 'Lista con agente, capacidad y cantidad mínima que pide la norma para tu caso.' },
  { num: '04', title: 'Cotización por alcance', desc: 'Precio por pieza y volumen, con existencia real; si aplica, se propone por fases.' },
  { num: '05', title: 'Confirmas el equipo', desc: 'Aclaramos la propuesta y dejamos definido el producto, la cantidad y el servicio incluido.' },
  { num: '06', title: 'Entrega en sitio', desc: 'Entregamos el equipo y, cuando aplica, coordinamos su instalación y señalización.' },
  { num: '07', title: 'Instalación conforme', desc: 'Montamos el equipo a la altura y distancia de recorrido que corresponden.' },
  { num: '08', title: 'Papel y vigencia', desc: 'Entregamos ficha técnica y constancia, con aviso de recarga o prueba hidrostática.' },
];

// ── Sobre el catálogo ────────────────────────────────────────────────────────
// Ángulo propio: el index dice QUIÉNES SOMOS; aquí se explica CÓMO ES ESTE
// CATÁLOGO y por qué no tiene precios a la vista, que es la objeción número uno.
export const productosCompany = {
  que: {
    title: 'Qué encuentras aquí',
    body: [
      'Ocho familias de equipo contra incendio para cubrir un inmueble completo: extintores portátiles, detección y alarmas, hidrantes y mangueras, señalización de emergencia, sistemas fijos de supresión, botiquines y equipo de brigada, protección personal y las refacciones para mantenerlo todo vigente.',
      'Las fichas publican lo de mayor rotación, pero el surtido es más amplio: se manejan más marcas, capacidades y equipo especializado bajo pedido. Si no ves lo tuyo, se cotiza igual.',
    ],
  },
  como: {
    title: 'Cómo se cotiza',
    pillars: [
      { title: 'Sin carrito, con asesoría', desc: 'El equipo correcto depende del riesgo del inmueble, así que primero se revisa el caso y luego se cotiza.' },
      { title: 'El precio depende del volumen', desc: 'Cambia por cantidad y por si incluye instalación o servicio; por eso no hay una lista pública que engañe.' },
      { title: 'Equipo certificado con su papel', desc: 'Cada entrega llega con ficha técnica y la documentación que pide tu expediente ante Protección Civil y STPS.' },
    ],
  },
};

// ── Enlaces relacionados (hub-and-spoke) ─────────────────────────────────────
// Cierra la L2 repartiendo autoridad hacia las otras secciones del sitio.
export const productosRelated = [
  { label: 'Servicios contra incendio', href: '/servicios/', desc: 'Instalación, mantenimiento, recarga e inspección del equipo.' },
  { label: 'Cobertura CDMX y Edomex', href: '/cobertura/', desc: 'Zonas donde entregamos, instalamos y damos servicio.' },
  { label: 'Calculadora de extintores', href: '/herramientas/cuantos-extintores-necesito/', desc: 'Cuántos necesitas según superficie y nivel de riesgo.' },
  { label: 'Formatos descargables', href: '/plantillas/', desc: 'Bitácora de revisión, acta de simulacro y censo de brigada.' },
];
