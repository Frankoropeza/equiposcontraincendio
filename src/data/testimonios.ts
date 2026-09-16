// ============================================================================
// src/data/testimonios.ts — Reseñas de clientes de CONINC (home).
// ----------------------------------------------------------------------------
// 2026-09-17 · Textos entregados por Frank como respuestas REALES de clientes,
// verificadas y con autorización para publicarse. Se copian tal cual; no se
// editan ni se inventan. Nombre mostrado: nombre + inicial del apellido.
// Regla: sin estrellas ni schema Review/AggregateRating (reseñas propias del
// negocio: Google no las admite como rich result).
// ============================================================================
export type Testimonio = { nombre: string; texto: string };

export const testimonios: Testimonio[] = [
  { nombre: 'Carmen L.', texto: 'Mi experiencia con CONINC fue muy positiva. Encontré el equipo que necesitaba y recibí buena asesoría para elegir la opción adecuada. Destaco principalmente la atención y disposición del personal para ayudar durante todo el proceso.' },
  { nombre: 'Víctor M.', texto: 'Muy buena experiencia de compra en CONINC. La asesoría fue clara, el producto cumplió con mis expectativas y la entrega se realizó de manera adecuada. Agradezco mucho la atención recibida.' },
  { nombre: 'Javier O.', texto: 'Quedé satisfecho con mi compra en CONINC. Desde el primer contacto recibí una atención profesional y me ayudaron a encontrar el equipo contra incendio que necesitaba. El proceso fue sencillo y el producto cumplió con mis expectativas.' },
  { nombre: 'Felipe O.', texto: 'Excelente atención por parte de CONINC. Me orientaron para encontrar la solución que necesitaba y durante el proceso siempre estuvieron disponibles para resolver mis preguntas. Estoy satisfecho con el producto adquirido.' },
  { nombre: 'Jackelin A.', texto: 'Mi experiencia de compra con CONINC fue muy buena. Recibí asesoría para seleccionar el equipo adecuado y la atención fue cordial y profesional. El producto cumplió con lo que buscaba y quedé muy satisfecha.' },
  { nombre: 'Julia M.', texto: 'Estoy muy satisfecha con mi experiencia en CONINC. La asesoría fue clara y me ayudaron a elegir el producto que necesitaba. Todo el proceso fue sencillo y la atención que recibí fue excelente.' },
  { nombre: 'Fernando A.', texto: 'Gracias a CONINC por la atención recibida. El proceso de compra fue muy sencillo y me orientaron para elegir el equipo adecuado para mi necesidad. El producto cumplió con mis expectativas y quedé satisfecho con la compra.' },
  { nombre: 'Verónica C.', texto: 'Tuve una experiencia muy positiva con CONINC. Me brindaron una atención amable y profesional y me ayudaron a resolver mis dudas antes de realizar la compra. El equipo adquirido cumplió con lo que necesitaba. Muy buena atención.' },
  { nombre: 'Sofía G.', texto: 'Muy buena experiencia comprando equipo contra incendio en CONINC. La atención fue excelente, me explicaron las opciones disponibles y pude encontrar un producto adecuado para lo que necesitaba. Quedé muy satisfecha con la compra.' },
  { nombre: 'Pedro A.', texto: 'Lo que más valoré de CONINC fue la atención y la asesoría. Me ayudaron a conocer las opciones disponibles y elegir el producto que mejor se ajustaba a mi necesidad. Además, el proceso de compra fue muy sencillo. Excelente experiencia.' },
  { nombre: 'Casares O.', texto: 'Tuvimos una experiencia muy positiva con CONINC. El equipo adquirido cumplió con nuestras expectativas y recibimos una atención profesional y amable durante el proceso. Agradecemos la asesoría y el seguimiento brindado.' },
];
