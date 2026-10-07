---
component: "Duda Site Audit Priority Groups"
ui_category: "Analytics & Reporting > Audits"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Optimization Center expands SEO navigation and opens Site Audit. Priority totals shown were 2 high, 3 medium and 6 notice. Sections cover accessibility, on-page, authority, technical and visibility issues, with View Details, Fix It and Install App."
---

# Duda Site Audit Priority Groups

## Location

- **OBSERVED:** Official authenticated Duda editor and dashboard on 2026-10-07, using the fictional disposable unpublished research site. Evidence is local to M5.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/duda/35-site-audit.jpg` with associated rendered DOM and accessibility snapshots. Provider account fields stay in local evidence and are never fixture data.

## Structure

- **OBSERVED:** Optimization Center expands SEO navigation and opens Site Audit. Priority totals shown were 2 high, 3 medium and 6 notice. Sections cover accessibility, on-page, authority, technical and visibility issues, with View Details, Fix It and Install App.

## Actions

| User action | Visible outcome |
| --- | --- |
| Safe research action | **OBSERVED:** Expanded Optimization Center and read issue groups. Counts are displayed state for the research template. No correction or app installation was performed. LLMs.txt generated status is a provider display claim only. |

## Behavior & States

- **OBSERVED:** Expanded Optimization Center and read issue groups. Counts are displayed state for the research template. No correction or app installation was performed. LLMs.txt generated status is a provider display claim only.
- **NEEDS VERIFICATION:** Audit algorithm, regenerated results, correction outcomes and live search effects remain unverified.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-seo-audit-groups`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 35-site-audit.jpg |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Rules & Validation

- **OBSERVED:** Only displayed constraints and states in this record were verified. The research project remains unpublished.
- **NEEDS VERIFICATION:** Audit algorithm, regenerated results, correction outcomes and live search effects remain unverified.

## Technical Data

- **OBSERVED / DOM:** Associated DOM and accessibility snapshots preserve rendered labels, roles, controls and selected, pressed or disabled state when exposed.
- **OBSERVED / navigation:** Editor canvas is a nested preview document. Changes in visible panel or device context are recorded in the matching snapshots.
- **NEEDS VERIFICATION:** Internal JavaScript handlers, API request/response contracts, backend validation and authorization enforcement were not captured. Displayed copy does not prove successful execution.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use fictional Maple Studio sites, clients and content in a local implementation. Documented settings values are observed template examples. No live integration, notification, publication or destructive handler is implied. The local preview is registered below. Its interactions are reconstruction and do not establish provider outcomes.

## Needs Verification

- **NEEDS VERIFICATION:** Audit algorithm, regenerated results, correction outcomes and live search effects remain unverified.

## Sources

- **OBSERVED:** Official Duda UI in Codex in-app browser, 7 October 2026. Dated, hashed local evidence index: `Internal/scratch-2026-10/duda/evidence-index-continuation.json`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 35-site-audit.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.
