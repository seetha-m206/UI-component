---
component: "Duda Read Only Default Role Dialog"
ui_category: "Overlays > Dialogs"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Default role details dialog has Close, disabled Blogger role name, permission search, disabled checked or unchecked permission rows, Cancel and Duplicate Role. Blog, AI Assistant and Copilot were checked. Editor and Site publish were unchecked."
---

# Duda Read Only Default Role Dialog

## Location

- **OBSERVED:** Authenticated Duda dashboard under https://my.duda.co/home/dashboard/, inspected 7 October 2026 in Codex in-app browser on M5.

## Screenshot

- **OBSERVED:** Local evidence at `Internal/scratch-2026-10/duda/15-default-role.jpg`. Captures are local research evidence, not published assets.

## Structure

- **OBSERVED:** Default role details dialog has Close, disabled Blogger role name, permission search, disabled checked or unchecked permission rows, Cancel and Duplicate Role. Blog, AI Assistant and Copilot were checked. Editor and Site publish were unchecked.

## Actions

| Element and user action | Function and visible result |
| --- | --- |
| Safe inspection or interaction | **OBSERVED:** Entered Blog in permission search. One result found and only the checked Blog permission row remained. Closed the dialog. Duplicate Role was not activated. |

## Behavior & States

- **OBSERVED:** Default role details dialog has Close, disabled Blogger role name, permission search, disabled checked or unchecked permission rows, Cancel and Duplicate Role. Blog, AI Assistant and Copilot were checked. Editor and Site publish were unchecked.
- **NEEDS VERIFICATION:** Backend enforcement, duplicate-role flow and editable custom-role validation are unverified. Checked boxes prove display state only.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-default-role-dialog`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 15-default-role.jpg |
| empty | RECONSTRUCTION · empty/filter state | Synthetic local state, provider not observed |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Rules & Validation

- **OBSERVED:** This record reports displayed states and the actions explicitly listed above.
- **NEEDS VERIFICATION:** Failure responses, loading duration, complete keyboard order, reduced motion and backend validation were not exercised.

## Technical Data

- **OBSERVED / DOM:** The associated accessibility or DOM snapshot in the local evidence folder captures rendered labels, roles, links and state. These snapshots describe presentation, not internal source code.
- **NEEDS VERIFICATION:** JavaScript handlers, API methods and responses, persistence and authorization checks were not captured. Preview iframe URLs are document navigation evidence, not an API contract.

## Reconstruction Guidance

- **RECONSTRUCTION:** If implemented locally, use fictional agency names such as Maple Studio and fictional client or site rows. Keep irreversible and provider-writing actions inert until a separately authorized workflow exists. No local interactive preview is claimed by this documentation record.

## Needs Verification

- **NEEDS VERIFICATION:** Backend enforcement, duplicate-role flow and editable custom-role validation are unverified. Checked boxes prove display state only.

## Sources

- **OBSERVED:** Official authenticated Duda UI on 2026-10-07. Screenshot and DOM evidence are indexed in `Internal/scratch-2026-10/duda/evidence-index.json`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 15-default-role.jpg, 16-role-search.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.
