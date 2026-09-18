# Publish Toggle — Labeled Two-Span Switch — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/publish-toggle-switch.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` and
`rating-star-field/`. This is the source record's "fourth distinct toggle
implementation" in Zoho Forms — it does not reuse those two components'
visual design; it reconstructs what is actually different about this one's
markup, gating logic, and (much thinner) captured CSS evidence.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available. No such export
   exists anywhere in this repository; this priority tier could not be
   used, same as every other reconstructed preview so far.
2. **Captured DOM/JS in the record's Technical Data section** — the primary
   source: the `label.switchContainer` + `span.textOn`/`span.textOff` +
   separate `<i class="switchOn">` knob structure; the `ZFShare.zfShare`
   module's two entry points, `confirmDisablePerma()` (Enabled -> Disabled,
   gated by a confirm dialog) and `enableFormPerma()` (Disabled -> Enabled,
   direct, no gate); and the confirmation that the gate is purely
   client-side (`reqCount: 0` at modal-open time, captured via a
   request-count hook, before any Yes/No choice).
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record for this component either (same limitation noted in
   the other two folders); the Behavior & States and Rules & Validation
   prose was used to confirm the Enabled/Disabled state names and the exact
   warning copy quoted below.
4. **Assumptions, clearly flagged** — this component has a notably thinner
   CSS evidence base than `yes-no-toggle-field` or `rating-star-field`, both
   of which had literal captured `rgb()` values. For this component the
   source record's Technical Data section states CSS was **"not captured in
   detail this pass"**, only describing the screenshot as "a standard green
   pill-switch with a sliding knob." Every visual value below is therefore
   an assumption built from this site's existing design tokens
   (`--color-success`, `--shell-border`, `--shell-muted-text`, etc.), not a
   verified reproduction of Zoho's own pixel/color values:
   - Track size (104px x 30px), knob size (22px), and the knob's resting
     positions.
   - The "off" track being an outlined/white pill rather than a filled gray
     one — a guess at what "standard" means visually, not an observed
     value.
   - The `120ms` background/knob-position transition (`--transition-fast`)
     — the source record has an explicit "Animation/transition: Not
     captured this pass" note; no transition timing of any kind was
     observed for this component.
   - Disabled-control (locked) styling (reduced opacity) — not observed,
     consistent with the other two toggle previews' disabled-state
     treatment.
   - Responsive/breakpoint behavior — not observed (no narrow-viewport
     capture for this component); a modest track-width reduction is
     assumed, not an observed Zoho breakpoint.
   - The confirm dialog's **title** ("Disable public sharing?") is
     synthesized — only the dialog's body warning text was actually
     captured (quoted verbatim below); no title/heading text was recorded
     in the source. The body text **is** the literal captured copy:
     "This form will no longer be accessible through its Permalink URL and
     social media links. Forms embedded on websites will also be
     disabled."
   - The dialog's keyboard behavior (Escape to cancel, Tab-trapped between
     Yes/No, focus moving to "No" on open and back to the switch on close)
     was not observed at all — the source record only confirms the modal
     opens and that "No" was clicked to dismiss it during the research
     session, not any keyboard path. This is a standard accessible dialog
     pattern applied here, not a verified reproduction of Zoho's own
     keyboard handling of that modal (which may have none).

## Intentional deviations from the literal source markup

- **Two separately-onclick-bound `<span>` elements collapsed into one
  `role="switch"` button.** The real markup has `textOn` calling
  `confirmDisablePerma()` and `textOff` calling `enableFormPerma()`
  independently, but the two are never both interactive at once — only one
  is visible/clickable at any given time via inline `display` toggling.
  This preview keeps both text labels present in the DOM (visibility
  controlled by CSS, not removal) and the separate knob element, but routes
  both directions through a single button's `onClick`, dispatching to the
  gated or ungated path based on current `status`. The externally observable
  behavior (which direction is gated, when the confirm dialog appears, what
  fires immediately) is unchanged.
- Zoho's implementation exposes no confirmed ARIA role on the switch itself
  in the captured markup (`label.switchContainer` with plain `onclick`
  spans). This preview uses `role="switch"` with `aria-checked` — a
  deliberate accessibility improvement matching the control's actual
  semantics (a two-state toggle with an on/off label), not a literal
  reproduction of unobserved ARIA.
- The confirm dialog uses `role="alertdialog"` / `aria-modal="true"` with
  programmatic focus management (focus moves into the dialog on open,
  returns to the switch on close) — the source record does not describe any
  ARIA or focus behavior for the real modal (its internal implementation
  was not decoded beyond confirming the client-side-only gating). This is a
  standard accessible-dialog pattern layered on top of the observed
  open/confirm/cancel behavior, not a verified reproduction.
- All Zoho-generated class names/attributes (`switchContainer`,
  `enableDisableFormperma`, `elname`, the `switchOn`/`switchOff` state
  classes on the `<i>` element) are replaced with scoped CSS Module classes
  local to this component. None of Zoho's original CSS is reused verbatim
  (none was captured to reuse — see the evidence gaps above).
- No `javascript:` hrefs of any kind existed in the source markup for this
  component to begin with (it's a `<label>`/`<span>`/`<i>` construct with
  `onclick`, not anchor tags) — nothing to replace on that front, unlike
  `yes-no-toggle-field`.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`). The gap between what was
captured for this component and what was captured for the other two toggles
in this product is real and is called out explicitly above, not smoothed
over.
