// ============================================================================
// src/data/cierre.ts — Fichas de cierre para completar retículas de 4.
// ----------------------------------------------------------------------------
// REGLA DEL SITIO (Frank, 2026-09-10): toda retícula de tarjetas va en filas
// de 4 y el total siempre en múltiplos de 4 (4, 8, 12…). Cuando el contenido
// real no alcanza (9 productos, 3 formatos, 2 zonas, 6 presentaciones), la
// fila se completa con FICHAS DE CIERRE: salidas útiles (cotizar, calcular,
// otro servicio), nunca contenido inventado para rellenar.
//
// Uso: el componente toma las primeras N fichas del set que le corresponde,
// donde N = (4 − total % 4) % 4. Con WhatsApp, `href` es el TEXTO del mensaje
// y se construye con waUrl(); el resto son rutas internas.
// El set de extintores del catálogo vive en extintores-catalogo.ts
// (`extCatalogoCierre`) y se reexporta aquí para tener un solo punto de uso.
// ============================================================================
import { extCatalogoCierre, type FichaCierre } from './extintores-catalogo';

export type { FichaCierre };

/** Fichas L4 de extintor y catálogo de extintores. */
export const cierreExtintores: FichaCierre[] = extCatalogoCierre;

/** Productos y fichas L4 que no son extintor (detección, gabinetes, señalización, soportes). */
export const cierreGeneral: FichaCierre[] = [
  {
    badge: 'Cotización a la medida',
    title: '¿No ves lo que buscas?',
    description: 'Dinos qué equipo necesitas y para qué área. Si se consigue, te lo cotizamos.',
    href: 'Hola, busco un equipo contra incendio que no vi en el sitio. ¿Me ayudan a cotizarlo?',
    ctaLabel: 'Cotizar por WhatsApp',
    image: '/images/general/inventario-proveedor-equipo-contra-incendio.avif',
    imageAlt: 'Inventario de equipo contra incendio en bodega',
    whatsapp: true,
  },
  {
    badge: 'Proyecto a la medida',
    title: 'Instalación de sistemas',
    description: 'Instalamos el equipo con planos, memoria técnica y pruebas de funcionamiento.',
    href: '/servicios/instalacion/',
    ctaLabel: 'Instalación',
    image: '/images/servicios/integracion-sistemas-contra-incendio.avif',
    imageAlt: 'Instalación de red contra incendio en un inmueble',
  },
  {
    badge: 'Antes de comprar',
    title: 'Diagnóstico de riesgo',
    description: 'Clasificamos tu inmueble con la NOM-002 para que compres lo que te toca.',
    href: '/servicios/diagnostico-de-riesgo/',
    ctaLabel: 'Diagnóstico de riesgo',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Levantamiento de riesgo de incendio en una planta',
  },
];

/** Formatos descargables (/plantillas/ y su detalle). */
export const cierrePlantillas: FichaCierre[] = [
  {
    badge: '¿Prefieres no llenarlo tú?',
    title: 'Gestión documental',
    description: 'Ordenamos el expediente del equipo y lo mantenemos al día con cada servicio.',
    href: '/servicios/gestion-documental/',
    ctaLabel: 'Gestión documental',
    image: '/images/servicios/etiquetado-inspeccion-extintor.avif',
    imageAlt: 'Documentación del equipo contra incendio',
  },
  {
    badge: 'Brigada',
    title: 'Capacitación DC-3',
    description: 'Capacitación con práctica de fuego y constancia DC-3 por participante.',
    href: '/servicios/capacitacion-dc3/',
    ctaLabel: 'Capacitación DC-3',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
    imageAlt: 'Capacitación de brigada con extintores',
  },
  {
    badge: 'Herramienta gratis',
    title: 'Verifica tu extintor',
    description: 'Revisa en minutos si tu extintor está vigente.',
    href: '/herramientas/verifica-tu-extintor/',
    ctaLabel: 'Verifica tu extintor',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión de un extintor junto a gabinete e hidrante',
  },
];

/** Zonas de cobertura (/cobertura/). */
export const cierreCobertura: FichaCierre[] = [
  {
    badge: 'Trámite local',
    title: 'Qué exige Protección Civil',
    description: 'El Programa Interno cambia entre CDMX y Estado de México. Aquí está cada uno.',
    href: '/proteccion-civil/',
    ctaLabel: 'Protección Civil',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Ruta de evacuación señalizada en nave industrial',
  },
  {
    badge: 'Confirma tu zona',
    title: '¿Tu inmueble está en otra zona?',
    description: 'Escríbenos la dirección y te confirmamos si te atendemos y con qué alcance.',
    href: 'Hola, quiero confirmar si dan servicio en mi zona. Mi inmueble está en:',
    ctaLabel: 'Cotizar por WhatsApp',
    image: '/images/general/hero-proveedor-equipo-contra-incendio.avif',
    imageAlt: 'Técnico revisando equipo contra incendio',
    whatsapp: true,
  },
];

/** Entidades de /proteccion-civil/. */
export const cierreProteccionCivil: FichaCierre[] = [
  {
    badge: 'Expediente',
    title: 'Gestión documental',
    description: 'La parte del equipo contra incendio del expediente, ordenada y al día.',
    href: '/servicios/gestion-documental/',
    ctaLabel: 'Gestión documental',
    image: '/images/servicios/etiquetado-inspeccion-extintor.avif',
    imageAlt: 'Documentación del equipo contra incendio',
  },
  {
    badge: 'Brigada y simulacros',
    title: 'Capacitación DC-3',
    description: 'Capacitación de brigada con constancia DC-3 y apoyo para los simulacros.',
    href: '/servicios/capacitacion-dc3/',
    ctaLabel: 'Capacitación DC-3',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
    imageAlt: 'Capacitación de brigada con extintores',
  },
];

/** Cuántas fichas de cierre hacen falta para cerrar filas de 4. */
export function faltanParaCuatro(total: number): number {
  return total === 0 ? 0 : (4 - (total % 4)) % 4;
}
