# Analytics Deep Insights & Drop-off Count (Field/Page Metrics) — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/analytics-deep-insights-dropoff.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`analytics-dashboard-kpi-bar-map/` — the closest analog, since both are
screen-level, read-mostly analytics surfaces gated behind the same "Enable
Advanced Metrics" toggle and take a data-shaped prop rather than a scalar
`value`/`onChange` pair. This component adds one structural feature the KPI
dashboard doesn't have: a three-way tab switch (Field Metrics / Page
Metrics / Drop-off Count) with a live client-side search box per tab.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as every other
   reconstructed preview in this repo.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for this component:
   - **A genuinely different bar architecture from the Form Metrics
     dashboard.** The record is explicit that this is "not the literal
     `<table>`-based bar chart used by analytics-dashboard-kpi-bar-map" —
     Deep Insights and Drop-off Count instead use a div-based row/bar
     pattern: `div.analyticsTableView` → `.witdh30`/`.witdh50` (icon + name)
     → `div.anaFocusCountBar[.anaStartedCountBar | .anaDropCountBar]` →
     `b.selectedCount[style="width: N%"]` (the percentage-width fill) +
     `em.countVal` (the number). `AnalyticsDeepInsightsDropoff` reproduces
     that exact shape: a `<div>` track with a `<div>` fill sized via an
     inline `width: N%` style, plus the value rendered as text beside it —
     genuinely different markup from the KPI dashboard's `<table>`/`<td>`
     structure, not a relabeled copy of it. The `MetricBar` sub-component's
     doc comment calls this distinction out explicitly, per the task's
     instruction to confirm it in this README.
   - **One shared component powers Field Metrics + Drop-off Count.** The
     record concludes "one shared hand-built component powers Field Metrics
     - Drop-off Count (and likely Page Metrics)," evidenced by both sharing
       the identical `.analyticsTableView`/`.anaFocusCountBar` DOM and the
       same tooltip function (`showToolTipForFieldMetrics`). This
       reconstruction mirrors that by having all three tabs render through
       the same internal row/`MetricBar` markup, varying only which metric
       column(s) and tone are shown.
   - **Drop-off Count's pink/red row tint.** The record's Structure section
     notes "Rows are pink/red-tinted (vs. Field Metrics' neutral grey), a
     color cue for attrition." Reproduced via `.dropoffRow` (a light
     `rgba(220, 38, 38, ...)` wash using this site's `--color-danger`
     token) and a `--color-danger` bar fill, vs. `--color-primary`/
     `--color-info` for Field Metrics' Clicks/Starts bars — reusing this
     site's existing design tokens (`src/styles/variables.css`) rather than
     inventing new hex values, per the task's instruction.
   - **Exact Drop-off tooltip copy.** The record captures the literal
     hover-tooltip definition for the DROP-OFFS header: _"Total Count Of
     Respondents Who Started Filling Up The Field But Exited Without
     Submitting The Form."_ — reproduced verbatim in `InfoTooltip`'s
     `text` prop for that column. The Clicks/Starts header tooltip copy was
     **not** captured verbatim in the record (only that "each header with
     an ⓘ tooltip" exists) — those two strings are this reconstruction's
     own reasonable paraphrase, not a verified quote (flagged below too).
   - **Page Metrics' single-page empty state.** The record: "this form is
     single-page, so Page Metrics currently shows 'No data available.'
     rather than a per-field list." `effectiveSinglePage` reproduces that
     exact swap (full markup replacement, not an empty row list), and the
     search box is hidden along with it, since there's nothing to search.
   - **Forward-only collection, no backfill.** The record notes all values
     read 0 immediately after the gate is enabled, "even though the form
     already had 17 prior views." The `freshly-enabled-zeros` fixture
     reproduces that exact state — nonzero historical activity existed, but
     every metric still reads 0, with bars rendering at 0% width (not
     hidden), matching the KPI dashboard's own leftover-demo-row precedent
     of a real, if invisible, 0% bar rather than an omitted row.
   - **Search is client-side, no request fired.** The record's Behavior &
     States section: "client-side filtering of already-fetched data, no new
     network request accompanies a search — confirmed via network
     capture." Implemented here as instant `Array.filter` against the
     already-passed `fields`/`pages` props — no debounce timer, per the
     task's explicit instruction that a debounce feel can be skipped.
   - **Bar-fill percentage basis.** The record confirms bar widths are
     driven by an inline `width: N%` style but doesn't capture the exact
     server-side normalization formula behind that percentage. This
     reconstruction normalizes each metric column independently against
     the maximum value _in that column, across all rows_ (`maxOf` /
     `barWidth`) — a reasonable, undocumented assumption, flagged below.
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record; the Structure and Actions tables were used to confirm
   tab labels, column headers, and search-box placement.
4. **Assumptions, clearly flagged**:
   - **Per-row field icon.** The record confirms an icon renders before
     each field name but doesn't capture which glyph set is used per field
     type (Single Line, Decision Box, Dropdown, Rating, File Upload,
     Yes/No, Subform). Rather than inventing seven distinct icons, every
     row uses one neutral generic glyph (`FieldIcon`) — an intentional
     simplification, not a guess at Zoho's real icon set.
   - **Clicks/Starts header tooltip copy** (see above) — a reasonable
     paraphrase, not a captured string (only the Drop-offs tooltip text was
     directly quoted in the record).
   - **Bar-fill normalization basis** (see above) — the record confirms the
     mechanism (`width: N%`) but not the percentage's denominator; per-column
     max-of-visible-rows is this reconstruction's own reasonable choice.
   - **"No fields/pages match" empty search state.** Not documented in the
     record at all (the tested account never had a search return zero
     results) — this reconstruction adds one so the search box doesn't
     silently render nothing; a conventional, low-risk addition.
   - **Tab keyboard navigation (ArrowLeft/ArrowRight).** Not part of the
     record's Actions table (only click-driven tab switching was
     documented) — added here as a standard `role="tablist"` accessibility
     pattern, not a captured Zoho behavior.
   - **Responsive/breakpoint behavior** was not observed in the record ("not
     deep-dived this pass" is noted for the sibling Month/Year filter row
     context on the Form Metrics dashboard, and no reflow testing is
     recorded here either). Stacking the row grid to one column at narrow
     container widths is a deliberate improvement for this docs site's
     preview stage, not an observed Zoho breakpoint — the same posture
     `analytics-dashboard-kpi-bar-map` takes for its own responsive CSS.

## Deliberate scoping decision: no live period refetch

The record documents three distinct, real server round-trips — one per
sub-view — fired on every month/year change:

```
GET .../zfa/data/field_metrics?viewby=month&month_year=Sep-2026
GET .../zfa/data/pageview?viewby=month&month_year=Sep-2026
GET .../zfa/data/drop_off?viewby=month&month_year=Sep-2026
```

Per the task's explicit instruction, the period selector in this
reconstruction is rendered (it's a real, documented, shared piece of UI
across all three sub-views) but is **not wired to any live refetch** —
there is no backend behind this static-props preview to refetch from. The
prev/next buttons call an optional `onPeriodChange('prev' | 'next')`
callback and nothing else; `periodLabel` itself never changes on its own.
Different periods are demonstrated by selecting a different **fixture**
instead (e.g. `populated` is "Sep 2026", `high-attrition` is "Oct 2026"),
exactly the same scoping choice `analytics-dashboard-kpi-bar-map` makes for
its own (in that case, entirely absent) period control. This is a scoping
choice for the preview context, not a claim that the real product has no
period-switching behavior.

## What NOT built (deliberately out of scope)

- **The month/year selector's real data-refetch behavior** — see above.
- **Any donut/pie chart.** The task and the record both note this is a
  different, sibling surface (the Desktop/Mobile donut gated alongside the
  Form Metrics "Starts" KPI tile, documented in
  `analytics-dashboard-kpi-bar-map`'s record, not this one) — out of scope
  here entirely.
- **The "Enable Advanced Metrics" gate/confirmation dialog itself** — a
  separate, already-documented component
  (`Research-Library/04-Component-Library/zoho-forms/analytics-feature-gate.md`,
  reconstructed at `src/previews/analytics-feature-gate/`). This component
  assumes the gate is already enabled, matching how Deep Insights/Drop-off
  Count are only reachable in that state.

## Other deviations from what was actually observed

- Zoho's generated class names/attributes (`witdh30`/`witdh50` [sic],
  `anaFocusCountBar`, `anaStartedCountBar`, `anaDropCountBar`,
  `selectedCount`, `countVal`, `doubleGrphCountWrapper`) are replaced with
  scoped CSS Module classes and plain React props/state. None of Zoho's
  original CSS or markup is reused verbatim.
- The record describes the hover tooltip content span
  (`span.doubleGrphCountWrapper[display:none]`) as always present in the
  DOM and toggled visible per hover — this reconstruction instead
  conditionally renders each column-header tooltip only while its ⓘ icon is
  hovered/focused (a normal React pattern), the same presentation-only
  deviation `analytics-dashboard-kpi-bar-map` makes for its own bar
  tooltip. The header ⓘ icon is a real `<button>`, opening the tooltip on
  `onMouseEnter`/`onMouseLeave` **and** `onFocus`/`onBlur`, per this
  library's hard rule that hover-triggered UI must also work via keyboard
  focus — the source record only documents a hover interaction.
- **No network calls.** As with every other reconstruction in this repo,
  this is a static docs preview taking `fields`/`pages` as props, not a
  live integration — there is no `field_metrics`/`pageview`/`drop_off`
  fetch of any kind, even though the real product fires one per sub-view
  per period change (see the scoping section above).
- The gate re-confirmation dialog, the connective "one flag unlocks
  multiple surfaces" finding, and the exact debounce timing mentioned in
  the record's Actions table ("~1–2s before results narrow") are all
  intentionally not reproduced — filtering here is instant, since the task
  explicitly permits skipping the debounce feel.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source, and
not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
