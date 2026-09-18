# Choices List Editor — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/choices-list-editor.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` and
`rating-star-field/`. One structural difference from those two: this
component manages an **array** of rows rather than a single scalar value —
see "Fitting a list-shaped component into the shared harness" below.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available anywhere in this
   repository, same as the other two reconstructed previews. This priority
   tier could not be used.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source: the exact row markup (`elname="choiceFieldDiv"`,
   `choiceFieldsValueInput`, `choiceAddSpan`/`choiceRemoveSpan`), the
   `addChoiceFieldChoiceFromAddBtn` / `removeChoiceValueInChoiceFieldPopUp`
   jQuery handlers (insert-after-clicked-row, remove-via-`.remove()`), the
   `onfocusout`/`onkeydown` commit model, the confirmed **absence** of any
   sortable/drag handler (`jQuery(container).data('ui-sortable')` is
   falsy), the zero-network-request finding (request-count hook), and the
   default/focused input border colors.
3. **Screenshots and documented behavior** — no screenshots were captured
   in the source record; the Structure/Behavior & States sections were used
   to confirm the hover/focus icon-reveal and "Press enter to add a new
   choice" hint text.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - The minimum-choice guard's exact behavior is described in the source
     as "implied... likely disables further deletion at 1 remaining choice,
     not independently confirmed visually." This reconstruction disables
     the remove button outright at `minChoices` (default 1) as the more
     conservative, accessible reading — not a verified reproduction of
     Zoho's actual guard UI.
   - Whether an explicit validation message accompanies that guard was not
     observed at all (the source only notes `isChoceValidationFailed()`
     exists as a guard before _adding_, not a captured message for the
     _minimum_ case). The `required` prop's message is this
     reconstruction's own addition, not a verified string.
   - The exact commit-then-insert ordering inside
     `handleChoiceInputKeyDown` on Enter was not captured (only that Enter
     adds a row). This reconstruction commits the in-progress edit first,
     then inserts — a reasonable choice, not a verified detail.
   - Responsive/breakpoint behavior was not observed (the builder Properties
     panel was a fixed-width column in the tested session). Stacking the
     input above its actions at narrow widths, and forcing the hover-reveal
     icons to be always-visible below that breakpoint (since `:hover` is not
     a reliable interaction on touch), are both reasonable assumptions, not
     observed Zoho breakpoints.
   - The literal `placeholder="Choice1"` from the source's hidden template
     row is preserved verbatim for every newly-added row (i.e. it does not
     increment per row). This looks like it could be a Zoho template quirk
     rather than intentional design, but since it's exactly what's in the
     captured DOM, it's reproduced as-is rather than "fixed."
   - Toolbar controls mentioned in the record's Structure section (search,
     duplicate, shuffle/randomize, Import) and the separate "Sort Choices"
     setting are **not implemented** — the Technical Data section only
     captured handlers/DOM for add, remove, edit, and the negative
     drag-reorder finding. There is no evidence for how those other
     controls behave, so nothing was guessed; this preview only reproduces
     what the Actions table documents.

## Intentional deviations from the literal source markup

- Zoho's implementation exposes `+`/`−` as `<span onclick="...">` elements
  (`fiedPropPlus`/`fiedPropMinus`). This preview uses real
  `<button type="button">` elements instead — keyboard-focusable and
  activatable via native Enter/Space semantics with no extra ARIA needed,
  versus a `<span>` that would require `tabindex`/`role="button"`/manual
  keydown handling to reach the same bar. No `javascript:` URLs are used
  anywhere (there were none in this component's source markup to begin
  with — the `onclick`/`onfocusout`/`onkeydown` attributes call real
  functions, not `javascript:;` hrefs).
- All Zoho-generated class names/attributes (`choiceFieldsChoicesContainer`,
  `elname`, `choice_id`, `fiedPropPlus`, `fiedPropMinus`, etc.) are replaced
  with scoped CSS Module classes and plain React props/state. None of
  Zoho's original CSS or the hidden HTML-commented radio/checkbox template
  variants are reused.
- The source commits row order changes back into two Zoho-internal
  bookkeeping calls (`changeTheChoiceFieldPopupToUnsavedState()`,
  `setChoiceCountInChoiceFieldsPopup()`). Neither has a UI-visible effect
  worth reconstructing beyond what's already reproduced: the dirty-state
  concept isn't rendered anywhere in the source's own captured markup, and
  the count is already recomputed live from `choices.length` here, matching
  the _behavior_ (re-count from live rows) without reproducing the
  Zoho-specific function names.

## Fitting a list-shaped component into the shared harness

`yes-no-toggle-field` and `rating-star-field` are both single-scalar
controls (`value: T | null`), and the shared `ReconstructedPreviewPanel` /
`FixtureStage` harness (`src/previews/ReconstructedPreviewPanel.tsx`, not
modified here per the task's instructions) is written around that shape: it
unconditionally forwards `value`, `onChange`, `disabled`, `required`, and a
computed `error` string to whatever `Component` is registered. This
component's real prop surface is `choices: ChoiceItem[]` (a list), not a
scalar `value`, so:

- The harness's injected `value`/`onChange` are simply unused extra props
  on this component — harmless (`ComponentType<any>`), but not meaningful.
- The `required` toggle **is** honored, since this component genuinely
  accepts a `required` prop (see `ChoicesListEditor.tsx` for why that name
  was kept instead of inventing a new one) and the harness forwards it
  directly.
- The harness's own computed `error` string (based on its internal scalar
  `value` state) is **not** wired into this component at all — this
  component derives its own validation message internally from
  `required && choices.length <= minChoices`, which is what actually
  reflects reality here (a fixture with a plausible "at minimum" state).

This is a known limitation of today's harness for a list-shaped component,
not something papered over: whoever generalizes the registry wiring next
may want to make `FixtureStage` prop-shape-agnostic. Until then, this
component still works correctly and is fully testable in isolation (see
`ChoicesListEditor.test.tsx`), and its fixtures were chosen so the
meaningful states (typical list, at-minimum with the guard silent vs.
enforced, disabled) are all reachable via fixture selection alone, without
depending on the harness's scalar-value plumbing.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source, and
not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
