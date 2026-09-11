// ============================================================================
// src/lib/giros-relacionados.ts — Enlaces inversos «Giros que lo necesitan».
// ----------------------------------------------------------------------------
// Autor: Claude (2026-09-11). Cada ficha de /proteccion-civil/<giro>/ declara
// en su `vitrina` 8 claves de GIROS_CATALOGO; cada clave apunta a una página de
// producto o servicio. Esta función invierte esa relación: dada la ruta de una
// página L3/L4, devuelve las fichas que la recomiendan, para que el producto o
// servicio enlace de vuelta a los giros que lo necesitan (interlinking del
// estudio del directorio, §8).
//
// REGLAS
// · Se compara la ruta sin fragmento (#…): «lamparas» cuenta para
//   /productos/senalizacion/. Las claves por WhatsApp (sin ruta) no cuentan.
// · /productos/extintores/ (L3) agrupa todas las claves de extintor.
// · Orden: primero las fichas donde la clave aparece antes en su vitrina (es
//   más central para ese giro); a igualdad, por `orden` de la ficha.
// · Retícula de 4 (regla del sitio): el componente muestra 7 fichas + tarjeta
//   de cierre (8) si hay 7 o más; 3 + cierre (4) si hay de 3 a 6; y NADA si hay
//   menos de 3 (una sección con una o dos fichas no aporta).
// ============================================================================
import { getCollection, type CollectionEntry } from 'astro:content';
import { GIROS_CATALOGO } from '@data/giros-catalogo';

/** Rutas L3 que agrupan varias claves del catálogo. */
const AGRUPADAS: Record<string, string[]> = {
  '/productos/extintores/': ['extintores', 'pqs', 'co2', 'clase_k', 'agua_afff', 'agente_limpio'],
};

const sinFragmento = (href: string) => href.split('#')[0] ?? href;
const normaliza = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** Claves del catálogo que apuntan a `path`. */
export function clavesDeRuta(path: string): string[] {
  const ruta = normaliza(sinFragmento(path));
  if (AGRUPADAS[ruta]) return AGRUPADAS[ruta];
  return Object.entries(GIROS_CATALOGO)
    .filter(([, card]) => !card.whatsapp && card.href.startsWith('/'))
    .filter(([, card]) => normaliza(sinFragmento(card.href)) === ruta)
    .map(([clave]) => clave);
}

export type GiroRelacionado = CollectionEntry<'giros'>;

/** Fichas que recomiendan la página `path`, ya ordenadas y recortadas a la retícula. */
export async function girosQueLoNecesitan(path: string): Promise<{ fichas: GiroRelacionado[]; total: number }> {
  const claves = clavesDeRuta(path);
  if (!claves.length || normaliza(path) === '/productos/') return { fichas: [], total: 0 };

  const giros = await getCollection('giros', ({ data }) => !data.draft);
  const conPosicion = giros
    .map((g) => {
      const posiciones = claves.map((c) => g.data.vitrina.indexOf(c)).filter((i) => i >= 0);
      return { g, pos: posiciones.length ? Math.min(...posiciones) : -1 };
    })
    .filter((x) => x.pos >= 0)
    .sort((a, b) => a.pos - b.pos || a.g.data.orden - b.g.data.orden);

  const total = conPosicion.length;
  const cupo = total >= 7 ? 7 : total >= 3 ? 3 : 0;
  return { fichas: conPosicion.slice(0, cupo).map((x) => x.g), total };
}
