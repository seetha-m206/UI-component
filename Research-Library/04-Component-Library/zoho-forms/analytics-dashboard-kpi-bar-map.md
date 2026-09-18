---
component: "Analytics Dashboard (KPI Cards + Bar Chart + Region Map)"
ui_category: "Analytics/Reporting > Dashboard widget"
source_product: "Zoho Forms"
last_verified: "2026-09-16"
evidence_state: "source_reviewed"
status: "complete"
summary: "Form Metrics dashboard — five KPI cards, a hand-built daily bar chart, and a static-PNG world map with a region progress list; entirely custom-built (no charting library), server-filtered per period with no client-side caching."
---

# Component: Analytics Dashboard (KPI Cards + Bar Chart + Region Map)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form → Analytics/Reports → "Form Metrics" sub-tab (siblings: "Deep Insights", "Drop-off Count" — both partially gated behind "Advanced Metrics" in the tested account, not deep-dived this pass).

## Structure
- Period filter row: month dropdown (Jul–Dec…), year dropdown (2026), Monthly/Yearly toggle, manual refresh icon.
- Five KPI cards: **Form Views** (default-selected, highlighted), **Starts** (blurred/locked — Advanced Metrics), **Submissions** (with completion % relative to views), **Error Score** (validation-error rate %), **Conversion Rate** (submissions ÷ views %).
- Daily bar chart ("Form Views") — one bar per day of the selected month/year, y-axis 0–10 gridlines every 2 units, x-axis day-of-month.
- "Form Views – Desktop & Mobile" donut/ring chart — locked behind "Enable Advanced Metrics", not deep-dived this pass.
- "Form Views by Region" — static world-map image with fixed-position region labels (North America, South America, Africa, Europe, Asia, Oceania, "Others"), plus a parallel region list (count, percentage, horizontal progress-bar strip).
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS/network data pulled programmatically).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Month/Year dropdown | Select a different period | Triggers `GET .../zfa/data/pageview?viewby=month&month_year={Mon-YYYY}` | Full server round-trip; KPI cards, bar chart, and map/region data all replace with the new period's real values | Same screen, dashboard re-rendered with new data |
| Bar (`a#{day}`) | Hover | Shows a pre-rendered tooltip span for that day, toggled from `display:none` to visible | Tooltip reads "{Date} / {count} / Views"; the full-height column track behind the bar gets a light-gray highlight overlay | Same screen, no navigation |
| World map region | Hover | None — region labels and the map image are static, non-interactive | No tooltip, no highlight (flat raster PNG, not a data-driven choropleth) | N/A |

## Behavior & States
- Default state: current month/year selected, "Form Views" KPI card pre-selected/highlighted.
- Interactive/hover/focus state: bar hover shows tooltip + column highlight (see Actions); map has no hover state at all.
- Active/selected state: the currently-selected KPI card (Form Views) has a highlighted/blue background distinguishing it from the other four.
- Disabled/locked state: "Starts" KPI card and the Desktop/Mobile donut chart are blurred and gated behind "Enable Advanced Metrics" in the tested (non-upgraded) account — same blur+lock visual pattern already confirmed elsewhere in this product (see [[analytics-feature-gate]], [[upgrade-cta-button]]).
- Loading state: not separately captured this pass (no visible skeleton/spinner observed during period switches, but the exact in-flight visual wasn't isolated).
- Empty state: OBSERVATION, directly tested by switching to a zero-activity month (Aug 2026) — see below, dedicated section.
- Error state: not observed.

## Rules & Validation
- The bar chart's data source (`day` object in the API response) is a **sparse map** — only days with nonzero views are present as keys; the chart client-side fills in zero-height bars for every other day of the month. This is a notable client-responsibility split: the server sends sparse data, the client is responsible for the dense 1..N day grid.
- No responsive/reflow behavior: the dashboard wrapper (`#analyticsWrap`) holds a fixed ~1550px width with `overflow-x: hidden` on itself; narrower viewports crop/scroll rather than reflow or stack — confirmed by direct window resize.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-16), Claude browser extension session, ~70 actions across two passes (including a `fetch` hook installed to read live response bodies).

- **DOM:** Entirely hand-built HTML/CSS — **no `<canvas>` anywhere** (0 found) and no meaningful chart `<svg>` (131 `<svg>` elements on the page, all tiny icon glyphs like `.delete_icon`). This rules out Chart.js, Highcharts, and D3-SVG as the rendering mechanism.
  - KPI card: `a#entries.violetTabWrap` → `div.alalyticsDivWrapper` → `label`/`em`, inside `div#analyzeDiv.analizeTab` inside `div#formMetrics.analyFormMetrics`.
  - Bar chart: a literal `<table>` inside `div#monthChat.barGraphWrapper.anaTooltipCont.monthly30`. Y-axis labels live in `td.stepCountDiv` (`.anlyStepOne`…`.anlyStepFive`). Each day is a `<td>` (37px wide) containing an `<a id="{day}">` bar element — e.g. `a[id="15"]` had `style="height: 99.9px"` (inline pixel height, no class), `background-color: rgb(33, 81, 243)` from a static tag-selector rule, `border-radius: 4px 4px 0 0` for rounded tops.
  - Tooltip: `span.doubleGrphCountWrapper.analyticsGrapCount.analyticsGrapList` — one pre-rendered per bar, always present in the DOM with `display:none`, toggled visible on hover (not dynamically created/destroyed, not a tooltip library).
  - Map: `div#regionDiv.filterWrapper.mapWrapper` → `div.map.flLeft` → a plain `<img src="/forms/images/worldMap.<hash>.png">` — a static flat world PNG, not a choropleth/SVG map; every landmass is the same solid blue always, with no per-country data-driven coloring. Overlaid: `span.countWrapper.{region}` (e.g. `.asia`, `.nAmerica`) — absolutely-positioned labels at fixed coordinates per region, always visible (not hover-triggered).
  - Region list: `div.analyticsRegionProgress` → repeated `div.flLeft.regionProgressDiv` rows, each with `div.regionBarStrip` containing a width-percentage `<span>` as the fill.

- **JavaScript:** Not directly inspected for handler names this pass (unlike [[toggle-radio-switch]]'s captured inline `onchange`) — bar height and tooltip visibility toggling confirmed behaviorally (inline `style="height:...px"` set per bar, `display:none`→visible on hover) but the exact function names/event-binding mechanism were not isolated. Flagged for a second pass.

- **Network:** Fresh server request on every period change — confirmed by switching Sep → Aug and observing a brand-new request with the new `month_year` param:
  - `GET /{account}/form_id/{formId}/zfa/data/pageview?viewby=month&month_year=Sep-2026`
  - `GET /{account}/form_id/{formId}/zfa/data/pageview?viewby=month&month_year=Aug-2026`
  - This is **server-side filtering, not a client-side re-slice of pre-loaded data** — a different pattern from the toggle/settings components in this product, which defer all persistence to an explicit Save (see [[toggle-radio-switch]]); this dashboard instead fetches fresh on every read-only filter change.

- **Response:** (trimmed sample, structure only)
```json
{
  "analytics": {
    "desktop": 0,
    "mobile": 0,
    "std_count": 0,
    "error_score": "0.00",
    "total_pageviews": 5,
    "region": {
      "south_america": 0, "africa": 0, "north_america": 0,
      "oceania": 0, "asia": 5, "antarctica": 0, "europe": 0, "others": 0
    },
    "conversionrate": "20.0",
    "day": { "15": 3, "16": 2 },
    "total_entries": 1
  },
  "isAdvAnalyticsEnable": false,
  "formDispName": "Toggle Inspection Test"
}
```
  Note the sparse `day` object (keys only for days with nonzero views) — see Rules & Validation.

- **State change:** Each period selection fully replaces KPI/bar/map state from the new response; nothing is retained/merged from the prior period.

- **CSS:** Bar fill color comes from a static CSS rule keyed to the bare `<a>` tag inside `.barGraphWrapper` (`background-color: rgb(33, 81, 243)`), not an inline style and not a per-value class — only height is set inline per bar via JS. Region map labels (`.countWrapper.asia` etc.) are positioned via fixed CSS `top`/`left` per region class, not computed from data. Region progress-bar fill width is set inline as a percentage matching the displayed value.

- **Animation/transition:** None on data load-in. The bar `<a>` elements have `transition: all` but `transition-duration: 0s` — heights render immediately with no "grow" animation. KPI numbers are plain text content in one paint, no count-up animation (JS-driven or otherwise).

## Empty State (dedicated — directly tested)
> OBSERVATION, 2026-09-16, tested by switching to a zero-activity period (Aug 2026).
- KPI cards: plain zero values (Form Views: 0, Submissions: 0 (0%), Conversion Rate: 0.0%) — no special empty styling, just literal zeros.
- Bar chart: **entirely replaced** — the `<table>` chart markup is swapped out for an illustrated placeholder (a small pastel 3-bar icon with a magnifying glass) plus the text "No data available." This is a full markup swap, not an all-zero-height chart render.
- Map: no special empty state — same static world-map PNG; region labels and the region list simply show "0" and "(0.0%)" with empty progress-bar strips.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Typeform (see [[typeform-analytics-dashboard]]) | Results/Analytics dashboard — KPI tiles + per-question charts | Real SVG charting library (**visx**, Airbnb's React+D3 primitives) with computed axis ticks/scales, not hand-built markup; date-range filter re-derives from client-side data with no server round-trip observed (small dataset); no load-in animation, confirmed via DOM polling | No geographic/region breakdown view to compare against Zoho's region map; on the free plan, its own drop-off funnel is a static placeholder-data teaser rather than a live chart — a different, but comparably "fake data for gated users," weak spot |

## Best Observed Approach
- **RECOMMENDATION:** Typeform is the stronger charting implementation — a real SVG library (visx) with computed scales/axes vs. Zoho's hand-built literal `<table>` bar chart (see this record's own Technical Data above and [[typeform-analytics-dashboard]]'s DOM/visx findings). This judgment is scoped specifically to the bar-chart/rendering-technology comparison. Zoho's static raster world map remains a separate, still-valid weak point regardless of this finding: zero per-region visual encoding (every landmass rendered identically regardless of its actual share of traffic) is a notably weaker choropleth-map implementation than a typical data-driven SVG/GeoJSON map — the region *list* carries all the real information, the map image is purely decorative. (Typeform's dashboard has no equivalent geographic view to compare against on this specific point.)

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Form → Analytics/Reports → Form Metrics, via Claude browser extension, 2026-09-16 (~70 actions across two passes, including a `fetch`-hook interception to read live response bodies since a manual replay `fetch` returned HTML — likely a missing header/referer/XSRF-token requirement on a bare relative request). DOM/CSS/network data retrieved programmatically through the page's own JS context.
- Note: the exact JS handler names/event-binding mechanism for bar-height rendering and tooltip toggling were not isolated this pass (unlike other components in this product where inline `onchange`/handler names were directly captured) — flagged as a second-pass item, along with the "Deep Insights" and "Drop-off Count" sub-tabs and the Advanced-Metrics-gated Desktop/Mobile donut chart, none of which were deep-dived.
