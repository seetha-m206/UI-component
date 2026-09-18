# Rating Star Field — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/rating-star-field.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` — no changes to that
shared architecture were needed for this component.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as
   `yes-no-toggle-field`.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source: the `selectRating` index-comparison fill logic (star N
   fills stars 1..N), the toggle-off branch on re-clicking the current
   boundary star, the exact fill/stroke colors, and the `0.3s linear`
   transition (a genuine CSS transition on color, unlike the other two
   controls captured so far in this product).
3. **Screenshots and documented behavior** — none captured in the source
   record; behavior descriptions confirmed structure/state naming.
4. **Assumptions, clearly flagged**:
   - Responsive/breakpoint behavior — not observed (fixed-width iframe in
     the tested session); a modest star-size reduction at narrow widths is
     assumed, not an observed Zoho breakpoint.
   - Exact focus-visible treatment — not observed; a standard outline is
     used, consistent with `yes-no-toggle-field`.

## Deliberate deviations from what was actually observed

- **Hover-preview fill is NOT implemented.** The source record explicitly
  flags this as inconclusive: `mouseOverRating`'s handler fired in testing,
  but no visible fill-preview change was confirmed. Rather than guess at a
  hover effect that may not exist, this reconstruction leaves hover
  interaction purely visual (cursor/focus only) and does not add a fill
  preview.
- **`aria-checked` correctly flips to `true` on the selected star.** The
  source record confirms the real Zoho markup has `role="radio"` and
  `aria-checked` present, but that `aria-checked` was observed to **remain
  `"false"` on every star regardless of selection** — a genuine
  accessibility defect, not a design choice (see the source record's
  Cross-Component Pattern Note). This reconstruction fixes it: the selected
  star's `aria-checked` is `true`, matching what `role="radio"` semantics
  are supposed to provide. Same precedent as swapping `<a
href="javascript:;">` for `<button>` in `yes-no-toggle-field`: fixing a
  confirmed defect is a documented improvement, not a change to the
  research finding itself.
- Zoho's generated class names/attributes (`ratingWrapper`, `elattr`,
  `rating_value`, etc.) are replaced with scoped CSS Module classes and
  plain React props. None of Zoho's CSS is reused verbatim.
- The visible rating-count text (`{value} out of 5`, `aria-live="polite"`)
  reconstructs the real `.ratingCount` display element the source JS
  updates (`$(ratCountEm).html(ratingElemCnt)`) — not an invented addition.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source, and
not guaranteed to match current production behavior — see the in-app notice
on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
