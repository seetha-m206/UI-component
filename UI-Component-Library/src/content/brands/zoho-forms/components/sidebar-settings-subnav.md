---
component: 'Sidebar Sub-Navigation Link (Settings Menu)'
ui_category: 'Navigation > Sidebar'
source_product: 'Zoho Forms'
last_verified: '2026-09-15'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Settings sidebar sub-navigation with server-fetched panel swaps; investigation uncovered a dead, duplicate 0×0 legacy DOM tree underneath.'
---

# Component: Sidebar Sub-Navigation Link (Settings Menu)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form Settings, left sidebar — observed under Submissions & Storage (Geolocation, Save for Later, Edit Response, Manage Form Attachments, Auto-Trash, Review Before Submission). The click handler (`ZFForm.formSetting.formSettings`) is shared across all Form Settings categories, not just this one.

## Structure

- `<ul id="storageSettingsUL" class="formSettingsList">` containing one `<li>` per section, each wrapping an `<a>` with an icon `<div>` and a `<label>`.
- Parent container: `.settingsLeftMenu.settingsLeftRewamp`.
- Screenshot: not captured (see note on scope below); confirmed visually via zoom — active item shows mint-green background + teal left border stripe.

## Actions

| Element                                                        | User Action | Function                                                          | Result                                                                                                                                                                                              | Destination screen/state                                     |
| -------------------------------------------------------------- | ----------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `<a onclick="ZFForm.formSetting.formSettings('<sectionId>')">` | Click       | `ZFForm.formSetting.formSettings(element, isFromSettingsUrlCall)` | Adds `select` class to clicked `<li>`/`<a>` pair, removes it from the previously active pair; fetches that section's panel template + saved settings data; replaces `.frmSetingsInner` content pane | Same screen, right-hand settings pane swapped to new section |

> One control triggers two distinct network fetches (template + data) plus a DOM class toggle — see Network below.

## Behavior & States

- Default state: transparent background, transparent 1.6px left border (border reserved at same width to prevent layout shift when active).
- Interactive/hover/focus state: not separately captured this pass.
- Active/selected state: `select` class added to both `<li>` and `<a>`; mint-green background (`rgb(233,246,243)`), teal left border (`rgb(36,166,138)`).
- Disabled state: not observed.
- Loading state: not observed (no visible loading indicator between click and pane swap).
- Empty state: n/a.
- Error state: not observed.

## Rules & Validation

- Only one item can be active at a time (single-select nav list).
- The handler includes an unsaved-changes/dirty-check guard before switching sections (implementation detail not fully traced — out of scope for this pass).

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15).

- **DOM:**

```html
<!-- inactive -->
<li id="geolocationLI" class="">
  <a
    href="javascript:;"
    onclick='ZFForm.formSetting.formSettings("geolocation");'
    id="geolocationlink"
    class=""
    ><div class="setListIcons zfGeoLocaIcn"></div>
    <label>Geolocation</label></a
  >
</li>

<!-- active -->
<li id="reviewSubLI" class="select">
  <a
    href="javascript:;"
    onclick='ZFForm.formSetting.formSettings("reviewSub");'
    id="reviewSublink"
    class="select"
    ><div class="setListIcons zfReviewSubmiIcn"></div>
    <label>Review Before Submission</label></a
  >
</li>
```

Only DOM change on click: `select` class added to the newly-clicked `<li>`/`<a>` pair and removed from the previously active pair (removal point not located inside `formSettings()` itself — likely handled elsewhere, not traced further).

- **JavaScript:** Single shared handler for the entire Form Settings sidebar across all categories, keyed by a section-id string:

```js
function(element, isFromSettingsUrlCall) {
  if ("mailmerge" !== element || ZFSettings.isFormAdmin) {
    // unsaved-changes / email-template dirty check guard
  }
  isFromSettingsUrlCall
    ? showOrHideSettingsLayout(!1)
    : (
        showOrHideSettingsLayout(!0),
        hideLeftLink(),
        $("#" + element + "LI").addClass("select"),
        $("#" + element + "link").addClass("select"),
        ZFForm.formSetting.errorJson = {},
        // per-section branch: fetches and injects that section's panel
      );
}
```

- **Network:** Two GET requests fire per click (not purely client-side):
  1. `GET /{account}/settingstemplates?type=geo_location` → `200` — HTML template for the section's panel.
  2. `GET /{account}/form_id/{formId}/geolocation` → `200` — saved settings values for that section.

- **Response:** Data-fetch response example: `{"max_geofence_limit":10,"enable":false}`. Template-fetch response is raw HTML (not fully decoded — not needed for this level of capture).

- **State change:** Client-side `select` class toggle happens immediately on click; the actual panel content is server-fetched (not pre-rendered/hidden-then-shown), so the pane swap is a real re-render from fresh data each time, not a cached client-side view switch.

- **CSS:**
  - Active `<a class="select">`: `display:flex; background-color:rgb(233,246,243); border-left:1.6px solid rgb(36,166,138); color:rgb(0,0,0); font-weight:400; padding:10px`.
  - Default `<a class="">`: identical box model; `background-color:rgba(0,0,0,0)` and `border-left:1.6px solid rgba(0,0,0,0)` (transparent, same reserved width — avoids layout shift on state change).
  - Styling lives entirely on the `<a>`; the parent `<li>` carries no background/border in either state.

- **Animation/transition:** None — `transition-duration: 0s` on the `<a>` in both states. Background/border-color change is an instant class-toggle swap, not animated. Notably different from the Save & Resume toggle ([[toggle-radio-switch]]), which uses a 0.2s CSS transition plus jQuery fade effects — i.e. Zoho Forms doesn't apply animation consistently across its own component set.

## Anomaly / Notable Finding

- **OBSERVATION:** The page contains two overlapping sidebar DOM trees at the same screen position: a newer `zf-settingsMenuWrapper`/`elname`-based tree (using `hideAndRedirectToSettingsTab`) that renders at `0×0` (present in the DOM but invisible/non-interactive), and the real, visible, interactive tree (`#storageSettingsUL`, class `formSettingsList`, inside `.settingsLeftMenu.settingsLeftRewamp`) documented above. The `"settingsLeftRewamp"` class name suggests this is leftover/in-progress markup from a UI redesign, not currently live. **Practical implication for future scraping sessions on Zoho products: when a text-match DOM query returns unexpected/inconsistent results (e.g. no visible styling, zero dimensions), check for duplicate/dead markup before assuming the query or handler-tracing is wrong.**

## Competitor Comparisons

| Competitor                    | Same component implementation | Strengths | Weaknesses |
| ----------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched)_ |                               |           |            |

## Best Observed Approach

- TODO — needs at least one competitor's equivalent settings sidebar captured before a comparative judgment can be made.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Form Settings → Submissions & Storage sidebar, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved programmatically via the page's own JS context.
