# Curso de IA Agéntica — concept map

A single-page Astro site that renders an interactive, video-game-style concept map for a course on agentic AI. Visitors explore fixed nodes on an SVG map; opening a node shows a side panel with progressive disclosure content. The map has three levels, **Base** (8 concepts), **Intermedio** (7 concepts) and **Avanzado** (8 concepts), switched from the header.

## Quick path

1. `npm install`
2. `npm run dev` — local dev server
3. `npm run build` — static output in `dist/`

## Deploy

Live site: <https://jrojasdeveloper.github.io/curso-ia-agentica-ctx/>

Every push to `main` builds and deploys through `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages). The workflow runs `npm ci`, `npm run build`, and publishes `dist/` as the Pages artifact; no manual step is needed.

GitHub Pages serves this project under `/curso-ia-agentica-ctx/`, so `astro.config.mjs` sets `base` only when `GITHUB_ACTIONS` is present. Local dev and local builds stay at `/`. To preview the production build locally, run `npm run build` and serve `dist/` from a static server.

Pages must keep "Build and deployment → Source" set to **GitHub Actions**; the workflow's `deploy` job fails if the repository is switched back to branch-based publishing.

## Content: where to edit concepts

All course content lives in `src/data/concepts.js`. It exports a `levels` map keyed by level id; each level owns its own `concepts`, `journeyOrder`, map hint, map aria-label and status line. Concept ids are unique across levels, so each id belongs to exactly one level. Each concept has:

| Field | Purpose |
|-------|---------|
| `id` | Used by the URL (`?concepto=<id>`), localStorage and panel wiring. Changing it needs coordination on the map/panel keys. |
| `number` | Position in the level journey, shown inside the node and in the panel kicker. |
| `title` | Panel heading (also `mapLabel` for the node label on the SVG). |
| `mapLabel` | Array of up to two short lines rendered under the node. |
| `tagline` | One-liner shown in panel and aria description. |
| `position`, `radius` | Fixed SVG coordinates in the 1200×800 viewBox. Edit to re-lay out nodes. |
| `connections` | Array of other concept ids in the same level; edges are de-duplicated when drawn. |
| `status` | `published` (analogy + guide sections render) or `coming-soon` (teaser only, dashed node). |
| `sections` | Guide content: `intro`, `bullets`, `steps`, or `code` (each section is a collapsed `<details>` layer). |

Publishing a coming-soon concept means: set `status` to `published`, fill `analogy` and `sections`, and drop `teaser`. Also add its SVG scene to `src/components/ConceptIllustration.astro`.

## Behavior notes

- **Levels** — the header switch sets `aria-pressed`, re-renders all nodes and edges for the selected level, resets the panel and drawers, and updates the level line under the title. The choice is stored in `curso-agente-level`.
- **URL state** — opening a panel sets `?concepto=<id>` via `history.replaceState`. `?nivel=avanzado` selects a level (base is the default and omits the param); `?nivel=avanzado&concepto=evals` opens that level with the panel. On load, a valid `?concepto=` wins over `?nivel=` so a shared concept link always opens its own level.
- **Progress** — visited node ids are stored per level in localStorage (`curso-agente-visited:base`, `curso-agente-visited:intermedio`, `curso-agente-visited:avanzado`); visited nodes and both-visited edges glow on the map.
- **Drawer links** — Tips and Errores frecuentes point to base concepts. Clicking one while in Intermedio or Avanzado switches to Base first, then opens the panel.
- **Theme** — dark neon is the default; `prefers-color-scheme` applies before first paint when there is no stored choice (`curso-agente-theme`).
- **Reduced motion** — `prefers-reduced-motion` disables the line-drawing and glow-pulse animations.
- **Client behavior** — one vanilla JS script in `src/pages/index.astro`; no framework runtime. The map markup lives in `src/lib/mapMarkup.js` so the server fallback and the client level switch share the same layout logic.

## Layout rules

All three levels use the same 1200×800 viewBox. Keep at least ~140 px between node centers (radii are 44–56) and leave room for the two-line labels below each node. Base positions and connections are intentionally unchanged; Intermedio reads left to right with `claude-code` as the hub; Avanzado also reads left to right with `observabilidad` as the hub and `legado-con-agentes` as the closing boss.

## Next step

To add a concept, append it to the right level in `concepts.js`, add its id to that level's `journeyOrder`, wire its `connections` inside the same level, and add an SVG scene keyed by its id in `ConceptIllustration.astro`.
