# Yes/No Toggle Field — reconstructed preview

Reference implementation for the "reconstructed" preview pattern. See
`Research-Library/04-Component-Library/zoho-forms/yes-no-toggle-field.md` for
the full research record this is built from.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available. No such export exists
   anywhere in this repository; this priority tier could not be used.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for this reconstruction: exact class-swap markup, the
   `changeYesNoFldSelection`/`removeClassAndAttrCommon` jQuery handlers, and
   the selected/unselected CSS values (colors, borders, `transition: none`).
3. **Screenshots and documented behavior** — no screenshots were captured in
   the source record (noted there as not screenshot-able through the
   automation session); behavior descriptions in Location/Actions/Behavior &
   States were used to confirm structure and state names.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - The "Yes"-selected fill color was not independently confirmed in the
     source (only the "No"-selected and unselected-Yes-next-to-selected-No
     colors were captured); assumed symmetric with the "No" treatment.
   - Keyboard interaction (arrow-key roving focus, Space/Enter activation)
     was not captured — no `keydown` handler was observed in the source, only
     the `onclick` handler. This preview implements a standard accessible
     radiogroup keyboard pattern as a deliberate improvement, not a verified
     reproduction of Zoho's actual keyboard behavior (which may have none).
   - Disabled-state styling was not observed in the source
     ("Disabled state: not observed"); a conventional reduced-opacity
     treatment is used here.
   - Responsive/breakpoint behavior was not observed (both captured contexts
     were fixed-width); stacking the pill pair at narrow widths is a
     reasonable assumption for a two-option control, not an observed Zoho
     breakpoint.

## Intentional deviations from the literal source markup

- Zoho's implementation uses `<a href="javascript:;" role="radio">`. This
  preview uses `<button type="button" role="radio">` instead — same ARIA
  contract, without the `javascript:` URL anti-pattern. This is a
  maintainability/accessibility improvement, not a research inaccuracy: the
  _behavior_ being reconstructed (role="radio", aria-checked toggling,
  mutual exclusivity via manual class management) is preserved exactly.
- All Zoho-generated class names (`yesNofldStyleCont`, `yesFldType`,
  `noFldType`, etc.) are replaced with scoped CSS Module classes local to
  this component. None of Zoho's original CSS is reused verbatim.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
