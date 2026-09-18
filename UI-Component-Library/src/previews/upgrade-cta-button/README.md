# Upgrade Now CTA Button (Paywall) — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/upgrade-cta-button.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, and state-control conventions
established by `yes-no-toggle-field/` and `rating-star-field/`.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available. No such export
   exists anywhere in this repository; this priority tier could not be
   used, same as the other two reconstructed components.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for this reconstruction: the exact
   `<button class="upgradeButton" anchor_href="...">` markup, the
   `ZFUtil.upgradeAndshowReloadPopup(elem, parentElem, source)` handler, and
   the default/hover computed CSS (gradient background, padding, border
   radius, inset box-shadow on hover, `transition-duration: 0s`).
3. **Screenshots and documented behavior** — no screenshots were captured
   in the source record; the Location/Structure/Behavior & States prose was
   used to confirm the button sits centered in a "feature is premium"
   content block and that its default/hover states are the only ones
   observed.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - **Disabled styling** — the source record explicitly says "Disabled
     state: not observed." This preview implements a conventional
     reduced-opacity/`not-allowed` treatment, consistent with how the other
     two reconstructed components handle unobserved disabled states. It is
     not a reproduction of anything Zoho actually renders.
   - **Fixed button size** — the source captured a specific rendered box
     (`165.16px × 42.4px`), but that was the size of the "Upgrade Now" text
     specifically, not a stated layout rule. This reconstruction sizes the
     button from its padding (`12px 32px`, captured exactly) instead of a
     fixed width/height, so it renders correctly for the synthetic
     long/short-label fixtures. This is a sizing-method deviation, not a
     color/shadow/spacing value change.
   - **Alternate-feature copy** — the source record notes the same
     `.upgradeButton` class/pattern is used on other gated features (Double
     Opt-In, Form Encryption) but says their exact button text was "not yet
     individually verified." The `other-gated-feature` fixture
     (`"Unlock Premium"`) is therefore clearly synthetic placeholder copy,
     used only to demonstrate that the component supports arbitrary label
     text — it is not presented as captured evidence of what those other
     pages actually say.
   - **Responsive/breakpoint behavior** — not observed (the paywall panel
     was viewed at a single width in the tested session); a full-width
     button at narrow viewports is a reasonable assumption for a single
     centered CTA, not an observed Zoho breakpoint.
   - **`anchor_href` destination URL logic and the conditional
     reload-prompt modal** (route-matching on `#myforms`, `form`/settings
     tabs, `adminsettings`, etc.) are documented in the research record but
     are **out of scope for this reconstruction** — see "Scoping decision"
     below. Nothing about that logic is reproduced or guessed at here.
   - One boolean-OR chain inside `upgradeAndshowReloadPopup` has a noted
     "extraction gap" in the source record itself (a differently-named
     popup-display call it couldn't fully resolve). That branch is not
     reconstructed at all, for the same reason: better to omit an
     inconclusive detail than guess at it.

## Scoping decision: no real navigation

In the live product, clicking this button is a **multi-action control**:
it (1) opens an external Zoho Store subscription URL in a new tab via
`window.open(url, "_blank")`, (2) conditionally shows a "Refresh the page"
modal in the original tab depending on the current route, and (3)
optionally fires a `ZFUtil.trackFeature(UPGRADE_VIEW)` analytics event.

This is a documentation preview, not a live integration, so
`UpgradeCtaButton` does **none** of that. It exposes a single `onClick`
prop callback instead — the caller decides what a click means (e.g. log it,
show a toast) with no real external navigation, no `window.open`, and no
analytics call. This is a deliberate scoping decision, not a gap in the
research: the full three-effect behavior is documented above and in the
source record's Actions table, it is simply not something a static preview
component should execute.

## Intentional deviations from the literal source markup

- The custom `anchor_href` attribute (read by JS, not a real link, per the
  source record's own note that it's "non-standard") and the inline
  `onclick="ZFUtil.upgradeAndshowReloadPopup(this);"` are both replaced by
  a plain `onClick` prop. The visible element is otherwise unchanged — the
  source already used a real `<button>`, not an anchor styled as one, so
  there was no `javascript:` href anti-pattern to fix here (unlike
  `yes-no-toggle-field`).
- Zoho's own class name (`upgradeButton`) is replaced with a scoped CSS
  Module class local to this component. None of Zoho's original CSS is
  reused verbatim, though every captured value (colors, padding, radius,
  hover shadow, zero-duration transition) is reproduced exactly.
- The surrounding "feature is premium" content block described in the
  source record's Location/Structure sections
  (`.zfupgradeContent` → `.zfupgardePopup` → explanatory paragraph above the
  button) is **not** part of this component — the research record's
  `ui_category` scopes this component to the button itself
  ("Actions/Controls > Button"), so only the button is reconstructed here.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
