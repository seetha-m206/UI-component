# Jotform Boards — reconstructed preview

See `Research-Library/04-Component-Library/jotform/jotform-boards.md` for
the full research record this is built from. Follows the folder contract,
registry format, evidence labeling, and accessibility bar established by
`entries-kanban-view/` and `jotform-input-table-field/`, adapted to a
component whose entire reason for existing in this library is a single
structural comparison rather than a field's input behavior.

## The whole point of this record, and this preview

The source record was filed to resolve one explicit sub-question from the
JF10 research brief: **does opening JotForm Boards via "+ CREATE" produce
the same screen as opening it via the shared Workflow Builder
mode-switcher?** This was tested live, as a direct controlled comparison,
and the answer is **no**:

- **"+ CREATE → Board → Start from scratch"** opens a generic,
  standalone board titled **"Untitled Board"** (confirmed board ID
  `262771792706063`) with four pre-seeded columns — **Backlog, Waiting,
  In Progress, Done** — and onboarding-tip task cards already placed.
- **The Workflow Builder's mode-switcher → "Boards"** (opened from
  inside an active workflow) opens or auto-creates a board titled
  **"Workflow Board"** (confirmed board ID `262772321397058`, a
  different board at the data-model level) with exactly **one column —
  "Completed,"** marked with a green checkmark, **no cards**, and a
  **"0 runs" counter** fixed to the canvas.

These are two structurally different board instances — different titles,
different board IDs, different default column sets, and the
presence/absence of a run-count metric — not the same generic board
restyled. This preview's job is to make that contrast unmistakable, not
to be a general-purpose Kanban board component.

## Evidence used, in priority order

1. **Authorized JotForm HTML/CSS export** — not available, same as every
   other JotForm preview in this library.
2. **Live testing session captured in the record's Structure, Actions,
   and Behavior & States sections** — the primary and only source
   treated as confirmed here:
   - The generic board's exact column names and count (Backlog/Waiting/
     In Progress/Done, four total).
   - The generic board's default seeded content: two onboarding-tip task
     cards, each described as "a standard task card with a date chip and
     avatar."
   - The workflow-scoped board's exact column name and count ("Completed,"
     with a green checkmark icon, exactly one column).
   - The workflow-scoped board having **no cards** and a **"0 runs"**
     counter "fixed in the bottom-left corner of the canvas."
   - Both boards sharing the same URL pattern (`jotform.com/boards/
     {boardID}`) and differing only by ID/title/seeded content — i.e.
     they are the same underlying product, two different provisioned
     instances, not two different routes or products.
3. **Screenshots** — none captured in the source record for this
   component; the record's own description of card shape ("a date chip
   and avatar") is the only visual detail available, reproduced here as
   a date pill and a plain circular avatar placeholder rather than any
   guessed avatar imagery.
4. **Assumptions, clearly flagged**:
   - The exact onboarding-tip card copy ("Create new tasks on your
     board," "Edit your groups") is quoted directly from the record for
     the first card; the remaining demo cards in this preview (e.g.
     "Review vendor quote," "Draft onboarding email") are illustrative
     filler to show more than one card per column and are **not**
     transcribed from the source — the record never fully enumerated
     every seeded card's text.
   - Demo card dates are arbitrary placeholders, not observed values.
   - Responsive/breakpoint behavior was not observed in the source (no
     mobile/narrow-viewport capture exists for Boards); stacking columns
     vertically at narrow widths follows the same reasonable-assumption
     pattern used in `entries-kanban-view/`, not an observed JotForm
     breakpoint.

## Deliberately out of scope: drag-and-drop

**Task-card drag-and-drop between columns is not implemented in this
reconstruction, and this is a deliberate scope decision, not an
oversight.** The source record never tested or confirmed drag-and-drop
mechanics for Boards at all — unlike `entries-kanban-view/`'s source
record (which explicitly attempted and failed to verify Zoho's drag
behavior across two passes), the JotForm Boards record doesn't address
card dragging in any Action, Behavior, or Technical Data entry. Its
"Second-Pass Flags" section lists several still-open items (Select form,
Use template, Import board, the Groups/column "⋮" menus, what a populated
Workflow Board looks like after a real run) but drag-and-drop isn't even
named among them — it is simply outside what this pass looked at.

Per this repository's evidence-first ethos (`CLAUDE.md`: never invent
technical architecture; write `NOT OBSERVED`/omit rather than guess),
this preview does not fabricate drag mechanics, a "Move to…" accessible
substitute, or any other card-reordering control for a behavior the
source record never claims to have tested. The preview's job — proving
the generic-vs-workflow-scoped structural split — doesn't depend on card
movement at all, so nothing is lost by leaving it out rather than
inventing it.

## What this preview demonstrates

- A **mode switcher** ("Open via + CREATE (generic board)" vs. "Open via
  Workflow mode-switcher (workflow-scoped board)") as the primary,
  always-visible control — the central finding of the source record made
  directly interactive rather than described only in prose.
- A live **status summary line** (`role="status"`) restating the
  structural difference in plain text every time the mode changes
  (column count, column names, card presence, run-counter presence),
  so the contrast is legible to screen-reader users and sighted users
  alike, not conveyed by layout alone.
- The **generic board**: "Untitled Board," 4 named columns, demo task
  cards each with a date chip and a plain avatar placeholder.
- The **workflow-scoped board**: "Workflow Board," exactly 1 column
  ("Completed," green checkmark), zero cards, and a "0 runs" counter
  fixed to the canvas corner — visually narrower than the generic
  board's 4-column row (via a CSS `:has()` rule keyed on the column
  being an only-child) so it doesn't quietly stretch to look like "one
  of several," reinforcing that this is a different kind of board, not
  a generic board with three columns deleted.

## Other deliberate choices

- No JotForm internal class names, ids, or markup are reused — only
  scoped CSS Module classes and plain React props/state.
- No network calls of any kind; both states are fully synthetic, static
  data defined in `fixtures.ts`.
- The component is self-contained/uncontrolled: `initialMode` only seeds
  the starting state, and the in-preview toggle freely switches between
  both states afterward regardless of which fixture was selected.
- Per-column "⋮" menus, the "Groups ▾" control, and the "Select
  form"/"Use template"/"Import board" starting paths are all omitted —
  the source record either didn't open them or didn't test them this
  pass (see its own "Second-Pass Flags"), so none are reconstructed here.

## What this is not

Not the original JotForm Boards product, not pulled from any JotForm
source, and not guaranteed to match current production behavior — see
the in-app notice on the Preview tab, and the source record's own
`evidence_state` (`source_reviewed`, a broad identification pass, not a
full component-level technical capture). Task-card drag-and-drop in
particular is neither confirmed in the source nor reconstructed here.
