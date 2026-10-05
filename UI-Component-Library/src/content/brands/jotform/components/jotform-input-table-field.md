---
component: "Input Table Field (Matrix/Grid)"
ui_category: "Forms > Rating"
source_product: "JotForm"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: 'complete'
summary: "A genuine semantic <table> matrix field with correctly composed per-cell aria-labels, undercut by a unique-name-per-cell design that forfeits native arrow-key row navigation."
---

# Component: Input Table Field (Matrix/Grid)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF3.** First direct matrix/grid-field comparison point in this library, set against [[matrix-choices-field]] (Zoho Forms). Google Forms' own choice-grid equivalent is **pending** — GF7 (`prompts/prompt-backlog-google-forms.md`) has not been run as of this filing (2026-10-05) — noted below rather than skipped.

> **Provenance note** (carried over from every prior JotForm pass this session): filed from a browser-extension session with no file/repo access, so `[[matrix-choices-field]]` could not be opened directly during capture; this record's Technical Data and Competitor Comparisons below are reconciled against the actual Zoho record by the filing pass, not by the capturing session.

## Location
- **Product:** JotForm
- **Screen(s) it appears on:** form builder (BUILD mode), Survey Elements group of the BASIC palette tab, directly above Star Rating and Scale Rating.

## Structure
- Dragging the field onto the canvas pre-populates a satisfaction-survey template: 4 rows (**Service Quality, Cleanliness, Responsiveness, Friendliness**) × 4 columns (**Not Satisfied, Somewhat Satisfied, Satisfied, Any thoughts?**). FACT
- Built on a genuine semantic `<table role="table" aria-labelledby="label_3" data-component="matrix" data-dynamic="true" class="form-matrix-table" cellpadding="4" cellspacing="0">` — unlike every other field documented in this library so far, which use div-based grids. FACT Column headers are real `<th scope="col">`; row headers are real `<th scope="row">`. FACT
- The table's top-left corner cell is a `<th scope="col">` containing the literal text "Rows", styled `color: transparent` — present in the DOM and in layout, functioning as a screen-reader-only label for the row-header column with no sighted-visible counterpart. FACT
- No `<thead>`/`<tbody>` wrapper — all `<tr>` elements (one header row, one per data row, plus a trailing row hosting "+add row") are direct children of `<table>`. FACT

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "+add row" (bottom-left, builder canvas) | Click | Insert a new row | New row appears immediately with an inline-editable, auto-focused "Type Row Name" placeholder — no modal, no side-panel round-trip. FACT | Same screen |
| "+add column" (vertical text, right edge, builder canvas) | Click | Insert a new column | Not independently re-tested this pass; implied to mirror "+add row" by the FIELDS tab's symmetric Add Row/Add Column controls. OBSERVATION / INFERENCE | Same screen |
| × on a row/column label, or trash icon in FIELDS tab's Rows/Columns list | Click | Delete that row/column | Removed instantly, no confirmation modal — consistent with the modal-free field-delete pattern in [[jotform-feedback-patterns]]'s planned backfill. FACT (tested on a row) | Same screen |
| Properties → FIELDS tab → Input Type | Click one of 7 icons | Set the input type for every cell | Radio Button / Checkbox / Dropdown / Textbox / Numeric Textbox / Currency Textbox apply uniformly to all cells; the 7th, **Multi-type Columns**, instead reveals a per-column chevron on the canvas. FACT | Same screen |
| Column header chevron (Multi-type Columns mode only) | Click | Open "Change Column Type" for that column | Dropdown with 5 options: Single Choice Column, Checkbox Column, Textbox Column, Dropdown Column, Delete Column. FACT | Same screen |
| Properties → GENERAL tab → Required dropdown | Select | Set the table's validation rule | Four options, not just Yes/No: "No", "Require an answer in every row", "Require at least one answer", "Require an answer in every cell". FACT | Same screen |
| Submit (public form, required-every-row, table empty) | Click | Attempt submit | Blocked. Sticky red banner at the top: "There is (1) error on this page. Please correct it before moving on." with a "See Errors" button; the field gets a pale pink/red panel; every radio in the entire table gets a red outline; inline message under the table: "⊘ Every row is required." FACT, triggered live | Same screen, blocked |
| "See Errors" (in the sticky banner) | Click | Jump to the first invalid cell | Scrolls to and visibly focuses the first unfilled cell (Row 1 / Column 1) — a real, working "jump to error" affordance. FACT | Same screen, focus moved |
| Fill 3 of 4 required rows, click Submit again | Click | Re-attempt submit | Still blocked, identical banner + message + full-table red styling — error styling is not scoped to the specific missing row. FACT | Same screen |
| Fill all 4 rows (leaving the optional Textbox "Any thoughts?" column empty), click Submit | Click | Submit | Succeeds — reaches the standard "Thank You!" confirmation screen. FACT | Public form confirmation screen |

## Behavior & States
- **Exclusive, single-select fill per row**, confirmed via DOM inspection: clicking a second option in the same row correctly unchecks the first (exactly one of 12 radios read `.checked === true` after switching selection within a row). FACT
- **Exclusivity is JavaScript-managed, not native-browser-managed.** Each radio's `name` is unique per cell (`q3_typeA[row][col]`, e.g. `q3_typeA[0][0]` vs `q3_typeA[0][1]` differ even within the same row) — there is no shared-`name` native radiogroup relationship between cells in a row. FACT This is a material difference from [[jotform-scale-rating-field]], which does use true shared-`name` native radio groups.
- **Direct consequence: arrow keys do not move focus or selection within a row.** Right Arrow on a focused cell left both focus and checked state unchanged — the standard native-radiogroup arrow-key convention doesn't apply, since the browser never sees row-cells as one group. FACT, tested live on the published form.
- **Every cell is its own individual Tab stop** (`tabIndex="0"` on every radio, not a roving-tabindex pattern) — confirmed by pressing Tab once from a focused cell and reading `document.activeElement`, landing on the next cell in the same row. For the default 4-row × 3-radio-column template that's 12 separate tab stops, versus 4 if it behaved like a native radiogroup. FACT
- **Default template mismatch**: out of the box the Input Type for the entire table (including "Any thoughts?") is Radio Button — the column renders as unlabeled radio circles until a builder manually switches it to a Textbox Column. FACT, confirmed via DOM (`type="radio"`, `value="Any thoughts?"` before any manual change).
- **Validation can surface before Submit is clicked** — the error banner/styling appeared after interacting with the table (click + arrow key) without a Submit click in that moment; the exact trigger (blur vs. a periodic re-check) wasn't isolated. OBSERVATION
- **No responsive reflow/stacking at mobile widths.** Tested via the builder's Phone preview: the matrix keeps its full multi-column grid and instead gains an internal horizontal scrollbar on a wrapping `div.form-input-wide` (`overflow-x: auto`). FACT
- **The row-label column is not sticky/pinned during horizontal scroll.** Computed style on the row `<th>` is `position: relative`, not `sticky` — scrolling right visually confirmed row labels scroll fully out of view. FACT (this corrected an initial sighted impression that the column looked pinned — the computed-style check caught it)

## Rules & Validation
- Required has four modes (GENERAL tab): No / Require an answer in every row / Require at least one answer / Require an answer in every cell. FACT
- "Require an answer in every row" tags each cell's `<input>` with `class="...validate[required, requireEveryRow]"`, including a Textbox-type cell in the same table — yet a fully-empty Textbox cell did not block submission once every row had one radio selected, suggesting "every row" is satisfied by one answer per row among selectable cell types, not literally every physical cell. Not exhaustively tested (e.g. leaving a radio column fully empty while filling only the text column). OBSERVATION / INFERENCE — flagged for a second pass.
- No typed-confirmation or other extra friction on row/column deletion — a single click removes it immediately. FACT

## Technical Data
> OBSERVATION, DOM/ARIA inspection via injected JavaScript and real pointer/keyboard events on a live test form, 2026-10-05.

- `data-component="matrix"`, `data-dynamic="true"` on the `<table>` — "dynamic" likely reflects that rows/columns are user-configurable post-insertion, unlike most other field types. FACT / INFERENCE for the flag's meaning.
- Per-cell `name` pattern: `q{fieldId}_typeA[{rowIndex}][{colIndex}]` — each cell individually addressable, consistent with the non-grouped `name` finding above. FACT
- Per-cell `aria-label` is composed from both axes: `"{Row label} {Column label}"` (e.g. `"Service Quality Not Satisfied"`, `"Cleanliness Not Satisfied"`) — every cell in a large table gets a distinct, correct accessible name. FACT This is a materially better accessible-naming approach than [[jotform-scale-rating-field]], where an `aria-labelledby` override causes all five scale options to likely share one accessible name.
- In builder edit mode (canvas), live cell inputs are `readonly` + `disabled` + `tabindex="-1"` — interaction blocked while designing, consistent with the Application Layout record's general builder/canvas behavior. On the published public form, inputs are fully interactive (`disabled=false`, `readOnly=false`, `tabIndex=0`). FACT, confirmed on both surfaces.
- OPTIONS tab exposes: Table Width (px), Column Width (px), **Calculation Values** (per-cell scoring values for quiz-style forms, "won't be shown on your form"), and a **Shuffle Rows** toggle (randomizes row order per view). FACT
- ADVANCED tab exposes the standard shared field chrome (Hover Text, Shrink, Hide field, Field Details) — nothing matrix-specific. FACT

## Cross-Component Pattern Note
- **OBSERVATION:** This field's per-cell composed `aria-label` is the first confirmed instance in JotForm's own component set of correctly solving the "shared accessible name" problem that [[jotform-scale-rating-field]]'s `aria-labelledby` override gets wrong — both fields ship in the same product, in the same palette group, with opposite outcomes on this specific axis.
- **OBSERVATION:** Like [[jotform-scale-rating-field]], this field shows leftover `<table>`-oriented attributes in places that don't need them (`cellpadding`/`cellspacing` on a genuine `<table>` here, vs. on a `<div>` there) — but here they're vestigial-but-harmless rather than a sign of div-migration-from-table.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Zoho Forms ([[matrix-choices-field]]) | Both are row-independent exclusive-select grids built on a genuine `<table>` (not a div-grid), with per-row radio semantics and client-side row/column add-remove; both expose ~7 cell-type sub-variants via one dropdown (Zoho's "Choice Type", JotForm's "Input Type"), including a dedicated multi-type-per-column mode. Both confirm correct per-cell/per-pair ARIA labeling composed from row+column context (Zoho: `aria-labelledby`/`aria-describedby` pointing at row/column IDs; JotForm: a composed `aria-label` string) — a genuine parity point on accessible naming, not a clear win for either side. | Zoho's markup includes a proper `<thead>`/`<tbody>` split, which JotForm's flat `<tr>`-as-direct-children structure lacks (though both correctly use `<th scope="row/col">`, the part that matters most for assistive tech). Zoho fires zero network requests on cell selection, matching JotForm's confirmed client-side-only interaction model. | Whether Zoho's radios share a `name` per row (enabling native arrow-key navigation within a row) was never decoded in this record — JotForm's own Input Table definitively does NOT share `name` per row and confirmed loses all arrow-key navigation as a direct result, landing every cell as its own Tab stop. This record should be re-verified on that specific point to settle whether Zoho has a real keyboard-model advantage here or shares the same gap. Neither product's row/column count ceiling was confirmed (Zoho: never hit at 8 rows; JotForm: not probed). |
| JotForm wins on accessible naming | JotForm's per-cell `aria-label` composed from both row+column axes gives every cell a distinct, correct accessible name — Zoho's record documents `aria-labelledby`/`aria-describedby` pointing at row/column IDs (`MatrixChoice-col-1 MatrixChoice-row-1`) via a similar two-axis composition pattern, so **both products actually land on a comparably correct per-cell naming approach**, a genuine parity point rather than a JotForm-only win. This comparison row should be read as largely neutral on naming, correcting an earlier draft's overstatement. | — | — |
| JotForm's markup choice | JotForm uses a genuine semantic `<table>` with `scope="row"`/`scope="col"` headers; Zoho also confirmed a genuine `<table>` (not a div-grid) with a `<thead>`/`<tbody>` split JotForm's table lacks (JotForm has no `<thead>`/`<tbody>` wrapper at all — all `<tr>` are direct table children). | Zoho's markup is marginally more conventional (proper `<thead>`/`<tbody>` separation); JotForm's flat `<tr>` structure still renders and scopes correctly but is a less textbook pattern. | Neither is a meaningful accessibility gap on its own — both expose correct `<th>` scoping, which is the part that matters most for assistive tech. |
| Keyboard/interaction model | JotForm: no shared `name` per row → no native arrow-key radiogroup navigation, every cell its own Tab stop (12 stops for the 4×3 template). Zoho: native `<input type="radio">` with visible-label overlay, row-exclusivity confirmed by direct testing, but whether Zoho's radios share `name` per row (enabling arrow-key nav) was not decoded in the existing record — flagged there as a gap, not resolved here. | Zoho's visual layer is a well-established "invisible native input + `::before`/`::after` custom label" pattern shared across its other choice fields — likely implies genuine native grouping, though this is INFERENCE pending direct re-verification. | JotForm's unique-per-cell `name` design definitively forfeits native arrow-key navigation — a confirmed, not inferred, weakness. |
| Google Forms (choice-grid) | **Pending** — GF7 (`prompts/prompt-backlog-google-forms.md`) has not been run as of this filing (2026-10-05); noted as pending per the brief rather than skipped. Once run, compare in particular: native same-name radio groups per row (arrow-key support) and mobile reflow behavior. | — | — |

## Best Observed Approach
- The **per-cell composed `aria-label`** (`"{row} {column}"`) is the strongest piece of this field relative to the rest of this library's rating/matrix fields so far — it gives a screen-reader user a correct, fully-disambiguated name for every cell in a potentially large grid, something [[jotform-scale-rating-field]] in the same product gets wrong via a group-level `aria-labelledby` override. RECOMMENDATION The genuine `<table role="table">` with `scope`-marked headers is a strong, accessible-by-default markup choice, even though JotForm doesn't carry that native-semantics advantage through to keyboard interaction (no arrow-key support, a high Tab-stop count) — that gap is self-inflicted by the unique-per-cell `name` design, not a result of the table markup choice. RECOMMENDATION

## Second-Pass Flags
- The exact rule for "Require an answer in every row" when a row mixes a radio column with a Textbox column was not exhaustively tested — specifically whether leaving all radio cells in a row empty but filling the Textbox cell would be accepted as satisfying that row.
- The validation-without-Submit behavior (error banner appearing purely from interacting with/tabbing through the table) should be re-tested to isolate the exact trigger (blur vs. a timed re-check).
- "+add column" was not independently clicked/verified this pass — only "+add row" was directly tested. The per-column type-change dropdown (Single Choice/Checkbox/Textbox/Dropdown/Delete Column) WAS directly tested and confirmed.
- "Require at least one answer" and "Require an answer in every cell" (the other two non-"No" Required options) were not live-tested — only "Require an answer in every row" was exercised end-to-end.
- Whether Zoho's Matrix Choices shares `name` per row (enabling native arrow-key navigation) was never decoded in the existing [[matrix-choices-field]] record — worth a dedicated re-check to settle the keyboard-model comparison row above with FACT rather than INFERENCE.

## Sources
- OBSERVATION: Live interaction with a test form at `form.jotform.com/262731344959062` (Input Table field added 2026-10-05), both in the Form Builder canvas and on the live published public form (opened in a separate tab for same-origin DOM/JS access, since the builder's own Preview Form pane renders cross-origin), DOM/ARIA inspection via injected JavaScript, and real pointer/keyboard events via browser automation, 2026-10-05.
