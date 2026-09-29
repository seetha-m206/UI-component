---
component: 'Color Picker Popover + Gradient/Angle Controls'
ui_category: 'Forms > Color picker'
source_product: 'Zoho Forms'
last_verified: '2026-09-15'
evidence_state: 'source_reviewed'
status: 'partial'
summary: "Theme editor's color picker + gradient/angle controls, built on a zcolorpicker/zslider widget family — the first evidence of a shared, cross-product Zoho design system."
---

# Component: Color Picker Popover + Gradient/Angle Controls

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> ⚠️ **Partially incomplete — flagged areas needing a second pass:** exact JS event handlers behind swatch selection and slider-drag were not traced to named functions (no global namespace was found attached, unlike [[entries-filter-panel]]'s `ZFReportLive`). The CSSOM rule that applies the live gradient to the preview could not be located by enumerating `document.styleSheets`. The `is-selected` class handoff between old/new swatch was inferred from a canvas repaint, not directly re-verified post-close. "Apply" was never clicked, so the actual theme-save network request/payload remains uncaptured.

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Themes → "Create from Scratch" full-screen editor → General tab → Background (and, per the swatch DOM pattern, presumably every other color field in the editor: Popup Background, Wallpaper, Header — not independently re-verified per field).

## Structure

- **Color picker popover** (`div.zcolorpicker__default`): "No Fill" / "Default Color" action buttons → "Preset Colors" heading + 10-row swatch grid (8 shades × several hues) → "Standard Colors" heading + 1-row/10-swatch grid → "More Colors" expandable button. An "Other Used Colors" section appears conditionally, only once a color has actually been applied earlier in the session (confirmed absent on a fresh popover, present in an earlier session capture).
- **Gradient mode**: toggled via a second swatch circle; reveals two new rows — "Gradient" (two color-stop swatches, start/end) and "Angle" (a fully custom ARIA slider, not a native `<input type="range">`).
- The swatch-circle trigger button itself renders its current color via a `<canvas>` element, not a styled `<div>`/CSS background.

## Actions

| Element                  | User Action | Function                                                                | Result                                                                                                                     | Destination screen/state                     |
| ------------------------ | ----------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Background swatch circle | Click       | _(handler not named — internal event delegation, not a global onclick)_ | Opens `zcolorpicker__default` popover below the swatch                                                                     | Same screen, popover shown                   |
| Preset swatch `<li>`     | Click       | _(not named)_                                                           | Popover auto-closes; swatch-circle `<canvas>` repaints to new color; live preview pane's form background updates instantly | Same screen, popover closed, preview updated |
| Gradient toggle swatch   | Click       | _(not named)_                                                           | Switches the property into gradient mode, revealing Gradient stops + Angle slider                                          | Same screen                                  |
| Angle slider thumb       | Drag        | _(not named — direct pointermove-driven inline style recalculation)_    | Gradient angle updates live in the preview pane in real time as the thumb moves                                            | Same screen                                  |

## Behavior & States

- Default (no fill): "No Fill" button available as an explicit option, distinct from any specific color.
- Selected swatch: `is-selected` class + `aria-selected="true"` on the matching `<li>`; visually highlighted with a border/ring in the popover (exact computed border/box-shadow values not captured).
- Gradient preview: live, computed `background-image: linear-gradient(...)` on the preview's `div.centerContainer`, applied with **no inline style attribute** — meaning the rule is injected via CSSOM (e.g. `sheet.insertRule()` or a dynamically swapped class), not direct inline styling. This is architecturally different from every other live-preview mechanism captured this session.
- Loading/error/disabled states: not observed.

## Rules & Validation

- The Angle slider's internal range is **0–36 steps**, each step representing 10° — `data-val`/`aria-valuenow` track the step index (e.g. `data-val="9"` → displayed "90°"), not the raw degree value directly.
- The gradient-stop swatches' `fpbgcolor` wrapper divs carry **no** `proptype`/`colortype`/`gradientclass` attributes (unlike the solid-background swatch), suggesting these attributes are populated dynamically only once that specific stop's popover is opened — an implementation detail worth confirming on a repeat pass.
- Confirmed **zero network requests** across the entire interaction sequence (popover open, swatch select, gradient toggle, angle drag) via a persistent request-count hook (`window.__capturedReqs.length === 0`) — everything is held client-side until an (untested) "Apply".

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15), including a persistent request-logging hook across the full interaction sequence.

- **DOM:**

```html
<div class="zcolorpicker__default">
  <!-- popover root -->
  <button class="...zcolorpicker__nocolorbutton">No Fill</button>
  <button class="...zcolorpicker__defaultcolorbutton">Default Color</button>
  <div class="zcolorpicker__palettecontainer">
    <div class="zcolorpicker__paletteheading">Preset Colors</div>
    <div class="zcolorpicker__palette">
      <ul class="zcolorpicker__navigatable">
        <!-- 10 <ul class="zcolorpicker__shades"> rows, 8 <li> cells each -->
      </ul>
    </div>
  </div>
  <!-- identical structure for "Standard Colors" (1 row × 10 swatches) -->
  <button class="...zcolorpicker__morecolorbutton zbutton--menu">More Colors</button>
</div>
```

Swatch cell:

```html
<li
  role="option"
  tabindex="0"
  data-palette-name="themecolors"
  class="zcolorpicker__colorpan is-selected"
  data-zcolor="rgb(255,255,255)"
  style="background-color:rgb(255,255,255);"
  aria-selected="true"
  title="#FFFFFF"
  aria-label="color - #FFFFFF"
></li>
```

Fully accessible markup (ARIA role/label/selected), color stored redundantly three ways: `data-zcolor` (rgb), inline `background-color`, and `title`/`aria-label` (hex).

Trigger button:

```html
<div class="fpbgcolor" colortype="standard" proptype="form_cont_bg" gradientclass="grad_formCont" elname="gradColorType">
  <input elname="inpElem" style="display:none;">
  <button id="zcolorbutton-{id}-container" class="zbutton zcolorbutton" aria-owns="zcolorbu...">
</div>
```

The popover is likely positioned against this button via `aria-owns` (floating-UI/anchor pattern) rather than the popover itself carrying `position:absolute` — its own computed `position` is `static`.

Angle slider (fully custom, not a native range input):

```html
<li class="margin_24" themeprop_key="form-cont-gradient-angle">
  <label>Angle</label>
  <div class="zfThemeActCont sliderValModify">
    <input elname="inpElem" class="zh-dnone" style="display:none;" />
    <div class="zslider">
      <div class="zslider__shadowtrack" style="top:-7px;"></div>
      <div
        role="slider"
        class="zslider__thumb zslider__circlethumb"
        aria-orientation="horizontal"
        aria-valuemin="0"
        aria-valuemax="36"
        tabindex="0"
        data-val="9"
        aria-valuenow="9"
        aria-valuetext="9"
        style="top:-5.3px; margin-left:-9.8px; left:27.1973%;"
      ></div>
    </div>
  </div>
</li>
```

- **JavaScript:** **Not exposed as global `onclick` attributes**, unlike every other module captured this session (`ZFForm`, `ZFShare.zfShare`, `ZFReportLive`). This widget appears self-contained, using internal event delegation (likely `addEventListener` bound at initialization) — consistent with its ARIA-heavy, accessibility-first markup. No named handler was identified for swatch selection or slider drag; this is flagged as needing Sources-panel breakpoint tracing rather than console introspection to resolve.

- **Network:** **Zero requests** across the entire sequence — popover open, preset selection, gradient toggle, and angle drag from 90° to 230°, confirmed via a persistent XHR/fetch wrapper (`window.__capturedReqs.length === 0` after all interactions).

- **Response:** N/A — no network activity.

- **State change:** Live preview updates instantly and entirely client-side; the gradient's `background-image` is applied to the preview's `div.centerContainer` via **computed style with no inline attribute**, implying CSSOM injection (`sheet.insertRule()` or a dynamically swapped class) — the exact rule/stylesheet could not be located by enumerating `document.styleSheets` (possibly blocked by a same-origin restriction on one of ~10+ linked Zoho CDN stylesheets).

- **CSS:**
  - Popover: `display:block; visibility:visible; opacity:1; position:static; z-index:auto` — positioning handled by an ancestor/anchor mechanism, not the popover's own computed position.
  - Live gradient (preview): `background-image: linear-gradient(230deg, rgb(255,222,214) 0%, rgb(191,172,254) 100%)` — computed only, no inline style attribute found.
  - Selected-swatch visual highlight (border/ring) seen in screenshot but exact computed border/box-shadow values not captured this pass.

- **Animation/transition:** Popover open/close: no explicit `transition`/`animation` CSS found, and no mid-transition frame was caught (same inconclusive result as [[entries-filter-panel]]'s panel). The Angle slider thumb's position (`top`/`margin-left`/`left`) is **recalculated inline on every drag frame** — direct JS pointermove-driven positioning, not a CSS transition, which is the expected implementation for a custom drag-slider.

## Cross-Component Pattern Note

- **OBSERVATION — significant finding:** this component is built on **`zcolorpicker`/`zslider`**, a **z-prefixed UI-kit widget family** that is very likely **shared across Zoho's product line**, not bespoke to Forms — the naming convention and fully ARIA-compliant, ownership-based (`aria-owns`) architecture is a materially different engineering style from every other component captured this session (which all use ad-hoc, per-feature markup with inconsistent ARIA support — e.g. [[rating-star-field]]'s broken `aria-checked`). **This is the first evidence in this library of an actual cross-product Zoho design-system layer**, worth actively looking for in every other Zoho product researched going forward (Zoho CRM, Zoho Social, etc. — if `zcolorpicker`/`zslider`/`z*` classes appear there too, it confirms a shared internal component library rather than convergent naming).
- Combined with [[entries-filter-panel]]'s three-namespace finding, the picture emerging is: **Zoho Forms' own feature code is fragmented (ZFForm/ZFShare/ZFReportLive, 4 toggle implementations), but at least one polished, accessible, shared UI-kit exists underneath some of it** — inconsistent adoption of good internal tooling, not an absence of it.

## Competitor Comparisons

| Competitor                    | Same component implementation | Strengths | Weaknesses |
| ----------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched)_ |                               |           |            |

## Best Observed Approach

- Internally, this is the **most accessible, best-engineered component captured this session** (full ARIA support, clean state model) — a strong "best observed" candidate pending competitor comparison and pending resolution of the flagged gaps above.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Themes → Create from Scratch → General tab → Background color picker, via Claude browser extension, 2026-09-15. DOM/CSS/network data retrieved via the page's own JS context; a persistent request-logging hook confirmed zero network activity across the full interaction sequence.
