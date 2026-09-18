---
component: "Toggle (Custom Radio-Styled Switch)"
ui_category: "Actions/Controls > Toggle"
source_product: "Zoho Forms"
last_verified: "2026-09-15"
evidence_state: "source_reviewed"
---

# Component: Toggle (Custom Radio-Styled Switch)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form Settings → Submissions & Storage → Save for Later ("Save & Resume" control). Same custom-radio pattern used broadly across Zoho Forms Form Settings for other Enable/Disable options (not individually verified per instance).

## Structure
- Two-option control rendered as a pair of circular radio dots styled to resemble a toggle, not a native checkbox/switch: `saveResumeEnable` ("Enable") and `saveResumeDisable` ("Disable"), grouped under `name="saveResume"`.
- Ancestor chain: `span` > `div.flLeft.cusRadioButton` > `div.fieldsContainer` > `div.fieldsWrapper.customRadioCont` > `div.innerContainer`.
- Enabling reveals a dependent options block: "Save Button Label" text input (becomes required) plus three checkboxes (email saved-form link, max saved-entries limit, prompt to review saved entries).
- Screenshot: not captured this pass (DevTools panels weren't screenshot-able through the browser-automation session; DOM/CSS/JS/network data pulled programmatically instead — see Sources).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| `#saveResumeEnable` radio | Click | `ZFSettings.changeSaveAndResume(this)` | Marks form dirty (unsaved-changes indicator); shows dependent options block (`includeOpacityDiv`) via jQuery `.show()`; clears validation error state on Save Button Label field; fades in wrapper `#saveAndResumeDisable` | Same screen, expanded settings panel |
| `#saveResumeDisable` radio | Click | `ZFSettings.changeSaveAndResume(this)` | Marks form dirty; hides dependent options block via jQuery `.hide()`; fades out `#saveAndResumeEnable` wrapper | Same screen, collapsed settings panel |
| Page-level "Save" button | Click | Persists all pending settings changes | Fires `PUT .../settings/saveandresume` with current toggle state | Same screen; settings persisted server-side |

> The toggle click itself never calls the network directly — persistence is deferred to a separate explicit Save action. This is a notable pattern: local UI state and server state are decoupled until Save.

## Behavior & States
- Default state: whichever option (`Enable`/`Disable`) was last saved for the form — observed default `Disable` on a fresh test form.
- Interactive/hover/focus state: not separately captured this pass.
- Active/selected state (checked): `label::before` border turns teal (`rgb(36,166,138)`); `label::after` inner dot scales to `scale(1)` (visible).
- Unselected state: `label::before` border grey (`rgb(176,176,176)`); `label::after` dot at `scale(0)` (invisible).
- Disabled (control-disabled) state: not observed.
- Loading state: none — click is instant/local; only the separate Save action hits the network (no observed loading indicator on that request either).
- Empty state: n/a.
- Error state: switching to `Enable` clears any existing `inputError` class on the Save Button Label field's parent (i.e. it resolves an error state rather than raising one).

## Rules & Validation
- When `Enable` is selected, "Save Button Label" becomes a required field (shown in red until filled).
- Native `<input type="radio">` elements are visually hidden off-screen (`position:absolute; left:-9999px`) — all visible interaction is via the associated `<label>`, a common pattern for custom-styled native form controls.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15).

- **DOM:**
```html
<span>
  <input type="radio" name="saveResume" id="saveResumeEnable" value="enabled" onchange="ZFSettings.changeSaveAndResume(this);">
  <label for="saveResumeEnable"></label>
</span>
<span>
  <input type="radio" name="saveResume" id="saveResumeDisable" value="disabled" onchange="ZFSettings.changeSaveAndResume(this);">
  <label for="saveResumeDisable"></label>
</span>
```
Clicking a radio only flips native `checked` state; no other DOM class/attribute changes occur from the click itself beyond the dependent-block show/hide described below.

- **JavaScript:** Shared inline `onchange` handler, `ZFSettings.changeSaveAndResume(elem)`:
```js
function(elem) {
  changeToUnsavedState();
  var optVal = $(elem).val();
  var saveAndResumeDiv = $("#save_and_resume");
  if ("enabled" == optVal) {
    $(saveAndResumeDiv).find("input[elname=includeOpacityDiv]").hide();
    $("#saveAndResumeDisable").fadeOut();
  } else {
    $(saveAndResumeDiv).find("[elname=includeOpacityDiv]").show();
    $(saveAndResumeDiv).find("[elname=errSpan]").hide();
    $("#saveTextInp").parent().removeClass("inputError");
    $("#saveAndResumeDisable").fadeIn();
  }
}
```
Built on jQuery (`.show()`/`.hide()`/`.fadeIn()`/`.fadeOut()`), not a modern framework reactive-state pattern.

- **Network:** No request on toggle click. Fires only when the page-level "Save" button is clicked:
  - `PUT https://forms.zoho.in/{account}/form/{formLinkName}/settings/saveandresume` → `200`
  - Request payload: `{"form_settings":{"link_name":"ToggleInspectionTest","save_and_resume":{"browser_save":1,"enable_save_resume":false}}}`

- **Response:**
```json
{
  "form_settings": {
    "save_and_resume": {
      "email_saved_url": false,
      "browser_save": 1,
      "limit_configured": false,
      "show_popup": false,
      "save_button_label": "Save",
      "enable_save_resume": false
    }
  },
  "link_name": "ToggleInspectionTest"
}
```

- **State change:** Client-side toggle state is held only in the DOM/radio `checked` value until the explicit Save action persists it server-side via the PUT above; no optimistic or immediate persistence on toggle click.

- **CSS:**
  - Native `<input>`: hidden off-screen, `13×13px`, `position:absolute; left:-9999px`.
  - Visible `<label>`: `display:inline-block; width:42.05px; height:18px; position:relative`.
  - `label::before` (outer ring): `14×14px; border-radius:100%; background:#fff`; border grey `rgb(176,176,176)` unchecked, teal `rgb(36,166,138)` checked.
  - `label::after` (inner dot): `8×8px; border-radius:100%; background:rgb(36,166,138)`; `transform: matrix(0,0,0,0,0,0)` (scale 0) unchecked → `matrix(1,0,0,1,0,0)` (scale 1) checked.

- **Animation/transition:** `label::after` has `transition: all 0.2s ease` — the dot scale-transforms over 200ms on state change (the "filling in" effect). Separately, the dependent options block uses jQuery `.fadeIn()`/`.fadeOut()` (default 400ms opacity fade), a JS-driven animation layered on top of the CSS transition on the control itself — two independent animation systems on one interaction.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Typeform ([[yes-no-field]]) | Custom JS-driven, built on Radix UI's headless `RadioGroup` primitive, native `<button role="radio">`, roving tabindex, dual `aria-checked`/`data-state` encoding | Consistent keyboard/ARIA behavior via a headless library rather than a hand-rolled native-radio-hidden-behind-a-label pattern; genuine 0.25s eased transition | Same one-way (no deselect) limitation as this Zoho control's own design; letter-shortcut badges shown but non-functional in the tested mode |

## Best Observed Approach
- Typeform's Radix-based approach provides stronger baseline keyboard/ARIA guarantees than this control's fully hand-rolled native-radio-hidden-behind-a-label pattern, though both correctly support standard radio semantics on the dimensions actually tested.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Form Settings → Submissions & Storage → Save for Later, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved programmatically through the page's own JS context (DevTools panels weren't screenshot-able through the automation session; underlying data is equivalent to what DevTools would show).
- Note: Zoho Forms does not implement a native iOS-style sliding-track toggle switch anywhere in its builder/settings UI (checked Field Properties, Form Settings across all categories, and Themes) — binary settings are consistently implemented as this custom radio-pair-styled-as-toggle pattern instead. Worth checking whether other Zoho products (e.g. Zoho Social, Zoho CRM) use a true slide-switch, to see if this is a Forms-specific or company-wide UI pattern.
