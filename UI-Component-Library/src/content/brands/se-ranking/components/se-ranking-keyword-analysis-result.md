---
component: SE Ranking keyword analysis result
ui_category: 'Research > Result Screen'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: Observed India keyword analysis loading and zero-result report for centilio.
---

# Component: SE Ranking keyword analysis result

## Human View

Analyze navigates from the Keyword Research entry screen to an overview report with the query, database, historical month, currency, metric cards, keyword-idea sections, SERP overview, ranking dynamics, and advertising history.

## State Fixtures

- Observed loading message while search results and similar queries were collected.
- Observed `centilio` zero-result report for the India database.

## Actions

| Element | Action | Result | Evidence boundary |
| --- | --- | --- | --- |
| Analyze | Activate with `centilio` | Navigated to `?keyword=centilio&source=in` | **OBSERVED** |
| View detailed report | Inspect | Disabled with count 0 | **OBSERVED** |
| Export and history ranges | Inspect | Disabled in the zero-result state | **OBSERVED** |

## Evidence Boundary

- **OBSERVED:** Account limit 1/10, query, September 2026, USD selector, five metric headings, idea sections, disabled actions, loading copy, and final no-results copy.
- **RECONSTRUCTION:** Compact card layout and responsive wrapping.
- **NOT OBSERVED:** Non-empty keyword data, raw request payload, export output, and quota-exhausted behavior.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Keyword Research result for `centilio`, India database, 2026-10-01.
