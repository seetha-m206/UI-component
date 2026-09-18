---
component: "Per-Form Overflow ('More Actions') Menu"
ui_category: "Navigation > Context menu"
source_product: "Zoho Forms"
last_verified: "2026-09-15"
evidence_state: "source_reviewed"
---

# Component: Per-Form Overflow ("More Actions") Menu

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** "My Forms" dashboard — revealed via the "⋮" icon in a form row's hover action bar (alongside always-visible Edit/All Entries/Mail/Share buttons).

## Structure
- `div.moreListDrodown.moreListMobileView[elname="moreListElm"]` containing a single `ul[elname="moreOptionUlElm"]` with **15 `<li>` children total** — a unified markup shared between desktop and mobile-responsive variants (4 mobile-only items + dividers are present in the DOM but hidden on desktop via CSS).
- Desktop-visible 7 items, grouped by divider lines into three visual clusters: {Info, Duplicate, Enable/Disable}, {Move to Folder, Change Ownership, Change Form Type}, {Trash — visually and semantically isolated as the destructive action}.
- Each item carries its own SVG icon via `<use xlink:href="#icon-{Name}">`.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "⋮" icon | Click | *(not decoded — likely delegated, no direct `onclick` found)* | Opens the dropdown menu | Same screen, menu shown |
| `li[elname="change_status"]` ("Enable / Disable") | Click | `ZFForm.manager.getAndUpdateStatus(this)` | Fetches current status via GET, then opens a modal dialog with a native radio pair (Enable/Disable) — **not** an in-place toggle | Same screen, modal overlay |
| Modal "Cancel" | Click | Dismiss | No further request, no state change | Same screen, menu/modal closed |
| Modal "Done" | Click | *(not exercised — deliberately untested to keep the test form's state undisturbed)* | Presumed: commits the selected radio state | Not observed |
| Other 6 menu items (Info, Duplicate, Move to Folder, Change Ownership, Change Form Type, Trash) | Click | *(not exercised this pass)* | Not observed | Not observed |

## Behavior & States
- Closed state: menu not rendered/hidden.
- Open state: `display:block; opacity:1; box-shadow:none; border-radius:0px` — no shadow or rounding, shown via a hard display toggle, not an animated reveal.
- Item default state: `color: rgb(34,34,34)` (neutral dark gray), `background-color: transparent`.
- Item hover state (tested on "Duplicate"): text color changes to `rgb(36,166,138)` (the app's consistent teal accent — same value seen on [[toggle-radio-switch]]'s active state and [[choices-list-editor]]'s hover), background stays transparent, instant (no transition).
- Trash item's destructive styling: red (`rgb(237,81,98)`) lives on the inner `<span>`, **not** the `<li>` row background — confirmed via computed style (the `<li>` itself stays neutral gray; only the span text is red). Visually the row reads red because the span is its only content, but the styling is scoped narrowly to the label.
- Modal: carries an `activeAnimate` class on `.popNewOverlay`, strongly implying a CSS-driven entrance animation, but exact keyframe/transition values weren't recoverable this pass (stylesheet introspection returned no matching rules — likely minified/dynamically-injected CSS).

## Rules & Validation
- Enable/Disable is a **fetch-then-decide pattern**, not an instant toggle: opening the modal fires `GET /{account}/form/{formLinkName}/status` to retrieve current state before rendering the pre-selected radio — a deliberate extra round-trip to avoid showing stale state.
- **Cross-component evidence of shared internals:** the modal's radio pair uses `div.cusRadioButton` — the **exact same class** found earlier as an HTML-commented-out, unused template fragment inside the Dropdown field's Choices row markup ([[choices-list-editor]]), and structurally consistent with [[toggle-radio-switch]]'s Save & Resume control. This confirms `cusRadioButton` is a genuinely shared, reusable native-radio-plus-label component used across multiple real features — not a vestigial leftover, as it first appeared to be.
- The handler `ZFForm.manager.getAndUpdateStatus` initializes bulk-change bookkeeping variables (`formStatusChangeJsonObj`, `formIdsArr`, `formLinkNamesArr`, `ZFForm.manager.isBulkStatusChange`) even for a single-form click — strong evidence this exact function and modal are **reused for multi-select bulk enable/disable**, tying back to the unlabeled per-row checkbox spotted in the earlier dashboard survey (not independently tested this pass).

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15), including a request-count hook and resolution of multiple ghost/duplicate-DOM false positives (see Methodological Note).

- **DOM:**
```html
<div class="moreListDrodown moreListMobileView" elname="moreListElm">
  <ul elname="moreOptionUlElm">
    <!-- mobile-only (hidden on desktop via CSS) -->
    <li class="mobileListEdit" elname="moreEditOpt">Edit</li>
    <li class="mobileListEdit" elname="moreEntriesOpt">All Entries</li>
    <li class="moreListMenuDivider mobileEditDivider"></li>
    <li class="mobileListShare" elname="moreNotifyOpt">Mail</li>
    <li class="mobileListShare">Quick Share</li>
    <li class="moreListMenuDivider mobileShareDivider"></li>
    <!-- desktop-visible 7 items -->
    <li class="fileStroageList" elname="formInfodiv"><span>Info</span></li>
    <li elname="duplicate-link-a"><span>Duplicate</span></li>
    <li elname="change_status" onclick="ZFForm.manager.getAndUpdateStatus(this);"><span>Enable / Disable</span></li>
    <li class="moreListMenuDivider"></li>
    <li class="listingNotifi" elname="moveToFolder"><span>Move to Folder</span></li>
    <li elname="change_owner"><span>Change Ownership</span></li>
    <li class="switchLayoutTypeLi" elname="switchlayouttypebuilderli"><span>Change Form Type</span></li>
    <li class="moreListMenuDivider"></li>
    <li class="trashFrm" elname="trash-li"><span>Trash</span></li>
  </ul>
</div>
```
Only "Enable / Disable" has an inline `onclick`; the rest presumably bind via event delegation on the `<ul>`/`<li>` (not decoded this pass).

"Enable or Disable a form" modal:
```html
<div class="popNewOverlay activeAnimate">
  <div class="popNewContainer bulkDisabDiv centerContainer">
    <div class="popNewHeader bdrGreen">
      <div class="popNewHeadLeft"><h4>Enable or Disable a form</h4></div>
    </div>
    <div class="cusRadioButton">
      <input type="radio" name="status_change" value="on" id="formEnable" checked>
      <label>...</label>
    </div>
    <div class="cusRadioButton">
      <input type="radio" name="status_change" value="on" id="formDisable"
             onclick="switchToDisable('ACTIVE',1,'undefined','switch')">
      <label>...</label>
    </div>
    <!-- Cancel / Done buttons -->
  </div>
</div>
```

- **JavaScript:**
  - Menu-open trigger: not decoded (no direct `onclick` found — likely delegated).
  - `ZFForm.manager.getAndUpdateStatus(aHref, formId)`: calls `showLineLoading()` (a loading-bar UI cue), initializes bulk-change bookkeeping variables (see Rules above). Full function body (~4005 characters) not exhaustively decoded beyond confirming its shape and the AJAX-status-fetch pattern.
  - `switchToDisable('ACTIVE', 1, 'undefined', 'switch')`: bound to the Disable radio's `onclick`, presumably queues the pending state change for "Done" — not tested (would disable the test form).

- **Network:**
  - Opening the "⋮" menu: **0 requests** — purely client-side show/hide.
  - Clicking "Enable / Disable": **exactly 1 request**, `GET /{account}/form/{formLinkName}/status` — fetches current state to pre-populate the radio selection before the modal renders.
  - Clicking "Cancel": **0 additional requests** — clean client-side dismiss.
  - "Done" path not tested (would commit a state change to the test form).

- **Response:** Status GET response body not inspected (network tool exposes method/URL/status only); effect inferred correctly from the pre-selected "Enable" radio matching the form's known-enabled state.

- **State change:** Menu open/close is purely local. The status-check GET fetches server state for display but doesn't itself change anything; the actual state-changing request (on "Done") was not captured.

- **CSS:**
  - Menu container (open): `display:block; opacity:1; box-shadow:none; border-radius:0px; transition-duration:0s`.
  - Item default: `color: rgb(34,34,34); background-color: transparent`.
  - Item hover: `color: rgb(36,166,138)` (teal accent); background unchanged; `transition-duration:0s`.
  - Trash item: red (`rgb(237,81,98)`) scoped to the inner `<span>` only, not the row background.

- **Animation/transition:** Menu itself and item hover: no transition (instant, `0s`), consistent with the broader "builder-chrome/property-panel interactions are instant" pattern already seen in [[sidebar-settings-subnav]] and [[upgrade-cta-button]]. The Enable/Disable modal carries an `activeAnimate` class (strongly implying a real CSS entrance transition), but exact timing/easing wasn't recoverable via stylesheet introspection this pass — flagged as a good target for a focused follow-up, and worth comparing against the Share screen's plainer `popUpOverlay` (no `activeAnimate` class) seen in [[publish-toggle-switch]]'s confirm-disable dialog.

## Methodological Note
- **OBSERVATION:** This session hit the same "ghost/duplicate DOM element" trap noted in [[sidebar-settings-subnav]] — naive text-match queries for "Trash"/"Info" returned multiple 0×0 false positives, including the unrelated sidebar Trash nav link and a hidden `moreListMobileView` variant with different first-item content ("Edit" vs. the real menu's "Info"). Resolved by filtering for `rect.width > 0` and cross-checking against a zoomed screenshot. Reinforces: **always verify real rendered geometry before trusting a DOM query's first match**, especially on pages with responsive dual-markup (desktop + mobile-hidden variants in the same DOM).

## Cross-Component Pattern Note
- **OBSERVATION:** This is the clearest evidence so far in this session of **genuine internal component reuse** rather than divergent one-off implementations: the modal's `cusRadioButton` radio pair matches markup previously seen only as an inert, commented-out template fragment ([[choices-list-editor]]) and structurally aligns with [[toggle-radio-switch]]. Contrast with [[publish-toggle-switch]]'s finding of four *divergent* toggle implementations — Zoho Forms appears inconsistent product-wide, but at least one real shared primitive (`cusRadioButton`) does exist and gets reused across unrelated features (Save & Resume settings, this bulk-status modal, and the Choices editor's template, even if unused there).

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs competitor research before a comparative judgment can be made.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), "My Forms" dashboard → per-form "⋮" overflow menu → Enable/Disable modal, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context, with a request-count hook and resolution of multiple ghost-element false positives.
