---
component: "Duda Blank Page Creation and Rename"
ui_category: "Navigation > Page Management"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Dated screen anatomy, action traces and explicit provider evidence limits."
---

# Duda Blank Page Creation and Rename

## Location

Editor → Pages → Add Page → Blank Page. Add Page opens a type menu: Page Builder, Blank Page, Generate a page, Designed Page, Dynamic Page, Navigation Folder and Page URL. Blank Page opens an Add Page dialog with General settings, Page Name textbox initially Empty, previewed name and Add Page. The created page has a blank main canvas, inherited header/footer and an entry in Pages.

## Screenshot

**OBSERVED:** Local `74-blank-page-dialog.jpg`, `75-blank-page-empty-name.jpg`, `76-blank-page-created.jpg`, `77-page-action-menu.jpg`, `78-page-rename-input.jpg`, `79-page-renamed.jpg`, `83-page-reload-persistence.jpg`.

## Actions

| Control | Trigger and function | Result/new state | Limit |
| --- | --- | --- | --- |
| Add Page | Click, choose Blank Page | Creation dialog | Other types only menu-observed |
| Page Name | Clear initial name | Add Page remained enabled | Empty name was not submitted. No server validation claim |
| Page Name and Add Page | Attempted Maple Research Notes name then clicked Add Page | Actual created page was named Empty | Creation-time name application is not verified. Treat as an interaction timing uncertainty |
| New page overflow | Click | Rename, Show or Hide from Navigation, Duplicate, Lock Editing for Client, Publish Page, Page URL, Edit Page SEO, Set as Home Page, Set Page Access, Convert to Dynamic Page, Set as a Draft, Delete | Only Rename executed |
| Rename | Click | Rename Page editor with Page Name, Rename and helper explaining URL is unaffected | Helper is observed product copy |
| Page Name and Rename | Enter Maple Research Notes, blur with Tab, verify input, click Rename | Page row becomes Maple Research Notes | Before and after captured |
| Reload | Reopen Pages | Maple Research Notes remains listed | Persistence verified |

## Technical Data

Rename helper states that the page URL does not change and directs the user to Page URL. This is documented as displayed behavior, not an independently compared URL invariant. DOM uses dialog/textbox/button for creation and tooltip-wrapped generic menu entries for page actions. The subsequent rename input was explicitly blurred and checked before submission after the creation-time name mismatch. No duplicate-name validator, page request payload or exact mutation response was captured.

## Needs verification

Creation-time naming after confirmed blur, empty/duplicate/long-name submission, page URL normalization, draft and navigation visibility persistence, dynamic-page binding, accessible focus return, undo/redo and duplicate semantics remain open. Publish, access changes, client locking and deletion were not executed.

## Evidence boundary

**OBSERVED:** Authenticated Duda UI on M5, 7 October 2026, in the fictional unpublished research site `d7a8e0dc`. The site remains private. Screenshots, rendered DOM and accessibility snapshots are retained locally.

**NEEDS VERIFICATION:** Internal JavaScript functions and application state stores were not inspected. Network records contain method, origin, path, status and event sequence only. No request bodies, response bodies, headers or query strings were retained. HTTP success does not establish a complete API contract, authorization enforcement or downstream execution.

**RECONSTRUCTION:** Use fictional Maple Studio content and local handlers. Reproduce observed controls and states, label simulated outcomes, and do not connect publication, notifications or external services.

## Sources

- **OBSERVED:** `Internal/scratch-2026-10/duda/evidence-index-deep.json`, `action-traces-deep.json`, and `screen-action-audit.md`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 74-blank-page-dialog.jpg, 78-page-rename-input.jpg, 79-page-renamed.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.

## Structure

**OBSERVED:** See the dated Location, Screenshot and Actions sections for screen anatomy and controls. Page Name, Add Page, Rename.

## Rules & Validation

**OBSERVED:** Provider rules are limited to the dated action results above. **RECONSTRUCTION:** Local preview validation is a fixture aid. It does not establish backend constraints.

## Behavior & States

**OBSERVED:** Dated action outcomes above describe provider states. Local state definitions are separately identified below.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-blank-page-and-rename`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 74-blank-page-dialog.jpg |
| validation | RECONSTRUCTION · local required validation | Synthetic local state, provider not observed |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.
