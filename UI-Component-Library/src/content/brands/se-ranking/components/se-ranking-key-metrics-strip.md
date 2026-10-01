---
component: SE Ranking key metrics strip
ui_category: 'Data Display > KPI Strip'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: Five-cell SEO and AI KPI strip with observed values plus loading and unavailable fixtures.
---

# Component: SE Ranking key metrics strip

## Human View

Five compact KPI cells summarize AI Presence, Organic Traffic, Organic Keywords, Referring Domains, and Search Visibility at the top of Project Overview.

## State Fixtures

- Observed current values: 0.06%, 12, 517, 82, and 0% Search Visibility.
- Observed settings menu with five enabled metrics and Health Score plus Backlinks available unchecked.
- Reconstructed loading skeleton.
- Synthetic unavailable state marked needs verification.

## Actions

| Element | Action | Result | Evidence boundary |
| --- | --- | --- | --- |
| Metric settings | Activate | Opened metric visibility and ordering menu | **OBSERVED** |
| Metric value | Activate | Navigates to the corresponding research, rankings, or backlink report | **OBSERVED destinations** |

## Evidence Boundary

- **OBSERVED:** Labels, current values, order, settings menu, selected metrics, unchecked options, and report destinations.
- **RECONSTRUCTION:** Loading and responsive layout.
- **NOT OBSERVED:** Formula implementation, refresh timing, and missing-data rules.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview for centilio.com, 2026-10-01.
