# Typeform Multiple Choice Editor / Choices List — reconstructed preview

See
`Research-Library/04-Component-Library/typeform/typeform-choices-list-editor.md`
for the full research record this is built from. This is the direct
Typeform-side counterpart to Zoho's `choices-list-editor/` — same
`choices: ChoiceItem[]` + `onChange` array-shaped prop pattern (not a
scalar `value`), same reasons for it, and the same "verify interactivity
via a local test wrapper, not the generic harness" approach (see
`choices-list-editor/README.md`'s "Fitting a list-shaped component into the
shared harness" section, which applies here unchanged — summarized again
below). The one genuinely new piece of logic in this folder, not present in
the Zoho version at all, is a real, working drag-to-reorder implementation.

## Evidence used, in priority order

1. **Authorized Typeform HTML/CSS export** — not available, same as every
   other reconstructed preview in this repo.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source:
   - **dnd-kit is the confirmed drag library.** The record's captured DOM
     shows the drag-handle button carrying `aria-label="Drag handle"`,
     `role="button"`, `aria-roledescription="sortable"`, and
     `aria-describedby="DndDescribedBy-2"` — "the exact combination is the
     signature accessibility fingerprint of dnd-kit." This repo's
     `package.json` has no drag-and-drop dependency at all, and the task
     explicitly says not to add one — so this reconstruction reuses
     dnd-kit's `aria-label="Drag handle"` / `aria-roledescription="sortable"`
     attribute naming on its own native-HTML5-drag `<button>` handle (for
     fidelity to what a screen reader user of the real product would hear)
     without depending on dnd-kit itself. See "Implementation choice" below
     for the mechanism actually used.
   - **Reorder is genuinely, repeatedly confirmed working.** The record
     documents three separate real drag tests, each producing the correct
     resulting order and re-lettering (Red/Green/Blue → drag "Blue" to top →
     Blue/Red/Green → drag back down → Red/Green/Blue → a third drag →
     Blue/Red/Green). Per the task's explicit instruction, this is
     implemented as **real, working reorder**, not a decorative handle —
     verified directly in `TypeformChoicesListEditor.test.tsx` both via
     simulated native drag events and via a direct unit-style call to the
     exported `moveItem()` helper.
   - **Live, auto-renumbering letter badges.** The record: "deleting or
     reordering choices immediately re-letters every remaining row to stay
     sequential." Badges are computed as `letterFor(index)` from live
     array position on every render — never a stored/independent field —
     so this is automatic by construction, not a special case.
   - **No delete confirmation.** The record: "Row instantly removed, no
     confirmation prompt... a genuine UX difference worth noting."
     `removeAt` calls `onChange` immediately with no intermediate dialog or
     guard of any kind — including no minimum-choice floor, since (unlike
     Zoho's version) "no minimum-choice guard was tested/observed this
     pass" for Typeform.
   - **Add is instant, appended, and auto-focused.** The record: "New
     empty row appended, instantly focused and ready to type — no dialog,
     no reload." `addChoice` appends to the end of the array (not
     insert-after-current, which is Zoho's own, different documented
     behavior) and focuses the new row's text input via the same
     pending-focus-ref pattern `choices-list-editor` uses.
   - **Rich text is simplified to plain text.** The record: choice text is
     "authored via Quill.js." Per the task's explicit instruction, this
     reconstruction uses a plain `<input type="text">` instead — a
     documented simplification, not a missed detail.
   - **Two unlabeled icon buttons are deliberately NOT reproduced.** The
     record: "two more icons (a branch/fork-shaped icon and a
     fish-like/curved icon) whose exact functions were not confirmed this
     pass... neither carries an `aria-label` or a native tooltip." Per this
     library's hard rule against inventing confirmed-looking behavior for
     unconfirmed elements, these are simply absent here — not rendered as
     inert placeholders, not guessed at. Only the drag handle and delete
     icon (both fully confirmed, with clear documented behavior) are
     implemented.
3. **Screenshots and documented behavior** — no screenshots were captured
   in the source record; the Structure/Behavior & States prose was used to
   confirm badge placement (inside the input, on the left), hover-reveal
   ordering (handle left, delete right), and the "Add choice" text-link
   styling.
4. **Assumptions, clearly flagged**:
   - **Mid-drag visual feedback** (a subtle `opacity: 0.85` on the actively
     dragged row via `:active`) — the record explicitly could not capture
     mid-drag CSS ("a real gap, not a 'confirmed absent' finding"; frame
     capture was attempted but not completed reliably). This is a
     low-risk, clearly-flagged addition, not a verified reproduction of
     dnd-kit's actual mid-drag inline styles.
   - **The exact keyboard reorder mechanism** (ArrowUp/ArrowDown moves the
     row immediately, one position per key press) is this reconstruction's
     own design, per the task's explicit suggestion — **not** a
     reproduction of dnd-kit's own default keyboard sensor, which
     typically uses a pick-up/move/drop cycle (Space to lift, arrows to
     move, Space to drop, Escape to cancel). The record's DOM evidence
     only confirms dnd-kit's accessibility _attributes_ are present
     (`aria-roledescription="sortable"`, `aria-describedby`), not which
     exact keyboard interaction pattern was tested — no keyboard reorder
     was independently tested in the record at all (only real mouse drags
     were). This reconstruction's simpler immediate-move-per-keypress
     pattern is a deliberate, simpler keyboard alternative built to satisfy
     this library's own hard accessibility rule (hover/drag-triggered UI
     must also work via keyboard), not a captured Typeform behavior.
   - **Responsive/breakpoint behavior** was not observed in the record (the
     builder canvas was fixed-width in the tested session) — forcing the
     hover-reveal handle/delete icons to always-visible below a narrow
     container width is a reasonable assumption, matching the same posture
     `choices-list-editor` takes for its own unobserved breakpoint.

## Implementation choice: native HTML5 drag-and-drop + a keyboard alternative, not a new dependency

This repo's `package.json` has no drag-and-drop library (`dnd-kit`,
`react-beautiful-dnd`, etc.), and the task instructs against adding one.
Two options were available: a from-scratch pointer-event-based sortable, or
native HTML5 drag-and-drop (`draggable` + `dragstart`/`dragover`/`drop`).
This reconstruction uses **native HTML5 drag-and-drop**:

- Each `<li>` row is `draggable={!disabled}`. `dragstart` records which
  choice is being dragged (by id, in a ref — not React state, since drag
  events fire at native speed and don't need a re-render mid-drag).
  `dragover` calls `preventDefault()` on every row to allow dropping.
  `drop` on the target row computes both indices and calls the shared
  `reorder()` function, which is the same function the keyboard path uses.
- **Keyboard alternative, per this library's hard rule** that any
  hover/drag-triggered interaction must also work via keyboard focus: the
  drag-handle `<button>` responds to `ArrowUp`/`ArrowDown` while focused,
  moving the row one position per key press via the exact same `reorder()`
  call the mouse path uses — so both interaction methods are provably
  running the same logic, not two parallel, potentially-diverging
  implementations. Focus follows the moved row's handle after a keyboard
  move, so repeated arrow presses keep working without re-tabbing.
- `moveItem<T>(list, fromIndex, toIndex)` is exported as a pure function
  specifically so the reorder _logic_ can be unit-tested directly — see
  `TypeformChoicesListEditor.test.tsx`, which tests it both via simulated
  drag events, via the keyboard path, and via direct calls to `moveItem`
  itself, per the task's explicit testing guidance.

## What NOT built (deliberately out of scope)

- **Rich-text (Quill.js) editing of choice text** — a plain text input,
  per the task's explicit instruction; flagged above.
- **The two unconfirmed per-row icon buttons** (logic-jump / visibility
  toggle guesses in the record, neither confirmed) — not implemented,
  flagged above.
- **Any network/autosave simulation.** The record documents genuine
  per-action backend autosave (`PUT .../bff/bob-the-builder/forms/{formId}`
  plus a resync `GET`/`GET`/`POST gql` batch) on every drag, delete, and by
  extension add — a real, interesting finding (Typeform's autosave line is
  drawn per _editor surface_, not uniformly). This is a static docs
  preview with no backend, so — same as every other reconstruction in this
  repo — there are zero network calls of any kind here.
- **A minimum-choice guard.** Explicitly not observed for Typeform in the
  record ("No minimum-choice guard was tested/observed this pass") —
  unlike Zoho's `choices-list-editor`, which has one. Deletion is
  unguarded all the way to zero choices, matching what was (and wasn't)
  actually tested.

## Fitting a list-shaped component into the shared harness

Same situation `choices-list-editor` documents in its own README, applying
here unchanged: the shared `ReconstructedPreviewPanel` harness is written
around a scalar `value`/`onChange` contract and only forwards `disabled`
when a toggle literally id'd `"disabled"` exists (see
`preview.config.ts`). This component's real prop surface is `choices:
TypeformChoiceItem[]`, not a scalar `value`, so within the live embedded
harness preview, `onChange` is not automatically wired up by the harness
itself (this component's own `fixtures.ts`, like `choices-list-editor`'s,
intentionally does not include an `onChange` in any fixture's props) — add/
delete/reorder won't visibly persist there, though typing into a row's
`<input>` still works locally since it's uncontrolled (`defaultValue`).
The component is fully interactive and correctly verified in isolation via
`TypeformChoicesListEditor.test.tsx`'s own local `Controlled` wrapper,
exactly mirroring `choices-list-editor/ChoicesListEditor.test.tsx`'s
pattern, per the task's explicit instruction.

## Other deviations from what was actually observed

- Zoho's — sorry, Typeform's — generated class names/attributes (`data-qa`,
  `ql-editor`, `ql-container ql-bubble`, the build-specific `.dVrivy` row
  class, `DndDescribedBy-2`) are replaced with scoped CSS Module classes
  and plain React props/state. None of Typeform's original CSS, Quill.js,
  or dnd-kit internals are reused.
- The delete icon is a real `<button type="button">` (not the source's
  unlabeled circular "✕"-only affordance's exact underlying element,
  which wasn't captured beyond its `aria-label`-less appearance in the
  DOM excerpt) — a native interactive element, consistent with every other
  reconstructed preview in this repo's precedent of using real
  `<button>`s for anything that behaves like a control.

## What this is not

Not the original Typeform component, not pulled from any Typeform source,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
