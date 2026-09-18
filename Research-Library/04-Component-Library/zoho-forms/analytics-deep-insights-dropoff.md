---
component: "Analytics Deep Insights & Drop-off Count (Field/Page Metrics)"
ui_category: "Analytics/Reporting > Dashboard widget"
source_product: "Zoho Forms"
last_verified: "2026-09-17"
evidence_state: "source_reviewed"
---

# Component: Analytics Deep Insights & Drop-off Count (Field/Page Metrics)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

Filed as a new record rather than folded into [[analytics-dashboard-kpi-bar-map]]: the underlying mechanism turned out to be a different (though philosophically similar) hand-built implementation, not the same one. Cross-linked to [[analytics-dashboard-kpi-bar-map]] (Form Metrics dashboard) and [[analytics-feature-gate]] (the gate itself).

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form → Analytics/Reports → "Deep Insights" tab (Field Metrics / Page Metrics sub-tabs) and "Drop-off Count" tab — siblings of the already-documented "Form Metrics" tab ([[analytics-dashboard-kpi-bar-map]]), all gated behind the same "Enable Advanced Metrics" toggle ([[analytics-feature-gate]]).

## Structure
- **Gate re-confirmation:** per [[analytics-feature-gate]]'s prior finding, clicking "Enable Advanced Metrics" opened a plain confirmation dialog — *"Enabling this will start collecting advanced metrics for this form. Data will be collected from this point forward."* — with Cancel/Enable buttons and no mention of price, plan, or upgrade anywhere. Confirmed: still a free opt-in toggle in this account, not a paywall.
  > ⚠️ **This toggle is left enabled going forward** — an additive, no-cost account setting change, not a per-test config to restore, consistent with how the Smart Scan investigation ([[smart-scan-ai-field]]) left AI Assistant enabled after approval.
  - Connective finding: this single toggle gates more than Deep Insights/Drop-off Count — it's the same switch that unlocks the blurred "Starts" KPI tile on the Form Metrics dashboard. Before enabling, "Starts" was blurred with a lock icon there too; after enabling, it read a real (if zero) value. One flag, multiple gated surfaces.
- **Deep Insights → Field Metrics:** a two-column-data table (Fields / Clicks / Starts, each header with an ⓘ tooltip) listing every field on the form (Single Line, Decision Box, Dropdown, Rating, File Upload, Yes/No, Subform — 7 rows, matching the form's current field set). A live search box (top-right) filters the row list by field name. All values currently read 0, since the toggle only enables collection "from this point forward" — no retroactive backfill despite the form already having 17 views.
- **Field Metrics vs. Page Metrics:** Field Metrics breaks engagement down per field (Clicks = interactions with that field, Starts = respondents who began filling it). Page Metrics breaks it down per form page (Pages / Page Views columns) — this form is single-page, so Page Metrics currently shows "No data available." rather than a per-field list; it's built for multi-page/multi-step forms.
- **Drop-off Count:** not a funnel visualization — it's the same flat field-list format as Field Metrics, titled "Drop-off Count: Form Fields," with a Fields/Drop-offs table (own search box too). Hovering the "DROP-OFFS" header ⓘ reveals the precise definition: *"Total Count Of Respondents Who Started Filling Up The Field But Exited Without Submitting The Form."* Rows are pink/red-tinted (vs. Field Metrics' neutral grey), a color cue for attrition. All fields currently show 0 drop-offs (no abandonments since the toggle was enabled).
- All three sub-views share the same top-right Sep/2026 month-year selector and refresh icon seen on Form Metrics — switching months re-queries each view independently.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Enable Advanced Metrics" | Click, confirm | `POST .../zfa/switchadv?type=2` | Unlocks Deep Insights, Drop-off Count, and the Form Metrics "Starts" KPI tile — one toggle, multiple surfaces | Same screen |
| Search box (any sub-view) | Type a field name | Client-side filter | Live-filters the row list; short debounce (~1–2s before results narrow) | Same screen |
| Month/Year selector | Select a different period | `GET .../zfa/data/{field_metrics\|pageview\|drop_off}?viewby=month&month_year={Mon-YYYY}` | Full server round-trip; the active sub-view's table re-renders with the new period's real values | Same screen |

## Behavior & States
- Default state: current month/year selected; all values read 0 immediately after enabling (collection starts "from this point forward," no retroactive backfill).
- Search: client-side filtering of already-fetched data, no new network request accompanies a search — confirmed via network capture.
- Empty state (Page Metrics on a single-page form): "No data available." — a different empty-state message from the illustrated placeholder used on Form Metrics' bar chart and the Kanban board's empty columns.

## Rules & Validation
- Collection is forward-only from the moment the toggle is enabled — no historical backfill, even though the form already had 17 prior views before the toggle was switched on.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-17), Claude browser extension session (33 actions).

- **DOM — a different pattern from the Form Metrics dashboard:** Not the literal `<table>`-based bar chart used by [[analytics-dashboard-kpi-bar-map]]. Deep Insights and Drop-off Count both use a div-based row/bar pattern instead:
```html
div.analyticsTableView
  div.witdh30/witdh50  <!-- icon + field name -->
  div.witdh30/witdh50
    div.anaFocusCountBar[.anaStartedCountBar | .anaDropCountBar]
      b.selectedCount[style="width: N%"]   <!-- percentage-width bar fill -->
      em.countVal                          <!-- the number rendered -->
      span.doubleGrphCountWrapper[display:none]  <!-- hidden hover-tooltip content -->
```
  The percentage-width `<b>` bar confirms these numbers are meant to render as inline horizontal bars (a genuine div-based bar visualization), not just plain numbers — currently invisible at 0%, but the mechanism is real (leftover demo-state rows were found in the DOM, hidden but not yet cleaned up, still carrying nonzero widths like 23%/21% from the pre-unlock blurred/locked preview state).
  Drop-off Count reuses the identical `.analyticsTableView`/`.anaFocusCountBar` component (just the `.anaDropCountBar` modifier class and a `dropoff` type flag), and both Field Metrics and Drop-off Count hover-tooltips are driven by one shared JS function: `onmouseover="showToolTipForFieldMetrics(this, dropoffCount, totalCount, 'dropoff')"`.
  **Conclusion:** one shared hand-built component powers Field Metrics + Drop-off Count (and likely Page Metrics), but it is a **separate, distinct implementation** from the Form Metrics KPI dashboard's `<table>`-based bar chart — both are hand-rolled with no charting library, but they're two different hand-rolled systems, not one shared across all of Analytics.

- **Network — three distinct endpoints, separate from the toggle and from Form Metrics:**
```
POST .../zfa/switchadv?type=2                                    → 200   (one-time: the enable toggle)
GET  .../zfa/data/field_metrics?viewby=month&month_year=Sep-2026 → 200   (Field Metrics)
GET  .../zfa/data/pageview?viewby=month&month_year=Sep-2026      → 200   (Page Metrics)
GET  .../zfa/data/drop_off?viewby=month&month_year=Sep-2026      → 200   (Drop-off Count)
```
  All under a shared `zfa/data/` namespace ("zfa" almost certainly = Zoho Forms Analytics), each independently addressable and re-fetchable — confirmed by re-firing `field_metrics` with `month_year=Aug-2026` after changing the month dropdown, which returned its own fresh 200. Each of the three sub-views is a real server round-trip, not a client-side split of one shared payload — switching tabs (Field Metrics ↔ Page Metrics ↔ Drop-off Count) fires its own distinct request rather than reusing cached data from another tab.

## Cross-Component Pattern Note
- **OBSERVATION:** Zoho Forms' Analytics section now has two confirmed, independently hand-built chart/table systems (this record's div-based percentage-bar pattern, and [[analytics-dashboard-kpi-bar-map]]'s literal `<table>`-based bar chart) — both custom-built with no charting library, but not one shared implementation across the whole section, contrary to what a single "Advanced Metrics" toggle name might suggest.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent per-field engagement/drop-off analytics captured before a comparative judgment can be made.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Form → Analytics/Reports → Deep Insights (Field Metrics, Page Metrics) and Drop-off Count, via Claude browser extension, 2026-09-17 (33 actions). DOM/CSS/network data retrieved programmatically through the page's own JS context.
- Note on account state: the "Enable Advanced Metrics" toggle is left enabled going forward — see the callout in Structure above.
