---
component: "Upgrade Now CTA Button (Paywall)"
ui_category: "Actions/Controls > Button"
source_product: "Zoho Forms"
last_verified: "2026-09-15"
evidence_state: "source_reviewed"
---

# Component: Upgrade Now CTA Button (Paywall)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Any paywalled Form Settings feature — observed on Submissions & Storage → Auto-Trash. Same `.upgradeButton` class/pattern noted (not yet individually verified) on other gated features such as Double Opt-In and Form Encryption.

## Structure
- Single `<button class="upgradeButton">` with a custom `anchor_href` attribute (non-standard — read by JS, not a real link).
- Sits inside a "feature is premium" content block: `.zfupgradeContent` → `.zfupgardePopup.zfupgardePopPage` → `.outerContainer` → `#autoTrash` → `#settingsRightParent.settingsRightMenu`.
- Centered pill button below explanatory text ("Upgrade to the Premium plan to use this feature").

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| `button.upgradeButton` | Click | `ZFUtil.upgradeAndshowReloadPopup(elem, parentElem, source)` | Opens `anchor_href` URL (Zoho Store subscription page) in a new tab via `window.open(url, "_blank")`; conditionally shows a "Refresh the page" modal in the original tab depending on current route; optionally logs a `ZFUtil.trackFeature(UPGRADE_VIEW)` analytics event | New tab: Zoho Store pricing page. Original tab: reload-prompt modal (Cancel/Refresh) on settings-type routes |

> Single click triggers three distinct effects (external navigation, conditional modal, analytics event) — a multi-action control per task doc §7.

## Behavior & States
- Default state: purple-to-pink gradient background, no shadow, `cursor:pointer`.
- Hover state: identical gradient (background doesn't change) but gains an inset `box-shadow: rgba(0,0,0,0.18) 0px 6px 45px 0px` that visually dims the button slightly; no scale/lift transform.
- Active/selected state: n/a (single-fire CTA, not a toggle/selection control).
- Disabled state: not observed.
- Loading state: none observed — click immediately opens a new tab; no in-page loading indicator.
- Empty state: n/a.
- Error state: not observed.

## Rules & Validation
- The reload-prompt modal only appears when the current page route matches specific patterns (home tab: `#myforms`/`#manageusers`/`#mytasks`/`#myapprovals`/`#controlpanel`; form tab: settings/payments/share/approvals/rules/integrate/builder/records; or `adminsettings`/`accountusage`) — i.e. Zoho assumes an upgrade might change what's editable on these specific pages and wants the user to refresh, but doesn't bother on other routes.
- The destination URL is fully determined by the `anchor_href` attribute value baked into the button markup per feature/page — not computed dynamically in JS beyond reading that attribute.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15). One JS excerpt has a noted extraction gap (see below) — flagged, not presented as fully exact.

- **DOM:**
```html
<button class="upgradeButton" anchor_href="https://store.zoho.in/html/store/index.html#subscription?serviceId=16000&customId=60087958680" onclick="ZFUtil.upgradeAndshowReloadPopup(this);">Upgrade Now</button>
```
Confirmed rendered (not hidden/detached) before interaction: `{"tag":"BUTTON","rect":{"x":960.4,"y":496,"width":165.16,"height":42.4},"display":"block","visibility":"visible","opacity":"1"}`.

- **JavaScript:** `ZFUtil.upgradeAndshowReloadPopup(elem, parentElem, source)` — reconstructed, with one boolean-OR chain incompletely decoded (marked inline):
```js
function(elem, parentElem, source) {
  var pathArray = window.location.pathname.split("/"), showPopup = !1;
  if (null != pathArray[2]) {
    if ("home" == pathArray[2]) {
      var hashValue = window.location.hash;
      ("#myforms"==hashValue || "#manageusers"==hashValue || "#mytasks"==hashValue || "#myapprovals"==hashValue || hashValue.startsWith("#controlpanel")) && (showPopup = !0);
    } else if ("form" == pathArray[2]) {
      // showPopup = true when current tab is settings/payments/share/approvals/rules/integrate/builder/records
    } else if ("adminsettings" == pathArray[2] || "accountusage" == pathArray[2]) {
      showPopup = !0;
    }
  }
  if (null != parentElem) { showPopup ? $("#"+parentElem).removeClass("activeAnimate") : $("#"+parentElem).hide(); }
  showPopup && showPopup(); // [extraction gap: likely a differently-named popup-display call]
  if (source != undefined) {
    var featureObject = {};
    featureObject[ZFSubFeatureKeys.SOURCE] = source;
    ZFUtil.trackFeature(ZFFeatures.UPGRADE_VIEW, featureObject);
  }
  var subscriptionUrl = $(elem).attr("anchor_href");
  window.open(subscriptionUrl, "_blank");
}
```

- **Network:** No XHR/fetch observed firing directly from the click in the original tab. The new tab performs a normal full-page navigation: `GET https://store.zoho.in/zs/subscriptions/service/16000/custom-id/60087958680`. A `trackFeature` analytics XHR likely fires per the JS source but wasn't isolated from tab-open/navigation noise.

- **Response:** Not applicable in the XHR sense. Destination content confirmed: Zoho Store pricing page listing Basic (₹580/mo), Standard (₹1,450/mo), Professional (₹2,900/mo), Premium (₹5,800/mo), each with its own "Upgrade" button and feature list.

- **State change:** No app state change in the original tab beyond the conditional modal; the actual account/plan state change would only occur after completing checkout in the new tab (not exercised in this pass).

- **CSS:**
  - Default: `display:block; width:165.16px; height:42.4px; padding:12px 32px; border-radius:100px; background-image:linear-gradient(87.94deg, rgb(116,104,236) 0%, rgb(205,101,247) 99.65%); color:#fff; font-size:15px; font-weight:400; border:none; box-shadow:none; cursor:pointer`.
  - Hover: identical gradient; `box-shadow: rgba(0,0,0,0.18) 0px 6px 45px 0px inset`; `transform: none` (no lift/scale effect).

- **Animation/transition:** None — `transition-duration: 0s` in both default and hover computed styles; the hover box-shadow change is an instant swap, not eased. Consistent with the sidebar sub-nav link ([[sidebar-settings-subnav]]) but unlike the Save & Resume toggle ([[toggle-radio-switch]]), which does animate — Zoho Forms applies transitions inconsistently across its own components.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent paywall-CTA captured before a comparative judgment can be made.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Form Settings → Submissions & Storage → Auto-Trash, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context and direct interaction (click, new-tab inspection).
- Note: one JS function excerpt (`upgradeAndshowReloadPopup`) has a small unresolved extraction gap in a boolean-OR chain — logic is accurate in substance but not guaranteed byte-exact; re-verify from source if exact behavior is needed for reuse.
