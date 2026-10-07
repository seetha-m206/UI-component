---
component: "Duda Canvas Layer Tree"
ui_category: "Navigation > Trees"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Duda Canvas Layer Tree

## Location

- **OBSERVED:** Official authenticated Duda editor and dashboard on 2026-10-07, using the fictional disposable unpublished research site. Evidence is local to M5.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/duda/48-layer-tree.jpg` with associated rendered DOM and accessibility snapshots. Provider account fields stay in local evidence and are never fixture data.

## Structure

- **OBSERVED:** Layers lists Header, Section entries and Footer, each with expand controls. Header expansion changed the global control from Expand All to Collapse All.

## Actions

| User action | Visible outcome |
| --- | --- |
| Safe research action | **OBSERVED:** Opened Layers and expanded Header without moving or editing a layer. |

## Behavior & States

- **OBSERVED:** Opened Layers and expanded Header without moving or editing a layer.
- **NEEDS VERIFICATION:** Nested selection detail, rename, reorder, hide/delete and keyboard tree semantics remain unverified.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-canvas-layer-tree`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 48-layer-tree.jpg |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Rules & Validation

- **OBSERVED:** Only displayed constraints and states in this record were verified. The research project remains unpublished.
- **NEEDS VERIFICATION:** Nested selection detail, rename, reorder, hide/delete and keyboard tree semantics remain unverified.

## Technical Data

- **OBSERVED / DOM:** Associated DOM and accessibility snapshots preserve rendered labels, roles, controls and selected, pressed or disabled state when exposed.
- **OBSERVED / navigation:** Editor canvas is a nested preview document. Changes in visible panel or device context are recorded in the matching snapshots.
- **NEEDS VERIFICATION:** Internal JavaScript handlers, API request/response contracts, backend validation and authorization enforcement were not captured. Displayed copy does not prove successful execution.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use fictional Maple Studio sites, clients and content in a local implementation. Documented settings values are observed template examples. No live integration, notification, publication or destructive handler is implied. The local preview is registered below. Its interactions are reconstruction and do not establish provider outcomes.

## Needs Verification

- **NEEDS VERIFICATION:** Nested selection detail, rename, reorder, hide/delete and keyboard tree semantics remain unverified.

## Sources

- **OBSERVED:** Official Duda UI in Codex in-app browser, 7 October 2026. Dated, hashed local evidence index: `Internal/scratch-2026-10/duda/evidence-index-continuation.json`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 48-layer-tree.jpg, 49-layer-expanded.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.
