# Theme Color Picker Gradient — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/theme-color-picker-gradient.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` and
`rating-star-field/`. This is the most visually complex control reconstructed
so far (popover + mode switch + palette grid + gradient stops + angle
control), and the source record itself is explicitly flagged
`⚠️ Partially incomplete` — several implementation details below could not be
resolved from the captured evidence and are called out as assumptions rather
than guessed into certainty.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as every other
   component in this library.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source: the popover structure (`zcolorpicker__default`, preset/
   standard color sections, "No Fill"/"Default Color"/"More Colors"
   buttons), the swatch cell markup (`role="option"`, `aria-selected`,
   `data-zcolor`/inline `background-color`/`title` redundancy), the gradient
   toggle behavior, the custom angle slider's ARIA contract
   (`role="slider"`, `aria-valuemin="0"`, `aria-valuemax="36"`, `data-val`
   step index → degrees), the confirmed **zero network requests** across the
   full interaction sequence, and the one concrete captured gradient value
   (`linear-gradient(230deg, rgb(255,222,214) 0%, rgb(191,172,254) 100%)`),
   which is reused verbatim as the `gradient-two-stops` fixture.
3. **Screenshots and documented behavior** — no screenshots were captured in
   the source record; the Behavior & States and Rules & Validation sections
   were used to confirm state names (`is-selected`, gradient CSSOM
   injection, angle step granularity).
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete or the record itself marked something unresolved:
   - **Preset palette values.** The source confirms an 8-shade × 10-row
     "Preset Colors" grid plus a 1×10 "Standard Colors" row (~90 swatches
     total) but never captured the individual hex values in most cells (only
     one example swatch, `#FFFFFF`, was captured in full). This
     reconstruction uses a smaller, deterministic 20-color placeholder
     palette — a reasonable stand-in set, not a reproduction of Zoho's
     actual palette.
   - **Angle control mechanics.** The source's slider is a fully custom
     `zslider` widget with drag-driven inline `top`/`left`/`margin-left`
     recalculation on every pointermove frame — explicitly not a native
     range input. Per the task brief, this reconstruction uses a native
     `<input type="range">` (min 0, max 350, step 10) instead of
     reimplementing a custom drag-rotatable dial. This preserves the
     observed value semantics (0-350°, 10° steps) without claiming to
     reproduce the drag interaction pixel-for-pixel.
   - **Popover positioning.** The source popover's own computed CSS is
     `position: static` — positioning is handled by an ancestor/`aria-owns`
     anchor mechanism that could not be fully traced. This reconstruction
     anchors the popover with a conventional `position: absolute` below the
     trigger, which reproduces the same visible placement.
   - **The swatch-circle trigger is a styled `<span>`, not a `<canvas>`.**
     The source draws the current color into a `<canvas>` element inside the
     trigger button; this reconstruction uses a CSS background instead,
     since canvas drawing has no accessible or behavioral difference here
     and is harder to keep in sync with React state.
   - **Live-gradient CSSOM mechanism is not reproduced.** The source record
     explicitly flags that it could not locate the stylesheet rule
     responsible for the live `background-image: linear-gradient(...)`
     applied to the preview pane (`sheet.insertRule()` or a dynamically
     swapped class — not resolved by enumerating `document.styleSheets`).
     This reconstruction achieves the same _visible_ live-update behavior
     using ordinary React state + inline style, which is a legitimate
     modern implementation choice, not a claim about how Zoho's own build
     does it internally.
   - **"No Fill" / "Default Color" / "More Colors" / "Other Used Colors"
     are intentionally out of scope.** All four are documented in the
     source's Structure section, but none affect the `{mode, solidColor,
gradientStart, gradientEnd, angle}` value model the task brief asked
     for, and "Other Used Colors" was observed to be session-dependent
     (conditionally present only after an earlier color was applied) rather
     than a stable piece of UI. Reconstructing them would mean inventing
     behavior with no captured evidence, so they are left out rather than
     guessed.
   - **Gradient-stop editing model.** The source's Rules & Validation
     section notes the gradient-stop swatches' `fpbgcolor` wrapper divs
     carry no `proptype`/`colortype`/`gradientclass` attributes until that
     stop's own sub-popover is opened — i.e. each stop likely opens its
     _own_ nested color picker in the real product. This reconstruction
     instead uses a simpler "select active stop, then pick from the shared
     preset grid below" model (a single flat palette shared between solid
     mode and whichever gradient stop is active) — a deliberate
     simplification of a nested-popover pattern that isn't fully evidenced,
     not a reproduction of two independent sub-pickers.
   - **Selected-swatch highlight styling.** The source confirms `is-selected`
     - `aria-selected="true"` are applied but the exact computed
       border/box-shadow values were not captured; this reconstruction uses a
       conventional 2px primary-color border + soft shadow ring.
   - **Responsive/breakpoint behavior** — not observed (the Themes editor
     was only captured at a fixed desktop-canvas width); narrowing the
     palette grid and letting the popover fill the available width at small
     container sizes is a reasonable assumption, not an observed breakpoint.

## What is deliberately NOT reconstructed

- The underlying `zcolorpicker`/`zslider` widget internals (their actual
  JS implementation, event delegation, or any shared Zoho design-system
  code) are **not** reconstructed — the source record itself never
  identified named handlers for swatch selection or slider drag (flagged as
  needing Sources-panel breakpoint tracing, not resolved). Only the
  externally observable DOM structure, ARIA contract, and visible
  interaction result are rebuilt, as ordinary React/CSS, with no code
  borrowed from or modeled on Zoho's actual widget family.
- No network behavior is modeled, matching the source's confirmed **zero
  requests** across the full interaction sequence — this preview never
  calls out to a network in any state.

## Intentional deviations from the literal source markup

- The mode switch is implemented as an explicit "Solid / Gradient"
  segmented `role="radiogroup"` control, rather than the source's implicit
  "click a second swatch circle to enter gradient mode" trigger — the same
  precedent as `yes-no-toggle-field`'s `<a href="javascript:;">` → `<button>`
  swap: the underlying state transition (solid ⇄ gradient) is preserved
  exactly, the trigger affordance is made explicit and easier to discover.
- Swatch cells use `<button role="option">` instead of the source's
  `<li role="option" tabindex="0">` — native buttons for keyboard/focus
  handling, same ARIA contract.
- All Zoho-generated class names/attributes (`zcolorpicker__*`,
  `fpbgcolor`, `colortype`, `proptype`, `gradientclass`, `elname`, etc.) are
  replaced with scoped CSS Module classes and plain React props/state. None
  of Zoho's original CSS or markup is reused verbatim.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`), plus its explicit
`⚠️ Partially incomplete` flag.
