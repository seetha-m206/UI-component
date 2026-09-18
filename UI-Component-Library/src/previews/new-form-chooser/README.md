# Dashboard "+ New Form" Chooser (Overlay + Create-From-Scratch Sub-Dialog) — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/new-form-chooser.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`analytics-dashboard-kpi-bar-map/` (a self-managed, stage-driven
screen-level component) and `analytics-feature-gate/` (the
`position: fixed; inset: 0` full-viewport overlay + `role="dialog"`
pattern reused here). Also directly related to `card-list-selector/`,
which independently documented this exact screen's 7-card grid as one of
"three lookalikes" of a shared visual pattern — see "Relationship to
card-list-selector" below for why this component does not reuse that one.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as every other
   reconstructed preview in this product.
2. **Captured DOM/CSS/JS in the record's Technical Data/Structure
   sections** — the primary source:
   - **Top-level overlay structure.** Full-viewport dark overlay, centered
     white panel, "Choose how to create your form" heading, an X close
     button top-right, and exactly 7 cards (icon + title + one-line
     description) in a 4+3 flex-wrap grid — reproduced verbatim in
     `.overlay`/`.panel`/`.closeButton`/`.cardGrid`, including the exact
     title/description copy and the "New" badge on "Import Form and
     Entries."
   - **Create-From-Scratch sub-dialog structure.** Opened only by "Blank
     Form"; a two-panel layout (left: name input, form-type picker,
     Cancel/Create Form; right: a preview area), heading "Create From
     Scratch," and exactly 3 form-type cards (Standard pre-selected by
     default, Spotlight with a "New" badge, Card) — reproduced in
     `.subDialog`/`.subDialogLeft`/`.subDialogRight`/`.formTypeGroup`.
   - **The confirmed, real, animating selection transition.** The record
     states the form-type cards' unselected-vs-selected treatment (gray
     border/transparent vs. green border/near-white green-tinted
     background) is driven by a genuinely functional ~0.2s linear CSS
     transition. `.formTypeCard`'s `transition: border-color 0.2s linear,
background-color 0.2s linear` plus `.formTypeCardSelected`'s exact
     colors (`rgb(204, 214, 224)` unselected border, `rgb(36, 166, 138)`
     selected border, `rgb(250, 255, 254)` selected background) reproduce
     this directly.
   - **Actions.** Trigger → chooser; Blank Form → sub-dialog (other 6 cards
     fire `onSelectOption` only, per the record's own note that only Blank
     Form's next step was traced); form-type card click → mutually
     exclusive selection; Cancel → back to chooser (not full close); X /
     Escape at the top level → full close via `onClose`; Create Form →
     `onCreateForm(formType)`, no real creation. All of these map directly
     onto `NewFormChooser.tsx`'s handlers.
   - **Zero network calls.** The record confirms opening, selecting a form
     type, canceling, and closing are all entirely client-side. This
     preview never calls `fetch`/XHR anywhere — verified in
     `NewFormChooser.test.tsx`.
3. **Screenshots and documented behavior** — no screenshots were captured
   in the source record; the Structure and Behavior & States prose were
   used to confirm exact copy, badge placement, and the two-panel
   sub-dialog layout.
4. **Assumptions, clearly flagged**:
   - **The video preview panel.** See the dedicated scoping section below.
   - **Badge visual treatment.** The record confirms a "New" badge exists
     on two cards (top-level "Import Form and Entries," and the Spotlight
     form-type card) but gives no exact color/shape. A small teal pill
     (`rgb(36, 166, 138)` background, white uppercase text) is used here as
     a reasonable, not independently confirmed, treatment.
   - **Icons are decorative Unicode glyphs, not Zoho's sprite icons** — see
     "Relationship to card-list-selector" below.
   - **Draft-state reset on full close.** Whether closing the whole chooser
     (X / Escape) resets the sub-dialog's in-progress name text and
     form-type selection was not documented either way. This
     reconstruction resets both to their initial values on `closeAll()` —
     a reasonable hygiene assumption, not a verified behavior. Cancel
     (returning only to the top-level chooser, not a full close) does
     **not** reset them, since the record explicitly frames Cancel as a
     step back, not a teardown.
   - **Keyboard support (arrow-key roving focus, Escape-to-close/back)**
     is **not observed** in the source for either screen. It's added here
     as a deliberate accessibility improvement, consistent with the same
     unobserved-but-added precedent in `card-list-selector` (arrow keys)
     and `analytics-feature-gate` (Escape-to-cancel on its own
     `role="dialog"`).
   - **Responsive/breakpoint behavior** was not observed (both screens were
     viewed at a single fixed desktop width in the tested session).
     Stacking the sub-dialog's two panels and wrapping the card grid to
     fewer columns at narrow container widths are reasonable assumptions
     for this docs-site preview, not observed Zoho breakpoints.

## The most important distinction in this component: two cards, two different claims

The task that produced this reconstruction was explicit that blurring this
distinction is a real mistake this repository has made before on a sibling
component, so it's stated plainly:

- **Form-type cards (3, in the sub-dialog): a CONFIRMED, real, functionally
  animating selection state.** The record directly observed the
  border-color/background-color swap and its ~0.2s linear transition when
  a form-type card is selected. `.formTypeCardSelected` in the CSS module
  is a faithful reproduction of an observed state change.
- **Top-level cards (7, in the chooser overlay): NO selection state exists
  at all.** The record found the same 0.2s linear transition _declared_ on
  these cards too, but clicking one **navigates away immediately** rather
  than toggling any persisted selected/unselected state — so there was
  nothing to observe a transition happen _to_. This reconstruction
  deliberately does **not** give these cards a `.selected`-style class, an
  `aria-checked`, or a `role="radio"` — they are plain `<button
type="button">` elements with only an ordinary hover/focus elevation
  (`.optionCard:hover`), reusing the same declared 0.2s linear timing for
  that hover shift as a low-risk, honestly-scoped assumption. This is
  presented as a **hover treatment for a clickable card**, never as a
  reproduction of a confirmed "selection" behavior, because no such
  behavior exists on these cards in the source.

## Deliberate scoping decision: the video preview panel is NOT reconstructed

The sub-dialog's right-hand panel plays a **looping preview video** per
form type in the real product. No video asset exists for this (or any)
third-party product in this repository, and recording a fake stand-in
video would misrepresent something that was never actually captured.
Instead, `NewFormChooser` renders a small labeled placeholder box per
selected type:

```
Video preview: spotlight form layout — not reconstructed, video asset unavailable
```

exposed with `role="img"` and that exact string as its `aria-label`, so
it's still announced sensibly to assistive tech — the same pattern already
established by `analytics-dashboard-kpi-bar-map`'s region-map placeholder
for an equivalent "real thing is a media asset we don't have" gap.

## What NOT to build (explicitly out of scope, per the source and the task)

- **The other 6 top-level options' own follow-up screens.** Only "Blank
  Form"'s next step (the Create-From-Scratch sub-dialog) was ever traced
  in the source record. Clicking any of AI Forms / Form Templates / CRM
  Forms / PDF to Form / Images to Form / Import Form and Entries fires
  `onSelectOption` with that card's id and nothing else — no dialog, no
  navigation, no further markup for any of them.
- **Real video playback** — see the dedicated section above.
- **The hidden `#folderBasedFormsDiv` folder selector** mentioned in the
  source as existing-but-invisible in the real DOM. It was never shown to
  a user in the source record, so it isn't reconstructed here at all — not
  even as a hidden element, since there's nothing observable to reproduce.

## Relationship to `card-list-selector/`

`card-list-selector`'s own research record independently found this exact
screen's 7-card grid to be one of "three lookalikes" of a general
icon+title+description card pattern, and built ONE reusable, generic
component for that pattern (modeled on a _different_ screen — the Share
sidebar — because that was the only one of the three with a confirmed
selection state to reconstruct; its README explicitly notes the New-Form
grid's own selection state was never observed, matching this component's
finding above).

`NewFormChooser` does **not** import or reuse `CardListSelector`. It is a
purpose-built, self-contained reconstruction of this one specific screen
(overlay chrome, heading, X-close, the exact 7 cards' copy/badges, and the
full Create-From-Scratch sub-dialog flow with its own confirmed
selection-and-transition behavior) — a different scope than
`card-list-selector`'s single generic, reusable card pattern. The two
components' evidence is consistent with each other (both agree the
top-level cards have no observed selection state); they simply serve
different purposes in this library, per the task's instruction that this
folder is fully self-contained.

## Other deviations from what was actually observed

- **Icons are decorative Unicode glyphs**, not Zoho's real sprite-sheet
  icons (`new-form-sprite....svg`, per `card-list-selector`'s finding for
  this same screen) — a binary asset not available in this repository.
- Zoho's own click-binding mechanism for these cards (`data-zf-click`
  attributes, per `card-list-selector`'s Technical Data capture) is
  replaced with plain React `onClick` handlers on real `<button
type="button">` elements — no `data-zf-click`/`javascript:` URLs
  anywhere.
- The overlay/panel/sub-dialog all use `role="dialog"`/`aria-modal="true"`,
  which the source record's Technical Data does not describe one way or
  the other for this component; added for accessibility, consistent with
  `analytics-feature-gate`'s own confirmation-modal treatment.
- All Zoho-generated class names/ids (the record does not itemize any for
  this specific component beyond `#folderBasedFormsDiv`, addressed above)
  are replaced with scoped CSS Module classes and plain React state. None
  of Zoho's CSS or markup is reused verbatim.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
