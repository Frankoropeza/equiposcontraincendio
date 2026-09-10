// ============================================================================
// src/data/gestion-documental.ts — L3 /servicios/gestion-documental/.
// ----------------------------------------------------------------------------
// PATRÓN L3 canónico de servicio (contrato src/data/l3-types.ts, lo pinta
// src/components/ServiceL3.astro). Sexta L3 de servicios, 2026-09-10.
//
// ÁNGULO — «¿qué papeles necesito para que mi equipo cuente en una
// verificación, quién los genera, cuánto se guardan y qué NO cubre este
// servicio?». La vitrina va por DOCUMENTO del expediente y el diferenciador es
// decir con claridad qué no hacemos (no sustituimos el Programa Interno ni
// fabricamos historial hacia atrás).
//
// FUENTES (verificadas en el sitio): src/content/servicios/gestion-documental.md;
// /blog/mantenimiento-recarga-extintores-nom/ (NOM-002: revisión mensual con
// registro 7.2 y 7.3, programa anual de revisión y pruebas 7.4, registros 3
// años; NOM-154: etiqueta, collarín, dictamen, orden de servicio foliada que el
// taller conserva ≥ 2 años); /blog/brigada-contra-incendios/ (capacitación
// anual, simulacros 5.7, DC-3 sin vigencia); /blog/que-revisa-proteccion-civil/
// (Programa Interno con carta de corresponsabilidad del Tercero Acreditado,
// póliza de RC en mediano y alto riesgo, LGIRPC CDMX art. 62; 10 días hábiles
// para observaciones en CDMX).
// ============================================================================
import type { ServiceL3Data, Tarjeta } from './l3-types';

export const docTarjetas: Tarjeta[] = [
  {
    title: 'Inventario del equipo',
    href: '#doc-inventario',
    image: '/images/general/hero-proveedor-equipo-contra-incendio.avif',
    imageAlt: 'Técnico registrando el equipo contra incendio de un inmueble',
    badge: 'Base del expediente',
    description: 'Qué equipo hay, dónde está y cuándo vence cada pieza del inmueble.',
    specs: [
      { label: 'Registra', value: 'Tipo y ubicación' },
      { label: 'Vencimientos', value: 'Por equipo' },
      { label: 'Orden', value: 'Por área' },
    ],
    ctaLabel: 'Inventario',
  },
  {
    title: 'Evidencia de servicio',
    href: '#doc-servicio',
    image: '/images/servicios/etiquetado-inspeccion-extintor.avif',
    imageAlt: 'Etiqueta de servicio colocada en un extintor',
    badge: 'NOM-154-SCFI',
    description: 'Etiquetas, collarines y órdenes de servicio de cada extintor, en orden.',
    specs: [
      { label: 'Etiqueta', value: 'Con dictamen' },
      { label: 'Collarín', value: 'PQS con manómetro' },
      { label: 'Orden', value: 'Folio por servicio' },
    ],
    ctaLabel: 'Evidencia de servicio',
  },
  {
    title: 'Bitácora mensual',
    href: '#doc-bitacora',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión mensual de un extintor junto a gabinete e hidrante',
    badge: 'Revisión del personal',
    description: 'El registro de la revisión que hace tu personal cada mes, lista para usar.',
    specs: [
      { label: 'Quién', value: 'Tu personal' },
      { label: 'Norma', value: 'NOM-002-STPS' },
      { label: 'Se guarda', value: 'Tres años' },
    ],
    ctaLabel: 'Bitácora mensual',
  },
  {
    title: 'Programa anual',
    href: '#doc-programa',
    image: '/images/servicios/inspeccion-recarga-extintores.avif',
    imageAlt: 'Extintores en taller de servicio',
    badge: 'NOM-002, 7.4',
    description: 'El calendario de revisiones, mantenimientos y pruebas de todo el equipo.',
    specs: [
      { label: 'Incluye', value: 'Revisión y pruebas' },
      { label: 'Periodo', value: 'Anual' },
      { label: 'Evita', value: 'Vencimientos' },
    ],
    ctaLabel: 'Programa anual',
  },
  {
    title: 'Constancias del personal',
    href: '#doc-personal',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
    imageAlt: 'Capacitación de la brigada con extintores',
    badge: 'Brigada y simulacros',
    description: 'DC-3 de cada trabajador capacitado y actas de los simulacros realizados.',
    specs: [
      { label: 'DC-3', value: 'Por trabajador' },
      { label: 'Simulacros', value: 'Acta por ejercicio' },
      { label: 'Brigada', value: 'Censo por turno' },
    ],
    ctaLabel: 'Constancias',
  },
  {
    title: 'Bitácora de extintores',
    href: '/plantillas/bitacora-revision-extintores/',
    image: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif',
    imageAlt: 'Extintor y señalética de emergencia en muro de planta',
    badge: 'Formato gratis',
    description: 'El formato de revisión mensual, alineado a los puntos que pide la norma.',
    specs: [
      { label: 'Formato', value: 'Descargable' },
      { label: 'Para', value: 'Revisión mensual' },
      { label: 'Costo', value: 'Sin costo' },
    ],
    ctaLabel: 'Bitácora de extintores',
  },
  {
    title: 'Inspección y dictamen',
    href: '/servicios/inspeccion/',
    image: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif',
    imageAlt: 'Revisión del tablero de alarma contra incendio',
    badge: 'Primero, el estado real',
    description: 'Si no sabes qué equipo tienes ni qué venció, el expediente empieza aquí.',
    specs: [
      { label: 'Revisa', value: 'Todo el equipo' },
      { label: 'Entrega', value: 'Reporte priorizado' },
      { label: 'Sirve para', value: 'El inventario' },
    ],
    ctaLabel: 'Inspección y dictamen',
  },
  {
    title: 'Qué exige Protección Civil',
    href: '/proteccion-civil/',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Ruta de evacuación señalizada en nave industrial',
    badge: 'CDMX y Edomex',
    description: 'El trámite del Programa Interno y lo que revisa la autoridad local.',
    specs: [
      { label: 'Trámite', value: 'Programa Interno' },
      { label: 'CDMX', value: 'Tercero acreditado' },
      { label: 'Zonas', value: 'CDMX y Edomex' },
    ],
    ctaLabel: 'Protección Civil',
  },
];

export const gestionDocumentalL3: ServiceL3Data = {
  id: 'gestion-documental',
  path: '/servicios/gestion-documental/',
  seo: {
    title: 'Gestión documental contra incendio | Protección Civil y STPS',
    description:
      'Integramos el expediente contra incendio de tu inmueble en CDMX y Edomex: evidencia de servicio, bitácora, programa anual y constancias, listo para verificar.',
    serviceName: 'Gestión documental de protección contra incendio',
    serviceType: 'Integración del expediente de equipo contra incendio',
    image: '/images/servicios/etiquetado-inspeccion-extintor.avif',
  },
  breadcrumb: 'Gestión documental',
  wa: 'Hola, quiero ordenar el expediente de mi equipo contra incendio para Protección Civil y STPS. Mi inmueble es (giro y superficie):',
  menuCtaSub: 'Giro y superficie',
  hero: {
    badge: 'Expediente para Protección Civil y STPS · CDMX y Estado de México',
    title: 'Gestión documental',
    accent: 'contra incendio',
    subtitle:
      'Reunimos, ordenamos y mantenemos al día el expediente del equipo contra incendio de tu inmueble: evidencia de servicio, bitácora, programa anual y constancias, listos para una verificación.',
    descRight: [
      'En una verificación no solo se revisa el equipo: se pide el papel que demuestra que está vigente y que el personal está capacitado. Casi siempre ese papel existe, pero repartido entre tres proveedores, un cajón y el correo de alguien que ya no trabaja ahí.',
      'Aquí está qué lleva el expediente, quién genera cada documento, cuánto tiempo se guarda y qué no cubre este servicio. Escríbenos con el giro y la superficie para empezar por el inventario.',
    ],
    outlineText: 'Qué lleva el expediente',
  },
  pillars: [
    { icon: 'doc', title: 'Un solo expediente', desc: 'Todo el papel del equipo en un índice, sin importar quién lo generó.' },
    { icon: 'check', title: 'Sin historial inventado', desc: 'Lo que no existe se genera desde hoy, nunca hacia atrás.' },
    { icon: 'clock', title: 'Al día con cada servicio', desc: 'La evidencia se actualiza con cada mantenimiento, no la semana previa.' },
    { icon: 'shield', title: 'Con su fundamento', desc: 'Cada apartado del índice dice qué norma lo pide.' },
  ],
  vitrina: {
    id: 'que-lleva',
    eyebrow: 'Qué lleva el expediente',
    title: 'Cinco apartados,',
    titleAccent: 'un solo índice',
    desc: 'El expediente del equipo contra incendio se arma con documentos que ya existen o que se generan con cada servicio.',
    body: [
      'Ningún documento del expediente se «tramita» aparte: la etiqueta sale del mantenimiento, la constancia de la capacitación y el acta del simulacro. Lo que hacemos es reunirlos, ordenarlos y detectar lo que falta.',
      'Las cinco primeras fichas son los apartados del expediente. Las tres últimas: el formato de bitácora, la inspección para saber qué hay y lo que pide Protección Civil.',
    ],
    tarjetas: docTarjetas,
  },
  tablaPrincipal: {
    id: 'expediente',
    eyebrow: 'Documento por documento',
    title: 'Qué acredita cada documento',
    titleAccent: 'y quién lo genera',
    desc: 'Saber quién genera cada papel es lo que permite reponer el que falta.',
    body: [
      'Hay documentos que genera el proveedor con cada servicio, otros que genera tu personal cada mes y otros que emite un tercero. Ninguno se puede sustituir con otro.',
      'La última columna es la norma que lo pide: es la misma referencia que va en el índice del expediente.',
    ],
    columns: ['Documento', 'Qué acredita', 'Quién lo genera', 'Fundamento'],
    rows: [
      ['Inventario del equipo', 'Qué equipo hay, dónde y cuándo vence', 'Tu empresa, con nuestro apoyo', 'Base para cumplir la NOM-002'],
      ['Etiqueta y collarín', 'Que el extintor recibió servicio conforme a norma', 'El taller que da el servicio', 'NOM-154-SCFI-2005'],
      ['Orden de servicio foliada', 'Qué se le hizo a cada equipo y cuándo', 'El taller; la conserva al menos 2 años', 'NOM-154-SCFI-2005'],
      ['Bitácora de revisión mensual', 'Que tu personal revisa los extintores cada mes', 'Tu personal', 'NOM-002-STPS-2010, 7.2 y 7.3'],
      ['Programa anual de revisión y pruebas', 'Que el equipo tiene calendario de servicio', 'Tu empresa, con nuestro apoyo', 'NOM-002-STPS-2010, 7.4'],
      ['Constancias DC-3', 'La capacitación de cada trabajador', 'El agente capacitador', 'Formato de la STPS'],
      ['Actas de simulacro', 'Los ejercicios realizados y su resultado', 'Tu brigada', 'NOM-002-STPS-2010, 5.7'],
    ],
  },
  guia: {
    eyebrow: 'Lo que más falta',
    title: 'Los huecos que más encontramos',
    titleAccent: 'en un expediente',
    desc: 'Casi ningún expediente está vacío. Lo común es que tenga huecos que alguien va a preguntar.',
    body: [
      'Cada hueco tiene una forma correcta de reponerse y una forma que parece más rápida pero no resiste una verificación.',
      'La regla de fondo es una: el historial no se fabrica hacia atrás. Lo que falta se genera desde hoy y a partir de hoy cuenta.',
    ],
    columns: ['Hueco', 'Qué pasa en la verificación', 'Cómo se repone', 'Qué no hacer'],
    rows: [
      { nivel: 'Extintor sin etiqueta o sin dictamen', ejemplos: 'No hay evidencia de servicio', minimo: 'Mantenimiento conforme a la NOM-154', complementos: 'Comprar una calcomanía sin servicio detrás' },
      { nivel: 'Bitácora sin llenar', ejemplos: 'La revisión mensual no se puede acreditar', minimo: 'Formato y responsable desde este mes', complementos: 'Llenar de golpe los meses atrasados' },
      { nivel: 'Equipo sin ficha técnica', ejemplos: 'No se acredita qué equipo es', minimo: 'Pedir la ficha al fabricante o al proveedor', complementos: 'Usar la ficha de otro modelo' },
      { nivel: 'DC-3 de personal que ya no está', ejemplos: 'La brigada solo existe en el papel', minimo: 'Capacitar a quienes la integran hoy', complementos: 'Presentar constancias de exempleados' },
      { nivel: 'Simulacro sin acta', ejemplos: 'El ejercicio no se puede acreditar', minimo: 'Registrar el siguiente con su acta', complementos: 'Redactar actas de simulacros que no se hicieron' },
      { nivel: 'Papeles de tres proveedores', ejemplos: 'Nadie sabe qué vence ni cuándo', minimo: 'Un solo índice por equipo', complementos: 'Presentar la carpeta sin revisar' },
    ],
    note: 'Si un equipo no tiene documentación de origen, se documenta desde el servicio: al darle mantenimiento conforme a la NOM-154, genera su etiqueta y su collarín, que son evidencia válida a partir de esa fecha.',
    ctaLabel: 'Calcomanía sin servicio',
    ctaHref: '/blog/calcomania-sin-servicio-extintores-fraude/',
  },
  tabla2: {
    id: 'que-no-cubre',
    eyebrow: 'Con claridad',
    title: 'Qué integramos',
    titleAccent: 'y qué no sustituimos',
    desc: 'Ordenar el expediente del equipo no es lo mismo que hacer el Programa Interno de Protección Civil.',
    body: [
      'El Programa Interno es un documento formal con requisitos propios —análisis de riesgos, brigadas, simulacros, directorio— y en la Ciudad de México se integra con la carta de corresponsabilidad de un Tercero Acreditado.',
      'Lo que hacemos es la parte documental del equipo contra incendio, que es un insumo de ese programa.',
    ],
    columns: ['Documento', '¿Lo integramos?', 'Quién lo emite o firma'],
    rows: [
      ['Evidencia de servicio del equipo', 'Sí, reunida y ordenada por equipo', 'El taller que dio el servicio'],
      ['Bitácora mensual y programa anual', 'Sí, te los dejamos armados', 'Tu empresa'],
      ['Constancias DC-3 y actas de simulacro', 'Sí, integradas al expediente', 'El agente capacitador y tu brigada'],
      ['Programa Interno de Protección Civil', 'No lo sustituimos: es un insumo', 'En CDMX, con carta de corresponsabilidad de un Tercero Acreditado'],
      ['Póliza de responsabilidad civil', 'No', 'Tu aseguradora; en CDMX la piden a mediano y alto riesgo'],
    ],
  },
  modulos: [
    {
      id: 'doc-inventario',
      eyebrow: 'Inventario · Base del expediente',
      title: 'Inventario',
      titleAccent: 'del equipo',
      description:
        'Todo expediente empieza por saber qué hay. Levantamos o reconstruimos el inventario del equipo contra incendio del inmueble —tipo, capacidad, ubicación y fechas— para que cada documento tenga a qué equipo pegarse y cada vencimiento aparezca antes de que llegue.',
      features: [
        { label: 'Tipo y capacidad', desc: 'Cada equipo identificado por agente, capacidad y modelo.' },
        { label: 'Ubicación por área', desc: 'Dónde está cada pieza, en el mismo orden del recorrido.' },
        { label: 'Fechas clave', desc: 'Último servicio y última prueba hidrostática por equipo.' },
        { label: 'Lo que falta', desc: 'Equipo sin documento o documento sin equipo.' },
      ],
      ctaLabel: 'Cotizar expediente',
      ctaMsg: 'Hola, quiero ordenar el expediente de mi equipo contra incendio. ¿Por dónde empezamos?',
      ctaSecondaryLabel: 'Inspección y dictamen',
      ctaSecondaryHref: '/servicios/inspeccion/',
      imgMain: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Técnico registrando el equipo del inmueble' },
      imgA: { src: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif', alt: 'Recorrido de inventario del equipo' },
      imgB: { src: '/images/general/inventario-proveedor-equipo-contra-incendio.avif', alt: 'Inventario de extintores' },
    },
    {
      id: 'doc-servicio',
      eyebrow: 'Evidencia de servicio · NOM-154-SCFI-2005',
      title: 'Evidencia',
      titleAccent: 'de servicio',
      description:
        'Es lo primero que se revisa del papel: que cada extintor tenga su etiqueta con los datos que exige la NOM-154, incluido el número de dictamen del taller, su collarín cuando le toca y la orden de servicio que lo respalda. Reunimos esa evidencia de cualquier proveedor que la haya generado y la ordenamos por equipo.',
      features: [
        { label: 'Etiqueta completa', desc: 'Datos del taller, fecha y número de dictamen NOM-154.' },
        { label: 'Collarín', desc: 'En los PQS de presión contenida con manómetro.' },
        { label: 'Orden de servicio', desc: 'Folio, fecha, cliente, tipo y capacidad de cada equipo.' },
        { label: 'De cualquier proveedor', desc: 'La evidencia vale sin importar quién dio el servicio.' },
      ],
      ctaLabel: 'Cotizar expediente',
      ctaMsg: 'Hola, tengo documentos de servicio de varios proveedores y quiero ordenarlos.',
      ctaSecondaryLabel: 'Recarga de extintores',
      ctaSecondaryHref: '/servicios/mantenimiento/',
      imgMain: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Etiqueta de servicio en un extintor' },
      imgA: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Extintores en taller de servicio' },
      imgB: { src: '/images/servicios/prueba-hidrostatica-extintor.avif', alt: 'Prueba hidrostática de un extintor' },
    },
    {
      id: 'doc-bitacora',
      eyebrow: 'Bitácora mensual · NOM-002-STPS-2010',
      title: 'Bitácora',
      titleAccent: 'de revisión mensual',
      description:
        'La revisión mensual la hace tu personal y no la sustituye ningún proveedor. Lo que la vuelve evidencia es el registro: fecha, responsable, lo que se revisó, las anomalías y su seguimiento. Te dejamos la bitácora armada con los puntos que pide la norma y un responsable asignado.',
      features: [
        { label: 'Puntos de la norma', desc: 'Ubicación, acceso, seguro, manómetro, daños y etiqueta.' },
        { label: 'Responsable', desc: 'Una persona asignada que firma cada mes.' },
        { label: 'Anomalías', desc: 'Qué se encontró y qué se hizo al respecto.' },
        { label: 'Tres años', desc: 'La NOM-002 pide conservar los registros ese tiempo.' },
      ],
      ctaLabel: 'Cotizar expediente',
      ctaMsg: 'Hola, necesito organizar la bitácora de revisión mensual de mis extintores.',
      ctaSecondaryLabel: 'Bitácora de extintores',
      ctaSecondaryHref: '/plantillas/bitacora-revision-extintores/',
      imgMain: { src: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif', alt: 'Revisión mensual de un extintor' },
      imgA: { src: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif', alt: 'Extintor en muro de planta' },
      imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Lectura de la etiqueta del extintor' },
    },
    {
      id: 'doc-programa',
      eyebrow: 'Programa anual · NOM-002-STPS-2010, 7.4',
      title: 'Programa anual',
      titleAccent: 'de revisión y pruebas',
      description:
        'El programa anual pone fecha a todo lo que el equipo necesita durante el año: mantenimiento de extintores, prueba hidrostática del que le toca, revisión de la red hidráulica y de la detección. Con él, el vencimiento no llega por sorpresa a mitad de una verificación.',
      features: [
        { label: 'Todo el equipo', desc: 'Extintores, detección, red hidráulica y señalización.' },
        { label: 'Con fecha', desc: 'Cada servicio agendado antes de que venza.' },
        { label: 'Prueba hidrostática', desc: 'Los cilindros que cumplen 5 años, identificados.' },
        { label: 'Aviso previo', desc: 'Te avisamos cuándo toca cada servicio.' },
      ],
      ctaLabel: 'Cotizar expediente',
      ctaMsg: 'Hola, quiero armar el programa anual de mantenimiento de mi equipo contra incendio.',
      ctaSecondaryLabel: 'Programa de mantenimiento',
      ctaSecondaryHref: '/blog/programa-mantenimiento-contra-incendio/',
      imgMain: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Mantenimiento programado de extintores' },
      imgA: { src: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif', alt: 'Revisión de un gabinete de manguera' },
      imgB: { src: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif', alt: 'Revisión del tablero de alarma' },
    },
    {
      id: 'doc-personal',
      eyebrow: 'Constancias del personal · DC-3 y simulacros',
      title: 'Constancias',
      titleAccent: 'del personal',
      description:
        'La otra mitad del expediente no es del equipo sino de las personas: las constancias DC-3 de quienes se capacitaron, el censo de la brigada por turno y el acta de cada simulacro. Las integramos al mismo índice y te decimos cuáles corresponden a personal que ya no está.',
      features: [
        { label: 'DC-3 por trabajador', desc: 'Firmada por el agente capacitador que impartió el curso.' },
        { label: 'Censo de brigada', desc: 'Quién integra cada brigada y en qué turno.' },
        { label: 'Actas de simulacro', desc: 'Una por ejercicio, con participantes y resultados.' },
        { label: 'Personal vigente', desc: 'Constancias de quien sigue en la brigada, no de exempleados.' },
      ],
      ctaLabel: 'Cotizar expediente',
      ctaMsg: 'Hola, quiero integrar las constancias de capacitación y simulacros a mi expediente.',
      ctaSecondaryLabel: 'Capacitación DC-3',
      ctaSecondaryHref: '/servicios/capacitacion-dc3/',
      imgMain: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Capacitación de la brigada' },
      imgA: { src: '/images/casos/entrega-servicio-equipo-contra-incendio.avif', alt: 'Entrega de constancias a la brigada' },
      imgB: { src: '/images/showcase/equipo-proteccion-bomberos-epp.avif', alt: 'Equipo de protección de la brigada' },
    },
  ],
  decision: {
    id: 'por-donde-empezar',
    eyebrow: 'Por dónde empezar',
    title: 'Qué hacemos primero',
    titleAccent: 'según tu situación',
    desc: 'El orden cambia si tienes una verificación encima o si estás empezando de cero.',
    body: [
      'Con observaciones de una verificación en la Ciudad de México, el plazo para ofrecer pruebas es de 10 días hábiles desde el acta: ahí se ataca primero lo observado.',
      'Sin prisa, conviene empezar por el inventario: sin él, cualquier carpeta es una suma de papeles sueltos.',
    ],
    columns: ['Tu situación', 'Qué hacemos primero', 'Qué recibes'],
    rows: [
      ['Sin expediente', 'Inventario del equipo y de los documentos que existan', 'Índice con lo que hay y lo que falta'],
      ['Papeles de varios proveedores', 'Ordenar por equipo y detectar vencimientos', 'Expediente único con su programa anual'],
      ['Verificación programada', 'Lo que el verificador revisa primero: evidencia de servicio y bitácora', 'Expediente listo para presentar'],
      ['Con observaciones en CDMX', 'Lo observado, dentro de los 10 días hábiles del acta', 'Evidencia para acreditar la corrección'],
    ],
    ctaLabel: 'Inspección y dictamen',
    ctaHref: '/servicios/inspeccion/',
  },
  proceso: {
    eyebrow: 'Cómo lo hacemos',
    title: 'Del cajón',
    titleAccent: 'al expediente al día',
    desc: 'La misma secuencia para una oficina que para un complejo con varios edificios.',
    body: [
      'El paso que más cuesta es el cuarto: reponer lo que falta de la forma correcta, generando evidencia nueva y nunca historial hacia atrás.',
      'Una vez armado, el expediente se mantiene con dos cosas: la bitácora que llena tu personal y el programa que agenda los servicios.',
    ],
    steps: [
      { num: '01', title: 'Inventario documental', desc: 'Qué documentos existen, de qué equipo y de qué proveedor, y cuáles vencieron.' },
      { num: '02', title: 'Recopilación', desc: 'Fichas técnicas, constancias de servicio y de capacitación, actas de simulacro.' },
      { num: '03', title: 'Orden por equipo', desc: 'Cada documento ligado a su equipo, en un índice con su fundamento.' },
      { num: '04', title: 'Reposición', desc: 'Lo que falta se genera desde hoy: servicio, ficha del fabricante o capacitación.' },
      { num: '05', title: 'Programa y bitácora', desc: 'Calendario anual y bitácora mensual armados para mantenerlo al día.' },
    ],
  },
  normas: {
    eyebrow: 'Normatividad',
    title: 'Qué norma pide',
    titleAccent: 'cada documento',
    desc: 'El índice del expediente sigue la misma estructura que las normas que lo exigen.',
    body: [
      'La NOM-002 pide los registros del patrón; la NOM-154, la evidencia del taller; la STPS, el formato de capacitación. La ley local de protección civil agrega el Programa Interno.',
      'Conocer el fundamento de cada papel es lo que permite defenderlo en una verificación.',
    ],
    columns: ['Norma', 'Qué exige', 'Documento que genera'],
    rows: [
      { norma: 'NOM-002-STPS-2010, 7.2 y 7.3', alcance: 'Revisión mensual de los extintores con registro de anomalías y seguimiento', aplica: 'Bitácora mensual' },
      { norma: 'NOM-002-STPS-2010, 7.4', alcance: 'Programa anual de revisión y pruebas del equipo contra incendio', aplica: 'Programa anual' },
      { norma: 'NOM-002-STPS-2010 · registros', alcance: 'Conservar los registros tres años', aplica: 'Archivo del expediente' },
      { norma: 'NOM-002-STPS-2010, 5.7', alcance: 'Simulacros planeados por escrito y con resultados registrados', aplica: 'Actas de simulacro' },
      { norma: 'NOM-154-SCFI-2005', alcance: 'Etiqueta con dictamen, collarín en PQS con manómetro', aplica: 'Evidencia de servicio' },
      { norma: 'NOM-154-SCFI-2005 · orden', alcance: 'Orden de servicio foliada que el taller conserva al menos dos años', aplica: 'Respaldo de cada servicio' },
      { norma: 'Formato DC-3 (STPS)', alcance: 'Acredita la capacitación de cada trabajador', aplica: 'Constancias del personal' },
      { norma: 'LGIRPC CDMX', alcance: 'Programa Interno con carta de corresponsabilidad y póliza en mediano y alto riesgo', aplica: 'Trámite aparte; el expediente es un insumo' },
    ],
    note: 'Lo que no se puede hacer es fabricar historial hacia atrás. Un equipo sin documentación de origen se documenta desde su siguiente servicio, y desconfía de quien ofrezca lo contrario.',
  },
  empresa: {
    eyebrow: 'Por qué con nosotros',
    title: 'Un expediente que se sostiene',
    titleAccent: 'porque es real',
    desc: 'Ordenamos lo que existe, reponemos lo que falta y nunca inventamos lo que no pasó.',
    body: [
      'Trabajamos con la documentación de cualquier proveedor, no solo la nuestra. Y si contratas el programa de mantenimiento, la evidencia se actualiza sola con cada servicio.',
      'Escríbenos por WhatsApp con el giro, la superficie y si tienes una verificación programada, y empezamos por el inventario.',
    ],
    que: {
      title: 'Qué incluye la gestión documental',
      body: [
        'Inventario documental del equipo contra incendio: qué existe, qué está vencido y qué falta, con recopilación de fichas técnicas y certificados del equipo instalado.',
        'Ordenamiento de etiquetas, collarines y órdenes de servicio por equipo, integración del programa anual de revisión y pruebas, y bitácora mensual lista para tu personal.',
        'Integración de constancias DC-3, censo de brigada y actas de simulacro, con un índice del expediente que cita la norma de cada apartado.',
      ],
    },
    como: {
      title: 'Cómo lo hacemos',
      pillars: [
        { title: 'De cualquier origen', desc: 'Reunimos la documentación sin importar qué proveedor la generó.' },
        { title: 'Nada hacia atrás', desc: 'Lo que falta se genera desde hoy con un servicio o una capacitación reales.' },
        { title: 'Con claridad', desc: 'Te decimos qué integramos y qué, como el Programa Interno, va por otro camino.' },
      ],
    },
  },
  related: {
    title: 'Servicios y guías relacionados',
    desc: 'Lo que alimenta el expediente y lo que lo revisa.',
    links: [
      { label: 'Inspección y dictamen', href: '/servicios/inspeccion/', desc: 'El estado real del equipo.' },
      { label: 'Recarga de extintores', href: '/servicios/mantenimiento/', desc: 'Etiqueta y collarín nuevos.' },
      { label: 'Capacitación DC-3', href: '/servicios/capacitacion-dc3/', desc: 'Constancias del personal.' },
      { label: 'Bitácora de extintores', href: '/plantillas/bitacora-revision-extintores/', desc: 'Formato de revisión mensual.' },
      { label: 'Acta de simulacro', href: '/plantillas/acta-simulacro-evacuacion/', desc: 'El registro de cada ejercicio.' },
      { label: 'Qué revisa Protección Civil', href: '/blog/que-revisa-proteccion-civil/', desc: 'Los bloques de una visita.' },
      { label: 'Programa de mantenimiento', href: '/blog/programa-mantenimiento-contra-incendio/', desc: 'El calendario del año.' },
      { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'Trámite en CDMX y Edomex.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    titleAccent: 'sobre el expediente',
    desc: 'Lo que más nos preguntan antes de ordenar el expediente: qué documentos piden, qué pasa con lo que falta y qué no cubre este servicio.',
    body: [
      'Si tu caso no aparece aquí, escríbenos con el giro, la superficie y si ya tienes una verificación programada.',
      'Las respuestas citan la norma cuando aplica; lo que falta en tu expediente lo vemos en el inventario.',
    ],
    items: [
      { question: '¿Qué documentos suele pedir una verificación?', answer: 'El núcleo se repite: evidencia del mantenimiento del equipo (etiquetas y collarines conforme a la NOM-154-SCFI-2005), el programa anual de revisión que pide la NOM-002-STPS-2010, la bitácora de revisiones mensuales, las constancias de capacitación del personal, las actas de simulacro y las fichas técnicas del equipo instalado.' },
      { question: '¿Esto sustituye el Programa Interno de Protección Civil?', answer: 'No. El Programa Interno es un documento formal con requisitos propios —análisis de riesgos, brigadas, simulacros, directorio de emergencia— y en la Ciudad de México se integra con la carta de corresponsabilidad de un Tercero Acreditado. Lo que hacemos es la parte documental del equipo contra incendio, que es un insumo del programa.' },
      { question: '¿Sirve si mi equipo lo instaló otro proveedor?', answer: 'Sí, y es el caso más frecuente. Reunimos la documentación existente de cualquier origen, identificamos lo que falta y te decimos cómo reponerlo: a veces basta pedir la ficha al fabricante, otras hay que dar servicio al equipo para generar su constancia.' },
      { question: '¿Qué pasa con el equipo que no tiene documentación?', answer: 'Se documenta desde el servicio: al darle mantenimiento conforme a la NOM-154-SCFI-2005, el equipo genera su etiqueta y su collarín, que son evidencia válida a partir de esa fecha. Lo que no se puede hacer es fabricar historial hacia atrás, y desconfía de quien lo ofrezca.' },
      { question: '¿Cuánto tiempo hay que guardar los registros?', answer: 'La NOM-002-STPS-2010 pide conservar los registros tres años. Por su parte, la NOM-154 obliga al taller a conservar la orden de servicio de cada trabajo al menos dos años; conviene que tú guardes tu copia junto con el expediente.' },
      { question: '¿Cómo se mantiene el expediente al día?', answer: 'Con dos cosas: la bitácora mensual que llena tu personal y el programa anual que agenda los servicios antes de que venzan. Te dejamos ambos armados y, si contratas el programa de mantenimiento, la evidencia se actualiza con cada servicio.' },
      { question: '¿Protección Civil y la STPS piden los mismos documentos?', answer: 'No exactamente. Protección Civil revisa el Programa Interno registrado y que lo declarado coincida con el inmueble; la STPS revisa el cumplimiento de las NOM, como la NOM-002. Hay documentos que sirven a las dos, como la evidencia de servicio del equipo y las constancias de capacitación.' },
      { question: '¿Qué hago si la verificación ya dejó observaciones?', answer: 'En la Ciudad de México puedes formular observaciones y ofrecer pruebas dentro de los 10 días hábiles siguientes al acta. Es el plazo real para corregir y acreditar, así que se atiende primero lo observado y después el resto del expediente.' },
      { question: '¿Pueden llenar la bitácora de los meses que no se hicieron?', answer: 'No. La bitácora registra revisiones que tu personal hizo; llenarla hacia atrás es fabricar evidencia. Lo correcto es empezar a registrarla desde este mes con un responsable asignado.' },
      { question: '¿Cuánto cuesta la gestión documental?', answer: 'Depende de la cantidad de equipo, de cuántos proveedores generaron documentos y de lo que falte reponer. Escríbenos con el giro y la superficie y te cotizamos después del inventario.' },
    ],
  },
};
