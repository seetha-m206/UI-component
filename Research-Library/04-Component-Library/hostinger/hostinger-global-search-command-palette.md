---
component: "Hostinger Global Search Command Palette"
ui_category: "Navigation > Command Palette"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Global Search Command Palette

## Location

- **OBSERVED:** Global hPanel header on the authenticated Home route.

## Screenshot

- **NEEDS VERIFICATION:** The open palette was visually inspected in the browser session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** The Search button opens a `role=dialog` popover containing a labelled search input, a `Command K` hint, category checkboxes, matching destinations, and an Agent fallback.
- **OBSERVED / CSS SAMPLE:** The panel measured 720 px wide with a 24 px radius, white background, subtle 1 px border, and 8 px by 16 px shadow. The search input measured 36 px high with 14 px text.

## Actions

| User action | Visible outcome |
| --- | --- |
| Open Search | Palette appears over the current route. |
| Enter `SEO` | The observed account showed an Agent fallback and no direct route result. |
| Press Escape | Palette closes and the route remains unchanged. |

## Behavior & States

- **OBSERVED:** Category controls included All and VPS in the inspected state.
- **NEEDS VERIFICATION:** Result ranking, keyboard arrow navigation, focus restoration, loading, error, and permission-filtered results.

## Technical Data

- **OBSERVED / DOM:** Input id `search-input`, accessible label `Search`, class `h-input__field`, and surrounding `h-popover` dialog.
- **NEEDS VERIFICATION:** Internal search index, API requests, analytics, debouncing, and JavaScript handlers.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use a centred modal command palette with category filters and an AI fallback. Treat observed dimensions as samples rather than design tokens.

## Sources

- **OBSERVED:** Authenticated Hostinger hPanel and `Internal/scratch-2026-10/hostinger/individual-component-evidence.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-global-search-command-palette` uses fictional local data and sends no Hostinger request.
- `open` — observed or observed-structure starting state.
- `no-route` — observed or observed-structure starting state.
- `closed` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
