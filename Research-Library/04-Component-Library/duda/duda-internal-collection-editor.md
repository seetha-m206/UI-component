---
component: "Duda Internal Collection Schema Editor"
ui_category: "Data Display > Collections"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Duda Internal Collection Schema Editor

## Location

Route `/home/site/d7a8e0dc/home` → CMS → Collections → New collection → Start from scratch. A collection manager overlays the canvas while the editor rail and Publish control remain visible. Left pane lists collections and their item counts. Right pane has an editable collection name, Search by, total item count, Reorder Columns and Add Row. Table columns include locked Item name or URL, initial New field, subsequently added fields, an add-field plus, row checkboxes, visibility and edit/overflow controls. Account copy says collections contain up to 10 items. The limit was read, not exhausted.

## Screenshot

**OBSERVED:** `65-internal-collection-created.jpg`, `66-collection-renamed-added-field.jpg`, `68-collection-field-types.jpg`, `73-collection-reload-persistence.jpg` under the local evidence directory.

## Actions

| Control and precondition | Action/function | Visible result | Evidence |
| --- | --- | --- | --- |
| Empty library, New collection | Click | Source menu with four collection paths | 64 |
| Start from scratch | Click | Collection-01 is created immediately with one default item named 1 and New field. No separate name dialog | 65 |
| Collection name textbox | Replace with Maple Research Services, Enter | Left list and editor title change | 66 |
| Add New Field plus | Click | Field 2 appears and opens a name/type popover | 66 |
| Rich Text combobox | Click | 18 field-type options, Rich Text selected | 68 |
| Plain Text option and field name | Select Plain Text, enter Service label, Save | Service label replaces Field 2 | 69 |
| Browser reload, reopen CMS → Collections | Reload and select saved collection | Name, Service label column, two rows and saved text remain | 73 |

## Behavior & States

The source chooser is a menu with menuitems. The field popover uses a textbox, combobox, listbox/options and Save button. Types observed: Plain Text, Rich Text, Image, Link, Number, Toggle Switch, Date & Time, Business Hours, Location, Video, Email, Phone, Social Accounts, Multi-select, Single-select, Icon, Image Collection and Dynamic Page. Only Plain Text was saved in this pass.

An empty Field 2 name was submitted. The popover closed, the column remained Field 2, and the captured `/field/update` request returned 400. No durable inline error appeared in the retained screenshot. This is a failed update, not acceptance of an empty name. Reopening the existing field allowed a valid name/type save. The error response body and exact server validation reason remain unverified.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-internal-collection-editor`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 65-internal-collection-created.jpg |
| empty | RECONSTRUCTION · empty/filter state | Synthetic local state, provider not observed |
| populated | RECONSTRUCTION · fictional populated data | Synthetic local state, provider not observed |
| row-open | OBSERVED structure · row detail | 70-collection-row-editor.jpg |
| field-error | OBSERVED failure · HTTP 400, local simulation | 67-collection-empty-field-validation.jpg |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Technical Data

Collection requests observed in the first action window: GET `/ms/collections/ui/{site}` 200, POST `/ms/collections/ui/{site}` 200, POST `/data` 200, POST `/update` 200, POST `/field/add` 200 and POST `/field/update` 400. The endpoints are normalized here. These are temporal observations alongside the UI sequence, not a supported public API contract. See `network-collection-metadata.json` for request IDs and event order. No animation duration or internal event handler was measured.

## Needs verification

Duplicate field names, whitespace/length limits, every field-type validator, the 10-item limit, schema conversion with existing data, reorder persistence, undo/redo, keyboard navigation, dynamic binding and external synchronization remain open.

## Evidence boundary

**OBSERVED:** Authenticated Duda UI on M5, 7 October 2026, in the fictional unpublished research site `d7a8e0dc`. The site remains private. Screenshots, rendered DOM and accessibility snapshots are retained locally.

**NEEDS VERIFICATION:** Internal JavaScript functions and application state stores were not inspected. Network records contain method, origin, path, status and event sequence only. No request bodies, response bodies, headers or query strings were retained. HTTP success does not establish a complete API contract, authorization enforcement or downstream execution.

**RECONSTRUCTION:** Use fictional Maple Studio content and local handlers. Reproduce observed controls and states, label simulated outcomes, and do not connect publication, notifications or external services.

## Sources

- **OBSERVED:** `Internal/scratch-2026-10/duda/evidence-index-deep.json`, `action-traces-deep.json`, and `screen-action-audit.md`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 65-internal-collection-created.jpg, 66-collection-renamed-added-field.jpg, 68-collection-field-types.jpg, 69-collection-second-row.jpg, 73-collection-reload-persistence.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.

## Structure

**OBSERVED:** See the dated Location, Screenshot and Actions sections for screen anatomy and controls. New collection, Add Row, Reorder Columns, Add New Field.

## Rules & Validation

### Numeric and keyboard evidence, 7 October 2026

**OBSERVED:** Added fictional Research count with type Number. Its row input is `type=number`, with no explicit min, max or step attributes. Entered -1.5 and blurred. Value stayed visible without an inline error (108). ArrowUp changed it to -0.5, and native validity reported valid with no stepMismatch (109). These are bounded visible states, not proof of all numeric constraints. Cleared the value (110). Reload verified the named Number field persisted and its value stayed blank, alongside the restored original Service label (111).

**OBSERVED:** Eight forward Tab transitions from the Number input cycled inside the row dialog through prev-arrow, Close, identifier, Rich Text Editor, Service label, Number, prev-arrow and Close. The disabled next-arrow was skipped. `keyboard-row-trace.json` retains the DOM focus observations. This does not certify all keyboard paths, reverse Tab, screen-reader announcements or other dialogs.

**OBSERVED API:** Service label update on blur returned HTTP 200 at `POST /ms/collections/ui/{site}/data/{row}/field`. Request JSON has `fieldName: string` and `data: string`. Capture 105 and `api-field-success-contract.json`. The response body was unavailable from the capture API, so response schema remains unverified. Original fictional text was restored (106) and confirmed after reload (111). No credentials, headers or body values were retained in the API receipt.

Fixtures `number-decimal`, `number-step`, and `number-empty` reconstruct these source states with local React data. Numeric keystrokes remain native input behavior in the local preview.


### Provider validation and keyboard continuation, 7 October 2026

- **OBSERVED:** Changing row2 identifier to existing `1` and pressing Tab displayed “Something went wrong.” The dialog title stayed maple-inspection. Capture 101.
- **OBSERVED:** Empty identifier plus Tab displayed “Use URL paths like this: planting/trees/fruit_trees”. Capture 102. Error copy is path guidance, not a proven complete validation specification.
- **OBSERVED:** Restored maple-inspection, pressed Tab then Escape. The row dialog closed. Capture 103.
- **OBSERVED:** Reload and collection reopen showed original identifiers 1 and maple-inspection and fictional Service label value. Capture 104. No rejected identifier was retained.
- Preview fixtures `duplicate-item` and `empty-item` reconstruct these states. They do not implement the provider server validator. Reorder Columns showed a two-field popup in 84 and Escape removed it in 85. No column reorder persistence or focus trap claim.
- **NOT OBSERVED:** Full server payload/error contracts, length/encoding/whitespace constraints, numeric/date validation, comprehensive keyboard audit.


**OBSERVED:** Provider rules are limited to the dated action results above. **RECONSTRUCTION:** Local preview validation is a fixture aid. It does not establish backend constraints.
