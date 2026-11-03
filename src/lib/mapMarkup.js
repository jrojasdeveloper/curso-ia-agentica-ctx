/**
 * Shared SVG markup builder for the concept map.
 * Used by the Astro component for the server-rendered fallback and by the
 * client script when switching levels (it replaces the map contents).
 */

const XML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (char) => XML_ESCAPES[char]);
}

/** Build a unique edge list (draw each connection once, no duplicates). */
export function buildEdges(concepts) {
  const seen = new Set();
  const edges = [];
  for (const concept of concepts) {
    for (const target of concept.connections) {
      const key = [concept.id, target].sort().join('~');
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({ source: concept.id, target });
      }
    }
  }
  return edges;
}

/** Straight edge with a gentle perpendicular curve so lines stay readable. */
function edgePath(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const mx = (a.x + b.x) / 2 + (-dy / len) * 26;
  const my = (a.y + b.y) / 2 + (dx / len) * 26;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

/** Render the edges and nodes markup that lives inside the map <svg>. */
export function renderMapMarkup(concepts) {
  const byId = new Map(concepts.map((c) => [c.id, c]));
  const edges = buildEdges(concepts);

  const edgeMarkup = edges
    .map((edge) => {
      const source = byId.get(edge.source);
      const target = byId.get(edge.target);
      if (!source || !target) return '';
      return `<path class="edge" data-source="${escapeXml(edge.source)}" data-target="${escapeXml(
        edge.target
      )}" d="${edgePath(source.position, target.position)}"></path>`;
    })
    .join('');

  const nodeMarkup = concepts
    .map((concept) => {
      const { x, y } = concept.position;
      const r = concept.radius;
      const isSoon = concept.status !== 'published';
      const labelY = y + r + 24;
      const stateClass = isSoon ? 'is-soon' : 'is-open-to-visit';
      const description = isSoon
        ? `En construcción. ${concept.tagline}`
        : `Concepto ${concept.number} de ${concepts.length}. ${concept.tagline}`;
      const ariaLabel = `${concept.title}. ${description} Presione Enter para abrir el panel.`;
      const soonChip = isSoon
        ? `<text class="soon-chip" x="${x}" y="${y - r - 14}" text-anchor="middle">En construcción</text>`
        : '';
      const labelLines = concept.mapLabel
        .map(
          (line, index) =>
            `<tspan x="${x}" dy="${index === 0 ? 0 : '1.25em'}">${escapeXml(line)}</tspan>`
        )
        .join('');

      return `<g class="node ${stateClass}" data-id="${escapeXml(
        concept.id
      )}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="${escapeXml(
        ariaLabel
      )}">${soonChip}<circle class="node-circle" cx="${x}" cy="${y}" r="${r}"></circle><circle class="node-ring" cx="${x}" cy="${y}" r="${r}"></circle><text class="node-number" x="${x}" y="${
        y + 8
      }" text-anchor="middle">${concept.number}</text><text class="node-label" x="${x}" y="${labelY}" text-anchor="middle" aria-hidden="true">${labelLines}</text></g>`;
    })
    .join('');

  return `<g class="edges" aria-hidden="true">${edgeMarkup}</g><g class="nodes">${nodeMarkup}</g>`;
}
