# Yes/No Field (Typeform) — reconstructed preview

See `Research-Library/04-Component-Library/typeform/yes-no-field.md` for the
full research record this is built from. Follows the folder contract,
registry format, evidence labeling, state controls, and accessibility bar
established by `yes-no-toggle-field/` and `rating-star-field/` — no changes
to that shared architecture were needed for this component.

This is Typeform's equivalent of Zoho Forms' Yes/No field
(`yes-no-toggle-field/`), but it is a genuinely different visual and
interaction design, not a reskin: two full-width **stacked** button-style
options (not side-by-side), built on **Radix UI's headless `RadioGroup`
primitive** rather than Zoho's bespoke class-toggling widget.

## Evidence used, in priority order

1. **Authorized Typeform HTML/CSS export** — not available. No such export
   exists anywhere in this repository; this priority tier could not be used.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary and unusually strong source here: the record was produced by a
   live browser-extension trace on a real Typeform account/published form,
   with computed CSS values read directly (not estimated from screenshots).
   This reconstruction uses those captured values precisely, not
   approximations:
   - Default state: `background: rgba(250, 250, 250, 0.6)`,
     `box-shadow: rgba(42, 34, 43, 0.1) 0 0 0 1px`, `border-radius: 8px`.
   - Selected state: background is **unchanged** — only the box-shadow
     switches to a solid `rgb(42, 34, 43) 0 0 0 2px` ring plus a matching
     border color. `rgb(42, 34, 43)` is a dark near-black plum, used
     verbatim rather than rounded to `#000`.
   - Transition: `background-color 0.25s, color 0.25s, border-color 0.25s,
box-shadow 0.25s`, all on `cubic-bezier(0.215, 0.61, 0.355, 1)` easing —
     reproduced exactly, not substituted with a generic ease curve.
   - DOM structure: `role="radiogroup"` wrapper, `role="radio"` on each
     `<button type="button">`, `aria-checked` kept in sync with Radix's own
     `data-state="checked"/"unchecked"` hook — both attributes are
     reproduced here.
   - Confirmed keyboard behavior: Space selects the focused option; Arrow
     Down/Up move focus between options **without** changing selection
     (standard ARIA radiogroup roving-focus pattern) — reproduced exactly.
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record this pass (noted there as not captured, DOM/CSS/JS/
   network data pulled programmatically instead); the Structure and
   Behavior & States prose was used to confirm the stacked layout and the
   key-badge placement.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - Disabled-state visual styling was not exercised in the source trace
     (only `aria-disabled="false"` groundwork was observed on every
     option); a conventional reduced-opacity treatment is used here,
     consistent with the other two components in this folder.
   - Responsive/breakpoint behavior was not observed (the traced Universal-
     mode render was a fixed layout); a modest padding/type reduction at
     narrow widths is a reasonable assumption for a full-width stacked
     control, not an observed Typeform breakpoint.
   - The record notes the DOM's outer `radiogroup` div carries
     `tabindex="0"` with every individual radio at `tabindex="-1"` in the
     captured (nothing-selected) snapshot. This reconstruction instead uses
     the same per-button roving-tabindex convention as `yes-no-toggle-field`
     and `rating-star-field` (the focused/selected option gets `tabIndex 0`,
     the other gets `-1`) for consistency with the rest of this preview
     library and with standard WAI-ARIA composite-widget authoring practice.
     The externally observable keyboard behavior — Tab into the group once,
     arrow keys roam focus, Space selects — is unaffected by this
     implementation detail.

## Confirmed behaviors deliberately NOT "improved" or added

Unlike `yes-no-toggle-field` (the Zoho sibling), two things are
**intentionally absent** here because the research record confirms the real
product does not have them — adding either would misrepresent Typeform's
actual behavior:

- **No deselect / toggle-off.** The record confirms (tested directly, not
  assumed): clicking the already-selected option is a no-op —
  `aria-checked` stays `"true"`. This is a true one-way radio group; once
  answered, the only way to change the answer is to pick the _other_
  option, never back to "no answer." `select()` in `YesNoField.tsx` returns
  early with no `onChange` call when `value === option`.
- **No "Y"/"N" letter-key shortcuts.** The source visually displays boxed
  key-hint badges on every option, but the record confirms they **did not
  function** in the tested render mode (Typeform's multi-question
  "Universal mode"), tried three ways (focused on "No," focus blurred,
  focus on page background) with a consistent negative result each time.
  The record flags this as possibly mode-dependent — Typeform's true
  single-question conversational flow was not separately re-verified — but
  since it wasn't confirmed working anywhere, this reconstruction does not
  wire up letter-key handling. The badges are rendered as inert, decorative,
  `aria-hidden="true"` visuals only, matching the source markup's own
  `aria-hidden` wrapper around the key letter.

## Intentional deviations from the literal source markup

- Class names in the source follow a styled-components/CSS-in-JS hashed
  pattern (`sc-xxxxx`); this reconstruction uses scoped CSS Module classes
  local to this component instead. None of Typeform's original CSS is
  reused verbatim (only the captured computed values, as prose/numbers).
- `data-radix-collection-item` (Radix's internal collection-registration
  marker) is not reproduced — it has no visual or behavioral meaning
  outside Radix's own internals and would be inert here.
- Per-button roving `tabIndex` is used instead of the literal captured
  group-level `tabindex="0"` — see the assumptions note above.

## What this is not

This is not the original Typeform component, not pulled from any Typeform
source code, and not guaranteed to match current production behavior — see
the in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`). The underlying research record
was itself captured only in Typeform's "Universal mode" rendering; findings
flagged there as possibly mode-dependent (the letter-key shortcuts, and the
inferred network-batching timing) are carried forward here as documented
uncertainty, not resolved by this reconstruction.
