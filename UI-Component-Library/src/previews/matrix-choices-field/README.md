# Matrix Choices Field (Grid Radio Table) — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/matrix-choices-field.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`analytics-dashboard-kpi-bar-map/` (screen-level, non-scalar-prop
component) and `choices-list-editor/` (builder-time list editing panel with
per-row +/- add/remove) — this component is a hybrid of both patterns: a
Properties-panel list editor for rows and columns, plus a live-form grid of
independent per-row radio groups.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as every other
   reconstructed preview in this product.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for the grid itself:
   - **A genuine `<table>`.** `<thead>` with a blank top-left cell followed
     by one `<th>` per answer option; `<tbody>` with one `<tr>` per
     question (`<th>` for the row label, `<td>` per answer-option cell).
     `MatrixChoicesField.tsx`'s grid section reproduces exactly this
     structure (`.cornerCell`, `.colHeadCell`, `.rowHeadCell`, `.cell`).
   - **Real but hidden radio inputs.** Each `<input type="radio">` is
     genuinely present (`opacity: 0`, sized to fill the cell,
     `cursor: pointer`) — not a decoy `<div>` with a click handler. The
     visible control is a sibling `<label>` associated via `htmlFor`/`id`
     (not `aria-hidden`, since it must stay in the accessibility tree and
     clickable, per the record's own correction of that instinct). Its
     `::before` draws an 18×18px circular outline (`border-radius: 50px`,
     ~0.8px border), and its `::after` draws a 12px filled teal dot
     (`rgb(46, 183, 159)`, the one exact color value the record gives) that
     shows only when the input is `:checked`.
   - **No transition on selection.** The record documents a `transition:
all` CSS property declared on the source's selection indicator, but
     with `transition-duration: 0s` — a "declared but inert" pattern. This
     reconstruction reproduces the _effect_ (`transition: none` on
     `.radioLabel::after`, so the dot appears/disappears instantly) rather
     than the inert declaration itself, since a `transition: all` rule with
     `duration: 0s` and a rule with no `transition` at all are visually and
     behaviorally identical — there is nothing to observe by keeping the
     dead declaration.
   - **Row independence.** Directly confirmed in Behavior & States:
     selecting "Answer B" on "First Question" and "Answer A" on "Second
     Question" leaves both active simultaneously, and clicking "Answer C"
     on "First Question" clears only that row's own prior selection. This
     reconstruction implements that with **native per-row radio grouping**
     (`name={`matrix-row-${uid}-${rowIndex}`}` on every `<input
type="radio">` in a row) rather than hand-rolled ARIA
     `role="radiogroup"` + managed roving tabindex — see "Radio-group
     mechanism" below for why.
   - **Properties panel add/remove.** The record documents rows and columns
     as "independently configurable lists, each with per-item + / - icons.
     New rows/columns get an empty label, auto-focused for immediate
     typing." This reconstruction's Properties section reproduces exactly
     that: one text row per question/answer-option, a per-row `+` (insert
     directly after that row, matching the "insert after clicked row"
     precedent already established in `choices-list-editor`, since the
     record doesn't specify insert-at-end vs. insert-after and that
     precedent is the closest analog in this codebase) and `-` (remove),
     and the newly inserted row's input is auto-focused via a
     `pendingFocus` ref + `useEffect`, mirroring `choices-list-editor`'s
     `pendingFocusId` pattern.
   - **No confirmed row/column growth ceiling.** The record states growth
     "is not blocked client-side up to at least 8 rows in testing; the real
     ceiling is server-enforced and unconfirmed." `maxRows`/`maxColumns`
     are optional and `undefined` (no limit) by default, exactly per that
     finding — the `at-row-column-limit` fixture demonstrates the _capped_
     behavior only when a caller explicitly opts in via those props.
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record; the Structure and Actions tables were used to confirm
   layout (3×3 default, `<th>`/`<td>` roles) and the add/remove/select
   action set.
4. **Assumptions, clearly flagged**:
   - **Border color of the radio circle.** The record gives an exact value
     for the filled dot (`rgb(46, 183, 159)`) but only an approximate
     description for the outline — "~0.8px border, a neutral gray," no
     hex/rgb captured. `rgb(204, 214, 224)` is used here as a reasonable
     neutral gray consistent with this repo's other captured near-gray
     border values (e.g. `choices-list-editor`'s `rgb(228, 229, 234)`), not
     an independently confirmed Zoho value.
   - **Minimum row/column count.** The source record documents no minimum
     guard at all (only the _maximum_ is discussed, and found unconfirmed).
     `minRows`/`minColumns` (both default `1`) are a deliberate addition so
     the grid can never be reduced to zero rows or zero columns — the same
     kind of conservative, accessible-by-default guard `choices-list-editor`
     applies via its own `minChoices`, not a reproduction of an observed
     Zoho rule.
   - **Insert position (after the clicked row, not appended at the end).**
     The record only says "client-side list insert... new row/column
     appears" — it does not specify where in the list. Insert-after-clicked
     was chosen for consistency with `choices-list-editor`'s confirmed
     behavior on a structurally similar control, not because it was
     independently confirmed for this component.
   - **Responsive/breakpoint behavior** was not observed for either the
     Properties panel or the live grid. Stacking the two Properties lists
     and letting the grid scroll horizontally at narrow container widths
     (`@container (max-width: 640px)`) are reasonable assumptions for this
     docs-site preview stage, not observed Zoho breakpoints.

## Deliberate scoping decision: only the Radio variant is built

The "Matrix Choices" category documents 7 sub-variants (Radio, Checkbox,
Dropdown, Textbox, Number, Currency, Multi-Type), and the record is explicit
that the other six only change the **per-cell control type** — the grid
architecture (table structure, row/column Properties panel, add/remove,
row-scoped independence) is shared across all of them. Per the task's own
scoping instruction, only **Radio** (the default) is reconstructed here.
Building the other six would mean re-skinning the same `<td>` control six
times with no new architectural evidence to reconstruct — not a meaningful
use of this pass. If a future pass adds the other variants, the intended
extension point is the grid cell's contents (currently a hard-coded radio
`<input>`/`<label>` pair) becoming a per-`cellType` renderer; that
generalization is _not_ attempted here since only one variant was in scope.

Also explicitly out of scope, per the task instructions:

- The **"Choice Type" dropdown** that switches the per-cell control type —
  not rendered at all (not even as a disabled/decorative stand-in), since
  rendering a dropdown that visually implies 7 working options when only 1
  is wired would be more misleading than simply omitting it.
- **Server-side row/column limit enforcement UI** — there is no confirmed
  limit to enforce, so nothing is rendered for it (see `maxRows`/`maxColumns`
  above: purely opt-in, no default cap, no "you've reached the limit"
  messaging beyond the add button disabling itself when a caller sets an
  explicit ceiling).
- **"Mark All as Mandatory" checkbox, "Import predefined answers," and
  "Modify Column Width" links** — these are documented as existing in the
  real Properties panel but are builder-configuration surfaces unrelated to
  the grid/row/column mechanics this component reconstructs; skipped
  entirely, per the task instructions.
- **Field-reordering / drag-and-drop.** The record notes the form builder's
  own field list uses real jQuery UI Sortable elsewhere in the product —
  irrelevant context, not reconstructed here. Add/remove via the +/- icons
  is the only confirmed row/column management mechanism for _this_
  component; no drag-reorder of rows or columns is implemented.

## Radio-group mechanism: native `name` grouping, not hand-rolled ARIA

The record doesn't specify the live form's underlying implementation depth
beyond "each `<input type='radio'>` is real but visually hidden." Given a
real, native `<input type="radio">` is already required by the Technical
Data section, the most direct way to guarantee row-scoped exclusivity _and_
correct built-in keyboard behavior (arrow keys move selection within a row,
Tab moves between rows, screen readers announce group size/position) is to
give every radio in a row the same `name` attribute
(`matrix-row-${uid}-${rowIndex}`) and a different `name` per row. This is
standard HTML radio-group semantics — no `role="radiogroup"` or manual
roving-tabindex management is layered on top, because the native mechanism
already provides everything a hand-rolled ARIA group would need to
reimplement. This is a deliberate implementation choice made in the absence
of deeper source detail, not a verified reproduction of Zoho's own grouping
mechanism (which the record does not describe below the DOM/CSS level shown
above).

## Why index-keyed `value`, not generated row/column ids

`rowLabels`/`columnLabels` are plain `string[]`, per the task's suggested
prop shape — no independent id per row/column. `value` is therefore keyed
by **stringified array index** (`{ "0": "1" }` = row 0 selected column 1),
not a generated stable id. This is a deliberate simplicity tradeoff, not an
oversight: it means that if a row is removed from the _middle_ of the list
(not the end), any selections stored for rows after the removal point will,
after the array re-indexes, point at what is now a _different_ row's
position — this component does not re-key `value` itself when
`onRowLabelsChange`/`onColumnLabelsChange` fire, because it doesn't own
`value`'s lifecycle (the caller does, same as `choices-list-editor` doesn't
own `choices`). A production implementation driven by real stable
identifiers (e.g. `{ id, label }` rows) would not have this gap. It's
flagged here rather than silently left implicit.

## Fitting a two-list-plus-grid component into the shared harness

Like `choices-list-editor`, this component's real prop surface
(`rowLabels`/`columnLabels`/`value`, all non-scalar) doesn't match what the
shared `ReconstructedPreviewPanel`/`FixtureStage` harness auto-wires (a
single scalar `value`/`onChange`/`disabled`/`required`, not touched here per
the task's instructions). Only `disabled` is a genuine match and is
forwarded correctly. Cell selection (`onChange`) and row/column
add-remove-relabel (`onRowLabelsChange`/`onColumnLabelsChange`) are fully
interactive when the component is mounted with local state — demonstrated
in `MatrixChoicesField.test.tsx`'s own `Controlled` wrapper — but are not
wired through the generic harness's scalar plumbing. Fixture selection
covers the meaningful visual states instead (empty grid, two independent
row selections, a larger 5×4 grid, disabled, and an at-limit grid), matching
the precedent `choices-list-editor` already set for list-shaped components.

## Other deviations from what was actually observed

- Zoho's generated class names/attributes for this component were not
  captured in the source record's Technical Data section beyond the tag
  structure already described above; no Zoho CSS or markup is reused —
  everything here is scoped CSS Module classes and plain React.
- The Properties panel's `+`/`-` controls are real `<button type="button">`
  elements (keyboard-focusable, native Enter/Space activation), consistent
  with this library's established `<a>`/`<span onclick>` → `<button>` swap
  precedent (see `choices-list-editor`, `rating-star-field`).
- Unlike `choices-list-editor`, there is no Enter-to-add on the Properties
  panel's text inputs. The record only documents `+`/`-` icons for this
  component, with no mention of an Enter-key shortcut; rather than borrow
  that specific behavior from a different (if related) component without
  evidence, it was left out here.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source, and
not guaranteed to match current production behavior — see the in-app notice
on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
