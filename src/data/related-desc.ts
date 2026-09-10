type RelatedDescriptions = Record<string, Record<string, string>>

const descriptions: RelatedDescriptions = {
  plantillas: {
    'acta-simulacro-evacuacion': 'Documenta tiempos, hallazgos y responsables',
    'bitacora-revision-extintores': 'Registra la revisión mensual de cada extintor',
    'censo-brigada-emergencia': 'Ordena brigadas, roles y constancias',
  },
  tramites: {
    cdmx: 'Confirma si tu establecimiento debe presentar programa',
    edomex: 'Reúne requisitos para registrar tu programa',
  },
  zonas: {
    cdmx: 'Servicio en sitio en las 16 alcaldías',
    edomex: 'Cobertura en la zona conurbada del Estado de México',
  },
  servicios: {
    instalacion: 'Instala sistemas dimensionados al riesgo real',
    mantenimiento: 'Mantén tus extintores vigentes y operativos',
    inspeccion: 'Detecta faltantes y vencimientos antes de verificar',
    'prueba-hidrostatica': 'Comprueba la seguridad del cilindro cada cinco años',
    'diagnostico-de-riesgo': 'Define el equipo según el riesgo del inmueble',
    'capacitacion-dc3': 'Capacita brigadas y acredita sus competencias',
    'gestion-documental': 'Integra el expediente listo para verificación',
  },
  articulos: {
    'mantenimiento-recarga-extintores-nom': 'Conoce qué exige la norma para mantenerlos',
  },
}

export function relDesc(collection: string, id: string, fallback?: string): string | undefined {
  return descriptions[collection]?.[id] ?? fallback
}
