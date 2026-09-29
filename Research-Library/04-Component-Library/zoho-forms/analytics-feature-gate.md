---
component: "Deep Insights Blur+Lock Feature Gate"
ui_category: "Feedback > Empty state"
source_product: "Zoho Forms"
last_verified: "2026-09-15"
evidence_state: "source_reviewed"
---

# Component: Deep Insights Blur+Lock Feature Gate

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Analytics section → Deep Insights tab (Field Metrics / Page Metrics sub-tabs). 5 total `.popAnalystics` instances exist in the DOM — one per gated sub-view (Field Metrics, Page Metrics, Drop-off Count, and 2 more likely tied to Form Metrics' own locked KPIs) — only the active tab's instance renders with real dimensions.

## Structure
- `div.popAnalystics[elname="analySwitchPopupDiv"]` — a rounded white card centered over a blurred data grid: lock icon (`svg.icon.icon-lock`), descriptive copy, a visible "Enable Advanced Metrics" button, and a **hidden dormant sibling button** ("Upgrade Now", `display:none`).
- Underlying blurred content: `div.zf-NewLevelMetrics`, a div-based grid (not a semantic `<table>`) containing genuine structured demo data (field names + numeric metrics), blurred via CSS `filter: blur(6px)`.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Enable Advanced Metrics" button (`switchAdvBtnElem`, visible) | Click | `ZFAnalytics.analytics.showAnalyticsProPopup()` | Opens a confirmation modal — **not** a redirect/new tab/paywall | Same screen, modal overlay |
| Modal "Enable" button | Click | `ZFAnalytics.analytics.switchToAdvAnalytics()` | *(not exercised — deliberately not clicked, since the dialog itself warns data collection starts irreversibly from that point)* | Not observed |
| Modal "Cancel" button | Click | `ZFAnalytics.analytics.hideSwitchFormAnalyticsPopupDiv()` | Closes modal, no state change | Same screen |
| Hidden "Upgrade Now" button (`upgradeAdvBtnElem`, `display:none`, dormant) | *(not clickable — hidden)* | `ZFUtil.upgradeAndshowReloadPopup(this,'upgradePopupContainer')` | Same handler as [[upgrade-cta-button]]'s Auto-Trash CTA — dormant here, presumably activated for accounts in a different plan/feature-flag state | Not observed (never visible in this test account) |

## Behavior & States
- Gate state: blurred real data underneath (`filter: blur(6px)`, confirmed via computed style — **not** `backdrop-filter`, and not a placeholder image/illustration — zero `<img>`/`<canvas>` elements inside the blurred container).
- Confirmation-modal state: dark backdrop `rgba(25,35,43,0.85)` (`div.popNewOverlay.activeAnimate`), modal card `border-radius:8px; box-shadow:none`.
- Button hover state: no discernible visual change found — the button carries **no CSS class** (`className === ""`), styled purely via `elname` attribute selector or a parent-scoped rule, so no `:hover` rule could be located via class-based CSSOM search.
- Loading/error/disabled states: not observed.

## Rules & Validation
- Two gate mechanisms coexist in the same DOM card, mutually exclusive by visibility: a genuine **opt-in feature toggle** (visible in this test account) and a **dormant plan-upgrade paywall** (hidden, same handler as [[upgrade-cta-button]]). Server-side plan tier or a feature flag decides which one renders visible — not independently confirmed which condition triggers the switch.
- The confirmation modal's copy is a real data-collection consent notice ("Enabling this will start collecting advanced metrics for this form. Data will be collected from this point forward.") — this is **not** a monetization gate despite the blur+lock visual language strongly implying one.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15), including resolution of 5 duplicate ghost `.popAnalystics` instances (same ghost-element pattern noted in [[sidebar-settings-subnav]] and [[form-overflow-menu]]) and a persistent request-logging hook across the full interaction.

- **DOM:**
```html
<div class="popAnalystics" elname="analySwitchPopupDiv">
  <svg class="icon icon-lock"><use xlink:href="#icon-lock"></use></svg>
  <p>Track submission counts by device and how long users take to complete your form.</p>
  <button elname="switchAdvBtnElem" onclick="ZFAnalytics.analytics.showAnalyticsProPopup();">Enable Advanced Metrics</button>
  <button elname="upgradeAdvBtnElem" onclick="ZFUtil.upgradeAndshowReloadPopup(this,'upgradePopupContainer');" style="display:none;">Upgrade Now</button>
</div>
```
Blurred content confirmed as real structured data (not placeholder art): rows like "Single Line 239 216", "Multi Line 243 277", "Number 705 637" — genuine field-name + click/start-count pairs rendered as actual DOM text, then blurred.

Confirmation modal:
```html
<div class="popNewContainer"> <!-- rect 506,243, 650×240 -->
  <h4>Enable Advanced Metrics</h4>
  <p>Enabling this will start collecting advanced metrics for this form. Data will be collected from this point forward.</p>
  <button onclick="ZFAnalytics.analytics.hideSwitchFormAnalyticsPopupDiv();">Cancel</button>
  <button class="btnCurve greenBtnNew" onclick="ZFAnalytics.analytics.switchToAdvAnalytics();">Enable</button>
</div>
```

- **JavaScript:** All handlers under `ZFAnalytics.analytics` — a **fourth** distinct module namespace this session (alongside `ZFForm`/`ZFSettings`/`ZFUtil`, `ZFShare.zfShare`, `ZFReportLive`):
  - `showAnalyticsProPopup()` — opens the confirmation modal.
  - `switchToAdvAnalytics()` — the actual opt-in action (not exercised).
  - `hideSwitchFormAnalyticsPopupDiv()` — closes the modal.
  - The dormant sibling button uses `ZFUtil.upgradeAndshowReloadPopup(this,'upgradePopupContainer')` — **the exact same handler** as [[upgrade-cta-button]]'s Auto-Trash CTA, confirming a shared cross-feature upgrade-flow utility exists even where it isn't the active path.

- **Network:** **Zero requests** across the entire sequence (gate render, open confirmation modal, cancel), confirmed via an active XHR/fetch wrapper. The modal's actual "Enable" action was deliberately not clicked to avoid an irreversible account-level change (per the dialog's own warning).

- **Response:** N/A — no network activity.

- **State change:** None occurred in this test (Cancel was used, not Enable) — the actual data-collection-activation request/payload remains uncaptured.

- **CSS:**
  - Overlay card: `background: rgb(255,255,255); border: 0.8px solid rgb(42,189,157); border-radius: 20px; box-shadow: rgb(250,255,254) 0px 6px 22px 0px; padding: 32px` — soft green-tinted shadow/border matching brand teal.
  - Lock icon: `34×34px; fill: rgb(78,86,109)` (slate gray).
  - Button: `background-color: rgb(36,166,138); color: white; border-radius: 50px; padding: 12px 32px; cursor: pointer; transition: all` (no explicit duration set inline).
  - Blur mechanism: `filter: blur(6px)` on `div.zf-NewLevelMetrics` — confirmed **not** `backdrop-filter` (the underlying text itself is blurred directly, not a frosted-glass layer over it).
  - Modal: `position: absolute; border-radius: 8px; box-shadow: none; transition: transform 0.5s, opacity 0.5s`.

- **Animation/transition:** The confirmation modal has an **explicit, real CSS transition** (`transform 0.5s, opacity 0.5s`) driven by the `activeAnimate` class toggle on its backdrop — a genuine animated open/close, unlike the inconclusive "instant" panels in [[entries-filter-panel]] and [[theme-color-picker-gradient]]. The gate card itself (`.popAnalystics`) shows no equivalent transition — it appears/disappears via tab-switch re-render, not its own enter/exit animation.

## Cross-Component Pattern Note
- **OBSERVATION — verdict vs. [[upgrade-cta-button]] (Auto-Trash):** structurally related but behaviorally distinct. Both gates share the same underlying `ZFUtil.upgradeAndshowReloadPopup()` utility (present here as a dormant hidden button), confirming a common "upgrade CTA" plumbing reused platform-wide. But the **currently active** path on this gate is a completely different, lighter-weight flow: a genuine opt-in feature toggle (a same-app confirmation modal, resolved entirely client-side with zero network calls even to open/close), versus Auto-Trash's heavier plan-upgrade/reload-and-redirect flow aimed at a purchase. **The blur+lock visual language is shared and thus visually ambiguous — a user can't tell from the UI alone whether a given blur+lock gate is a free opt-in or an actual paywall** until they click through; this is a real, worth-flagging UX inconsistency for the product record's Weaknesses section.
- This is the **fourth distinct JS module namespace** found this session (`ZFAnalytics.analytics`, alongside `ZFForm`/`ZFSettings`/`ZFUtil`, `ZFShare.zfShare`, `ZFReportLive`), reinforcing the fragmented-feature-modules architecture pattern noted in [[entries-filter-panel]] — while `ZFUtil` itself (used for the dormant upgrade button here) is evidently one of the few utilities actually shared *across* those fragmented modules.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs competitor research; internally, the confirmation-modal pattern (real consent copy, no dark-pattern immediate activation) is reasonable, but the visual ambiguity between "free opt-in" and "paywall" behind an identical blur+lock treatment is a flag against this specific execution.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Analytics → Deep Insights, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context, with resolution of 5 duplicate ghost DOM instances and a persistent request-logging hook confirming zero network activity across the tested interaction (Cancel path only — Enable was not exercised).
