// ============================================================================
// src/data/prueba-hidrostatica.ts — L3 /servicios/prueba-hidrostatica/.
// ----------------------------------------------------------------------------
// PATRÓN L3 canónico de servicio (contrato en src/data/l3-types.ts; lo pinta
// src/components/ServiceL3.astro). Segunda L3 de servicios, 2026-09-10.
//
// ÁNGULO — cada nivel responde una pregunta distinta:
//   · /servicios/                     «¿qué me toca, cada cuándo y qué papel me deja?»
//   · /servicios/mantenimiento/       «¿qué le hacen a mi extintor cada año según su agente?»
//   · /servicios/prueba-hidrostatica/ «¿mi CILINDRO sigue siendo seguro, cuándo le toca
//                                      por norma, qué pasa en la prueba y qué evidencia queda?»
// La vitrina va por TIPO DE CILINDRO (baja presión, alta presión, criterio del
// fabricante) y el diferenciador es la tabla NOM-154 vs NFPA 10 (5 años, no 12).
//
// FUENTES (todo verificado en el sitio; nada de memoria):
//   · /blog/prueba-hidrostatica-extintores/ — NOM-154-SCFI-2005 numeral 5.6
//     (≥ cada 5 años en agua, CO₂ y PQS de presión contenida; de inmediato si
//     el tanque recibe un golpe o desaparece la contraseña; cilindro sin fecha
//     → prueba + placa permanente), Capítulo 6 (bomba de baja presión ≥ 4.2 MPa;
//     alta presión —CO₂ y cartuchos— puede probarla una empresa distinta), la
//     NOM-154 NO publica tabla de presiones ni criterios numéricos (manda el
//     manual del fabricante) y NO fija regla hidrostática para agente limpio ni
//     químico húmedo; NFPA 10: 5 o 12 años según tipo, no obligatoria en México.
//   · /blog/mantenimiento-recarga-extintores-nom/ — obsoletos que no se atienden,
//     garantía, etiqueta y collarín; plazo anual = NOM-002-STPS-2010, 7.18.
// Lo que NO se afirma a propósito: presiones de prueba concretas, tiempos de
// entrega y préstamo de equipo (no confirmados).
// ============================================================================
import type { ServiceL3Data, Tarjeta } from './l3-types';

export const phTarjetas: Tarjeta[] = [
  {
    title: 'Prueba hidrostática de PQS',
    href: '#ph-pqs',
    image: '/images/servicios/prueba-hidrostatica-extintor.avif',
    imageAlt: 'Prueba hidrostática de un extintor en el taller de servicio',
    badge: 'PQS · Baja presión',
    description: 'Cilindro de presión contenida. El secado interior evita que el polvo se apelmace.',
    specs: [
      { label: 'Presión', value: 'Baja (contenida)' },
      { label: 'Plazo', value: 'Máximo 5 años' },
      { label: 'Norma', value: 'NOM-154, 5.6' },
    ],
    ctaLabel: 'Prueba de PQS',
  },
  {
    title: 'Prueba hidrostática de CO₂',
    href: '#ph-co2',
    image: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif',
    imageAlt: 'Extintor junto a estación manual y señalética de emergencia en planta',
    badge: 'CO₂ · Alta presión',
    description: 'Cilindro de alta presión con bomba específica. Puede probarlo un tercero.',
    specs: [
      { label: 'Presión', value: 'Alta' },
      { label: 'Quién', value: 'Taller o tercero' },
      { label: 'Plazo', value: 'Máximo 5 años' },
    ],
    ctaLabel: 'Prueba de CO₂',
  },
  {
    title: 'Prueba de extintores de agua',
    href: '#ph-agua',
    image: '/images/servicios/instalacion-equipo-almacen.avif',
    imageAlt: 'Extintor y gabinete instalados en un almacén',
    badge: 'Agua · Espuma',
    description: 'Entran en el plazo de 5 años. Aquí se detectan los equipos obsoletos.',
    specs: [
      { label: 'Presión', value: 'Baja (contenida)' },
      { label: 'Obsoletos', value: 'Se desechan' },
      { label: 'Norma', value: 'NOM-154, 5.6' },
    ],
    ctaLabel: 'Prueba de agua',
  },
  {
    title: 'Clase K y agente limpio',
    href: '#ph-k-limpio',
    image: '/images/servicios/supresion-cocina-comercial.avif',
    imageAlt: 'Cocina comercial con campana, donde se instala el extintor clase K',
    badge: 'Criterio del fabricante',
    description: 'La NOM-154 no fija su plazo: aplica el manual de servicio de cada modelo.',
    specs: [
      { label: 'Criterio', value: 'Manual fabricante' },
      { label: 'NOM-154', value: 'Sin regla propia' },
      { label: 'Evidencia', value: 'Marca y constancia' },
    ],
    ctaLabel: 'Prueba clase K',
  },
  {
    title: 'Prueba antes de los 5 años',
    href: '#cuando-toca',
    image: '/images/servicios/etiquetado-inspeccion-extintor.avif',
    imageAlt: 'Revisión de la etiqueta y la contraseña de un extintor',
    badge: 'Golpe o sin contraseña',
    description: 'Un golpe o una contraseña borrada obligan a probar de inmediato, sin esperar.',
    specs: [
      { label: 'Golpe', value: 'De inmediato' },
      { label: 'Sin contraseña', value: 'De inmediato' },
      { label: 'Sin fecha', value: 'Prueba y placa' },
    ],
    ctaLabel: 'Cuándo toca',
  },
  {
    title: 'Recarga de extintores',
    href: '/servicios/mantenimiento/',
    image: '/images/servicios/inspeccion-recarga-extintores.avif',
    imageAlt: 'Recarga y mantenimiento de extintores en taller de servicio',
    badge: 'Servicio NOM-154',
    description: 'El mantenimiento anual del año que toca aprovecha para hacer la prueba.',
    specs: [
      { label: 'Periodicidad', value: 'Al menos anual' },
      { label: 'Norma', value: 'NOM-002, 7.18' },
      { label: 'Se combina', value: 'Con la prueba' },
    ],
    ctaLabel: 'Recarga de extintores',
  },
  {
    title: 'Inspección y dictamen',
    href: '/servicios/inspeccion/',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión de gabinete, hidrante y extintor en recorrido de inspección',
    badge: 'Vencimientos',
    description: 'Levantamos qué equipo tiene la prueba vencida y cuál la necesita antes.',
    specs: [
      { label: 'Revisa', value: 'Fecha de prueba' },
      { label: 'Entrega', value: 'Reporte por equipo' },
      { label: 'Sirve para', value: 'Programar lotes' },
    ],
    ctaLabel: 'Inspección y dictamen',
  },
  {
    title: 'Reemplazo de extintores',
    href: '/productos/extintores/',
    image: '/images/showcase/extintores-catalogo-profesional.avif',
    imageAlt: 'Extintores nuevos de distintas capacidades sobre piso de concreto',
    badge: 'Cuando no aprueba',
    description: 'Si el cilindro no pasa la prueba o es obsoleto, cotizamos el nuevo.',
    specs: [
      { label: 'Cuándo', value: 'No aprueba' },
      { label: 'Obsoletos', value: 'Se desechan' },
      { label: 'Entrega', value: 'CDMX y Edomex' },
    ],
    ctaLabel: 'Venta de extintores',
  },
];

export const pruebaHidrostaticaL3: ServiceL3Data = {
  id: 'prueba-hidrostatica',
  path: '/servicios/prueba-hidrostatica/',
  seo: {
    title: 'Prueba hidrostática de extintores en CDMX | NOM-154',
    description:
      'Prueba hidrostática de extintores en CDMX y Edomex cada 5 años conforme a la NOM-154: cilindro marcado con la fecha, recarga y constancia del resultado.',
    serviceName: 'Prueba hidrostática de extintores',
    serviceType: 'Prueba hidrostática de cilindros de extintor',
    image: '/images/servicios/prueba-hidrostatica-extintor.avif',
  },
  breadcrumb: 'Prueba hidrostática',
  wa: 'Hola, quiero cotizar la prueba hidrostática de mis extintores. Tengo este inventario (tipo, capacidad y año de la última prueba):',
  menuCtaSub: 'Manda tu inventario',
  hero: {
    badge: 'Servicio NOM-154, 5.6 · CDMX y Estado de México',
    title: 'Prueba hidrostática',
    accent: 'de extintores',
    subtitle:
      'Probamos el cilindro de tus extintores con agua a presión, como pide la NOM-154-SCFI-2005, y te lo devolvemos marcado con la fecha, recargado y con la constancia del resultado.',
    descRight: [
      'El mantenimiento anual comprueba que el extintor funcione. La prueba hidrostática comprueba otra cosa: que el cilindro no vaya a fallar mientras funciona. La corrosión interna y los golpes le quitan resistencia sin que se note por fuera, con el manómetro en verde y la pintura intacta.',
      'Aquí está cada cuándo la exige la norma mexicana, qué cambia según el tipo de cilindro, qué pasa si no aprueba y qué evidencia debe quedar. Si tienes el inventario a la mano, mándalo por WhatsApp y te programamos la prueba por lotes.',
    ],
    outlineText: 'Prueba por tipo',
  },
  pillars: [
    { icon: 'check', title: 'Plazo de la NOM, no de la NFPA', desc: 'Programamos a 5 años, como pide la NOM-154, no a los 12 de la NFPA 10.' },
    { icon: 'doc', title: 'Marca y constancia', desc: 'Fecha permanente en el cilindro y constancia del resultado por equipo.' },
    { icon: 'shield', title: 'Secado completo', desc: 'El paso que evita que el agente se apelmace o el cilindro se corroa por dentro.' },
    { icon: 'clock', title: 'Lo que falla se documenta', desc: 'El cilindro que no aprueba se retira de servicio y queda por escrito.' },
  ],
  vitrina: {
    id: 'por-tipo',
    eyebrow: 'Prueba por tipo de cilindro',
    title: 'Cada cilindro',
    titleAccent: 'tiene su propia prueba',
    desc: 'La presión de trabajo cambia el equipo que se usa, quién puede hacer la prueba y qué criterio aplica.',
    body: [
      'Un PQS o un extintor de agua trabajan a baja presión y se prueban con la bomba del taller. Un CO₂ es de alta presión y pide bomba específica. En clase K y agente limpio, la NOM-154 no fija un plazo propio y manda el manual del fabricante.',
      'Elige el tuyo para ver qué incluye su prueba. Las cuatro últimas fichas cubren lo que la rodea: cuándo toca antes de tiempo, el mantenimiento anual, la inspección y el reemplazo.',
    ],
    tarjetas: phTarjetas,
  },
  tablaPrincipal: {
    id: 'cuando-toca',
    eyebrow: 'Cuándo toca',
    title: 'Cuándo exige la norma',
    titleAccent: 'la prueba hidrostática',
    desc: 'Una sola frase del numeral 5.6 con tres supuestos, más la regla del cilindro sin fecha.',
    body: [
      'El plazo de 5 años es el máximo, no una fecha fija: un golpe o una contraseña borrada adelantan la prueba sin importar cuándo se hizo la anterior.',
      'La última fila es la que más se pasa por alto: un cilindro sin fecha clara no se recarga y se devuelve, se prueba.',
    ],
    columns: ['Supuesto', 'Plazo', 'Fundamento', 'Qué queda'],
    rows: [
      ['Cilindro de agua, CO₂ o PQS de presión contenida', 'Al menos cada 5 años', 'NOM-154-SCFI-2005, 5.6', 'Marca permanente con la fecha'],
      ['El tanque recibe un golpe', 'De inmediato, sin esperar el plazo', 'NOM-154-SCFI-2005, 5.6', 'Marca nueva y constancia del resultado'],
      ['Desaparece la contraseña inscrita en el cilindro', 'De inmediato, sin esperar el plazo', 'NOM-154-SCFI-2005, 5.6', 'Marca nueva y constancia del resultado'],
      ['El cilindro no tiene marca clara de la última prueba', 'Prueba obligatoria', 'NOM-154-SCFI-2005, 5.6', 'Placa permanente con la fecha de la prueba'],
      ['Extintor de agente limpio o químico húmedo (clase K)', 'El que marque el fabricante', 'Manual de servicio del modelo (la NOM-154 no fija regla)', 'Marca y constancia del resultado'],
    ],
  },
  guia: {
    eyebrow: 'Antes del plazo',
    title: 'Señales para probar tu cilindro',
    titleAccent: 'antes de los 5 años',
    desc: 'Lo que la prueba detecta no se ve por fuera, pero estas señales sí avisan.',
    body: [
      'Cada fila es algo que tu personal puede ver en la revisión mensual. Si aparece, el equipo sale de servicio y se evalúa en taller, sin esperar a la fecha de la prueba.',
      'La última columna es lo que más encontramos en campo: soluciones rápidas que dejan el extintor con buena cara y el cilindro sin verificar.',
    ],
    columns: ['Señal', 'Qué puede indicar', 'Qué corresponde', 'Qué no hacer'],
    rows: [
      { nivel: 'Golpe o caída', ejemplos: 'Daño estructural que no se ve por fuera', minimo: 'Prueba de inmediato (NOM-154, 5.6)', complementos: 'Recargarlo sin probar el cilindro' },
      { nivel: 'Abolladura o deformación', ejemplos: 'Cilindro comprometido', minimo: 'Inspección previa; si el daño es evidente, baja', complementos: 'Enderezarlo o pintarlo encima' },
      { nivel: 'Corrosión en base o válvula', ejemplos: 'Pérdida de espesor del metal', minimo: 'Inspección previa y prueba, o baja', complementos: 'Cubrirla con pintura nueva' },
      { nivel: 'Contraseña ilegible', ejemplos: 'El cilindro ya no se puede acreditar', minimo: 'Prueba de inmediato (NOM-154, 5.6)', complementos: 'Etiquetarlo de nuevo sin probar' },
      { nivel: 'Sin fecha de última prueba', ejemplos: 'Historial desconocido', minimo: 'Prueba y placa permanente con la fecha', complementos: 'Suponer que «seguro está bien»' },
      { nivel: '5 años o más', ejemplos: 'Fuera del plazo de la NOM-154', minimo: 'Prueba en el siguiente mantenimiento o antes', complementos: 'Aplicarle el plazo de 12 años de la NFPA 10' },
      { nivel: 'Roscas dañadas', ejemplos: 'Fuga o falla en la unión de la válvula', minimo: 'Revisión en taller antes de presurizar', complementos: 'Forzar la válvula o adaptar piezas' },
    ],
    note: 'Mientras un extintor está fuera de servicio, esa zona necesita otro equipo del mismo agente. Programamos la prueba por lotes o por áreas para no dejar el inmueble sin protección.',
    ctaLabel: 'Verifica tu extintor',
    ctaHref: '/herramientas/verifica-tu-extintor/',
  },
  tabla2: {
    id: 'nom-vs-nfpa',
    eyebrow: 'NOM-154 o NFPA 10',
    title: 'Por qué en México son 5 años',
    titleAccent: 'y no 12',
    desc: 'La tabla de 5 y 12 años que circula en internet es de una norma estadounidense.',
    body: [
      'Si tu proveedor programó la prueba a 12 años porque «así lo dice la NFPA», tus extintores pueden llevar años fuera del criterio que sí revisa la autoridad mexicana.',
      'La NFPA 10 sigue siendo una buena referencia técnica, y algunas aseguradoras la piden. Pero el plazo que se verifica en un inmueble en México es el de la NOM-154.',
    ],
    columns: ['Criterio', 'NOM-154-SCFI-2005 (México)', 'NFPA 10 (Estados Unidos)'],
    rows: [
      ['Naturaleza', 'Norma Oficial Mexicana, obligatoria', 'Estándar de referencia, voluntario en México'],
      ['Periodicidad', 'Al menos cada 5 años, sin distinguir por agente', 'Intervalos de 5 o 12 años según el tipo de extintor'],
      ['Alcance declarado', 'Agua, CO₂ y polvo químico seco de presión contenida', 'Toda la familia de extintores portátiles'],
      ['Quién la verifica', 'Unidad de verificación; STPS y Protección Civil en el inmueble', 'No aplica en México'],
    ],
  },
  modulos: [
    {
      id: 'ph-pqs',
      eyebrow: 'PQS · Baja presión · NOM-154 5.6',
      title: 'Prueba hidrostática',
      titleAccent: 'de extintores PQS',
      description:
        'Es la prueba que más hacemos, porque el PQS es el extintor que más se instala. El cilindro trabaja a baja presión y se prueba con la bomba del taller. Lo que distingue un servicio serio viene después: un cilindro mal secado apelmaza el polvo químico seco y arruina la descarga, aunque haya aprobado la prueba.',
      features: [
        { label: 'Plazo de 5 años', desc: 'Al menos cada 5 años, o antes tras un golpe o sin contraseña.' },
        { label: 'Bomba de baja presión', desc: 'El taller necesita una bomba que sostenga al menos 4.2 MPa.' },
        { label: 'Secado interior total', desc: 'Un cilindro húmedo apelmaza el polvo y arruina la descarga.' },
        { label: 'Recarga y collarín', desc: 'Tras aprobar se recarga y regresa con etiqueta y collarín.' },
      ],
      ctaLabel: 'Cotizar prueba de PQS',
      ctaMsg: 'Hola, quiero cotizar la prueba hidrostática de extintores PQS. Tengo estas capacidades y cantidades:',
      ctaSecondaryLabel: 'Extintores PQS ABC',
      ctaSecondaryHref: '/productos/extintor-pqs/',
      imgMain: { src: '/images/servicios/prueba-hidrostatica-extintor.avif', alt: 'Prueba hidrostática de un extintor en el taller de servicio' },
      imgA: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Recarga de extintores de polvo químico seco en taller' },
      imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Colocación de etiqueta y collarín de servicio en un extintor' },
    },
    {
      id: 'ph-co2',
      eyebrow: 'CO₂ · Alta presión · Tercero permitido',
      title: 'Prueba hidrostática',
      titleAccent: 'de cilindros de CO₂',
      description:
        'El CO₂ va licuado a alta presión, así que su cilindro no se prueba con la misma bomba que un PQS. La NOM-154 lo reconoce y permite que la prueba de alta presión la haga una empresa distinta al taller que da el servicio. Es legítimo preguntar quién la hace: si tu proveedor la subcontrata, debe poder decirte a quién.',
      features: [
        { label: 'Cilindro de alta presión', desc: 'Pide una bomba específica, distinta de la de baja presión.' },
        { label: 'Tercero permitido', desc: 'La NOM-154 permite que la haga una empresa distinta al taller.' },
        { label: 'Pregunta quién la hace', desc: 'Si tu proveedor subcontrata, debe poder decirte a quién.' },
        { label: 'Mismo plazo', desc: 'Al menos cada 5 años, igual que el agua y el PQS.' },
      ],
      ctaLabel: 'Cotizar prueba de CO₂',
      ctaMsg: 'Hola, quiero cotizar la prueba hidrostática de extintores de CO₂. Tengo estas capacidades y cantidades:',
      ctaSecondaryLabel: 'Extintores de CO₂',
      ctaSecondaryHref: '/productos/extintor-co2/',
      imgMain: { src: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif', alt: 'Extintor junto a estación manual y señalética en planta' },
      imgA: { src: '/images/general/inventario-proveedor-equipo-contra-incendio.avif', alt: 'Inventario de extintores en el taller de servicio' },
      imgB: { src: '/images/showcase/extintores-variedad-colores-catalogo.avif', alt: 'Extintores de distintos agentes listos para servicio' },
    },
    {
      id: 'ph-agua',
      eyebrow: 'Agua y espuma · Baja presión · NOM-154 5.6',
      title: 'Prueba hidrostática',
      titleAccent: 'de extintores de agua',
      description:
        'Los extintores de agua de presión contenida entran de lleno en el plazo de 5 años. Es también donde más equipos obsoletos aparecen: los de soda ácido, espuma química o agua operados por cartucho interior que no sea de acero inoxidable no se prueban ni se recargan, porque la NOM-154 prohíbe darles mantenimiento. Se desechan y se reemplazan.',
      features: [
        { label: 'Incluidos en la norma', desc: 'El agua de presión contenida entra en el plazo de 5 años.' },
        { label: 'Obsoletos fuera', desc: 'Soda ácido, espuma química o cartucho no inoxidable: se desechan.' },
        { label: 'Inspección previa', desc: 'Corrosión, abolladuras, roscas y contraseña, antes de probar.' },
        { label: 'Marca permanente', desc: 'La fecha queda en el cilindro, no solo en la etiqueta.' },
      ],
      ctaLabel: 'Cotizar prueba de agua',
      ctaMsg: 'Hola, quiero cotizar la prueba hidrostática de extintores de agua o espuma.',
      ctaSecondaryLabel: 'Extintores de agua',
      ctaSecondaryHref: '/productos/extintor-agua/',
      imgMain: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Extintor y gabinete instalados en un almacén' },
      imgA: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Técnico revisando equipo contra incendio en almacén' },
      imgB: { src: '/images/servicios/prueba-hidrostatica-extintor.avif', alt: 'Prueba hidrostática de extintor en taller' },
    },
    {
      id: 'ph-k-limpio',
      eyebrow: 'Clase K y agente limpio · Criterio del fabricante',
      title: 'Clase K y agente limpio:',
      titleAccent: 'manda el fabricante',
      description:
        'La NOM-154 menciona expresamente agua, CO₂ y polvo químico seco. Para químico húmedo y agente limpio no fija una regla hidrostática propia, así que el plazo y el procedimiento salen del manual de servicio del fabricante de cada modelo. Por eso los revisamos equipo por equipo antes de cotizar, en lugar de aplicarles el calendario de los demás.',
      features: [
        { label: 'Sin regla propia en NOM', desc: 'La NOM-154 no fija plazo hidrostático para K ni agente limpio.' },
        { label: 'Manda el fabricante', desc: 'El plazo y el procedimiento salen del manual del modelo.' },
        { label: 'Misma evidencia', desc: 'Marca en el cilindro y constancia del resultado.' },
        { label: 'Revisión por modelo', desc: 'Te decimos qué aplica a cada equipo antes de cotizar.' },
      ],
      ctaLabel: 'Cotizar clase K o limpio',
      ctaMsg: 'Hola, quiero cotizar la prueba de extintores clase K o de agente limpio. Tengo estos modelos:',
      ctaSecondaryLabel: 'Extintores clase K',
      ctaSecondaryHref: '/productos/extintor-clase-k/',
      imgMain: { src: '/images/servicios/supresion-cocina-comercial.avif', alt: 'Cocina comercial con campana y protección clase K' },
      imgA: { src: '/images/servicios/supresion-agente-limpio-data-center.avif', alt: 'Cilindros de agente limpio en un centro de datos' },
      imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Etiqueta de servicio colocada en el extintor' },
    },
  ],
  decision: {
    id: 'resultado',
    eyebrow: 'Según el resultado',
    title: 'Qué pasa con tu extintor',
    titleAccent: 'después de la prueba',
    desc: 'La prueba está pensada para que el cilindro falle en el taller y no en las manos de quien lo necesita.',
    body: [
      'Un cilindro que se deforma o gotea no se repara ni se vuelve a presurizar: se retira. Te lo decimos con el sustento de la prueba y te cotizamos el reemplazo.',
      'Si el equipo es obsoleto, ni siquiera se prueba: la norma no permite darle mantenimiento.',
    ],
    columns: ['Resultado', 'Qué se hace', 'Qué recibes'],
    rows: [
      ['Aprueba: sin deformación permanente ni fugas', 'Secado, rearmado, recarga, presurizado y marca con la fecha', 'Extintor en servicio, cilindro marcado y constancia del resultado'],
      ['No aprueba: se deforma o presenta fuga', 'No se vuelve a presurizar; baja definitiva documentada', 'Constancia del retiro y cotización del reemplazo'],
      ['Daño evidente en la inspección previa', 'No se prueba; se retira de servicio', 'Motivo del retiro por escrito'],
      ['Equipo obsoleto (soda ácido, espuma química, cartucho no inoxidable, cobre o bronce con remaches)', 'No se atiende: la NOM-154 prohíbe darle mantenimiento', 'Aviso por escrito y cotización del reemplazo'],
    ],
    ctaLabel: 'Venta de extintores',
    ctaHref: '/productos/extintores/',
  },
  proceso: {
    eyebrow: 'Cómo es la prueba',
    title: 'De la inspección previa',
    titleAccent: 'al cilindro marcado',
    desc: 'Lo que le pasa a cada extintor entre que sale de tu inmueble y regresa.',
    body: [
      'El paso que más distingue a un taller serio no es la prueba, es el cuarto: un cilindro que no se seca por completo se corroe por dentro o arruina el agente que se le recarga.',
      'Al final no recibes solo el extintor: recibes la marca en el cilindro y la constancia, que es lo que se revisa en una verificación.',
    ],
    steps: [
      { num: '01', title: 'Inspección previa', desc: 'Corrosión, abolladuras, roscas y contraseña. Si el equipo es obsoleto o tiene daño evidente, se detiene aquí.' },
      { num: '02', title: 'Descarga y desmontaje', desc: 'Se despresuriza, se recupera el agente cuando procede y se retiran sus accesorios.' },
      { num: '03', title: 'Prueba con agua', desc: 'El cilindro se presuriza y se observa si presenta deformación permanente o fugas.' },
      { num: '04', title: 'Secado interior', desc: 'Se seca por completo el interior para evitar corrosión y daño al agente.' },
      { num: '05', title: 'Rearmado y recarga', desc: 'Se rearma, se recarga el agente, se presuriza y se prueba que no haya fugas.' },
      { num: '06', title: 'Marca permanente', desc: 'Se coloca en el cilindro la marca permanente con la fecha de la prueba.' },
      { num: '07', title: 'Constancia', desc: 'Se entrega la constancia del resultado junto con el equipo.' },
      { num: '08', title: 'Retiro si no aprueba', desc: 'El cilindro que no aprueba se retira de servicio y se documenta el motivo.' },
    ],
  },
  normas: {
    eyebrow: 'Normatividad',
    title: 'Qué dice la norma',
    titleAccent: 'de la prueba hidrostática',
    desc: 'Todo lo que exige la NOM-154 sobre la prueba cabe en un numeral y un capítulo. Aquí está completo.',
    body: [
      'El numeral 5.6 fija cuándo se prueba. El Capítulo 6 fija con qué equipo debe contar el taller. El resto del criterio técnico está en el manual del fabricante del extintor.',
      'La NFPA 10 aparece al final solo para explicar de dónde sale el dato de 12 años, no porque aplique en México.',
    ],
    columns: ['Norma', 'Qué exige', 'Qué significa para ti'],
    rows: [
      { norma: 'NOM-154-SCFI-2005, 5.6', alcance: 'Prueba al menos cada 5 años en cilindros de agua, CO₂ y PQS de presión contenida', aplica: 'El plazo que revisa la autoridad' },
      { norma: 'NOM-154, 5.6 · golpe o contraseña', alcance: 'Prueba de inmediato si el tanque recibe un golpe o desaparece la contraseña inscrita', aplica: 'Cuándo no se espera al plazo' },
      { norma: 'NOM-154, 5.6 · sin fecha', alcance: 'Si no hay marca clara de la última prueba, se prueba y se coloca placa permanente con la fecha', aplica: 'Cilindros sin historial' },
      { norma: 'NOM-154, Capítulo 6', alcance: 'Bomba de pruebas de baja presión capaz de sostener al menos 4.2 MPa, con dispositivo de seguridad', aplica: 'Qué equipo debe tener el taller' },
      { norma: 'NOM-154 · alta presión', alcance: 'CO₂ y cartuchos con bomba específica; la prueba puede hacerla una empresa distinta al prestador', aplica: 'Quién prueba tu CO₂' },
      { norma: 'NOM-154 · equipos obsoletos', alcance: 'Prohíbe dar mantenimiento a soda ácido, espuma química, líquido vaporizante y cartucho no inoxidable', aplica: 'Qué no se prueba: se reemplaza' },
      { norma: 'NOM-106-SCFI-2017', alcance: 'Contraseña oficial vigente que identifica al producto certificado', aplica: 'Lo que debe verse en el cilindro' },
      { norma: 'NFPA 10 (ref.)', alcance: 'Intervalos de 5 o 12 años según el tipo de extintor; no es obligatoria en México', aplica: 'De dónde sale el dato de 12 años' },
    ],
    note: 'La NOM-154 no publica una tabla de presiones de prueba ni criterios numéricos de aceptación: lo único que cuantifica es la capacidad mínima de la bomba del taller. El criterio técnico aplicable es el manual de servicio del fabricante de cada extintor.',
  },
  empresa: {
    eyebrow: 'Por qué con nosotros',
    title: 'La prueba, el mantenimiento',
    titleAccent: 'y la evidencia juntos',
    desc: 'Una prueba sin marca ni constancia es, para la autoridad, una prueba que no ocurrió.',
    body: [
      'Hacemos la prueba hidrostática dentro del mismo servicio que el mantenimiento anual, así el extintor no sale dos veces de tu inmueble y la evidencia queda en un solo expediente.',
      'Mándanos por WhatsApp tu inventario —tipo, capacidad y año de la última prueba— y te decimos cuáles están vencidos y cuáles pueden esperar.',
    ],
    que: {
      title: 'Qué incluye el servicio',
      body: [
        'Inspección previa, descarga y desmontaje, prueba de presión con agua, secado interior completo, rearmado, recarga del agente, presurizado y prueba de fugas, con marca permanente de la fecha en el cilindro.',
        'Para cilindros de alta presión, como los de CO₂, la prueba se hace con el equipo específico que pide la norma. En clase K y agente limpio seguimos el manual del fabricante de cada modelo.',
        'Cada extintor regresa con su constancia. Los que no aprueban se retiran de servicio con el motivo por escrito y la cotización del reemplazo.',
      ],
    },
    como: {
      title: 'Cómo lo hacemos',
      pillars: [
        { title: 'Primero el inventario', desc: 'La fecha de la última prueba de cada equipo decide qué entra en este lote y qué puede esperar.' },
        { title: 'Por lotes, sin dejarte sin protección', desc: 'Se programa por áreas para que ninguna zona se quede sin extintor mientras se prueba.' },
        { title: 'Con la verdad sobre el cilindro', desc: 'Si no aprueba, no se vuelve a presurizar, y te lo decimos antes de cobrarlo.' },
      ],
    },
  },
  related: {
    title: 'Servicios y guías relacionados',
    desc: 'Lo que conviene revisar antes y después de probar tus extintores.',
    links: [
      { label: 'Recarga de extintores', href: '/servicios/mantenimiento/', desc: 'Mantenimiento anual y recarga, NOM-154.' },
      { label: 'Inspección y dictamen', href: '/servicios/inspeccion/', desc: 'Vencimientos y faltantes por equipo.' },
      { label: 'Verifica tu extintor', href: '/herramientas/verifica-tu-extintor/', desc: 'Doce puntos para saber si está vigente.' },
      { label: 'Bitácora de extintores', href: '/plantillas/bitacora-revision-extintores/', desc: 'Formato gratuito para la revisión mensual.' },
      { label: 'Prueba hidrostática: guía', href: '/blog/prueba-hidrostatica-extintores/', desc: 'El numeral 5.6 y el mito de los 12 años.' },
      { label: 'Retimbrar o dar de baja', href: '/blog/cuando-dar-de-baja-o-retimbrar-un-extintor/', desc: 'Vida útil del cilindro y señales de baja.' },
      { label: 'Calcomanía sin servicio', href: '/blog/calcomania-sin-servicio-extintores-fraude/', desc: 'Servicios que no se hicieron.' },
      { label: 'Venta de extintores', href: '/productos/extintores/', desc: 'Reemplazo del cilindro que falla.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    titleAccent: 'sobre la prueba hidrostática',
    desc: 'Lo que más nos preguntan antes de mandar los extintores a prueba: cada cuándo, cuánto cuesta, qué pasa si no aprueba y qué evidencia queda.',
    body: [
      'Si tu caso no aparece aquí, escríbenos con el tipo, la capacidad y el año de la última prueba de cada extintor.',
      'Las respuestas citan la norma cuando aplica; lo que depende del estado de cada cilindro lo revisamos en la inspección previa.',
    ],
    items: [
      { question: '¿Cada cuántos años se hace la prueba hidrostática en México?', answer: 'Al menos cada 5 años en extintores de agua, CO₂ y polvo químico seco de presión contenida, conforme al numeral 5.6 de la NOM-154-SCFI-2005. Y antes de ese plazo si el cilindro recibe un golpe o si desaparece la contraseña inscrita en él.' },
      { question: '¿Es cierto que la prueba hidrostática se hace cada 12 años?', answer: 'No en México. El intervalo de 12 años viene de la NFPA 10, una norma estadounidense que no es obligatoria en el país. La NOM-154 fija un solo criterio para agua, CO₂ y PQS: al menos cada 5 años.' },
      { question: '¿Cuánto cuesta la prueba hidrostática de un extintor?', answer: 'Depende del tipo de cilindro, la capacidad, la cantidad de equipos y de si se hace junto con el mantenimiento anual. Un CO₂ de alta presión no cuesta lo mismo que un PQS. Mándanos tu inventario por WhatsApp y te cotizamos con precio real.' },
      { question: '¿Qué pasa si mi extintor no pasa la prueba?', answer: 'Se retira de servicio y no se vuelve a presurizar. Un cilindro que se deforma o tiene fuga durante la prueba puede fallar de forma peligrosa, así que no hay reparación posible. Te entregamos la constancia del retiro y la cotización del reemplazo.' },
      { question: '¿Por qué se prueba con agua y no con aire?', answer: 'Porque el agua es prácticamente incompresible. Si el cilindro cede durante la prueba, el agua no acumula energía y simplemente se libera. Con aire comprimido, la misma falla lanzaría fragmentos. La prueba está pensada para que el cilindro falle en el taller.' },
      { question: '¿Cómo sé cuándo le tocó la última prueba a mi extintor?', answer: 'La fecha debe estar marcada de forma permanente en el cilindro. Si no tiene marca clara, la NOM-154 pide hacer la prueba y colocar una placa permanente con la fecha: un cilindro sin fecha se prueba, no se recarga y se devuelve.' },
      { question: '¿La prueba hidrostática sustituye al mantenimiento anual?', answer: 'No. Son obligaciones distintas: el mantenimiento se hace al menos una vez al año (NOM-002-STPS-2010, 7.18) y la prueba al menos cada 5 años (NOM-154, 5.6). En la práctica la prueba se aprovecha durante el mantenimiento del año que toca, pero se acredita por separado.' },
      { question: '¿Quién puede hacer la prueba de un extintor de CO₂?', answer: 'El CO₂ y los cartuchos son de alta presión y piden una bomba específica. La NOM-154 permite expresamente que esa prueba la haga una empresa distinta al taller que da el servicio. Si tu proveedor la subcontrata, debe poder decirte a quién.' },
      { question: '¿Los extintores clase K y de agente limpio llevan prueba hidrostática?', answer: 'La NOM-154 no fija una regla hidrostática propia para químico húmedo ni agente limpio. En esos equipos el plazo y el procedimiento salen del manual de servicio del fabricante de cada modelo, y así los atendemos.' },
      { question: '¿La NOM-154 tiene una tabla de presiones de prueba?', answer: 'No. La norma no publica presiones de prueba por tipo de cilindro ni criterios numéricos de aceptación; solo fija la capacidad mínima de la bomba del taller. Si alguien te muestra «la tabla de presiones de la NOM-154», está citando algo que la norma no contiene.' },
      { question: '¿Me quedo sin extintores mientras se hace la prueba?', answer: 'La prueba implica descargar, desmontar y rearmar cada equipo, así que se programa por lotes o por áreas para que ninguna zona del inmueble se quede sin protección. Lo definimos al cotizar según la cantidad y el tipo de extintores.' },
      { question: '¿Qué recibo al terminar la prueba?', answer: 'El extintor recargado y presurizado, con la fecha de la prueba marcada de forma permanente en el cilindro, su etiqueta de servicio y la constancia del resultado. Si no aprobó, la constancia del retiro con el motivo.' },
    ],
  },
};
