// ============================================================================
// scroll-hint.ts — Afordancia de scroll horizontal (módulo de cliente).
// ----------------------------------------------------------------------------
// Marca cada contenedor con [data-scroll-hint] con data-at="none|start|middle|
// end" según su posición de scroll. El CSS de cada componente usa ese atributo
// (vía :has()) para mostrar el degradado del borde derecho y la nota «desliza»
// SOLO mientras quede contenido por ver. Sin dependencias.
// Lo importan los componentes con tablas/tiras anchas (RiskGuide, NormsTable,
// GiroDirectory, ExtintorCatalog y las tablas de /herramientas/).
// ============================================================================
const mark = (el: HTMLElement) => {
  const max = el.scrollWidth - el.clientWidth;
  if (max <= 2) {
    el.dataset.at = 'none';
    return;
  }
  el.dataset.at = el.scrollLeft <= 2 ? 'start' : el.scrollLeft >= max - 2 ? 'end' : 'middle';
};

const seen = new WeakSet<HTMLElement>();

export const initScrollHints = () => {
  document.querySelectorAll<HTMLElement>('[data-scroll-hint]').forEach((el) => {
    mark(el);
    if (seen.has(el)) return;
    seen.add(el);
    el.addEventListener('scroll', () => mark(el), { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(() => mark(el)).observe(el);
  });
};

initScrollHints();
addEventListener('resize', initScrollHints, { passive: true });
