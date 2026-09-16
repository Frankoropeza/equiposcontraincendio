// ============================================================================
// src/data/cobertura.ts — Datos de la L2 /cobertura/.
// ----------------------------------------------------------------------------
// Tercera L2 llevada al PATRÓN fijado en `src/data/productos.ts`.
//
// ÁNGULO DE ESTA L2 — cada página responde una pregunta distinta:
//   · index         «¿con quién me equipo?»
//   · /productos/   «¿cuál compro y de qué capacidad?»
//   · /servicios/   «¿qué me toca y cada cuándo?»
//   · /cobertura/   «¿ME ATIENDEN EN MI ZONA, con qué alcance y cómo se agenda?»
//
// REGLA DE HONESTIDAD: aquí no se prometen tiempos de respuesta. La agenda
// depende del día y de la ubicación, así que la tabla dice CÓMO se coordina y
// qué incluye cada zona, no «llegamos en X horas». Un dato inventado en esta
// página es el que más caro sale.
//
// Contrato de contenido de los módulos: label ≤ 27 caracteres, desc ≤ 78.
// ============================================================================

export type Feature = { label: string; desc: string };
export type GalleryImage = { src: string; alt: string };

// ── Imagen de la tarjeta por zona ────────────────────────────────────────────
// Sustituyen a `zonas/cobertura-cdmx.svg` y `cobertura-edomex.svg`, que eran el
// cartel «Imagen próximamente». No hay foto de un mapa, así que cada zona se
// ilustra con trabajo real del tipo de inmueble que predomina ahí: oficinas en
// la ciudad, nave y almacén en la zona conurbada.
// Además de la imagen, cada zona trae su propio badge, blurb y anchor text: la
// página los generaba con una plantilla (`Servicio en sitio en ${label}: …`),
// así que las dos tarjetas decían exactamente lo mismo y el botón repetía un
// genérico. El anchor text sigue la regla del sitio: keyword del destino.
export const zoneCard: Record<string, { src: string; alt: string; badge: string; blurb: string; cta: string }> = {
  cdmx: {
    src: '/images/servicios/instalacion-deteccion-alarma.avif',
    alt: 'Instalación de detección y alarma en un edificio de oficinas de la CDMX',
    badge: 'Las 16 alcaldías',
    blurb: 'Servicio en sitio en las 16 alcaldías, con el expediente en el formato que pide Protección Civil de la ciudad.',
    cta: 'Cobertura en CDMX',
  },
  edomex: {
    src: '/images/servicios/instalacion-equipo-almacen.avif',
    alt: 'Instalación de equipo contra incendio en un almacén del Estado de México',
    badge: 'Zona conurbada',
    blurb: 'Servicio en sitio en los municipios conurbados, con enfoque en nave, bodega y planta industrial.',
    cta: 'Cobertura en Edomex',
  },
};

// ── Módulos de zona ──────────────────────────────────────────────────────────
export type ZoneFeature = {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  features: Feature[];
  ctaLabel: string;
  ctaMsg: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  imgMain: GalleryImage;
  imgA: GalleryImage;
  imgB: GalleryImage;
};

export const zoneFeatures: ZoneFeature[] = [
  {
    id: 'cdmx',
    eyebrow: 'Cobertura · Ciudad de México · Servicio en sitio',
    title: 'Venta y recarga de extintores en',
    titleAccent: 'toda la Ciudad de México',
    description:
      'Operamos en las 16 alcaldías con visita en sitio para venta de extintores, recarga, mantenimiento preventivo, instalación e inspección. La particularidad de la CDMX es el trámite: el Programa Interno se ingresa en plataforma digital y lo presenta un tercero acreditado.',
    features: [
      { label: 'Las 16 alcaldías', desc: 'De Álvaro Obregón a Xochimilco, con visita y entrega en sitio.' },
      { label: 'Servicio presencial', desc: 'Instalación, mantenimiento, inspección y capacitación en tu inmueble.' },
      { label: 'Entrega con factura', desc: 'Extintores, detección, hidrantes y señalización con ficha técnica.' },
      { label: 'Expediente para PC-CDMX', desc: 'Constancias y evidencia con el formato que pide la alcaldía.' },
    ],
    ctaLabel: 'Cotizar en CDMX',
    ctaMsg: 'Hola, estoy en la Ciudad de México y quiero cotizar equipo y/o servicio contra incendio.',
    ctaSecondaryLabel: 'Cobertura en CDMX',
    ctaSecondaryHref: '/cobertura/cdmx/',
    imgMain: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Técnico revisando equipo contra incendio en un inmueble de la CDMX' },
    imgA: { src: '/images/servicios/integracion-sistemas-contra-incendio.avif', alt: 'Red contra incendio instalada en un pasillo de oficinas' },
    imgB: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Mantenimiento y recarga de extintores para clientes de la ciudad' },
  },
  {
    id: 'edomex',
    eyebrow: 'Cobertura · Estado de México · Servicio en sitio',
    title: 'Extintores y mantenimiento en la zona',
    titleAccent: 'metropolitana y EdoMex',
    description:
      'Atendemos los municipios conurbados con servicio en sitio de mantenimiento de extintores, recarga e instalación, donde predominan naves, bodegas y plantas. Aquí el Programa Interno es un trámite presencial ante el estado, obligatorio para inmuebles de riesgo mediano y alto.',
    features: [
      { label: 'Municipios conurbados', desc: 'Naucalpan, Tlalnepantla, Ecatepec, Neza, Cuautitlán y alrededores.' },
      { label: 'Servicio presencial', desc: 'Instalación, mantenimiento, inspección y capacitación en tu inmueble.' },
      { label: 'Enfoque industrial', desc: 'Red hidráulica, rociadores y equipo para nave, bodega y planta.' },
      { label: 'Trámite ante el estado', desc: 'Evidencia para el Programa Interno con la homoclave del RETyS.' },
    ],
    ctaLabel: 'Cotizar en EdoMex',
    ctaMsg: 'Hola, estoy en el Estado de México y quiero cotizar equipo y/o servicio contra incendio.',
    ctaSecondaryLabel: 'Cobertura en EdoMex',
    ctaSecondaryHref: '/cobertura/edomex/',
    imgMain: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Inspección de equipo contra incendio en una nave del Estado de México' },
    imgA: { src: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif', alt: 'Revisión del tablero de alarma en una planta industrial' },
    imgB: { src: '/images/servicios/prueba-mangueras-contra-incendio.avif', alt: 'Prueba de mangueras contra incendio en patio de maniobras' },
  },
];

// ── Alcance por zona ─────────────────────────────────────────────────────────
// El bloque de tabla de esta L2. No promete tiempos: dice qué incluye cada zona
// y cómo se coordina, e —igual de importante— dónde NO hay servicio en sitio.
export type CoverageRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export const coberturaAlcance: CoverageRow[] = [
  {
    nivel: 'Ciudad de México',
    ejemplos: 'Las 16 alcaldías',
    minimo: 'Venta, instalación, mantenimiento, inspección y capacitación',
    complementos: 'Visita agendada por WhatsApp según disponibilidad',
  },
  {
    nivel: 'Zona metropolitana',
    ejemplos: 'Naucalpan, Tlalnepantla, Ecatepec, Neza, Cuautitlán y alrededores',
    minimo: 'Venta, instalación, mantenimiento, inspección y capacitación',
    complementos: 'Visita agendada por WhatsApp según disponibilidad',
  },
  {
    nivel: 'Resto del Estado de México',
    ejemplos: 'Municipios fuera del área conurbada',
    minimo: 'Servicio en sitio sujeto a agenda y a la ubicación exacta',
    complementos: 'Se confirma cobertura y condiciones antes de cotizar',
  },
  {
    nivel: 'Otras entidades',
    ejemplos: 'Fuera de CDMX y Estado de México',
    minimo: 'Envío de equipo con factura y ficha técnica',
    complementos: 'Sin servicio en sitio; instalación y mantenimiento se consultan',
  },
];

// ── Qué pide cada autoridad ──────────────────────────────────────────────────
// Ángulo propio de esta L2: las NOM son federales e iguales en las dos
// entidades, pero el Programa Interno de Protección Civil es LOCAL y cambia.
// Datos del trámite verificados en la fuente oficial de cada entidad.
export type NormRow = { norma: string; alcance: string; aplica: string };
export const coberturaNormRows: NormRow[] = [
  { norma: 'NOM-002-STPS-2010', alcance: 'Prevención y protección contra incendios en centros de trabajo: densidad de equipo, revisión mensual y mantenimiento anual', aplica: 'Federal · igual en CDMX y Edomex' },
  { norma: 'NOM-154-SCFI-2005', alcance: 'Servicio, recarga y prueba hidrostática del extintor', aplica: 'Federal · igual en CDMX y Edomex' },
  { norma: 'NOM-003-SSPC-2011', alcance: 'Señales y avisos de protección civil', aplica: 'Federal · igual en CDMX y Edomex' },
  { norma: 'Programa Interno de PC · CDMX', alcance: 'Se ingresa en la plataforma digital de la ciudad, con validación por Llave CDMX; lo presenta un tercero acreditado del ROPC/ROPCI', aplica: 'Ciudad de México' },
  { norma: 'Programa Interno de PC · Edomex', alcance: 'Trámite presencial con homoclave del RETyS, obligatorio para inmuebles de riesgo mediano y alto', aplica: 'Estado de México' },
  { norma: 'Verificación municipal o de alcaldía', alcance: 'Revisa el equipo instalado y el expediente que acredita su vigencia', aplica: 'Local · cambia por demarcación' },
];

// ── Cómo se agenda una visita ────────────────────────────────────────────────
export type Step = { num: string; title: string; desc: string };
export const coberturaSteps: Step[] = [
  { num: '01', title: 'Dinos dónde estás', desc: 'Alcaldía o municipio y tipo de inmueble; así ubicamos la ruta de atención.' },
  { num: '02', title: 'Confirmamos cobertura', desc: 'Te decimos de frente si hay servicio en sitio en tu ubicación o si conviene resolverlo con envío de equipo.' },
  { num: '03', title: 'Definimos el alcance', desc: 'Acordamos si será suministro, instalación, mantenimiento, inspección o capacitación.' },
  { num: '04', title: 'Agendamos día y hora', desc: 'Coordinamos por WhatsApp según la disponibilidad real de agenda.' },
  { num: '05', title: 'Visita y servicio', desc: 'El técnico llega con los extintores, el equipo y la herramienta; si algo va a taller, se avisa antes.' },
  { num: '06', title: 'Trabajo en sitio', desc: 'Se realiza el servicio acordado en tu inmueble y se revisan los puntos del alcance.' },
  { num: '07', title: 'Documentación local', desc: 'Entregamos la evidencia con el formato que pide tu alcaldía o municipio.' },
  { num: '08', title: 'Seguimiento de vigencia', desc: 'Queda identificado cuándo toca la siguiente revisión o servicio.' },
];

// ── Sobre la cobertura ───────────────────────────────────────────────────────
export const coberturaCompany = {
  que: {
    title: 'Qué significa servicio en sitio',
    body: [
      'Servicio en sitio quiere decir que el técnico va a tu inmueble: instala, da mantenimiento y recarga a tus extintores, inspecciona, capacita a la brigada para responder a un conato de incendio y entrega el equipo —extintores de polvo químico seco y de CO₂, detectores de humo, señalamientos, gabinetes y soportes— con su factura y su ficha técnica. No es asesoría a distancia ni envío por paquetería.',
      'Trabajamos en la Ciudad de México, los municipios conurbados del Estado de México y el resto del estado según ubicación. Fuera de esas zonas coordinamos envío de equipo, pero lo decimos claro antes de cotizar.',
    ],
  },
  como: {
    title: 'Cómo se coordina',
    pillars: [
      { title: 'Cobertura confirmada antes', desc: 'Primero se confirma si llegamos a tu ubicación; después se cotiza.' },
      { title: 'Agenda real, no promesas', desc: 'La fecha se fija con la disponibilidad del día, no con un tiempo de respuesta inventado.' },
      { title: 'El papel que pide tu demarcación', desc: 'La norma es federal, pero el Programa Interno cambia entre CDMX y Edomex.' },
    ],
  },
};

// ── Enlaces relacionados ─────────────────────────────────────────────────────
export const coberturaRelated = [
  { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'Requisitos del trámite en CDMX y Estado de México.' },
  { label: 'Servicios contra incendio', href: '/servicios/', desc: 'Instalación, mantenimiento, inspección y capacitación.' },
  { label: 'Equipos contra incendios', href: '/productos/', desc: 'Extintores, detección, hidrantes y señalización.' },
  { label: 'Contacto directo', href: '/contacto/', desc: 'Teléfono, WhatsApp y domicilio de oficinas.' },
];
