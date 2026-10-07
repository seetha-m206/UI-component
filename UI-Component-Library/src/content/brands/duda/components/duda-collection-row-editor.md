---
component: "Duda Collection Row Detail and Search"
ui_category: "Data Display > Collections"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Dated screen anatomy, action traces and explicit provider evidence limits."
---

# Duda Collection Row Detail and Search

## Location

CMS → Collections → Maple Research Services. Row data sits in a grid beneath the schema header. Each row has a checkbox, visibility eye, identifier, editable values and trailing pencil/overflow. The row detail dialog has item name/URL, position count, previous/next arrows, Close, a Rich Text Editor for New field and plain-text input for Service label. The second of two items displays 2 of 2 items and disables next-arrow.

## Screenshot

**OBSERVED:** Local `69-collection-second-row.jpg`, `70-collection-row-editor.jpg`, `71-collection-search-empty.jpg`, `72-collection-populated.jpg`, `73-collection-reload-persistence.jpg`.

## Actions

| Element | User action | Function and result | Verified state |
| --- | --- | --- | --- |
| Add Row | Click upper button | Appends a default row without opening a dialog | Count becomes 2, new identifier 2 |
| Second-row pencil | Click | Opens row detail dialog | 2 of 2 items, next arrow disabled |
| Item name or URL, textbox text-input | Replace 2 with maple-inspection | Edits fictional row identifier | Saved table and reload show maple-inspection |
| Service label, textbox plain-text-cell | Enter Fictional roof inspection, close dialog | Returns to grid, retaining value | Saved table and reload show value |
| Search by | Enter zz-research-no-match | Filters rows | No matching rows, Clear appears, count still 2 items |
| Clear | Click | Removes query and restores rows | Both rows return |
| Reload and reopen collection | Navigate back to saved collection | Fetches persisted grid | Identifier and plain-text value survive |

## Technical Data

**OBSERVED API boundary:** A separately repeated duplicate-identifier action emitted `POST /ms/collections/ui/{site}/data/{row}` with status 400. JSON request shape `{item: string}` and JSON response shape `{message: string}` were captured in `api-duplicate-contract.json`. Headers, query values and body values were omitted. This proves one rejected-update contract only. No successful update or general API schema claim.

No matching rows is a filtered state. It does not delete data or change the displayed total item count. Name and value persistence was verified after a browser reload, not inferred from a success toast. Close is the exit from the row dialog. No explicit Save control was present there. The precise autosave event, debounce and conflict behavior remain unverified.

Rendered DOM exposes checkbox, Hide Row button, dialog, textboxes and disabled next-arrow. The grid itself does not expose a semantic table in the retained snapshot. The first collection window includes POST `/collections/{collection}/query-data` 200. Exact row-mutation payload/endpoint and search execution location were not established.

## Needs verification

Duplicate URL errors, slug normalization, required item-name validation, row visibility persistence, bulk selection actions, ordering, deletion, row duplication, rich text sanitation, race/conflict behavior, client-side versus server-side search and pagination remain open.

## Evidence boundary

**OBSERVED:** Authenticated Duda UI on M5, 7 October 2026, in the fictional unpublished research site `d7a8e0dc`. The site remains private. Screenshots, rendered DOM and accessibility snapshots are retained locally.

**NEEDS VERIFICATION:** Internal JavaScript functions and application state stores were not inspected. Network records contain method, origin, path, status and event sequence only. No request bodies, response bodies, headers or query strings were retained. HTTP success does not establish a complete API contract, authorization enforcement or downstream execution.

**RECONSTRUCTION:** Use fictional Maple Studio content and local handlers. Reproduce observed controls and states, label simulated outcomes, and do not connect publication, notifications or external services.

## Sources

- **OBSERVED:** `Internal/scratch-2026-10/duda/evidence-index-deep.json`, `action-traces-deep.json`, and `screen-action-audit.md`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 70-collection-row-editor.jpg, 71-collection-search-empty.jpg, 72-collection-populated.jpg, 73-collection-reload-persistence.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.

## Structure

**OBSERVED:** See the dated Location, Screenshot and Actions sections for screen anatomy and controls. Add Row, Edit row, Search by.

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

## Behavior & States

**OBSERVED:** Dated action outcomes above describe provider states. Local state definitions are separately identified below.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-collection-row-editor`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 70-collection-row-editor.jpg |
| empty | OBSERVED structure · empty/filter state | 71-collection-search-empty.jpg |
| populated | RECONSTRUCTION · fictional populated data | Synthetic local state, provider not observed |
| row-open | OBSERVED structure · row detail | 70-collection-row-editor.jpg |
| field-error | OBSERVED failure · HTTP 400, local simulation | 67-collection-empty-field-validation.jpg |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.
