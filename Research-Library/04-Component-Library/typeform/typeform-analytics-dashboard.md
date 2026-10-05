---
component: "Results / Analytics Dashboard"
ui_category: "Analytics/Reporting > Dashboard widget"
source_product: "Typeform"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
---

# Component: Results / Analytics Dashboard

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[analytics-dashboard-kpi-bar-map]]:** this record is the Typeform-side counterpart to Zoho Forms' Analytics Dashboard (KPI Cards + Bar Chart + Region Map), closing the "Results/Analytics dashboard" item that had been flagged as written-but-not-run in `02-Competitor-Products/marketing-automation/typeform.md`. See Competitor Comparisons below for the direct side-by-side, and [[analytics-dashboard-kpi-bar-map]]'s own Competitor Comparisons table for the reverse direction.

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** Form builder → Results tab. Tested on a free-plan account, on a form with 8 views / 5 starts / 2 submissions.

## Structure
The Results area has **4 tabs**: **Smart Insights** (AI summary, paid), **Form performance**, **Response summary**, and **Responses** (raw list).

**Form performance tab:**
- "At a glance" — 5 KPI tiles: Views, Starts, Submissions, Completion rate, Time to complete.
- "See where users drop off" — a dedicated drop-off funnel view exists. On the free plan it renders as a **static two-card teaser** (Welcome screen → arrow with "Drop-off: -1174 (98%)" → next question) using fixed placeholder numbers (1195 views, 21 views) that don't match the account's real data — marketing chrome, not a live chart. Gated behind Business/Business Pro/Talent/Growth plans via an "Upgrade plan" button.

**Response summary tab (question-by-question):**
- Text questions: individual response cards (quote icon + respondent name/answer + relative timestamp), with search and a sort control.
- Choice questions (Yes/No, multiple choice): a bar chart plus three view-toggle icons — Table (literal `<table>` of Choices/Responses/Percentages), Horizontal chart, Vertical chart (bar chart, the default).
- Numeric/rating/opinion-scale questions: 3 summary-stat tiles (Mean, Median, Standard deviation) above a histogram bar chart across the scale's values.
- Every question block also has an Overview vs Trends toggle; Trends is paywalled ("Unlock trends — available on paid plans").
- Global controls above all questions: count (#) vs percentage (%) toggle, date range, Filters, sort direction, and a color/theme picker icon.
- A recurring "diamond" badge marks paywalled features throughout (next to Smart Insights, the drop-off panel, Trends).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Date-range control ("All time") | Click | Opens calendar picker | Presets (All time / Today / Last week / Last month / Last year) plus a click-to-pick calendar grid | Same screen, picker open |
| Apply a date range (e.g. "Last week") | Select | Client-side re-filter — no new request to any Typeform results/stats API observed | KPI tiles re-render instantly from already-resident client-side data (Views/Starts/Submissions/Completion rate/Time to complete unchanged at 8/5/2/40%/00:16, since all activity fell inside the window); only generic telemetry (Segment `v1/t`, `v1/m`, a cached avatar `data:` URL) fires | Same screen |
| Table / Horizontal / Vertical view-toggle icons (choice questions) | Click | Not independently network-traced this session — presumed client-side re-render | Chart display switches between table, horizontal bar, and vertical bar views | Same screen |
| Overview / Trends toggle (per question) | Click | Trends is paywalled | Shows "Unlock trends — available on paid plans" | Same screen |
| "Upgrade plan" button (drop-off panel) | — | Not exercised this session | — | Not observed |

## Behavior & States
- **Free-plan gating:** a diamond badge marks paywalled features — the Smart Insights tab, the drop-off funnel panel, and each question's Trends toggle.
- **Drop-off funnel (free plan):** a static two-card teaser with fixed placeholder numbers (1195 views, 21 views) that don't match the real account's data (8 views / 5 starts / 2 submissions) — marketing chrome, not a live chart. Gated behind Business/Business Pro/Talent/Growth plans.
- **KPI tile load-in:** renders at final value immediately — no count-up animation, confirmed via DOM polling (see Technical Data).
- **Bar chart load-in:** renders at final height immediately — no grow-in animation, confirmed via DOM polling (see Technical Data).

## Rules & Validation
- Tested account: free plan, form with 8 views / 5 starts / 2 submissions.
- The date-range filter re-derives KPI numbers from data already resident client-side rather than re-querying the backend per filter change, at least for this dataset size. **Caveat:** this account's free plan and 2-response form may keep the whole dataset small enough to prefetch once; a high-volume account could behave differently, but no evidence of that was observed here.

## Technical Data
> OBSERVATION, captured via a fetch/XHR interceptor plus DOM polling, live exploration session, 2026-09-18, free-plan account, form with 8 views / 5 starts / 2 submissions.

- **DOM / charting library — standout finding:** `document.querySelectorAll('canvas')` on the results page returns **0**. The bar charts are SVG, and the SVG elements carry **visx** class names: `g.visx-group`, `g.visx-group.visx-axis.visx-axis-bottom`, `g.visx-group.visx-axis-tick`, `rect.visx-bar`. Example bar node: `<rect class="visx-bar" x="536" y="110" width="357.45" height="112" fill="#a665bd" />`. visx is Airbnb's low-level React+D3 SVG primitives library (not a batteries-included chart library like Chart.js/Highcharts/Recharts) — Typeform composed its own bar/axis components on top of it. This is the opposite end of the spectrum from Zoho's literal `<table>`-based bars (see [[analytics-dashboard-kpi-bar-map]]): real SVG geometry, computed axis ticks, proper scales.

- **Network — initial load of `/form/{id}/results`** (before any test response existed):

| Request | Method | Status |
|---|---|---|
| `api.typeform.com/.../features/availability?feature_id=question-insights` | GET | 200 |
| `api.typeform.com/.../feature-set` | GET | 200 |
| `api.segment.io/v1/t` | POST | 200 |
| `browser-intake-datadoghq.com/api/v2/rum` (Datadog RUM) | POST | 202 |
| `e.clarity.ms/collect` (Microsoft Clarity) | POST | 204 |
| `public-assets.typeform.com/insights/600.[hash].insights.js` | GET | 200 |
| `data:image/jpeg;base64,...` (cached account-avatar) | GET | 200 |
| `admin.typeform.com/gtag/GTM-.../ga/g/c` (GA4 via GTM) | POST | 204 |

  Notably, **no distinct "fetch results data" XHR/fetch call was captured** even on a fresh load — the actual submissions/answers payload likely arrives via an early request issued before the network listener attaches (SSR/prefetch), or over a mechanism the tool's listener missed pre-navigation. The date-filter interaction fired **no additional Typeform API calls at all** — only the same analytics/telemetry beacons.

- **CSS / Animation — polling-test finding:** the DOM was polled at 80–100ms intervals immediately after each fresh page load to check for a count-up or bar-growth entrance animation.
  - KPI tiles: the "Views" value was already "8" (its final value) at the very first poll (t=252ms) and stayed "8" for the next 4 seconds — no counting-up animation.
  - Bar chart: `.visx-bar` height attributes were already at their final values (`[2, 112, 2, 112, 2, 2]`) at the first poll (t=81ms) and never changed over 1.6+ seconds — no grow-in animation.

  Both render at full value immediately; no load-in motion design was observed on this dashboard (at least not on a 2-response form — not tested at scale).

## Competitor Comparisons
| Aspect | Typeform (this record) | Zoho Forms (see [[analytics-dashboard-kpi-bar-map]]) |
|---|---|---|
| Charting implementation | Real SVG charting via **visx** (Airbnb's React+D3 primitives) — computed axis ticks, proper scales, `rect.visx-bar` elements | Entirely hand-built — zero `<canvas>`, no meaningful chart SVG; the bar chart is a literal `<table>` with inline `style="height:...px"` per `<a>` bar |
| Load-in animation | None — KPI tiles and bars render at final value/height at the very first DOM poll (confirmed via 80–100ms polling) | None — bar `<a>` elements declare `transition: all` but `transition-duration: 0s`; KPI numbers render in one paint, no count-up |
| Date-range filter behavior | Client-side re-filter — no new Typeform results/stats API request fired on filter change (small 2-response dataset; caveat re: scale) | Server-side re-fetch — a fresh `GET .../zfa/data/pageview?viewby=month&month_year=...` fires on every period change |
| Paywall/gating pattern | Diamond badge marks paywalled features (Smart Insights, drop-off funnel, Trends); drop-off funnel shows a static placeholder-data teaser on the free plan | Blur+lock overlay gates Deep Insights/Drop-off Count/Starts KPI — an ambiguous visual pattern between "free opt-in toggle" and "paid upgrade" (see [[analytics-feature-gate]]) |

> **See also [[jotform-tables-inline-edit-and-views]]** — JotForm's own results-review surface, confirmed 2026-10-05: structurally a very different product from this dashboard (a full multi-view spreadsheet workspace — Table/Calendar/Boards/Cards/Uploads/Reports — rather than a single Summary-style chart dashboard), with no comparable chart-rendering detail captured. The one directly comparable finding: this record's "no Kanban/board alternate view exists" conclusion (cited in [[entries-kanban-view]]'s own Competitor Comparisons table) stands in sharp contrast to JotForm, which confirms a working Boards view with an auto-column-generation mode this product has no equivalent for at all.

## Best Observed Approach
- **RECOMMENDATION:** Typeform's charting implementation is the stronger technical approach — a real SVG charting library (visx) with computed scales/axes is more maintainable, accessible, and extensible than Zoho's hand-built `<table>`-based bar chart. This judgment is based on the DOM/network evidence captured this session (Technical Data above) and [[analytics-dashboard-kpi-bar-map]]'s existing Technical Data section. Zoho's static/decorative region-map weak point (flagged in that record's own Best Observed Approach note) remains a separate, still-valid finding not resolved by this comparison — Typeform's dashboard has no equivalent geographic-breakdown view to compare against.

## Sources
- OBSERVATION: Live exploration of Typeform (admin.typeform.com), free-plan account, form with 8 views / 5 starts / 2 submissions, via Claude browser extension, 2026-09-18. Network requests captured via a fetch/XHR interceptor; DOM polling (80–100ms intervals) used to test for load-in animation.

## Cross-Component Pattern Note
- **See also [[paperform-submissions-results-view]]:** the opposite results-loading strategy from this record's own "no distinct fetch-results call" finding — Paperform's Submissions app fires a distinct, paginated `GET .../submissions` request on mount (and does so twice, a confirmed duplicate-request bug), rather than inlining results data into the initial page load as Typeform does here.
- **See also [[google-forms-responses-view]]:** a third, genuinely different results-loading strategy — Google Forms fires distinct on-demand fetches per sub-view (`aggregatestatistics` for Summary, `getresponseclusters` for Question, `getsingleresponse` per response in Individual), none of which are duplicated the way Paperform's editor-panel fetch is, and none of which are inlined at load the way this record's own results are.
