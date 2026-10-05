---
component: "Entries Filter Panel (Inline Query-Criteria Builder)"
ui_category: "Search and Filtering > Filter panel"
source_product: "Zoho Forms"
last_verified: "2026-09-15"
evidence_state: "source_reviewed"
---

# Component: Entries Filter Panel (Inline Query-Criteria Builder)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> ⚠️ **Partially incomplete — flagged areas needing a second pass:** the ~16,000-character `searchView()` function was only decoded past its initializer, so the exact multi-field validation predicate and how `criteria.conditions[]` is assembled from several checked fields is unconfirmed. The panel's open/close animation mechanism (CSS transition vs. jQuery `.slideToggle()`) was not conclusively identified. Multi-field simultaneous filtering was not tested (only single-field). The date field's calendar/picker UI (if any, on focus of the datetime input) was not opened.

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** "All Entries" (Responses) screen, opened via the funnel/filter icon in the toolbar.

## Structure
- `div#searchbar.rPorts-SearchPanel-SideBar` — slides in from the right edge of the screen.
- Top: a global field-name "Search" text input (356×43px).
- Middle: a scrollable `<ul>`/`<li>` list, one `<li>` per form field, each with icon + label + checkbox. Checking a field's checkbox reveals, **in place** (no new DOM insertion), a two-part criteria sub-form: an operator dropdown (jQuery Select2 widget backed by a native `<select>`) and a value input whose type/format depends on the field's datatype.
- Bottom-right: "Clear" and "Search" action links.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Field `<li>` checkbox | Click | `ZFReportLive.showSearchSelect(elem)` | Toggles `input.checked`; adds/removes `class="active"` on parent `<li>`; shows/hides `.rPorts-SearchResultForm` via jQuery (`display: none → block`, no clone/insert) | Same panel, criteria row expands/collapses |
| Operator dropdown (per checked field) | Click | Select2 widget behavior | Reveals a datatype-specific operator list (see Technical Data) | Same panel |
| "Search" button | Click, with incomplete criteria | `ZFReportLive.searchView()` | Client-side validation fails; adds `class="active search-Error"` to the offending `<li>`; shows "Invalid search criteria." message; **no network request sent** | Same panel, error state shown |
| "Search" button | Click, with valid operator+value | `ZFReportLive.searchView()` | Fires `POST .../report/{reportName}/records` with a `criteria.conditions[]` payload; Entries table re-renders with matching records | Same screen, Entries table filtered |
| "Clear" button | Click | `ZFReportLive.cancelSearch()` | Resets filter state (not independently traced in detail) | Same screen |

## Behavior & States
- Default row: no special background; checkbox unchecked; criteria form hidden (`display:none`).
- Expanded/active row: `class="active"`; criteria form visible (`display:block`) — no distinguishing background beyond the reveal itself.
- Error row: `class="active search-Error"` — `background:#FFF6F6; border:0.8px solid #FFC2C2; border-radius:4px; padding:10px 0 6px 12px` — a red-tinted card highlight. The "Invalid search criteria." message itself is a single shared text element (bottom-left of panel near Clear/Search), not per-field.
- Loading state: not observed.
- Panel open/close: visually instantaneous in this capture; underlying mechanism unresolved (see flag above).

## Rules & Validation
- **Operator sets differ by field datatype** — confirmed by directly comparing two field types:
  - **Text** (Single Line, fieldtype code `1`): Is, Is Not, Is Empty, Is Not Empty, Starts With, Ends With, Like, Contains, Not Contains.
  - **Number-style** (Rating, fieldtype code `21`): Is, Is Not, Is Empty, Is Not Empty, Is Less Than, Is Greater Than, Is Lesser Than or Equal To, Is Greater Than or Equal To, Is Between.
  - **Date** (Added Time, fieldtype code `3`): all number-style comparison operators, plus ~30 relative-date presets (Today, Yesterday, Tomorrow, Last/Next 7/30/60/90/120 Days, Last/This/Next Week or Month or Year, Current-and-Previous/Next variants, Last/Next 2 Years, list continues — capture truncated at ~30 options).
- Value-input rendering also differs by type: Rating's is a plain text box; Added Time's carries placeholder `dd-MMM-yyyy hh:mm:ss` (a formatted text field, not a native date-picker widget by default — unconfirmed whether one appears on focus, see flag above).
- Validation is **fully client-side** — an incomplete criteria row never reaches the network; confirmed by observing zero request activity on the invalid-submission attempt.
- Numeric `fieldtype` codes observed on `<li>` elements: `1`=Single Line/text, `12`=Dropdown, `18`=Decision Box, `19`=File Upload, `21`=Rating, `44`=Yes/No, `3`=Added Time/date — a useful reference map for interpreting other captures.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15), including a full request/response payload capture for a valid single-field filter.

- **DOM:**
```html
<li elname="SingleLine" name="SingleLine-select" fieldtype="1">
  <div class="rPorts-listActive"></div>
  <!-- HTML-commented-out legacy checkbox template, same dead-template pattern as [[choices-list-editor]] -->
  <svg class="icon icon-SingleLine">...</svg>
  <input type="checkbox"><label></label> Single Line
  <div class="rPorts-SearchResultForm" elname="inputmaindiv" style="display:none;">
    <div class="rPorts-SearchResultForm-SelectList">
      <div class="rPorts-SearchResultForm-SelectList-Select2">
        <select class="...-select" fieldtype="1" tabindex="-1" class="select2-hidden-accessible">
          <!-- operator <option>s -->
        </select>
        <span class="select2 select2-container select2-container--default" role="combobox"><!-- rendered widget --></span>
      </div>
    </div>
    <!-- value <input> -->
  </div>
</li>
```
**Confirmed:** checking the checkbox does **not** clone or insert a new row — the criteria `<div>` already exists in the DOM at panel-render time (hidden), and toggling only flips `checked`, adds `.active`, and clears the inline `display:none` style via jQuery `.show()`.

- **JavaScript:** All logic under a global `ZFReportLive` namespace (jQuery-based) — distinct from the builder's `ZFForm`/`ZFSettings`/`ZFUtil` namespaces and the Share screen's `ZFShare` namespace seen elsewhere this session:
  - `ZFReportLive.showSearchSelect(elem)` — checkbox handler, drives the expand/collapse behavior described above.
  - `ZFReportLive.searchView()` — Search-button handler. Sets `this.operation = "search"`, disables the button during processing (debounce/re-entrancy guard), builds `searchOperMap`/`operMap` objects from checked fields, tracks a `globalError` flag that short-circuits and surfaces "Invalid search criteria." when any checked field lacks a valid operator/value. Full body (~16,000 characters) only partially decoded (initializer segment only).
  - `ZFReportLive.cancelSearch()` — Clear-button handler.
  - `ZFReportLive` also exposes dozens of adjacent Entries-screen functions (export, print, pagination, save-as-report, PII/privacy-field checks, auto-filter popup construction) — confirms this is a dedicated live-report controller module.

- **Network:** Valid filter submission fires exactly one request:
```
POST https://forms.zoho.in/{account}/report/{reportName}/records
Status: 200
Body: {"entries":{"range":{"startindex":1,"pagesize":10},"criteria":{"conditions":[{"Rating":{"operator":"EQUALS","value":"3"}}]}}}
```
Pattern: one JSON object per checked/valid field inside `conditions[]` — multi-field filters presumably append additional `{"FieldName":{"operator":...,"value":...}}` entries, **not independently verified** with two simultaneous filters. Invalid/incomplete submissions never reach the network at all.

- **Response:** Top-level keys: `records` (array — empty `[]` in this test, since the seeded test response had no Rating value matching `EQUALS 3`), `report` (a large ~24-key metadata/config object re-sent with every records fetch: `show_serial_number`, `show_email_audit`, `report_date_format`, `enable_optin_filter`, `form_uid`, `total_records`, `enable_save_filter`, `subform_entries_view`, `share_mode`, `approval_permission`, `is_fullform_encrypted`, `is_default_report`, `report_id`, `fields`, and others), and `is_importrecords_running`. **Notable:** this is a heavyweight response carrying full report-view configuration on every filter request, not a lightweight records-only payload.

- **State change:** Entries table re-renders to show only matching records after a successful filter request; panel state (checked fields, entered criteria) persists visually while the panel remains open.

- **CSS:**
  - Panel container: `position:absolute; right:0; width:400px; z-index:96; box-shadow:-1px 2px 3px rgba(222,222,222,1); transition: all;` — a bare `transition: all` with no explicit duration/timing-function inline; actual slide-in timing not conclusively attributed to CSS vs. JS animation.
  - Error row: `class="active search-Error"` → `background:#FFF6F6; border:0.8px solid #FFC2C2; border-radius:4px`.

- **Animation/transition:** No `@keyframes` or explicit `transition-duration` found via computed styles on the panel or rows (`transition: all` resolves to a default `0s` at rest) — though this may under-report a jQuery `.animate()`/`.slideDown()` effect (which mutates inline styles per-frame rather than via CSS transitions) since no mid-animation frame was captured. Visually the panel appeared instantly across the screenshot sequence.

## Cross-Component Pattern Note
- **OBSERVATION:** This is the **third distinct JS module namespace** identified this session for what are all "the same app" — `ZFForm`/`ZFSettings`/`ZFUtil` (builder), `ZFShare.zfShare` (Share screen, see [[publish-toggle-switch]]), and now `ZFReportLive` (Entries/Reports). Combined with the four-toggle-implementations finding in [[publish-toggle-switch]], this reinforces that Zoho Forms is built as several loosely-coordinated feature modules rather than a single unified frontend architecture — each with its own naming conventions, patterns, and (per the toggle finding) sometimes duplicated primitives.
- Same dead-template pattern (an inert, HTML-commented-out legacy checkbox markup) found here as in [[choices-list-editor]] — a recurring code-hygiene signal worth noting if a broader "code quality" observation is ever written up for the product record.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Paperform (see [[paperform-submissions-results-view]]) | **Structurally split, not a direct equivalent.** Paperform's raw Submissions list offers only free-text search + a date-range filter — no field-level criteria builder on the list itself. A real condition-based query builder (question/operator/value, And/Or, nested groups) does exist in the product, but it lives only inside Reports → Segments, where it drives report aggregates rather than filtering which raw rows the list shows. | Paperform's Segments builder does support nested condition groups (And/Or), which this Zoho panel's single flat `criteria.conditions[]` list was never confirmed to support for multi-field combinations. | Paperform gives up datatype-aware operators and client-side pre-validation on the list itself — a user filtering raw submissions by a specific field/operator/value has no equivalent to Zoho's inline per-field Select2 operator dropdown; the closest capability is one screen away and answers a different question (aggregate reporting, not row filtering). |
| Google Forms (see [[google-forms-responses-view]]) | **No filtering at all — the furthest of the four products from this panel's model.** Confirmed across all three Responses sub-views (Summary/Question/Individual) and the export menu: no date filter, no answer-value filter, no search box, no saved-view/segment concept anywhere in the product. Forms is a display/aggregate layer only. | None on this dimension — Google Forms has nothing to compare favorably against Zoho's query-builder. | Filtering only becomes possible once data reaches the linked Google Sheet or a downloaded CSV — a respondent-data question that Zoho answers in-product (datatype-aware operators, client-side validation) requires leaving Google Forms entirely to answer. |
| JotForm (see [[jotform-tables-inline-edit-and-views]]) | **A Filter control is confirmed present in the Tables grid shell**, alongside a Columns manager — but JF7's pass did not exercise it in depth (no operator list, no network trace, no validation-path capture), so this is confirmed-to-exist, not confirmed-at-this-record's-depth. | JotForm's Tables workspace additionally confirms genuine inline cell editing and two independent computed-column paths (AI-driven + formula-driven) layered directly on response data — capabilities this filter panel's own host screen (Zoho's Entries list) doesn't have a confirmed equivalent for. | JotForm's filtering depth is the one open gap in an otherwise strong [[jotform-tables-inline-edit-and-views]] capture — a future pass should test its operator set and network behavior directly against this record's own depth (datatype-aware operators, client-side pre-validation, full request/response capture) before a real side-by-side verdict can be reached. |

## Best Observed Approach
- **RECOMMENDATION:** Of the products directly compared here at full depth, Zoho Forms' filter panel remains the stronger list-level filtering implementation — true datatype-aware query-building (checkbox → operator → value, with client-side validation before any network call) directly on the Entries list itself, versus Paperform's search-and-date-only list with its real query builder relocated to Reports/Segments and scoped to aggregates rather than raw rows, and versus Google Forms' complete absence of in-product filtering. JotForm's Tables grid confirms a Filter control exists but was not tested to this record's depth — the comparison against JotForm specifically remains open pending a dedicated filter-focused pass.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), "All Entries" screen → filter panel, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context; full request/response payload captured for one valid single-field filter submission.
