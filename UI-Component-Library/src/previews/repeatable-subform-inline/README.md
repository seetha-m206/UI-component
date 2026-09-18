# Repeatable Subform (Inline layout) — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/repeatable-subform-inline.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` and
`rating-star-field/` — no changes to that shared architecture were needed.

## The central caveat: Add row / Add Entry behavior is UNVERIFIED

Unlike the other two reference components, the source record for this one is
explicitly flagged `evidence_state: "open_finding"` and opens with:

> ⚠️ **Incomplete — needs a second pass.** The "Add row" interaction could
> not be verified: clicking the Preview mode's "+" (Add Entry) control
> repeatedly produced no visible second row and no DOM row-count increase,
> despite confirming clicks land precisely on the correct element
> (`elementFromPoint` match) and dispatching a full trusted-style mouse
> event sequence.

The record confirms the "Add Entry" **control itself** is real (a
`role="button" aria-label="Add Entry" elname="subFormEntryAddBtn"` element,
22×22px, always rendered) and that a hidden "template row" clone-target
pattern exists in the DOM (`elname="rowTemplate"`, `display:none`, with
field names like `SingleLine1_0` for the template and `SingleLine1_1` for
the first live row — a `{link_name}_{rowIndex}` convention). But:

- No `onclick` attribute was found on the button, and jQuery's own event
  registry (`$._data(document, 'events')`) showed no handler bound to it.
- The only row-cloning function found in the app's JS
  (`ZFUtil.createNewRowInTableForFieldLabel`) has a `<table>`/`<td>`
  signature that looks like it belongs to a different (table/grid) subform
  layout variant, not "Inline".
- The record's own leading hypothesis is that Add Entry may require a
  "max entries" value to be configured first (via
  `loadSubFormFieldProperties()`), untested this pass.
- Zero network requests were logged on every add-row attempt — consistent
  with (but not proof of) a pure client-side clone.

**This reconstruction's `addRow()` behavior — append a blank row cloned
from the field set, standard "hidden template → live clone" pattern — is a
standard, reasonable assumption filling that gap, not a verified
reproduction of Zoho's real Add Entry mechanics.** It exists only so the
preview is usable at all. The optional `maxEntries` prop is included and
demonstrated in a dedicated fixture (`max-entries`) specifically to surface
the record's own untested "requires max entries first" hypothesis as a
live, inspectable control rather than leaving it implicit — but enforcing
it is this reconstruction's design choice, not a confirmed Zoho rule, and it
is `undefined` (unlimited) by default so the assumption never silently
activates.

**Remove-row support is an even larger assumption**: no delete/remove
control of any kind appears anywhere in the source record's captured DOM,
Actions table, or Structure notes — only "Add Entry" was found. A per-row
remove button is added here purely as a standard, expected counterpart to
Add Entry (a repeatable list with no way to remove entries is not a usable
preview), not because removal was observed or implied by any captured
evidence.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as
   `yes-no-toggle-field` and `rating-star-field`.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for everything that IS grounded here: the builder-mode
   nested `ui-sortable` `<ul elname="subFormBodyUl">` field list, the
   Preview-mode `subfrmFieldsCont` / `rowTemplate` / `subFormEntryAddBtn`
   structure, the `{link_name}_{rowIndex}` naming convention, the
   always-rendered 22×22px add-button sizing, and the confirmed
   server-round-trip behavior when a _child field_ (not a row) is added to
   the subform's schema during builder editing.
3. **Screenshots and documented behavior** — no screenshots were captured
   in the source record; the Structure/Behavior & States prose was used to
   confirm the dashed-border empty dropzone, the "Subform" panel title, and
   the ⓘ-prefixed / ⊕-suffixed row rendering in Preview mode.
4. **Assumptions, clearly flagged**:
   - **Add row mechanics** — see the caveat above; this is the primary one.
   - **Remove-row control** — not observed at all; added as a standard
     counterpart, flagged above.
   - Disabled/loading/error states were explicitly noted in the source as
     "not observed"; conventional reduced-opacity/error-text treatments are
     used here, consistent with the other two reference components.
   - Responsive/breakpoint behavior was not observed (both builder-canvas
     and Preview-mode contexts were fixed-width in the tested session,
     though a `subformIcnMobileView` element was noticed without further
     detail); stacking each row's fields vertically at narrow widths is a
     reasonable assumption, not an observed Zoho breakpoint (record's
     Recommended Second Pass, item 4).
   - The animation/transition for a successful row-add is explicitly
     **not captured** in the source (the action itself couldn't be
     triggered) — no transition is invented here; new rows simply appear.
   - Exact CSS values for the dashed dropzone border/background were not
     captured (only `display/visibility/opacity` were); a conventional
     dashed-panel treatment is used.

## Scoping choice: no network calls

The source record notes that adding a **child field** to a subform's schema
(a builder-time edit) is "the first component in this entire session's
captures to trigger a server round-trip on a builder-time edit" —
`POST .../subform/SubForm/fields` → `201 Created`, persisted immediately
rather than staying local until Save. That specific behavior concerns
editing the subform's field _schema_ in the builder, not this preview's
scope (filling in row _data_ at runtime). Regardless, and per this repo's
static-docs-preview constraints, this reconstruction makes **no network
calls of any kind** — Add row, Remove row, and field edits are all handled
purely client-side via `onChange`, matching the "no network calls" rule
applied to every preview in this repo.

## Out of scope for this preview: child-field sortability

The record notes the subform's own child-field list (`subFormBodyUl`) is
pre-wired with `ui-sortable` at creation, "suggesting child-field
reordering is supported, though not independently tested by actually
dragging a second child field." That sortable wiring is a **builder-time**
concern — reordering which field types (columns) appear in the subform's
schema — not a runtime concern for filling in row data, which is what this
preview reconstructs. It is intentionally not implemented here; the
`fields` prop order is fixed for the lifetime of a given preview instance.

## Deliberate deviations from what was actually observed

- Zoho's Preview-mode markup is plain `<div>`/`<input>` with `elname`
  attributes and no visible ARIA role structure captured for the row
  group itself; this reconstruction adds `role="group"` with
  `aria-label`/`aria-labelledby` on the subform and each row for
  accessibility, since no equivalent structure was documented as already
  present or absent.
- Zoho's generated class names/attributes (`subFormBodyUl`,
  `subfrmFieldsCont`, `sfFieldWrapper`, `addRowBtn`, `elname`, etc.) are
  replaced with scoped CSS Module classes and plain React props/state.
  None of Zoho's original CSS or markup is reused verbatim.
- The "ⓘ" info icon noted in the source's Preview-mode description is
  reproduced as a static, non-interactive glyph (`aria-hidden`) — its
  underlying behavior (tooltip? field description toggle?) was never
  decoded in the source record, so no interaction is attached to it here.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — this is
true of every preview in this repo, but especially true here: the source
record itself is incomplete (`evidence_state: "open_finding"`) and flags
its own central interaction (Add row) as unresolved. See the in-app notice
on the Preview tab, and treat the Add-row/Remove-row behavior in this
component as illustrative, not verified.
