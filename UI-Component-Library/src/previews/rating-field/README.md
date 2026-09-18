# Rating Field — reconstructed preview

See `Research-Library/04-Component-Library/typeform/rating-field.md` for the
full research record this is built from. Follows the folder contract,
registry format, evidence labeling, state controls, and accessibility bar
established by `yes-no-toggle-field/` and `rating-star-field/` — no changes
to that shared architecture were needed for this component.

## Evidence used, in priority order

1. **Authorized Typeform export** — not available. No such export exists
   anywhere in this repository; this priority tier could not be used.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source, and an unusually strong one: the record captures the
   literal DOM (`role="radiogroup"`/`role="radio"`, `data-filled`,
   `data-hovered`, `data-radix-collection-item`, an inline `<svg>` with a
   `<path class="symbolFill">`), the exact base color
   (`rgba(42, 34, 43, X)`) at three precise opacity steps (`0` / `0.2` /
   `0.3`), and the exact transition
   (`fill 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)`) — all confirmed live via
   DOM inspection, computed styles, and direct hover/click interaction, not
   inferred from screenshots.
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record (noted there as not captured this pass); the Actions
   table and Behavior & States prose were used to confirm the hover-preview
   and click-commit sequencing.
4. **Assumptions, clearly flagged**:
   - **Exact icon SVG path** — the record documents that Typeform renders a
     real inline `<svg>` with a `<path class="symbolFill">` (as opposed to a
     font icon), but does not capture the exact path data, only that star is
     the configurable default. The star path used here is a reasonable
     stand-in matching `rating-star-field`'s visual language for
     side-by-side comparison — it is not a captured exact path.
   - **Scale is fixed at 5, not 1-10.** The record confirms the real range is
     configurable (1-10), tested at 5 by the researcher specifically "for
     direct comparability with Zoho's fixed 5-star field." This
     reconstruction follows that same choice.
   - **Overlap behavior between hover-preview and an existing committed
     selection** was not independently re-verified pixel-by-pixel in the
     source. The record's Actions table states hover fills "icons 1 through
     N" and "icons after N stay outlined" without qualifying that against a
     prior selection, so this reconstruction takes that literally: while
     hovering, the hover-preview run (1..hovered) fully governs the display,
     and the committed run reappears the instant the pointer leaves. This is
     the most literal reading of the recorded wording, not a merge of the
     two states.
   - Responsive/breakpoint behavior — not observed (fixed-width sessions in
     both the builder and published live form); a modest icon-size reduction
     at narrow widths is assumed, consistent with `rating-star-field`'s same
     assumption, not an observed Typeform breakpoint.
   - Keyboard interaction (arrow-key roving focus, Space to commit) is a
     standard accessible radiogroup pattern, consistent with
     `yes-no-toggle-field`/`rating-star-field` — the record does not itemize
     Typeform's own keydown handling in detail.

## Confirmed-correct behaviors reproduced faithfully (not "improvements")

Unlike `rating-star-field`, where two behaviors had to be deliberately
**left out or fixed** because the source was inconclusive or buggy, this
component's record confirms both are genuinely present and working in
Typeform, so they are reproduced here as-is:

- **Hover-preview fill is implemented and working.** Hovering icon N fills
  icons 1..N with a 0.2-alpha preview tint, reverting instantly on mouse-out
  without committing a selection — confirmed live in testing. This is
  exactly the behavior that was inconclusive for Zoho's `rating-star-field`
  (handler fired, no visible change confirmed) and deliberately not
  reconstructed there.
- **`aria-checked` correctly flips to `true` on exactly the selected icon.**
  Confirmed across two different selections in the same session (icon 4 →
  only icon 4 `true`; then icon 2 → only icon 2 `true`, icon 4 reverts to
  `false`). This is the real, correct Typeform behavior — the opposite of
  Zoho's confirmed accessibility bug where `aria-checked` never flips.
- **Two extra data attributes beyond a plain ARIA radio**, `data-filled` and
  `data-hovered`, are reproduced on each button exactly as captured, tracked
  separately from `aria-checked`/`data-state`, which reflect only the
  committed answer.
- **One-way selection, no deselect** — clicking the already-selected icon
  again is a no-op; `aria-checked` stays `true`. Identical confirmed
  behavior to Typeform's own Yes/No field.

## Intentional deviations from the literal source markup

- Zoho's sibling component's `<a href="javascript:;">` anti-pattern does not
  apply here — the Typeform source already uses real `<button>`-style Radix
  primitives, so no markup substitution was needed on that front.
- Typeform's own generated class names (styled-components hashes,
  `data-radix-collection-item`, etc.) are replaced with scoped CSS Module
  classes and plain React props. None of Typeform's original CSS is reused
  verbatim, though the captured color/opacity/transition values are
  reproduced exactly.
- The rating count/value is not separately announced via a live region — the
  record explicitly notes **no `aria-live` region exists anywhere on the
  page** for this field. This reconstruction matches that: there is no
  visible/announced running count the way `rating-star-field`'s `{value} out
of 5` text works, since that pattern was not observed for Typeform's
  Rating field.

## What this is not

Not the original Typeform component, not pulled from any Typeform source,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
