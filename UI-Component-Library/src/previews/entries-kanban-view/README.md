# Entries Kanban View — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/entries-kanban-view.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` and
`rating-star-field/`, adapted from a single form field to a screen-level
board view (columns of cards instead of one control).

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as the other
   two previews in this folder.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source, and the only thing this reconstruction treats as
   confirmed:
   - The setup-gated structure: a Kanban view cannot render until a
     "Modify Kanban View" modal chooses a **choice-type grouping field**
     (text/number/date/Matrix/Subform fields are excluded from that
     picker) and up to 4 extra fields to show per card.
   - One column per option of the grouping field, each header tinted from
     a small cycling palette (`kanbanCardColor1/2/3…`) — reproduced here as
     `colorIndex: 1 | 2 | 3` cycling through `.color1/.color2/.color3`.
   - The card DOM shape: `em.kanbanCardName` for the grouping field's own
     value text, plus the extra configured fields as plain text.
   - The empty-column state: an illustrated "No Entries" placeholder,
     directly confirmed (`OBSERVATION`, all 3 columns were empty until the
     test entry was given a value).
   - The view-toggle itself fires **zero network requests** — pure
     client-side re-render of already-loaded row data into cards.
   - Card drag-and-drop was `draggable="false"` (confirmed **not** native
     HTML5 DnD) and never successfully triggered — see the central
     deviation below.
3. **Screenshots and documented behavior** — none captured in the source
   record for this component (DOM/CSS/JS pulled programmatically, no
   screenshot this pass); behavior descriptions in Structure/Actions/States
   confirmed naming and layout only.
4. **Assumptions, clearly flagged**:
   - Exact header tint hex values — not captured (no screenshot, DOM/JS
     pull only); a plausible 3-color cycling palette is used here instead
     of guessing at Zoho's real values.
   - Responsive/breakpoint behavior — not observed at all in the source
     (no mobile/narrow-viewport capture exists for this screen); stacking
     columns vertically at narrow widths is a reasonable assumption for a
     board layout, not an observed Zoho breakpoint.
   - The "⋮" more-menu (`.kcardMoreMenu`, `.entDelete`) was seen in the DOM
     but **not deep-dived** in the source record, so it is intentionally
     **not reconstructed** here — only the move interaction the task
     requires is implemented, rather than guessing at an unverified menu's
     other contents.

## The central deviation: "Move to…" instead of drag-and-drop

**This is the most important thing to read before using this preview.**

The source record is explicitly flagged incomplete on exactly the
interaction a Kanban board exists for: dragging a card into another column
was **never successfully verified** in the real product. Two full passes
(~170 actions, including direct JS event-listener instrumentation on the
card element) confirmed:

- The card is `draggable="false"` — this is **not** native HTML5
  drag-and-drop.
- A sibling function in the app's own JS, `addSortableFnToKanbanChoice`,
  strongly suggests the card grid is built on jQuery UI's `.sortable()`
  widget — but this was only confirmed for a _different_ Kanban-setup
  control, not for the card grid itself.
- Every synthetic drag gesture the test tooling could produce (single
  coarse gesture, multi-waypoint gesture, direct JS-dispatched mouse
  events) failed to register a drag with jQuery UI Sortable's internal
  state machine. No ghost element, no drop-zone highlight, no network
  call, no error — the card just silently stayed in place.
- As a result, the record's Technical Data section has **NOT OBSERVED**
  against the drag→drop network request/payload, the dragging/ghost-element
  CSS, and the drop animation. The one adjacent data point that _was_
  captured — manually editing the same field via the entry's own edit form
  fires `PUT /{account}/report/{reportName}/record/{recordId}` and moves
  the card on next render — is recorded as an **INFERENCE** about what the
  drag handler probably wraps, not a confirmed fact about the drag path.

Per this repository's evidence-first ethos (`CLAUDE.md`: never invent
technical architecture; write `NOT OBSERVED` rather than a plausible
guess), this reconstruction does **not** attempt to reproduce jQuery UI
Sortable's mousedown/mousemove drag mechanics from guesswork. Instead, each
card carries a `<select>` **"Move to…"** control listing the other
columns by name; choosing one calls `onMoveCard(cardId, newColumnId)`.
This is a deliberate, explicit substitution, not an oversight:

- It delivers the **real end-user capability** the source component
  provides — regrouping a card into a different column — without
  pretending to reproduce unverified mechanics.
- It is **fully keyboard operable by construction** (Tab to the control,
  arrow keys / typeahead to choose a column, Enter/click to commit) —
  exactly the accessibility guarantee that a bespoke mouse-only drag
  implementation would not have, and that the source's own drag mechanism
  was never confirmed to have either (no ARIA drag/drop pattern was
  observed on the card, since the drag path was never reached).
- If a second research pass (see the record's own "Recommended Second
  Pass") later confirms the real drag mechanics — network payload, CSS
  classes, drop animation — this preview should be revisited and the
  "Move to…" control either supplemented with real drag or left in place
  as a documented accessible alternative to it.

## Other deliberate choices

- Zoho's generated class names/ids (`kanbanMainContainer`,
  `kanbanCardWrapper`, `kChoice{id}`, `kanbanCardColor{n}`, `handCursor`,
  etc.) are replaced with scoped CSS Module classes and plain React props.
  None of Zoho's CSS is reused verbatim.
- No item-count badge is rendered per column — the source record
  explicitly states none is shown or enforced.
- No per-column entry limit is enforced, matching the source.
- The "⋮" card menu is omitted (see Evidence point 4 above) rather than
  fabricated.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`open_finding`, explicitly flagged `status: "partial"`, not
`runtime_verified`). The real card drag-and-drop interaction in particular
remains unverified in the source and is substituted, not reconstructed,
here.
