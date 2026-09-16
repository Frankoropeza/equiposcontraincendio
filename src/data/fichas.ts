// Valores de respaldo para las fichas L4; el contenido vive en el frontmatter.
import type { FichaData, FichaHeads, HeadBody, Pillar } from './ficha-schema';

export type { FichaData, FichaHeads, HeadBody, Pillar };

export const PILLARS_DEFAULT: Pillar[] = [
  { icon: 'doc', title: 'Ficha técnica incluida', desc: 'Cada equipo sale con su ficha técnica para tu expediente.' },
  { icon: 'check', title: 'Instalación y señalamiento', desc: 'Lo montamos a la altura correcta y con su señal, si lo necesitas.' },
  { icon: 'clock', title: 'Recarga y mantenimiento', desc: 'Servicio anual y recarga con el mismo proveedor que te lo vendió.' },
  { icon: 'pin', title: 'CDMX y Estado de México', desc: 'Entregamos e instalamos en toda la zona metropolitana.' },
];

export const HEADS_DEFAULT: FichaHeads = {
  vitrina: ['Los datos clave resumen lo que necesitas para comparar este equipo contra incendio con cualquier otra opción: agente, alcance, norma de producto y el servicio que pide una vez instalado.', 'Si ya sabes qué necesitas, escríbenos por WhatsApp con la cantidad y el domicilio de entrega; si todavía no, la ficha completa está abajo.'],
  presentaciones: ['Cada presentación cambia el alcance, el peso y el lugar donde conviene montarla. Compararlas antes de cotizar evita comprar de más en una zona y quedarte corto en otra.', 'Dinos superficie, giro y cuántos puntos quieres cubrir: te decimos qué presentación conviene y en qué cantidad, sin cobrar la visita de asesoría.'],
  comparativa: ['La tabla pone frente a frente capacidad, formato y clases de fuego de todas las presentaciones para que la decisión se tome con el dato, no con el precio de lista.', 'Es la misma tabla que usamos al cotizar. Si tu inmueble mezcla riesgos, lo normal es combinar dos presentaciones: te armamos el surtido.'],
  guia: ['Aquí va el criterio de compra completo: dónde conviene, qué capacidad elegir, a qué altura colocarlo y cada cuándo le toca mantenimiento conforme a la norma.', 'Léela antes de pedir precio. Con esas cuatro decisiones tomadas, la cotización sale en minutos y el equipo llega listo para pasar una inspección.'],
  giros: ['Cada ficha de Protección Civil lista el equipo que le piden a ese tipo de negocio. Si tu giro aparece abajo, ahí están sus requisitos completos y verificados.', 'Ver tu giro antes de comprar evita el error más caro: equiparte con lo que cabía en el presupuesto y no con lo que pide la norma para tu actividad.'],
  relacionados: ['El equipo contra incendio no trabaja solo: la señalización, el soporte y el servicio anual forman parte del mismo expediente que revisa la autoridad.', 'Cotiza todo con un mismo proveedor y te queda una sola factura, una sola visita y un solo calendario de mantenimiento.'],
  faq: ['Reunimos las dudas que más nos llegan por WhatsApp al cotizar este equipo, resueltas con la norma mexicana aplicable y con lo que vemos en instalaciones reales.', 'Si tu caso es distinto, escríbenos con tu giro y superficie: te orientamos antes de cotizar.'],
};

export const FICHA_DEFAULT: Omit<FichaData, 'heroBadge' | 'heroTitle' | 'descRight' | 'norma' | 'claves'> = {
  pillars: PILLARS_DEFAULT,
  showcaseTitle: 'Datos clave del equipo',
  showcaseAccent: 'contra incendio',
  showcaseDesc: 'Agente, clases de fuego, norma de producto y servicio que pide.',
  faqAccent: 'sobre este equipo',
  guia: { title: 'Lo que conviene saber', titleAccent: 'antes de comprar', desc: 'Dónde conviene, cómo elegir, dónde colocarlo y qué servicio pide.' },
};
