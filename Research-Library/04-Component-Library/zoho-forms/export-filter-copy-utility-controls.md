---
component: "Dashboard/Entries Utility Controls (Export Menu, Status Filter, Copy-to-Clipboard)"
ui_category: "Search & Filter > Filter panel"
source_product: "Zoho Forms"
last_verified: "2026-09-16"
evidence_state: "source_reviewed"
---

# Component: Dashboard/Entries Utility Controls (Export Menu, Status Filter, Copy-to-Clipboard)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Entries/List View screen toolbar (Export), dashboard "All Forms" listing screen (status filter), Share → Share With → Public tab (permalink copy field).

## Structure
- **Export control:** toolbar icon `<a class="tooltip-bottom" tooltip-title="Export">` (outward arrow-from-box glyph) between the history and filter icons. Clicking reveals `<ul id="exportOptionsUl">` with two plain `<li onclick="...">` items (Export as CSV / Export as PDF).
- **"All Forms" status filter:** heading-styled dropdown trigger ("All Forms ▾") at the top-left of the dashboard listing. Options in `<ul id="formStatusUL">`: All Forms, Active Forms, Disabled Forms — filters by status, not folder (confirmed by testing, not assumed from the label alone).
- **Copy-to-clipboard permalink:** a readonly `<textarea elname="permalinktext">` under Share → Share With → Public tab; the entire textarea is the click target (no separate copy-icon button), with a sibling hidden confirmation `<span id="permaurlcopy">`.
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS/network data pulled programmatically).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Export icon | Click | Reveals `#exportOptionsUl` | Two-item menu shown, client-side only (no request on open) | Same screen |
| "Export as CSV" | Click | `ZFReportLive.showExportCSVOptions()` | Opens `div.pWrapper.exportPopupForMatrix` modal (875px wide): File Name input (pre-filled `<FormName>_Report`), a "Protect with a password" checkbox, an info panel showing selected-entry count and the org's daily export-limit note, Cancel/Done buttons | Same screen, modal open |
| "All Forms ▾" filter option | Click | `ZFForm.manager.chooseFormStatus(event, 'all'\|'enabled'\|'disabled')` (delegated `data-zf-click` handler) | Header relabels to the chosen status; form list re-renders via a real server round-trip (not a client-side filter) | Same screen, list refreshed |
| Permalink textarea | Click anywhere in the field | `ZFShare.zfShare.selectTxtAreaContAndCopy(this, 'permaurlcopy')` | Selects the full text, copies via `document.execCommand('copy')`, briefly reveals "Copied to clipboard." confirmation span | Same screen, no navigation |

## Behavior & States
- Export menu: default closed; open state shows the 2-item list; the CSV modal opens on top with its own Cancel/Done footer.
- Status filter: whichever status was last chosen stays reflected in the header label and the form-list contents.
- Copy field: default state shows the plain permalink text; "copied" confirmation state (span visible) lasts exactly 600ms shown + 600ms fade ≈ 1.2s total, then reverts to hidden. Text stays visually selected/highlighted after the copy action.
- Disabled/loading/error states: not observed for any of the three controls this pass.

## Rules & Validation
- None observed — none of the three controls have validation constraints; Export requires no destructive confirmation until "Done" is clicked (never tested per the safety constraint); the filter and copy actions are unconditional.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-16), Claude browser extension session, ~95 actions, including a `fetch`/`XMLHttpRequest.open` monkey-patch active across the full sequence and direct extraction of the copy handler's live function source.

- **DOM:**
```html
<!-- Export menu -->
<ul id="exportOptionsUl">
  <li onclick="ZFReportLive.showExportCSVOptions();">Export as CSV</li>
  <li onclick="ZFReportLive.showExportPDFOptions();">Export as PDF</li>
</ul>

<!-- Status filter -->
<ul id="formStatusUL">
  <li elname="allforms" val="allforms" data-zf-click="ZFForm.manager.chooseFormStatus(event, 'all')">All Forms</li>
  <li elname="enabledforms" val="enabledforms" data-zf-click="ZFForm.manager.chooseFormStatus(event, 'enabled')">Active Forms</li>
  <li elname="disabledforms" val="disabledforms" data-zf-click="ZFForm.manager.chooseFormStatus(event, 'disabled')">Disabled Forms</li>
</ul>

<!-- Copy-to-clipboard permalink -->
<textarea elname="permalinktext" readonly
  onclick="ZFUtil.trackFeature(ZFFeatures.FORM_PUBLIC_LINK_COPY);
           ZFShare.zfShare.selectTxtAreaContAndCopy(this, 'permaurlcopy');">
  https://forms.zohopublic.in/{account}/form/{formName}/formperma/...
</textarea>
<span id="permaurlcopy" class="flRight tinkClipboard2" style="display:none">Copied to clipboard.</span>
```
  Note: the Export menu uses plain inline `onclick`, while the status filter uses the `data-zf-click` + `ZFForm.manager.*` delegated-event convention seen on other Zoho Forms controls in this product — two different event-wiring conventions within the same toolbar area.

- **JavaScript:**
```js
// Copy-to-clipboard handler, live source:
function(txtAreaElem, copyMsgElem) {
  $(txtAreaElem).select(),
  document.execCommand("copy"),
  $("#" + copyMsgElem).show().delay("600").fadeOut("600")
}
```
  Confirmed: uses the **legacy `document.execCommand('copy')` fallback**, not `navigator.clipboard.writeText`. Mechanism: jQuery `.select()` the textarea content → `execCommand('copy')` → `.show()` the confirmation span → `.delay(600)` → `.fadeOut(600)`.

- **Network:**
  - Export menu open, and even the full "Export as CSV" modal (file-name field, password checkbox) — **zero requests** until a real "Done" click (not tested, per safety constraint).
  - Status filter selection — **real server round-trip**, confirmed via the same hook:
    - `XHR: /{account}/forms?formfilterby=enabled&start=1&pageSize=10&type=myforms`
    - `XHR: /{account}/listing/viewpreference`
    This is a **paginated server-side refetch**, not a client-side filter over an already-loaded list — notably different from the Export menu's fully local behavior.
  - Copy-to-clipboard — **zero requests** (confirmed via the same hook); purely a local DOM selection + browser clipboard API call.

- **Response:** N/A for Export (never completed) and copy (no request fired). Status filter's response shape not itemized this pass (only the endpoint/params were captured).

- **State change:** Export and copy are purely client-side/ephemeral. Status filter is the only one of the three with real server-persisted state (re-fetches the list from the server, not just a client-side re-slice).

- **CSS:**
  - Export menu (`#exportOptionsUl`) toggles via plain `style="display:block"` — no transition or animation classes.
  - Status filter dropdown has `transition: all` in computed style but no `animation-name` — toggles via `display:block/none`, effectively an instant show/hide with no observed easing.
  - Copy confirmation span: `font-size:12px; font-weight:500; color:#222`, positioned `flRight` immediately after the textarea.

- **Animation/transition:** Export and filter menus: instant, no observed animation. Copy confirmation: **not a CSS transition at all** — the show/hide is driven by jQuery's own `.show()`/`.fadeOut()` JS-based animation loop (opacity/display), with a fixed 600ms-shown + 600ms-fade ≈ 1.2s total visible lifecycle.

## Cross-Component Pattern Note
- **OBSERVATION:** The Export modal's wrapper class (`pWrapper`) is the **same generic modal-shell class** later confirmed in [[destructive-confirm-modal-comparison]] as one of two independently-built modal systems in this product (the "changes not applied" theme-editor warning also uses `pWrapper.deleteWrapper`). This reinforces that `pWrapper` is likely the older, more widely-reused generic popup convention in Zoho Forms, while `popNewOverlay`/`popNewContainer` (seen on the Trash-delete confirmation) is a newer, more polished redesign applied to only some destructive-action dialogs — a third data point toward that emerging picture, not yet a confirmed company-wide rule.
- The status filter's `data-zf-click` + `ZFForm.manager.*` delegation pattern matches other dashboard-level controls already documented in this product (e.g. [[form-overflow-menu]]'s delete/trash trigger), suggesting `ZFForm.manager` is a real shared internal namespace for dashboard-level actions specifically — distinct from field/builder-level code (`ZFForm.formBuilder.*`, seen in [[choices-list-editor]]) and theme-editor-level code (bare global functions, confirmed NOT sharing scope with `ZFForm` at all — see [[destructive-confirm-modal-comparison]]).

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent export/filter/copy controls captured before a comparative judgment can be made.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Entries screen toolbar, dashboard "All Forms" listing, and Share → Share With → Public tab, via Claude browser extension, 2026-09-16 (~95 actions, including a `fetch`/`XMLHttpRequest.open` monkey-patch active for the entire sequence and direct extraction of the copy handler's live function source). No destructive action was completed: the CSV export was cancelled before "Done," the PDF export option was never opened, and the clipboard-copy test only read/copied the account's own already-public permalink.
