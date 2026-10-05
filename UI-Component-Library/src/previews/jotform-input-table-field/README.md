# Reconstructed preview: JotForm Input Table field

Source record: `Research-Library/04-Component-Library/jotform/jotform-input-table-field.md` (JF3, 2026-10-05).

## Evidence priority

Reproduced faithfully from direct DOM/ARIA inspection and live pointer/keyboard testing on a published JotForm test form:

- A genuine semantic `<table role="table">` with real `<th scope="row">` / `<th scope="col">` headers (not a div-based grid), including the confirmed transparent screen-reader-only "Rows" corner cell.
- A per-cell `aria-label` composed from both axes (`"{row} {column}"`), matching the confirmed real pattern.
- The confirmed real accessibility defect: every cell gets its own unique `name`, not one shared per row — so exclusivity is entirely React-state-managed here, exactly mirroring the source's confirmed "JavaScript-managed, not native-browser-managed" finding. This preview deliberately does **not** add arrow-key row navigation, since the real product doesn't have it either (no shared `name` per row to make the browser treat cells as one radiogroup).
- The confirmed real validation flow for "Require an answer in every row": a blocked Submit shows a sticky error banner, a "See Errors" control that focuses the first incomplete row, and an inline "⊘ Every row is required." message. The error styling is deliberately **not scoped** to only the incomplete row — every cell in the table gets the red outline, reproducing the source's confirmed un-scoped styling rather than "fixing" it to be more precise than the real product.
- The confirmed real default-template mismatch: every column defaults to the radio input type, including a column labeled to imply free text ("Any thoughts?") — reproduced as the default `columnTypes` (all `'radio'`) unless overridden.

## Deliberate scope reductions

- **Only the "every-row" Required mode is wired to visible validation.** The real GENERAL tab's Required dropdown has two other non-"No" options ("Require at least one answer", "Require an answer in every cell") — the source record flags both as not live-tested, so this preview doesn't invent their exact validation behavior. `requiredMode` only accepts `'none' | 'every-row'`.
- **"Require an answer in every row" validates against radio-type columns only.** The source record's own second-pass flag notes an empty text-type cell did not block submission once a radio was selected in that row — this preview's validation logic matches that observed (not fully confirmed) behavior rather than guessing at the untested alternative.
- **Mobile horizontal-scroll-without-sticky-row-labels is reproduced via plain CSS `overflow-x: auto`** on the table wrapper, matching the confirmed `position: relative` (not `sticky`) finding — no attempt to "improve" on the real product's confirmed gap.
- **"+add column" only appends a new radio-type column** — the source record itself flags that this action wasn't independently re-tested in the live product this pass (only inferred from the FIELDS tab's symmetric controls), so this preview's implementation is a reasonable, clearly-scoped-down placeholder, not a literal reconstruction of unverified behavior.
- Following this codebase's established precedent (`typeform-choices-list-editor`, `entries-kanban-view`): this component is **not** `value`/`onChange`-shaped, so the generic `ReconstructedPreviewPanel` harness doesn't auto-wire external state to it. All interaction (row/column add/remove, cell selection, Submit/validation) is managed with fully internal `useState`, so the hosted preview panel is genuinely interactive without needing a dedicated controlled wrapper — a different, equally-accepted pattern from the controlled `choices`-prop components, chosen here because the real product's own Submit-driven validation flow benefits from the component owning that flow itself.
