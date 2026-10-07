---
component: "Duda Collections Empty Library"
ui_category: "Data Display > Collections"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Duda Collections Empty Library

## Location

- **OBSERVED:** Official authenticated Duda editor and dashboard on 2026-10-07, using the fictional disposable unpublished research site. Evidence is local to M5.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/duda/31-collections-empty.jpg` with associated rendered DOM and accessibility snapshots. Provider account fields stay in local evidence and are never fixture data.

## Structure

- **OBSERVED:** Collections empty state explains shared databases and automatically updated dynamic pages, with New collection and Learn about collections.

## Actions

| User action | Visible outcome |
| --- | --- |
| Safe research action | **OBSERVED:** Opened New collection menu. Start from scratch, Use a template, Create an image collection and External collection choices were visible. No collection was created. |


### Dated deeper action evidence

 — 7 October 2026

### Collection library transitions

| Element | Trigger | Result and verification limit | Screenshot IDs |
| --- | --- | --- | --- |
| CMS → Collections | Open manager | Initially empty, now one persisted internal collection with two items | 31, 65, 73 |
| New collection | Open source menu | Four choices, Start from scratch executed | 64, 65 |
| Maple Research Services | Open collection | Schema grid and saved values | 73 |

- See [duda-internal-collection-editor](duda-internal-collection-editor.md) for detailed preconditions, state traces, rules and remaining gaps.
- See [duda-collection-row-editor](duda-collection-row-editor.md) for detailed preconditions, state traces, rules and remaining gaps.

**OBSERVED:** This dated addendum supersedes earlier no-collection/no-page-creation scope only for the fictional private research site. Other historical observations remain unchanged.


## Behavior & States

- **OBSERVED:** Opened New collection menu. Start from scratch, Use a template, Create an image collection and External collection choices were visible. No collection was created.
- **NEEDS VERIFICATION:** Schema validation, internal collection rows, dynamic bindings and external synchronization remain unverified.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-collections-library`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 31-collections-empty.jpg |
| empty | RECONSTRUCTION · empty/filter state | Synthetic local state, provider not observed |
| populated | RECONSTRUCTION · fictional populated data | Synthetic local state, provider not observed |
| row-open | OBSERVED structure · row detail | 70-collection-row-editor.jpg |
| field-error | OBSERVED failure · HTTP 400, local simulation | 67-collection-empty-field-validation.jpg |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Rules & Validation

- **OBSERVED:** Only displayed constraints and states in this record were verified. The research project remains unpublished.
- **NEEDS VERIFICATION:** Schema validation, internal collection rows, dynamic bindings and external synchronization remain unverified.

## Technical Data

- **OBSERVED / DOM:** Associated DOM and accessibility snapshots preserve rendered labels, roles, controls and selected, pressed or disabled state when exposed.
- **OBSERVED / navigation:** Editor canvas is a nested preview document. Changes in visible panel or device context are recorded in the matching snapshots.
- **NEEDS VERIFICATION:** Internal JavaScript handlers, API request/response contracts, backend validation and authorization enforcement were not captured. Displayed copy does not prove successful execution.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use fictional Maple Studio sites, clients and content in a local implementation. Documented settings values are observed template examples. No live integration, notification, publication or destructive handler is implied. The local preview is registered below. Its interactions are reconstruction and do not establish provider outcomes.

## Needs Verification

- **NEEDS VERIFICATION:** Schema validation, internal collection rows, dynamic bindings and external synchronization remain unverified.

## Sources

- **OBSERVED:** Official Duda UI in Codex in-app browser, 7 October 2026. Dated, hashed local evidence index: `Internal/scratch-2026-10/duda/evidence-index-continuation.json`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 31-collections-empty.jpg, 73-collection-reload-persistence.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.
