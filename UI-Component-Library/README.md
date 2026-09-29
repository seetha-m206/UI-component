# UI Component Library

A generated documentation site for the reverse-engineered UI components in
[`Research-Library/`](../Research-Library) — one browsable, searchable page per component,
covering Product → Screen → Component → Action → DOM → JavaScript → Network → CSS → Animation.

Built loosely on the pattern in
[`UI_COMPONENT_LIBRARY_INSTRUCTIONS.md`](../UI_COMPONENT_LIBRARY_INSTRUCTIONS.md), adapted to this
project's actual content shape: instead of a strict multi-file-per-component contract
(`component.yaml` + `registry.json` + `preview.html` + `code.tsx` + ...), each component is a
single Markdown file with frontmatter, matching what the research process already produces
(`Research-Library/00-Framework/templates/component-template.md`).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run test` | Run the Vitest suite |
| `npm run type-check` | `tsc --noEmit` |
| `npm run lint` | Oxlint |
| `npm run format` | Prettier write |

## Project structure

```
src/
├── content/brands/<product>/components/<id>.md   ← one file per documented component
├── components/shell/       ← Sidebar, Layout (search, nav, skip link)
├── components/detail/      ← Tabs, Markdown renderer
├── pages/                  ← OverviewPage (catalogue), ComponentDetailPage
├── utils/loadComponents.ts ← import.meta.glob discovery + parsing, no manual registration
├── utils/parseComponentMarkdown.ts ← frontmatter + `## Heading` section splitter
├── types/content.types.ts
└── styles/                 ← design tokens (variables.css), reset, global markdown styles
```

## How this stays a "no manual navigation editing" system

Per the source spec's Definition of Done, adding a component must never require touching shared
navigation code. Here: `loadComponents.ts` uses `import.meta.glob` to discover every `*.md` file
under `content/brands/*/components/` at build time. The sidebar, the overview catalogue, and
routing are all derived from that same discovered list — drop in a new file, and it appears
everywhere automatically.

## Adding a new product (brand)

This project is explicitly multi-product, not Zoho-Forms-specific — its own name says so. To add
components from a newly-researched product (e.g. once Zoho Social's live exploration is done):

1. Create `src/content/brands/<product-slug>/components/`.
2. Copy each finished component record from
   `Research-Library/04-Component-Library/<product-slug>/*.md` into that folder as-is.
3. Add two frontmatter fields these records don't have yet (the research templates don't include
   them, since they're presentation-only concerns):
   - `status: "complete" | "partial" | "incomplete"` — `"incomplete"` for anything flagged as
     needing a second pass in the source record; `"partial"` if it has open ⚠️ flags but is mostly
     done; `"complete"` otherwise.
   - `summary: "..."` — one sentence, becomes the catalogue-row and sidebar description.
4. If the new product belongs to a product category already in the sidebar (e.g. another form
   builder), add one line for its brand slug to `PRODUCT_GROUP_MAP` in `src/utils/loadComponents.ts`
   so it nests under that same collapsible group (e.g. `"Forms"`) instead of falling into the
   `"Other"` catch-all group. This is the one manual step — everything else in the sidebar/router/
   catalogue is derived automatically, `npm run dev` picks up the new content immediately.

## Adding a single new component to an existing product

Same as step 2–3 above, just one file, into the existing `content/brands/<product-slug>/components/`
folder.

## Content contract (per component file)

Frontmatter (all required):

```yaml
---
component: "Display name"
ui_category: "Group > Subgroup"   # first segment before '>' becomes the sidebar/catalogue group
source_product: "Product name"
last_verified: "YYYY-MM-DD"
status: "complete" | "partial" | "incomplete"
summary: "One sentence."
---
```

Body: standard `## Heading` sections from `component-template.md`
(Location, Structure, Actions, Behavior & States, Rules & Validation, Technical Data, Cross-Component
Pattern Note, Competitor Comparisons, Best Observed Approach, Sources, plus any ad hoc
`Second-Pass Flags`/`Methodological Note` sections). `ComponentDetailPage.tsx`'s `TAB_MAP` maps these
headings onto the page's tabs (Overview / Rules / Technical Data / Lessons / Comparisons / Sources) —
a tab is only rendered when at least one matching section exists, so nothing ever ships an empty tab.

## Design standard

This site's own visual/interaction quality is benchmarked against two references, kept separate on purpose:

- **Centilio UI OS** (`docs-rosy-ten-34.vercel.app`) — the IA/polish reference used for the 2026-09-28 visual pass (dark-mode tokens, collapsible sidebar, top Header, per-category collapse). Its own "Page details" sidebar (Section / Kind / Status / linear progress bar / checklist) inspired the idea behind this site's **Research Coverage panel** on every component page (`src/components/detail/ResearchCoveragePanel.tsx`), but that panel is deliberately named and designed differently — a radial coverage ring plus a wrapped chip grid, not a linear bar and vertical checklist — so the two sites read as distinct systems, not a copy. It tracks this site's own 10-part component-record anatomy (Overview, Rules, Technical Data, Lessons, Comparisons, Sources, Interactive preview, Code, Accessibility, Related components) computed live from real per-record data, not a manually-maintained number.
- **`/product-suite-design-principles-v1.7-desktop.md`** (repo root) — a much deeper, numbered rulebook (15 core principles, exact component dimensions/spacing/colour mapping, loading/destructive-action/table contracts, a 132-point release-gate checklist) for a *different*, larger product suite. It is the formal standard to check this site against for anything not yet covered by the lighter Centilio pass — button sizing (§3.1), popup/toast dimensions (§3.5–3.6), table toolbar anatomy (§3.13, §4.4), loading-state/skeleton rules (§4.1), and the Section 8 checklist for a full compliance audit. **Not yet fully applied here** — the 2026-09-28/29 passes covered shell/navigation/IA (roughly principles P1/P5) and the Research Coverage tracker; a full pass against the remaining checklist (buttons, tables, toasts, accessibility, performance) is a separate, larger piece of work, not silently assumed done.

## What's intentionally not implemented (vs. the source spec)

- No `preview.html` live-rendered component previews — our source material is narrative
  documentation of a third-party product's live behavior (DOM/CSS/JS excerpts), not our own
  installable component source, so there's nothing to render as an isolated interactive preview.
- No `registry.json` Props table / variants / a11y / changelog as separate structured files — this
  content lives in prose inside the Technical Data / Rules sections instead.
- No `vector.json` retrieval records yet — worth adding once this site needs AI/semantic search
  rather than the current substring filter.
- Product-level research (screens, workflows, pricing, competitors — see
  `Research-Library/01-Zoho-Primary-Products/<product>.md`) is **deliberately out of scope** for
  this site; it stays in `Research-Library/` as reference material, not converted into pages here.

## Tech stack

| Layer | Choice |
|---|---|
| Build | Vite 8 |
| UI | React 19 + TypeScript |
| Routing | react-router-dom |
| Content | Markdown + frontmatter, loaded via `import.meta.glob`, rendered with `marked` |
| Styling | CSS Modules + a shared token file (`styles/variables.css`) |
| Testing | Vitest + Testing Library |
