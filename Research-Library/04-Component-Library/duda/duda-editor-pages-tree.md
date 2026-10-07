---
component: "Duda Editor Pages and Anchors Tree"
ui_category: "Navigation > Trees"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Duda Editor Pages and Anchors Tree

## Location

- **OBSERVED:** Official authenticated Duda editor and dashboard on 2026-10-07, using the fictional disposable unpublished research site. Evidence is local to M5.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/duda/24-pages-panel.jpg` with associated rendered DOM and accessibility snapshots. Provider account fields stay in local evidence and are never fixture data.

## Structure

- **OBSERVED:** Pages panel contains Pages and Popups tabs, Add Page, Page Recommendations and a page/anchor list. Home, About, Services, Project, News & Blog and Contact appear beside anchor entries. Row menus and drag handles are visible.

## Actions

| User action | Visible outcome |
| --- | --- |
| Safe research action | **OBSERVED:** Switched to Popups and back to Pages. Later selected Contact through its tooltip row. Top bar changed to Contact and iframe loaded the Contact page. No page was reordered or deleted. |


### Dated deeper action evidence

 — 7 October 2026

### Page tree actions

| Element | Trigger | Result and verification limit | Screenshot IDs |
| --- | --- | --- | --- |
| Page row Contact | Click | Canvas selects Contact. Close panel before targeting obscured form | 80 |
| Add Page → Blank Page | Click | Creation dialog then Empty page | 74, 76 |
| New page overflow → Rename | Click and save | Maple Research Notes, retained after reload | 77–79, 83 |

- See [duda-blank-page-and-rename](duda-blank-page-and-rename.md) for detailed preconditions, state traces, rules and remaining gaps.

**OBSERVED:** This dated addendum supersedes earlier no-collection/no-page-creation scope only for the fictional private research site. Other historical observations remain unchanged.


## Behavior & States

- **OBSERVED:** Switched to Popups and back to Pages. Later selected Contact through its tooltip row. Top bar changed to Contact and iframe loaded the Contact page. No page was reordered or deleted.
- **NEEDS VERIFICATION:** Dragging, nesting, hiding, renaming, SEO row menu and new page insertion outcomes remain unverified.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-editor-pages-tree`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 24-pages-panel.jpg |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Rules & Validation

- **OBSERVED:** Only displayed constraints and states in this record were verified. The research project remains unpublished.
- **NEEDS VERIFICATION:** Dragging, nesting, hiding, renaming, SEO row menu and new page insertion outcomes remain unverified.

## Technical Data

- **OBSERVED / DOM:** Associated DOM and accessibility snapshots preserve rendered labels, roles, controls and selected, pressed or disabled state when exposed.
- **OBSERVED / navigation:** Editor canvas is a nested preview document. Changes in visible panel or device context are recorded in the matching snapshots.
- **NEEDS VERIFICATION:** Internal JavaScript handlers, API request/response contracts, backend validation and authorization enforcement were not captured. Displayed copy does not prove successful execution.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use fictional Maple Studio sites, clients and content in a local implementation. Documented settings values are observed template examples. No live integration, notification, publication or destructive handler is implied. The local preview is registered below. Its interactions are reconstruction and do not establish provider outcomes.

## Needs Verification

- **NEEDS VERIFICATION:** Dragging, nesting, hiding, renaming, SEO row menu and new page insertion outcomes remain unverified.

## Sources

- **OBSERVED:** Official Duda UI in Codex in-app browser, 7 October 2026. Dated, hashed local evidence index: `Internal/scratch-2026-10/duda/evidence-index-continuation.json`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 24-pages-panel.jpg, 83-page-reload-persistence.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.
