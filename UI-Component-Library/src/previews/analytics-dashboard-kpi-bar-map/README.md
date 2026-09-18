# Analytics Dashboard (KPI Cards + Bar Chart + Region Map) — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/analytics-dashboard-kpi-bar-map.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`rating-star-field/` and `yes-no-toggle-field/`, adapted for a screen-level
read-mostly dashboard instead of a single form field: no `value`/`onChange`
pair, no required/disabled validation concept, and a `data`-shaped prop
instead of scalar props.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — **not available**, same as every
   other reconstructed preview in this product so far.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for this component:
   - **No charting library at all.** The record confirms 0 `<canvas>`
     elements and no meaningful chart `<svg>` (only 131 tiny icon glyphs) —
     ruling out Chart.js/Highcharts/D3-SVG. The bar chart is a **literal
     `<table>`** (`div#monthChat.barGraphWrapper` → `<table>` → one `<td>`
     per day containing an `<a id="{day}">` bar with an _inline pixel_
     `height` and a static tag-selector `background-color: rgb(33, 81,
243)`). This reconstruction reproduces that exact architecture: a real
     `<table>`, one cell per day, a bar element sized via an inline `height`
     style, and the same `rgb(33, 81, 243)` fill color.
   - **Sparse day-data, client-filled to a dense grid.** The record's
     captured response shows `"day": {"15": 3, "16": 2}` — only days with
     nonzero views are present as keys — with the Rules & Validation section
     explicitly calling out that the client is responsible for filling in
     the zero-height bars for every other day. `AnalyticsDashboardKpiBarMap`
     takes the same sparse shape (`data.days: {day, count}[]`) and builds
     the dense `1..daysInPeriod` grid internally (`buildDenseDays`),
     reproducing that documented client-responsibility split rather than
     asking fixtures to pre-fill every day.
   - **No load-in animation.** The record notes `transition: all` is present
     on the bar `<a>` elements but `transition-duration: 0s` — heights
     render immediately, no "grow" animation. `.bar` in the CSS module sets
     `transition: none` accordingly.
   - **Tooltip is pre-rendered, not created/destroyed.** The record
     describes `span.doubleGrphCountWrapper` as always present in the DOM
     with `display:none`, toggled visible on hover per bar. This
     reconstruction instead conditionally renders the tooltip `<span>` only
     for the active day (a normal React pattern), rather than always
     mounting one hidden span per day — a presentation-only deviation, not a
     behavioral one: the tooltip still reads `"{periodLabel} {day} / {count}
/ Views"` per the record's documented format, and still opens/closes
     per-bar on hover.
   - **KPI card gating.** The "Starts" card's blur+lock treatment reflects
     the record's Behavior & States note that Starts (and the Desktop/Mobile
     donut, not reconstructed here) are gated behind "Enable Advanced
     Metrics" in the tested account.
   - **Region list vs. map.** `div.analyticsRegionProgress` →
     `div.regionProgressDiv` rows with a `div.regionBarStrip` width-percentage
     fill are reproduced as `.regionList`/`.regionBarStrip`. The map image
     itself (`img[src="/forms/images/worldMap.<hash>.png"]`) is **not**
     reproduced — see the dedicated scoping section below.
   - **Empty state.** The record's dedicated "Empty State" section
     (zero-activity Aug 2026 test) documents a **full markup swap**: the
     `<table>` chart is replaced by an illustrated placeholder + "No data
     available" text, not an all-zero-height render. `effectiveEmpty` in
     `AnalyticsDashboardKpiBarMap.tsx` reproduces that swap.
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record ("Screenshot: not captured this pass"); the Structure
   and Actions tables were used to confirm layout/labeling instead.
4. **Assumptions, clearly flagged**:
   - **Responsive/reflow behavior.** The record explicitly states the real
     dashboard has **no** reflow at all — a fixed ~1550px wrapper
     (`#analyticsWrap`) with `overflow-x: hidden`, confirmed by direct
     resize testing. This reconstruction deliberately **deviates**: KPI
     cards wrap and the region layout stacks at narrow container widths
     (`@container (max-width: 640px)` in the CSS module), because a fixed
     1550px non-reflowing layout would be unusable in this docs site's
     preview stage at the required 768px/375px viewports. This is a
     documented UX improvement for the preview context, not a claim about
     the real product's behavior.
   - **Exact JS handler names/event-binding mechanism for bar rendering and
     tooltip toggling were not isolated** in the source record (flagged
     there as a second-pass item) — only the resulting DOM behavior (inline
     `height`, `display:none` → visible) was confirmed, and that's what's
     reproduced here.
   - **Loading state** was not captured in the source record ("no visible
     skeleton/spinner observed... exact in-flight visual wasn't isolated")
     — this reconstruction has no loading state at all, since it takes
     static data as props (see "No network calls" below) rather than
     fetching.
   - **Y-axis scale.** The record documents a fixed "0–10, gridlines every 2
     units" axis. `computeAxisMax` keeps that 5-gridline shape but scales
     the max up to the next even number when a fixture's data exceeds 10
     (see the `high-volume` fixture), so larger synthetic values don't clip
     — the real dashboard's exact behavior above 10 views/day wasn't
     captured in the record.

## Deliberate scoping decision: the region map is NOT reconstructed

This is the most important scoping call in this component, made explicitly
per the task instructions rather than discovered as a gap:

The record's Technical Data and "Best Observed Approach" sections both
confirm the "Form Views by Region" map is a **static, flat, non-interactive
raster PNG** (`img[src="/forms/images/worldMap.<hash>.png"]`) with
absolutely-positioned label overlays at **fixed** coordinates per region —
**not** a choropleth, **not** SVG/GeoJSON, and **not** colored or shaded
based on the actual data in any way ("every landmass is the same solid blue
always"). The record is explicit that hovering a region on the map does
nothing (no tooltip, no highlight), and that **all real regional
information lives in the parallel `div.analyticsRegionProgress` list**
(count, percentage, progress-bar strip per region) — the map image itself
carries zero data.

Given that, recreating the literal world-map PNG would mean drawing a
decorative image that encodes no information, at real cost (an actual
SVG/GeoJSON map, or a copy of Zoho's raster asset) for zero reconstruction
value. Instead, `AnalyticsDashboardKpiBarMap` renders:

```
Region map (static image in the real product — not reconstructed, see README)
```

as a small labeled placeholder box (`.mapPlaceholder`, exposed with
`role="img"` and that exact string as its `aria-label` so it's still
announced sensibly to assistive tech), positioned where the map would sit,
directly beside the fully-reconstructed region progress-bar list — which
_is_ faithfully rebuilt, since it's the part of this section that actually
carries data. This is honest scoping of a documented finding, not an
oversight or a placeholder left in by mistake.

## Other deviations from what was actually observed

- Zoho's generated class names/IDs (`alalyticsDivWrapper` [sic],
  `#monthChat`, `.stepCountDiv`, `.regionProgressDiv`, etc.) are replaced
  with scoped CSS Module classes and plain React props/semantic HTML. None
  of Zoho's CSS or markup is reused verbatim.
- Each day's bar is a `<button type="button">`, not the source's bare
  `<a id="{day}">` with no visible `href` navigation — consistent with this
  library's existing precedent (e.g. `rating-star-field` swapping
  `<a href="javascript:;">` for `<button>`) of using a real interactive
  element for something that behaves like a control, not a link. This also
  makes the bar keyboard-focusable by default and lets the tooltip open on
  `:focus`/`:blur` as well as hover/mouse-leave, per the task's hard rule
  that hover-triggered UI must also be keyboard-focus-triggerable — the
  source record only documents a hover interaction, not a keyboard one.
- **No network calls.** The record documents the real dashboard fetching
  fresh data from `GET .../zfa/data/pageview?viewby=month&month_year=...`
  on every period change (server-side filtering, not client-side re-slicing
  of pre-loaded data). This reconstruction is a static docs preview, not a
  live integration: it takes a `data` prop instead of fetching, and there is
  no period-switching UI in this component at all (no month/year dropdowns,
  no refresh icon) — fixtures stand in for different periods instead. This
  is a scoping choice for the preview context, not a claim that the real
  product works this way.
- The Month/Year filter row, the "Deep Insights"/"Drop-off Count" sibling
  tabs, and the Advanced-Metrics-gated Desktop/Mobile donut chart are all
  explicitly out of scope — the record itself says none of these were
  deep-dived ("not deep-dived this pass").

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source, and
not guaranteed to match current production behavior — see the in-app notice
on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
