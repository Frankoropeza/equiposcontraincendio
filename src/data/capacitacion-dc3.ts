// ============================================================================
// src/data/capacitacion-dc3.ts — L3 /servicios/capacitacion-dc3/.
// ----------------------------------------------------------------------------
// PATRÓN L3 canónico de servicio (contrato src/data/l3-types.ts, lo pinta
// src/components/ServiceL3.astro). Quinta L3 de servicios, 2026-09-10.
//
// ÁNGULO — «¿qué capacitación me exige la norma, a quién, cada cuándo y qué
// evidencia me deja?». La vitrina va por TIPO DE BRIGADA y entregable, y el
// diferenciador es desmentir las vigencias inventadas de la DC-3 y separar lo
// que exige la NOM-002 en riesgo ordinario y en riesgo alto.
//
// FUENTES (verificadas en el sitio): src/content/servicios/capacitacion-dc3.md;
// /blog/brigada-contra-incendios/ (definición de brigada en la NOM-002;
// obligatoria en riesgo alto, Capítulo 9; numeral 9.1 sin número fijo de
// brigadistas; Guía de Referencia II —4 tipos, 3 a 7 integrantes— no
// obligatoria; programa de capacitación anual teórico-práctico para todos;
// simulacros ≥ 1/año ordinario y ≥ 2/año alto, 5.7; registros 3 años; la DC-3
// no tiene vigencia fijada por norma ni por el acuerdo de la STPS).
// NO se afirma: que emitamos la DC-3 nosotros (la firma el agente capacitador;
// se confirma por escrito quién imparte), duración de cursos ni precios.
// ============================================================================
import type { ServiceL3Data, Tarjeta } from './l3-types';

export const capTarjetas: Tarjeta[] = [
  {
    title: 'Uso y manejo de extintores',
    href: '#cap-extintores',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
    imageAlt: 'Capacitación práctica en uso de extintores',
    badge: 'Práctica con fuego',
    description: 'Práctica con fuego controlado y con el agente que hay en tu inmueble.',
    specs: [
      { label: 'Práctica', value: 'Fuego controlado' },
      { label: 'Para', value: 'Todo el personal' },
      { label: 'Evidencia', value: 'Constancia DC-3' },
    ],
    ctaLabel: 'Uso de extintores',
  },
  {
    title: 'Combate de incendios',
    href: '#cap-combate',
    image: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif',
    imageAlt: 'Gabinete de manguera contra incendio',
    badge: 'Brigada · Combate',
    description: 'Ataque al conato con extintor o manguera y revisión previa del equipo.',
    specs: [
      { label: 'Actúa', value: 'Desde el inicio' },
      { label: 'Equipo', value: 'Extintor, manguera' },
      { label: 'Norma', value: 'NOM-002-STPS' },
    ],
    ctaLabel: 'Brigada de combate',
  },
  {
    title: 'Evacuación',
    href: '#cap-evacuacion',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Ruta de evacuación señalizada en nave industrial',
    badge: 'Brigada · Evacuación',
    description: 'Conduce al personal por la ruta al punto de reunión y pasa lista.',
    specs: [
      { label: 'Actúa', value: 'Al sonar la alarma' },
      { label: 'Ruta', value: 'Señalizada' },
      { label: 'Cierra con', value: 'Pase de lista' },
    ],
    ctaLabel: 'Brigada de evacuación',
  },
  {
    title: 'Primeros auxilios y aviso',
    href: '#cap-auxilios',
    image: '/images/showcase/equipo-proteccion-bomberos-epp.avif',
    imageAlt: 'Equipo de protección personal para la brigada',
    badge: 'Brigadas de apoyo',
    description: 'Atención inicial a lesionados, alarma y llamada a los servicios de emergencia.',
    specs: [
      { label: 'Auxilios', value: 'Atención inicial' },
      { label: 'Aviso', value: 'Alarma y llamada' },
      { label: 'Riesgo alto', value: 'Obligatorias' },
    ],
    ctaLabel: 'Brigadas de apoyo',
  },
  {
    title: 'Constancia DC-3',
    href: '#cap-dc3',
    image: '/images/casos/entrega-servicio-equipo-contra-incendio.avif',
    imageAlt: 'Entrega de material y constancias a la brigada',
    badge: 'Formato de la STPS',
    description: 'Una por participante, firmada por el agente capacitador. No caduca por norma.',
    specs: [
      { label: 'Formato', value: 'Oficial STPS' },
      { label: 'Vigencia', value: 'No fijada' },
      { label: 'Registros', value: 'Se guardan 3 años' },
    ],
    ctaLabel: 'Constancia DC-3',
  },
  {
    title: 'Simulacros',
    href: '#requisitos',
    image: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif',
    imageAlt: 'Estación manual de alarma y señalética de emergencia',
    badge: 'NOM-002, 5.7',
    description: 'Lo que la capacitación prepara se prueba en el simulacro, con registro.',
    specs: [
      { label: 'Ordinario', value: 'Al menos 1 al año' },
      { label: 'Riesgo alto', value: 'Al menos 2 al año' },
      { label: 'Evidencia', value: 'Acta de simulacro' },
    ],
    ctaLabel: 'Simulacros',
  },
  {
    title: 'Diagnóstico de riesgo',
    href: '/servicios/diagnostico-de-riesgo/',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Levantamiento de riesgo de incendio en una planta',
    badge: 'Define la brigada',
    description: 'Si eres riesgo alto, la brigada es obligatoria. Primero hay que saberlo.',
    specs: [
      { label: 'Clasifica', value: 'Ordinario o alto' },
      { label: 'Norma', value: 'NOM-002, Tabla 1' },
      { label: 'Decide', value: 'Si hay brigada' },
    ],
    ctaLabel: 'Diagnóstico de riesgo',
  },
  {
    title: 'Censo de brigada',
    href: '/plantillas/censo-brigada-emergencia/',
    image: '/images/general/hero-proveedor-equipo-contra-incendio.avif',
    imageAlt: 'Registro de la brigada del inmueble',
    badge: 'Formato gratis',
    description: 'Formato para registrar quién integra la brigada, en qué turno y con qué rol.',
    specs: [
      { label: 'Registra', value: 'Rol y turno' },
      { label: 'Sirve para', value: 'Cubrir turnos' },
      { label: 'Costo', value: 'Sin costo' },
    ],
    ctaLabel: 'Censo de brigada',
  },
];

export const capacitacionL3: ServiceL3Data = {
  id: 'capacitacion-dc3',
  path: '/servicios/capacitacion-dc3/',
  seo: {
    title: 'Capacitación de brigada contra incendio y DC-3 | CDMX',
    description:
      'Capacitación de brigada contra incendio en CDMX y Edomex: uso de extintores con fuego controlado, combate, evacuación y constancia DC-3 por participante.',
    serviceName: 'Capacitación de brigada contra incendio y constancias DC-3',
    serviceType: 'Capacitación en prevención y combate de incendios',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
  },
  breadcrumb: 'Capacitación DC-3',
  wa: 'Hola, quiero cotizar capacitación de brigada contra incendio con constancias DC-3. Somos (número de personas y turnos):',
  menuCtaSub: 'Personas y turnos',
  hero: {
    badge: 'Capacitación con constancia DC-3 · CDMX y Estado de México',
    title: 'Capacitación de brigada',
    accent: 'contra incendio',
    subtitle:
      'Capacitamos a tu personal en uso de extintores con fuego controlado, combate de incendios y evacuación, y gestionamos la constancia DC-3 de cada participante para tu expediente.',
    descRight: [
      'Tener extintores no sirve si nadie sabe usarlos. Una persona que nunca ha accionado uno no lo hará bien bajo estrés, y eso solo lo cambia la práctica. Por eso cada curso incluye fuego controlado con el agente que hay en tu inmueble.',
      'Aquí está qué capacitación exige la NOM-002 según tu grado de riesgo, qué hace cada brigada, qué es de verdad la DC-3 y qué mitos conviene ignorar. Escríbenos con el número de personas y de turnos para cotizar.',
    ],
    outlineText: 'Qué capacitamos',
  },
  pillars: [
    { icon: 'check', title: 'Con fuego controlado', desc: 'Práctica real con el agente de tu inmueble, en exterior y con seguridad.' },
    { icon: 'doc', title: 'DC-3 por participante', desc: 'Formato oficial de la STPS, firmado por el agente capacitador.' },
    { icon: 'shield', title: 'Sin vigencias inventadas', desc: 'La DC-3 no caduca por norma: lo exigible es el programa anual.' },
    { icon: 'clock', title: 'Por turnos', desc: 'Se agenda para que la brigada cubra todos los turnos, no solo uno.' },
  ],
  vitrina: {
    id: 'que-capacitamos',
    eyebrow: 'Qué capacitamos',
    title: 'Cada brigada',
    titleAccent: 'tiene su función',
    desc: 'La brigada no es un cuerpo de bomberos privado: responde al conato, avisa, evacúa y entrega la escena.',
    body: [
      'La Guía de Referencia II de la NOM-002 reconoce cuatro brigadas: combate de incendios, evacuación, primeros auxilios y comunicación. Un mismo brigadista puede cubrir más de una.',
      'Las primeras fichas son la capacitación y lo que deja. Las últimas: los simulacros que la ponen a prueba, el diagnóstico que dice si la brigada es obligatoria y el formato para registrarla.',
    ],
    tarjetas: capTarjetas,
  },
  tablaPrincipal: {
    id: 'requisitos',
    eyebrow: 'NOM-002-STPS-2010',
    title: 'Qué exige la norma',
    titleAccent: 'según tu grado de riesgo',
    desc: 'La capacitación anual y los simulacros son para todos; la brigada obligatoria, solo para riesgo alto.',
    body: [
      'Todos los centros de trabajo necesitan un plan de atención a emergencias, un programa de capacitación anual teórico-práctico y al menos un simulacro al año. El riesgo alto agrega la brigada y un segundo simulacro.',
      'La normatividad local de protección civil puede pedir requisitos propios de brigadas y capacitación: se suman, no se sustituyen.',
    ],
    columns: ['Obligación', 'Riesgo ordinario', 'Riesgo alto'],
    rows: [
      ['Plan de atención a emergencias de incendio', 'Sí', 'Sí, con contenido ampliado'],
      ['Programa de capacitación anual teórico-práctico', 'Sí', 'Sí, con temario adicional para brigadistas'],
      ['Simulacros al año', 'Al menos uno', 'Al menos dos'],
      ['Brigada contra incendio', 'No exigida por la NOM-002', 'Obligatoria'],
      ['Brigadas de primeros auxilios, comunicación y evacuación', 'No exigidas por la NOM-002', 'Obligatorias dentro del plan'],
      ['Conservación de registros', 'Tres años', 'Tres años'],
    ],
    ctaLabel: 'Diagnóstico de riesgo',
    ctaHref: '/servicios/diagnostico-de-riesgo/',
  },
  guia: {
    eyebrow: 'Mitos frecuentes',
    title: 'Lo que te dicen de la brigada',
    titleAccent: 'y lo que dice la norma',
    desc: 'Buena parte de lo que circula sobre capacitación es política comercial, no requisito legal.',
    body: [
      'La confusión más cara es la vigencia de la DC-3: hay quien la vende como si caducara cada año. Ni la NOM-002 ni el acuerdo de la STPS le fijan vigencia.',
      'Lo que sí se exige es que el programa de capacitación sea anual y que los registros se conserven tres años.',
    ],
    columns: ['Lo que se dice', 'Lo que dice la norma', 'Qué hacer', 'Fundamento'],
    rows: [
      { nivel: '«La DC-3 vence cada año»', ejemplos: 'No tiene vigencia fijada', minimo: 'Mantener el programa anual y los registros', complementos: 'NOM-002 y acuerdo de la STPS' },
      { nivel: '«Hay un número fijo de brigadistas»', ejemplos: 'No hay número ni porcentaje obligatorio', minimo: 'Dimensionar por turnos, rotación y simulacros', complementos: 'NOM-002, numeral 9.1' },
      { nivel: '«Toda empresa debe tener brigada»', ejemplos: 'La NOM-002 la exige en riesgo alto', minimo: 'Clasificar el riesgo primero', complementos: 'NOM-002, Capítulo 9' },
      { nivel: '«Brigada de 3 a 7 personas»', ejemplos: 'Es una guía de referencia, no obligatoria', minimo: 'Tomarla como punto de partida', complementos: 'NOM-002, Guía de Referencia II' },
      { nivel: '«Con un simulacro basta»', ejemplos: 'En riesgo alto son al menos dos al año', minimo: 'Programarlos y registrar cada uno', complementos: 'NOM-002, numeral 5.7' },
      { nivel: '«Capacitar al turno de día basta»', ejemplos: 'La brigada debe poder responder en cada turno', minimo: 'Capacitar en todos los turnos', complementos: 'NOM-002, numeral 9.1' },
    ],
    note: 'La normatividad local de protección civil puede imponer requisitos propios de brigadas, capacitación y simulacros; en el Estado de México, por ejemplo, el Código Administrativo pide simulacros al menos dos veces al año.',
    ctaLabel: 'Censo de brigada',
    ctaHref: '/plantillas/censo-brigada-emergencia/',
  },
  tabla2: {
    id: 'brigadas',
    eyebrow: 'Funciones',
    title: 'Qué hace cada brigada',
    titleAccent: 'y cuándo actúa',
    desc: 'En una emergencia las cuatro trabajan en paralelo: por eso cada una necesita su propia capacitación.',
    body: [
      'Las brigadas pueden ser multifuncionales: en un inmueble pequeño, la misma persona puede combatir el conato y dar la alarma.',
      'Lo que no puede faltar es que cada función tenga a alguien capacitado en cada turno.',
    ],
    columns: ['Brigada', 'Función principal', 'Cuándo actúa'],
    rows: [
      ['Prevención y combate de incendios', 'Ataque al conato con extintor o manguera; verificación previa del equipo', 'Desde el primer minuto'],
      ['Evacuación', 'Conduce a los ocupantes por la ruta al punto de reunión y pasa lista', 'Al activarse la alarma'],
      ['Primeros auxilios', 'Atención inicial a lesionados y entrega a los servicios médicos', 'Durante y después'],
      ['Comunicación', 'Da la alarma, llama a bomberos y autoridades y controla la información', 'En paralelo a todo'],
    ],
  },
  modulos: [
    {
      id: 'cap-extintores',
      eyebrow: 'Uso y manejo de extintores · Práctica con fuego',
      title: 'Uso y manejo',
      titleAccent: 'de extintores',
      description:
        'Es el curso base, para todo el personal y no solo para la brigada. Se enseña a leer la etiqueta y el manómetro, a elegir el extintor por clase de fuego y, sobre todo, a accionarlo: la práctica de fuego controlado se hace en una charola de prácticas, en exterior y con las medidas de seguridad correspondientes. Si tu inmueble no tiene el espacio, lo coordinamos.',
      features: [
        { label: 'Fuego controlado', desc: 'En charola de prácticas, en exterior y con medidas de seguridad.' },
        { label: 'Con tu agente', desc: 'Se practica con el tipo de extintor que hay en tu inmueble.' },
        { label: 'Clase de fuego', desc: 'Qué extintor usar en cada caso y con cuál no.' },
        { label: 'Revisión mensual', desc: 'Qué mirar cada mes: manómetro, seguro, acceso y etiqueta.' },
      ],
      ctaLabel: 'Cotizar curso',
      ctaMsg: 'Hola, quiero cotizar un curso de uso y manejo de extintores para mi personal.',
      ctaSecondaryLabel: 'Tipos de extintores',
      ctaSecondaryHref: '/blog/como-elegir-extintor-clase-fuego/',
      imgMain: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Capacitación práctica en uso de extintores' },
      imgA: { src: '/images/showcase/extintores-variedad-colores-catalogo.avif', alt: 'Extintores de distintos agentes para la práctica' },
      imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Lectura de la etiqueta de un extintor' },
    },
    {
      id: 'cap-combate',
      eyebrow: 'Brigada de prevención y combate · NOM-002-STPS',
      title: 'Brigada de combate',
      titleAccent: 'de incendios',
      description:
        'Es la que actúa desde el primer minuto: ataca el conato con extintor o manguera antes de que crezca y verifica que el equipo esté listo. Se capacita en el ataque, en la retirada segura cuando el fuego ya superó al extintor y en el uso de los gabinetes de manguera si el inmueble tiene red hidráulica.',
      features: [
        { label: 'Ataque al conato', desc: 'Con extintor y, donde hay red, con manguera.' },
        { label: 'Retirada segura', desc: 'Cuándo dejar de combatir y evacuar.' },
        { label: 'Gabinetes de manguera', desc: 'Apertura, tendido y operación del gabinete.' },
        { label: 'Verificación previa', desc: 'Revisión del equipo antes de necesitarlo.' },
      ],
      ctaLabel: 'Cotizar brigada',
      ctaMsg: 'Hola, quiero cotizar la capacitación de una brigada de combate de incendios.',
      ctaSecondaryLabel: 'Brigada contra incendios',
      ctaSecondaryHref: '/blog/brigada-contra-incendios/',
      imgMain: { src: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif', alt: 'Gabinete de manguera contra incendio' },
      imgA: { src: '/images/servicios/prueba-mangueras-contra-incendio.avif', alt: 'Manguera contra incendio tendida en sitio' },
      imgB: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Brigada practicando con extintores' },
    },
    {
      id: 'cap-evacuacion',
      eyebrow: 'Brigada de evacuación · Rutas y punto de reunión',
      title: 'Brigada',
      titleAccent: 'de evacuación',
      description:
        'Cuando suena la alarma, esta brigada conduce a los ocupantes por la ruta señalizada hasta el punto de reunión y pasa lista para saber si falta alguien. Se capacita sobre el plano real del inmueble: rutas, salidas, zonas de riesgo y cómo apoyar a personas con movilidad reducida.',
      features: [
        { label: 'Rutas del inmueble', desc: 'Sobre el plano real, con salidas y alternativas.' },
        { label: 'Punto de reunión', desc: 'Dónde está y cómo se llega sin cruzar el riesgo.' },
        { label: 'Pase de lista', desc: 'Para saber de inmediato si falta alguien.' },
        { label: 'Apoyo a personas', desc: 'Visitantes y personas con movilidad reducida.' },
      ],
      ctaLabel: 'Cotizar brigada',
      ctaMsg: 'Hola, quiero cotizar la capacitación de una brigada de evacuación.',
      ctaSecondaryLabel: 'Rutas de evacuación',
      ctaSecondaryHref: '/blog/senalizacion-rutas-evacuacion-nom/',
      imgMain: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Ruta de evacuación señalizada en nave industrial' },
      imgA: { src: '/images/productos/senalizacion-luces-emergencia.avif', alt: 'Señalización y luz de emergencia en un pasillo' },
      imgB: { src: '/images/casos/entrega-servicio-equipo-contra-incendio.avif', alt: 'Reunión de la brigada' },
    },
    {
      id: 'cap-auxilios',
      eyebrow: 'Primeros auxilios y comunicación · Brigadas de apoyo',
      title: 'Primeros auxilios',
      titleAccent: 'y comunicación',
      description:
        'Mientras una brigada combate y otra evacúa, alguien tiene que dar la alarma, llamar a los servicios de emergencia y atender a los lesionados hasta que llegue la ayuda. En riesgo alto estas brigadas son obligatorias dentro del plan de atención a emergencias; en riesgo ordinario, conviene tenerlas cubiertas aunque sea con brigadistas multifuncionales.',
      features: [
        { label: 'Atención inicial', desc: 'Primeros auxilios y entrega a los servicios médicos.' },
        { label: 'Alarma y llamada', desc: 'Quién avisa, a quién y con qué información.' },
        { label: 'Control de información', desc: 'Una sola voz hacia autoridades y personal.' },
        { label: 'Multifuncionales', desc: 'Un brigadista puede cubrir más de una función.' },
      ],
      ctaLabel: 'Cotizar brigadas',
      ctaMsg: 'Hola, quiero cotizar capacitación de brigadas de primeros auxilios y comunicación.',
      ctaSecondaryLabel: 'Acta de simulacro',
      ctaSecondaryHref: '/plantillas/acta-simulacro-evacuacion/',
      imgMain: { src: '/images/showcase/equipo-proteccion-bomberos-epp.avif', alt: 'Equipo de protección personal para la brigada' },
      imgA: { src: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif', alt: 'Estación manual de alarma' },
      imgB: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Coordinación de la brigada en planta' },
    },
    {
      id: 'cap-dc3',
      eyebrow: 'Constancia DC-3 · Formato oficial de la STPS',
      title: 'La constancia DC-3',
      titleAccent: 'sin mitos',
      description:
        'La DC-3 es el formato oficial de la STPS con el que se acredita que un trabajador recibió capacitación en una materia. La emite y firma el agente capacitador que imparte el curso; nosotros coordinamos el curso y la gestión de las constancias, y te confirmamos por escrito quién imparte y bajo qué registro antes de agendar. No tiene una vigencia fijada por norma.',
      features: [
        { label: 'Una por participante', desc: 'A nombre de cada trabajador capacitado.' },
        { label: 'Firma el capacitador', desc: 'Quien imparte el curso, bajo su registro.' },
        { label: 'Sin caducidad legal', desc: 'Lo exigible es el programa anual, no renovar la DC-3.' },
        { label: 'Evidencia completa', desc: 'Listas de asistencia y fotos de la sesión.' },
      ],
      ctaLabel: 'Cotizar con DC-3',
      ctaMsg: 'Hola, necesito capacitación con constancias DC-3 para mi personal.',
      ctaSecondaryLabel: 'Gestión documental',
      ctaSecondaryHref: '/servicios/gestion-documental/',
      imgMain: { src: '/images/casos/entrega-servicio-equipo-contra-incendio.avif', alt: 'Entrega de constancias a la brigada' },
      imgA: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Capacitación práctica de la brigada' },
      imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Documentación del equipo contra incendio' },
    },
  ],
  decision: {
    id: 'que-curso',
    eyebrow: 'Qué curso te toca',
    title: 'Qué capacitación',
    titleAccent: 'necesita tu inmueble',
    desc: 'El punto de partida es el grado de riesgo; el tamaño lo deciden los turnos.',
    body: [
      'Si no sabes si tu inmueble es de riesgo ordinario o alto, empieza por el diagnóstico: de ahí sale si la brigada es obligatoria.',
      'En cualquier caso, capacitar a un solo turno deja al inmueble descubierto el resto del día.',
    ],
    columns: ['Tu situación', 'Qué capacitación corresponde', 'Qué evidencia queda'],
    rows: [
      ['Riesgo ordinario, sin brigada', 'Uso y manejo de extintores para el personal, dentro del programa anual', 'DC-3 por participante y listas de asistencia'],
      ['Riesgo alto', 'Brigada de combate, evacuación, primeros auxilios y comunicación, con temario adicional', 'DC-3 por brigadista y censo de brigada'],
      ['Rotación de personal', 'Capacitar a quienes entran a la brigada', 'Censo de brigada actualizado'],
      ['Antes de un simulacro', 'Repaso de roles y rutas de la brigada', 'Acta de simulacro con resultados'],
    ],
    ctaLabel: 'Diagnóstico de riesgo',
    ctaHref: '/servicios/diagnostico-de-riesgo/',
  },
  proceso: {
    eyebrow: 'Cómo es la capacitación',
    title: 'Del diagnóstico',
    titleAccent: 'a la constancia',
    desc: 'La misma secuencia para cinco personas que para una brigada por turnos.',
    body: [
      'El contenido se ajusta al giro y al grado de riesgo del inmueble: no se capacita igual a una oficina que a una cocina industrial.',
      'La sesión práctica es la que más cambia la conducta, así que se cuida que todos los participantes accionen un extintor.',
    ],
    steps: [
      { num: '01', title: 'Personas y turnos', desc: 'Cuántos participan, en qué turnos y qué brigadas hay que cubrir.' },
      { num: '02', title: 'Temario a la medida', desc: 'Ajustado al giro, al grado de riesgo y al equipo que hay en el inmueble.' },
      { num: '03', title: 'Clases de fuego', desc: 'Repasamos las clases de fuego y el agente que corresponde a cada una.' },
      { num: '04', title: 'Roles y rutas', desc: 'Revisamos roles de brigada, rutas y el equipo del inmueble.' },
      { num: '05', title: 'Práctica con fuego', desc: 'Fuego controlado en exterior, con el agente y equipo reales.' },
      { num: '06', title: 'Participación', desc: 'Cada participante acciona un extintor durante la práctica.' },
      { num: '07', title: 'Listas y fotos', desc: 'Integramos listas de asistencia y fotos de la sesión.' },
      { num: '08', title: 'Constancias DC-3', desc: 'Entregamos la DC-3 correspondiente a cada participante.' },
    ],
  },
  normas: {
    eyebrow: 'Normatividad',
    title: 'Qué exige la norma',
    titleAccent: 'sobre la capacitación',
    desc: 'La NOM-002 fija qué capacitación, a quién y cada cuándo; la DC-3 es el formato con que se acredita.',
    body: [
      'La norma federal es la base; las leyes locales de protección civil pueden sumar requisitos de brigadas y simulacros.',
      'Todo lo que no aparece aquí (vigencias, número fijo de brigadistas) no es requisito legal.',
    ],
    columns: ['Norma', 'Qué exige', 'Qué significa para ti'],
    rows: [
      { norma: 'NOM-002-STPS-2010', alcance: 'Programa de capacitación anual teórico-práctico en prevención de incendios y atención de emergencias', aplica: 'Capacitación cada año, para todos' },
      { norma: 'NOM-002-STPS-2010, Capítulo 9', alcance: 'Brigada contra incendio en centros de trabajo de riesgo alto', aplica: 'Brigada obligatoria si eres riesgo alto' },
      { norma: 'NOM-002-STPS-2010, 9.1', alcance: 'Considerar trabajadores por turno, rotación y resultados de simulacros', aplica: 'El tamaño de la brigada' },
      { norma: 'NOM-002-STPS-2010, 5.7', alcance: 'Simulacros: al menos uno al año (ordinario) o dos (alto), con registro', aplica: 'Cuántos simulacros hacer' },
      { norma: 'NOM-002 · Guía de Referencia II', alcance: 'Tipos de brigada y tamaño orientativo de 3 a 7 integrantes; no obligatoria', aplica: 'Punto de partida, no requisito' },
      { norma: 'Formato DC-3 (STPS)', alcance: 'Acredita la capacitación recibida por cada trabajador', aplica: 'La constancia de cada participante' },
      { norma: 'NOM-002 · registros', alcance: 'Conservar los registros de capacitación tres años', aplica: 'Cuánto guardar la evidencia' },
      { norma: 'Código Administrativo Edomex', alcance: 'Simulacros al menos dos veces al año', aplica: 'Requisito local adicional' },
    ],
    note: 'Ni la NOM-002 ni el acuerdo de la STPS que regula la DC-3 le fijan vigencia. Cualquier caducidad que ofrezca un capacitador es política comercial, no requisito legal.',
  },
  empresa: {
    eyebrow: 'Por qué con nosotros',
    title: 'Capacitación con práctica real',
    titleAccent: 'y evidencia en orden',
    desc: 'Un curso sin práctica no cambia la conducta; una práctica sin constancia no se puede acreditar.',
    body: [
      'Coordinamos el curso con el equipo que hay en tu inmueble y dejamos la evidencia lista para el expediente: DC-3 por participante, listas y fotos.',
      'Escríbenos por WhatsApp con el número de personas, los turnos y tu grado de riesgo si ya lo conoces, y te proponemos el calendario.',
    ],
    que: {
      title: 'Qué incluye la capacitación',
      body: [
        'Curso de uso y manejo de extintores con práctica de fuego controlado, y formación de brigada contra incendio —combate, evacuación, primeros auxilios y comunicación— según lo que tu inmueble necesite.',
        'Contenido ajustado al grado de riesgo y al giro del inmueble, con recomendaciones para el calendario de simulacros.',
        'Listas de asistencia, evidencia fotográfica de la sesión y gestión de la constancia DC-3 de cada participante, firmada por el agente capacitador que imparte el curso.',
      ],
    },
    como: {
      title: 'Cómo lo hacemos',
      pillars: [
        { title: 'Por turnos', desc: 'La brigada tiene que responder en cualquier turno, no solo en el de día.' },
        { title: 'Con tu equipo', desc: 'Se practica con el agente y el tipo de extintor que hay en el inmueble.' },
        { title: 'Con transparencia', desc: 'Te decimos por escrito quién imparte y bajo qué registro antes de agendar.' },
      ],
    },
  },
  related: {
    title: 'Servicios y guías relacionados',
    desc: 'Lo que suele venir antes y después de capacitar a la brigada.',
    links: [
      { label: 'Diagnóstico de riesgo', href: '/servicios/diagnostico-de-riesgo/', desc: 'Si la brigada es obligatoria.' },
      { label: 'Gestión documental', href: '/servicios/gestion-documental/', desc: 'Constancias en el expediente.' },
      { label: 'Brigada contra incendios', href: '/blog/brigada-contra-incendios/', desc: 'Tipos, tamaño y obligaciones.' },
      { label: 'Censo de brigada', href: '/plantillas/censo-brigada-emergencia/', desc: 'Roles y turnos, en un formato.' },
      { label: 'Acta de simulacro', href: '/plantillas/acta-simulacro-evacuacion/', desc: 'El registro de cada ejercicio.' },
      { label: 'Tipos de extintores', href: '/blog/como-elegir-extintor-clase-fuego/', desc: 'Clases de fuego y agentes.' },
      { label: 'Riesgo de incendio', href: '/herramientas/riesgo-de-incendio/', desc: 'Ordinario o alto, en minutos.' },
      { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'Trámite en CDMX y Edomex.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    titleAccent: 'sobre la capacitación de brigada',
    desc: 'Lo que más nos preguntan antes de agendar: si es obligatoria, a cuántas personas, qué es la DC-3 y cada cuándo se repite.',
    body: [
      'Si tu caso no aparece aquí, escríbenos con el número de personas, los turnos y el giro del inmueble.',
      'Las respuestas citan la NOM-002-STPS-2010; la normatividad local puede sumar requisitos.',
    ],
    items: [
      { question: '¿Es obligatorio tener brigada contra incendios?', answer: 'La NOM-002-STPS-2010 la exige en los centros de trabajo de riesgo de incendio alto, en su Capítulo 9. En riesgo ordinario no obliga a integrarla, aunque el plan de atención a emergencias, la capacitación anual y el simulacro anual sí son obligatorios para todos. La normatividad local de protección civil puede pedir requisitos propios.' },
      { question: '¿Cuántos brigadistas debe tener mi empresa?', answer: 'La norma no fija un número ni un porcentaje. Su numeral 9.1 pide considerar el número de trabajadores por turno, la rotación de personal y los resultados de los simulacros. La Guía de Referencia II menciona brigadas de tres a siete integrantes, pero declara expresamente que no es obligatoria.' },
      { question: '¿Qué es la constancia DC-3 y para qué sirve?', answer: 'Es el formato oficial de la Secretaría del Trabajo y Previsión Social con el que se acredita que un trabajador recibió capacitación en una materia concreta. Forma parte de la evidencia que revisa una inspección de la STPS y suele integrarse también al expediente de Protección Civil.' },
      { question: '¿La DC-3 caduca?', answer: 'No por norma. Ni la NOM-002 ni el acuerdo de la STPS que regula la DC-3 le fijan una vigencia. Lo exigible es que el programa de capacitación sea anual y que los registros se conserven tres años. Una caducidad distinta es política comercial del capacitador.' },
      { question: '¿Quién emite la constancia DC-3?', answer: 'La emite y firma el agente capacitador que imparte el curso, conforme al formato oficial de la STPS. Nosotros coordinamos el curso y la gestión de las constancias de tus participantes, y te confirmamos por escrito quién imparte y bajo qué registro antes de agendar.' },
      { question: '¿La capacitación incluye práctica con fuego real?', answer: 'Sí. La práctica con fuego controlado es la parte que de verdad cambia la conducta. Se hace en una charola de prácticas, en exterior y con las medidas de seguridad correspondientes. Si tu inmueble no tiene el espacio adecuado, lo coordinamos.' },
      { question: '¿Cada cuánto hay que capacitar?', answer: 'La NOM-002 pide un programa de capacitación anual teórico-práctico. Además conviene reforzarla cuando hay rotación en la brigada o cambios en el inmueble o el proceso: una brigada con la mitad de sus integrantes dados de baja solo existe en el papel.' },
      { question: '¿Cuántos simulacros hay que hacer al año?', answer: 'Al menos uno en centros de trabajo de riesgo ordinario y al menos dos en los de riesgo alto, conforme al numeral 5.7 de la NOM-002. Cada simulacro se planea por escrito y su resultado se registra. En el Estado de México, el Código Administrativo pide simulacros al menos dos veces al año.' },
      { question: '¿Cuáles son los tipos de brigada?', answer: 'La Guía de Referencia II de la NOM-002 reconoce cuatro: prevención y combate de incendios, evacuación, primeros auxilios y comunicación. Las brigadas pueden ser multifuncionales: un mismo brigadista puede actuar en más de una.' },
      { question: '¿Pueden capacitar en mi inmueble y por turnos?', answer: 'Sí. La capacitación se agenda por turnos para no detener la operación y para que la brigada quede cubierta en todos. La práctica con fuego se hace en exterior; si tu inmueble no tiene espacio, la coordinamos en otro lugar.' },
      { question: '¿Cuánto cuesta la capacitación?', answer: 'Depende del número de participantes, de las brigadas que haya que cubrir y de los turnos. Escríbenos con esos datos y te cotizamos con el calendario propuesto.' },
    ],
  },
};
