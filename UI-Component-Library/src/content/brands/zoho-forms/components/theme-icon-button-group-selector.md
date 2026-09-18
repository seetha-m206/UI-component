---
component: 'Theme Icon-Button Group Selector (setThemesStyles engine)'
ui_category: 'Actions/Controls > Button'
source_product: 'Zoho Forms'
last_verified: '2026-09-16'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Theme editor icon-button style selectors (Form Layout, Container Style, Text Alignment, etc.) — the first pattern in this product confirmed to be a genuinely shared component, not independently-built lookalikes, via a single setThemesStyles() engine; carries zero ARIA attributes.'
---

# Component: Theme Icon-Button Group Selector (setThemesStyles engine)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Full-screen Theme editor (see [[theme-editor-split-pane-shell]]) — used across multiple left-panel config tabs: Form Layout, Container Style, Header Style (large image-tile variant), and Text Alignment (small icon-only variant, at minimum in the Header tab).

## Structure

- Two visual sub-styles of the same underlying pattern:
  - **Large tile buttons** (Form Layout, Container Style, Header Style): ~80×80px image-preview tiles with a mini mock-up icon inside, 2–3 options per group, no visible text label on the button itself (a tooltip shows a name like "Plain"/"Left Banner"/"Right Banner" on hover).
  - **Small square icon buttons** (Text Alignment): compact ~35×35px icon-only buttons, no tooltip observed, 3 options (left/center/right).
- Every instance is a `<ul>` of `<li>` elements, each holding one inline `<svg>` icon.
- The large-tile groups (Form Layout, Container Style, Header Style) all sit inside a wrapper `div.pageFormStyle > ul`. The Text Alignment group instead sits in a class-less `<ul>` inside `div.zfThemePosition` — a genuinely different wrapper, not just a styling variant of the same markup.
- Single-select only — no evidence of multi-select anywhere (no checkbox styling, no "clear" affordance) across any group checked.
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS data pulled programmatically).

## Actions

| Element                         | User Action | Function                                                                                                                                                                                                                                        | Result                                                                                                                                                                                                                                                                                                        | Destination screen/state                         |
| ------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `li[themeprop_key]` (any group) | Click       | A group-specific thin wrapper (`changeLiveFormBannerLayout`, `changeFormContLayoutStyle`, `changeHeaderAlignment`, `changeFormHdrLayoutStyle`) that immediately delegates to the shared `setThemesStyles(themePropName, isInit, propLi)` engine | Clicked `<li>` gains `.selected`; previously-selected sibling loses it; the live preview iframe (per [[theme-editor-split-pane-shell]]) re-renders the affected property in the same paint — confirmed directly by switching Text Alignment center→left→right and watching the form title move live each time | Same screen, live preview updates, no navigation |

## Behavior & States

- Default state: whichever option matches the form's currently-applied theme property, pre-selected (`.selected` class present on load).
- Selected state: border flips to the theme's teal accent color with a matching soft glow (see CSS below); `box-shadow: none` when unselected.
- Interactive/hover state: large-tile groups show a tooltip with the option's name (e.g. "Plain," "Left Banner") on hover; small icon groups showed no tooltip in this pass.
- Disabled state: not observed.
- Loading state: none — purely client-side, confirmed zero network activity (see Technical Data).
- Empty state: n/a.
- Error state: not observed.

## Rules & Validation

- No ARIA attributes at all on any instance — no `aria-selected`, `aria-pressed`, or `role`. Selection state is driven entirely by custom, non-standard attributes (`themeprop_key`, `themeprop_val`, `themeprop_class`) plus a plain `.selected` CSS class. This is a real accessibility gap: screen readers have no semantic signal that these `<li>` elements are selectable/selected controls at all, distinct from the Rating field's gap ([[rating-star-field]], where `role="radio"` is present but `aria-checked` never flips) — here there's no ARIA role in the first place.
- Single-select enforced per group by the shared `setThemesStyles` engine's `.selected`-class management (add to clicked, remove from siblings) — not a native radio/checkbox grouping mechanism.

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-16), Claude browser extension session, ~50 actions across multiple passes, including direct inspection of function source code for structural comparison across 4 different entry-point handlers.

- **DOM:**

```html
<li
  themeprop_key="form_live_banner_type"
  themeprop_val="1"
  themeprop_class="liveNoBannerStyle"
  onclick="changeLiveFormBannerLayout(this, false)"
  tooltip-title="Plain"
  data-toggle="..."
  tooltip-position="..."
  onmouseenter="..."
  class="selected"
>
  <svg>...</svg>
</li>
```

Large-tile groups: `div.pageFormStyle > ul > li[themeprop_key]...`. Text Alignment: a class-less `<ul>` inside `div.zfThemePosition`, no shared wrapper class with the tile groups.

- **JavaScript — shared core engine, thin per-group entry-point wrappers:**

```js
function changeHeaderAlignment(elem) {
  setThemesStyles('HEADER_TEXT_ALIGN', false, elem);
}
function changeFormContLayoutStyle(elem) {
  setThemesStyles('LAYOUT_STYLE_CONTAINER', false, elem);
}
```

Four distinct onclick handlers were found across the groups checked (`changeLiveFormBannerLayout`, `changeFormContLayoutStyle`, `changeHeaderAlignment`, `changeFormHdrLayoutStyle`) — at the call-site level these look independently wired, but inspecting each function's source shows they are thin wrappers (most one line) that immediately delegate to a single shared function: `setThemesStyles(themePropName, isInit, propLi)`. That shared engine looks up a config object (`getThemePropRefsJson()[themePropName]`) mapping each property name to its CSS class list and behavior, calls a shared `addSelectedClass(propLi)` helper to move the `.selected` class, and pushes the update into the live preview via `getRightPaneDiv()`/class swaps that reach the iframe (same iframe mechanism documented in [[theme-editor-split-pane-shell]]). Two of the four wrappers (`changeFormHdrLayoutStyle`, `changeLiveFormBannerLayout`) are longer because they layer extra logic around that same core call (e.g. the banner-layout one also rearranges dependent sub-options), but all four ultimately funnel through `setThemesStyles`.

- **Network:** Zero requests confirmed via `fetch`/`XMLHttpRequest` hooks on `window` — clicking a Text Alignment option fired nothing. Consistent with the rest of the theme editor being local-until-Apply (see [[theme-editor-split-pane-shell]]).

- **Response:** N/A — no request fired.

- **State change:** Purely client-side `.selected` class toggle plus whatever CSS-custom-property/class updates `setThemesStyles` pushes into the preview iframe; no persistence until the editor's own Apply action (not re-tested this pass, already confirmed in [[theme-editor-split-pane-shell]]).

- **CSS:** Computed values were confirmed **byte-for-byte identical** across every group checked (Form Layout, Container Style, Text Alignment):

```
unselected: border: 0.8px solid rgba(255,255,255,0.05); box-shadow: none;
selected:   border: 0.8px solid rgb(36,166,138);         box-shadow: rgb(164,219,208) 0px 0px 3px 0px;
```

Same teal accent color (`rgb(36,166,138)`) as the color-picker's selected state ([[theme-color-picker-gradient]]) and the toggle-off/on colors seen elsewhere in this product's theme surfaces.

- **Animation/transition:** `transition: 0.2s linear` on both selected and unselected states, confirmed identical across groups — a real CSS transition, not JS-driven, on the border/box-shadow change. Distinct from [[toggle-radio-switch]]'s `0.2s ease` (different easing) and [[rating-star-field]]'s `0.3s linear` (same easing, different duration and applied to fill/stroke rather than border/shadow).

## Cross-Component Pattern Note

- **OBSERVATION — verdict on pattern reuse:** Unlike the toggle and card-list patterns documented earlier in this product (both confirmed to be multiple independently-built lookalikes), this one is a **genuinely shared component under the hood**, split across two layers: (1) a CSS/visual layer reused identically across every group (same border color, same box-shadow, same transition, confirmed byte-for-byte via computed styles), and (2) a single shared `setThemesStyles()` selection-state engine driven by a per-property JSON config (`getThemePropRefsJson()`), handling the `.selected` toggle and preview update for all instances. It is not literally one reusable `<Component>` instantiated per group — each group still has its own named `onclick` entry-point wrapper rather than calling `setThemesStyles` directly from markup, and the wrapper DOM structure genuinely differs (`div.pageFormStyle` for tile groups vs. a bare `<ul>` in `div.zfThemePosition` for alignment) — but the shared core function called through several thin, purpose-named adapters is a meaningfully more disciplined architecture than the independently-built lookalikes seen elsewhere in this product (toggles, card-lists). **RECOMMENDATION carried forward:** when auditing "is this really the same component or independently-built lookalikes?" in future Zoho Forms captures, inspect the actual function _source_, not just the onclick attribute name — a different-looking call site can still delegate to one real shared engine, as confirmed here.

## Competitor Comparisons

| Competitor                                                                                                                                   | Same component implementation | Strengths | Weaknesses |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched; Typeform's theme editor has not been component-captured yet, see [[theme-editor-split-pane-shell]]'s own TODO)_ |                               |           |            |

## Best Observed Approach

- TODO — needs at least one competitor's equivalent icon-button/style-selector control captured before a comparative judgment can be made.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), full-screen Theme editor ("Create from Scratch"), via Claude browser extension, 2026-09-16 (~50 actions across multiple passes, including direct `fetch`/`XMLHttpRequest` hooks and function-source inspection to compare handler implementations structurally). No theme was saved — session exited via the "changes not applied" discard dialog, consistent with prior Theme editor sessions.
