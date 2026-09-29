---
component: "Yes/No Field (Button-Pair Binary Choice)"
ui_category: "Forms > Form"
source_product: "Zoho Forms"
last_verified: "2026-09-15"
evidence_state: "source_reviewed"
status: 'complete'
summary: 'Live-form binary choice field built from plain anchor tags with manual ARIA and JS-enforced exclusivity — engineered independently from the native-radio settings toggle.'
---

# Component: Yes/No Field (Button-Pair Binary Choice)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder canvas (Legal & Consent field category) — static/design-time only there. Fully interactive in Preview mode and on the live published form.

## Structure
- Two pill-shaped `<a>` elements ("Yes" / "No") inside a `div.yesNofldStyleCont`, grouped under a field wrapper `[elname="yesNoFldDiv"]`.
- Builder-canvas version: same two `<a>` tags but with no interactive/ARIA attributes — a non-functional visual placeholder.
- Preview/live version: same tags gain `role="radio"`, `aria-checked`, `tabindex="0"`, and a `role="radiogroup"` container.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| `a.yesFldType` / `a.noFldType` (builder canvas) | Click | none (no handler) | Opens the field's Properties/edit panel instead of toggling a value — builder canvas is design-time only | Same screen, Properties panel opens |
| `a.yesFldType` / `a.noFldType` (Preview/live) | Click | `changeYesNoFldSelection(this)` | Clicked option gains `.selected` + `aria-checked="true"`; whichever option previously held `.selected` loses both (via `removeClassAndAttrCommon`); clicking an already-selected option deselects it (toggle-off supported) | Same screen, visual state change only |

## Behavior & States
- Default (builder canvas): static text-only preview, non-interactive.
- Default (Preview/live, nothing selected): both options outline-style — transparent background, colored text/border (teal "Yes", red "No").
- Selected state: solid accent-color fill (`rgb(248,74,77)` red for "No", teal for "Yes" — exact "Yes" selected color not separately confirmed this pass), white text, no box-shadow.
- Unselected (after the other option is chosen): reverts to outline style.
- Disabled state: not observed.
- Loading state: none — purely client-side, no network involved.
- Empty state: n/a (mutual exclusivity enforced by JS, not a "both unselected but locked" state).
- Error state: click handler calls `ZFLive.hideClosestFieldElemErrorDiv(this)`, implying an error state exists (e.g. "required" validation) that gets cleared on selection — not independently inspected this pass.

## Rules & Validation
- Mutual exclusivity is enforced entirely by custom JS DOM traversal (`removeClassAndAttrCommon` walking up to the `[elname="yesNoFldDiv"]` wrapper and clearing any sibling's `.selected`) — there is **no shared `name` attribute** and **no native `<input type="radio">`** anywhere in this implementation, unlike a real radio group.
- Builder canvas intentionally disables the toggle interaction (clicking opens Properties instead) — this is a deliberate design-time vs. run-time behavior split, not a bug.
- Field's Style property (seen in Properties panel) offers alternate visual presets: "Default" (button pair), thumbs-up/down icons, check/X icons — the button-pair markup analyzed here is one of several selectable visual skins for the same underlying field type.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15), including verification of both click directions (Yes→No and No→Yes) and confirmation of zero network requests via a non-destructive XHR-count wrapper.

- **DOM:**
```html
<!-- Preview/live -->
<div class="yesNofldStyleCont" elname="yesNoFldSwitchChoice" aria-labelledby="YesOrNo-arialabel" role="radiogroup">
  <a role="radio" tabindex="0" class="yesNofldStyle yesFldType" elemname="yesOrNoPositiveElem"
     value="true" aria-checked="false" href="javascript:;"
     onclick="changeYesNoFldSelection(this);event.preventDefault();ZFLive.hideClosestFieldElemErrorDiv(this);">Yes</a>
  <a role="radio" tabindex="0" class="yesNofldStyle noFldType" elemname="yesOrNoNegativeElem"
     value="false" aria-checked="false" href="javascript:;"
     onclick="changeYesNoFldSelection(this);event.preventDefault();ZFLive.hideClosestFieldElemErrorDiv(this);">No</a>
</div>

<!-- Builder canvas (non-interactive) -->
<a class="yesNofldStyle yesFldType" elname="yesOrNoPositiveElemLabel" elemname="yesOrNoPositiveElem">Yes</a>
<a class="yesNofldStyle noFldType" elname="yesOrNoNegativeElemLabel" elemname="yesOrNoNegativeElem">No</a>
```
After clicking "No": `no.className → "yesNofldStyle noFldType selected"`, `no[aria-checked] → "true"`; `yes` unchanged. Clicking "Yes" produces the exact mirror-image swap.

- **JavaScript:**
```js
function changeYesNoFldSelection(elem){
  $(elem).hasClass("selected")
    ? removeClassAndAttrCommon(elem)
    : (removeClassAndAttrCommon(elem), $(elem).addClass("selected"), $(elem).attr("aria-checked", !0))
}

function removeClassAndAttrCommon(elem){
  var element = $(elem).closest('[elname="yesNoFldDiv"]').find("a.selected");
  $(element).attr("aria-checked", !1);
  $(element).removeClass("selected");
}
```
Plain jQuery DOM traversal manually replicating what a shared `name` attribute gives native radio inputs for free.

- **Network:** Zero requests on click — confirmed via a request-count hook (`reqCount: 0`) across both toggle directions. Same category as the builder-canvas Style/Label selectors; unlike the sidebar sub-nav tabs ([[sidebar-settings-subnav]], which fire GETs) or Save & Resume ([[toggle-radio-switch]], PUT on explicit Save).

- **Response:** N/A — no request fired.

- **State change:** Purely client-side DOM class/attribute toggle; no persistence observed at the field-interaction level (actual form-value persistence would occur on form submission, not exercised here).

- **CSS:**
  - Selected ("No"): `background-color: rgb(248,74,77)` (solid red); `color: rgb(255,255,255)`; `border: 0.8px solid rgb(248,74,77)`; `box-shadow: none`.
  - Unselected ("Yes", in the "No"-selected state): `background-color: rgba(0,0,0,0)` (transparent); `color: rgb(36,166,138)` (teal); mixed border color; `box-shadow: none`.

- **Animation/transition:** None — `transition-duration: 0s` in both states. Instant class-swap, same as the sidebar sub-nav link ([[sidebar-settings-subnav]]) and Upgrade CTA button ([[upgrade-cta-button]]), unlike the Save & Resume toggle's 0.2s eased transform.

## Cross-Component Pattern Note
- **OBSERVATION — verdict on pattern reuse:** This is a **different implementation**, not the same radio pattern re-skinned. Save & Resume ([[toggle-radio-switch]]) uses native `<input type="radio">` grouped by `name`, hidden off-screen, with the visible toggle built from `label::before`/`::after` pseudo-elements and a `0.2s ease` transform transition. This Yes/No field uses plain `<a>` tags with manually-applied `role="radio"`/`aria-checked` for accessibility, mutual exclusivity enforced by custom jQuery DOM traversal rather than native radio-group semantics, and an instant, non-animated class-based style swap. **Same visual concept (binary exclusive choice), two distinct engineering approaches within the same Zoho Forms codebase** — worth checking whether this divergence is a legacy-vs-newer-code split (Settings UI vs. Field rendering engine) when more of the product is explored.

## Methodological Note
- **OBSERVATION:** Zoho Forms' Preview mode renders inside an `<iframe>` — top-level `document` queries against it silently return stale/wrong data. Always locate and query through the iframe's `contentDocument`/`contentWindow` when inspecting Preview or live-form behavior.
- Builder-canvas versions of interactive fields are frequently non-functional placeholders (clicking opens the Properties panel instead of exercising the field's real behavior) — full interaction testing of any Forms field requires switching to Preview or the live published form, not just the builder canvas.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Typeform ([[yes-no-field]]) | Custom JS-driven, built on Radix UI's headless `RadioGroup` primitive (`role="radiogroup"`/`role="radio"`, `data-radix-collection-item`), roving tabindex, `aria-checked`+`data-state` dual-encoded | Consistent keyboard/ARIA plumbing "for free" via Radix; confirmed working arrow-key focus roaming and Space-to-select; 0.25s eased box-shadow-ring transition | No deselect-once-answered (Zoho's own toggle *does* support toggle-off); advertised Y/N letter-shortcut badges didn't function in the tested render mode |
| Paperform ([[paperform-yes-no-field]]) | Custom JS-driven (React 16.14, no headless library), `role="radiogroup"`/`role="radio"`, but **fixed** (non-roving) tabindex and focus-only arrow keys (don't change selection) | Selected-state color follows the theme's Active token rather than being hard-coded; answers stream to the server via a debounced partial-submission PUT even before final submit | **No deselect-once-answered** (same limitation as this Zoho control avoids but Typeform shares); **confirmed broken ARIA wiring** — `label for` points at a nonexistent id, and `aria-labelledby` references a description id that's never rendered when there's no help text; no Y/N letter shortcut exists at all |

## Best Observed Approach
- On engineering foundation (consistent keyboard/ARIA behavior via a headless component library vs. Zoho's fully bespoke, independently-engineered toggle family — at least 4 distinct implementations confirmed across this product), Typeform's approach is stronger. On the specific "can the user clear an answer" UX question, this is a genuine tradeoff, not a clear win: this component deliberately supports toggle-off, which Typeform's Yes/No field does not.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), form builder canvas and Preview mode, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context, including verification through the Preview iframe's own document context.
