# Deep Insights Blur+Lock Feature Gate — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/analytics-feature-gate.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and state-control conventions established by
`yes-no-toggle-field/`, `rating-star-field/`, and `upgrade-cta-button/`. Not
wired into `src/previews/registry.ts` (that file, along with `types.ts` and
`ReconstructedPreviewPanel.tsx`, was explicitly out of scope for this work),
so — like `upgrade-cta-button/` and `publish-toggle-switch/` — this
component manages its own interaction state rather than relying on the
registry's generic value/onChange harness, which is shaped for single-value
form fields and doesn't fit this component's props.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available. No such export
   exists anywhere in this repository; this priority tier could not be
   used, same as every other reconstructed component so far.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source: the `div.popAnalystics` markup (lock icon, description
   paragraph, visible `switchAdvBtnElem` button, hidden
   `upgradeAdvBtnElem` button), the `ZFAnalytics.analytics.*` handlers
   (`showAnalyticsProPopup`, `switchToAdvAnalytics`,
   `hideSwitchFormAnalyticsPopupDiv`), the confirmation modal's verbatim
   copy and its `transform 0.5s, opacity 0.5s` transition, and the exact
   captured CSS (card border/shadow/radius, lock icon fill, CTA button
   background/padding/radius, `filter: blur(6px)` — confirmed **not**
   `backdrop-filter` — on the underlying data grid).
3. **Screenshots and documented behavior** — no screenshots were captured
   in the source record; the Location/Structure/Behavior & States prose was
   used to confirm the card's placement over the blurred metrics grid and
   that hover/loading/error/disabled states were not observed.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - **Paywall CTA visual styling** — never observed directly, since the
     real `upgradeAdvBtnElem` is `display:none` in every captured session
     (no computed style to read). This reconstruction gives the
     `gateType="paywall"` CTA the gradient background captured on the
     sibling `upgrade-cta-button` component instead, since the source
     record itself confirms both buttons share the exact same
     `ZFUtil.upgradeAndshowReloadPopup` handler — a documented
     cross-reference, not an independently confirmed value for _this_
     gate's paywall variant.
   - **Demo metric data** — the source confirms the blurred content is
     genuine structured DOM text (field name + click/start-count pairs),
     not a placeholder image. This preview's exact row values (`Single
Line 182 164`, etc.) are invented synthetic numbers in the same
     shape, not a reproduction of the captured session's actual figures.
   - **Modal enter/exit animation** — the `transform 0.5s, opacity 0.5s`
     transition and the `activeAnimate`-class trigger mechanism are
     captured facts; this reconstruction reproduces the timing via a CSS
     `@keyframes` mount animation rather than replicating Zoho's own
     class-toggle mechanism, since only the resulting visual behavior
     (a real animated open, not instant) was in scope.
   - **Blur transition duration** — the source notes the gate card itself
     has no observed enter/exit transition (it appears via tab re-render,
     not its own animation); the short blur-removal transition used here
     on unlock is an unobserved convenience, not a captured value.
   - **Disabled state** — the record explicitly says "Loading/error/
     disabled states: not observed." A conventional reduced-opacity
     treatment is used, consistent with the other reconstructed
     components in this library.
   - **Responsive/breakpoint behavior** — not observed (the Analytics tab
     was viewed at a single fixed width in the tested session); the
     narrow-viewport adjustments here (full-width CTA, tighter overlay
     padding) are reasonable assumptions, not observed Zoho breakpoints.

## The central finding this preview demonstrates: blur+lock is ambiguous

The source record's Cross-Component Pattern Note is the reason this
component exists in the shape it does. In the live product, **the exact
same blur+lock visual card** (`div.popAnalystics`, identical icon,
identical border/shadow treatment) is used for two genuinely different
things, decided server-side by plan tier/feature flag and invisible from
the markup alone:

- A **free, one-click opt-in** — the currently-active path in the tested
  account. Clicking "Enable Advanced Metrics" opens a same-app
  confirmation modal with real consent copy ("data will be collected from
  this point forward"), resolved entirely client-side with **zero network
  requests**, even to open/close the modal.
- A **plan-upgrade paywall** — the dormant sibling button
  (`upgradeAdvBtnElem`, `display:none` in every captured session), wired
  to `ZFUtil.upgradeAndshowReloadPopup` — the **exact same handler** used
  by the plain, unambiguous [[upgrade-cta-button]] CTA documented
  elsewhere in this library. A user cannot tell from the blur+lock card
  alone which of these two they're looking at until they click through.

This component reproduces that ambiguity rather than resolving it: the
`gateType` prop (`'free-toggle' | 'paywall'`) selects which real mechanism
a given instance represents, but the rendered overlay — lock icon, card
styling, title/description layout — is **identical** either way except for
the CTA button's own color and what clicking it does. `gateType`
`'free-toggle'` opens the confirmation modal and calls `onUnlock` only once
the user explicitly confirms; `gateType="paywall"` calls `onUnlock`
immediately on click but the component **never unlocks itself** — matching
the real product, where the visible opt-in path and the dormant paywall
path are different handlers with different effects, not two states of one
toggle. Contrast with [[upgrade-cta-button]]: that component is a plain,
single-purpose paywall CTA with no ambiguity about what it does — it _is_
the "Upgrade Now" mechanism, on its own, outside a blur+lock card. This
component is what happens when that same mechanism is dressed up to look
identical to something that costs nothing.

## Intentional deviations from the literal source markup

- Both `switchAdvBtnElem` and `upgradeAdvBtnElem` in the source are real
  `<button>` elements (no `javascript:` href anti-pattern to fix here,
  unlike `yes-no-toggle-field`) — that's preserved. The custom
  `onclick="ZFAnalytics.analytics.*"` handlers and the hidden
  `style="display:none"` sibling-button pattern are replaced by a single
  `gateType` prop plus an `onUnlock` callback: the host decides what a
  completed gate action means, rather than this component performing any
  navigation or reload itself (same scoping decision documented in
  `upgrade-cta-button`'s README).
- Zoho's own class names/attributes (`popAnalystics`, `elname`,
  `zf-NewLevelMetrics`, `switchAdvBtnElem`, etc.) are replaced with scoped
  CSS Module classes and plain React props. No Zoho CSS is reused verbatim,
  though every captured value (colors, border, shadow, radius, padding,
  blur amount, modal transition timing) is reproduced exactly where it was
  actually observed.
- The underlying data grid is kept as a div-based grid (matching the
  source's `div.zf-NewLevelMetrics`, not a semantic `<table>`) — this is
  the literal structure observed, not a defect the record flags, so it
  isn't "fixed" the way `rating-star-field`'s `aria-checked` bug was.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`). The record itself notes the
real "Enable" action was never clicked in the tested session (to avoid an
irreversible account-level data-collection change), so the actual
activation request/payload for the free-toggle path remains uncaptured;
this preview's `onUnlock` callback stands in for that unobserved step.
