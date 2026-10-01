---
component: SE Ranking rankings detailed report
ui_category: 'Rank Tracking > Detailed Report'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
---

# Component: SE Ranking rankings detailed report

## Human View

The detailed Rankings screen combines usage limits, search-engine and date controls, report actions, position filters, insights, search-engine summary metrics, a time-range chart, and the tracked-keyword table.

## State Fixtures

- Observed detailed report with one imported keyword.
- Observed first-run Rankings table guide at step 1 of 5.
- Observed duplicate-keyword confirmation and the unchanged report after removing the duplicate from the pending list.

## Actions

| Element | Action | Result | Evidence boundary |
| --- | --- | --- | --- |
| View full report | Activate from Project Overview | Opened the Detailed report in a new tab | **OBSERVED** |
| Rankings table guide | Open on first visit | Displayed step 1 of 5 with Next and close controls | **OBSERVED** |
| Toolbar menus | Inspect | India EN, date, Data Studio, Export, Settings, Add Keywords, and Recheck data controls present | **OBSERVED labels** |
| Add Keywords | Submit the already tracked keyword | Displayed `Duplicates found: 1`; choosing `Yes, remove duplicates` produced `Added keywords: 0` | **OBSERVED** |

## Evidence Boundary

- **OBSERVED:** Manual rechecks 0/750, keyword limits 1/750, 100% Indexed, position counts, three insight cards, Google India metrics, chart periods, table controls, the `centilio upload evidence 2026-10-01` row, duplicate confirmation, and zero-add duplicate removal result.
- **RECONSTRUCTION:** Compact chart placeholder and local guide overlay.
- **NOT OBSERVED:** Export download, Data Studio connection, settings menu contents, Recheck execution, and guide steps 2–5 because the provider overlay did not advance through automation.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Rankings Detailed report, 2026-10-01.
- **OBSERVATION:** Authenticated duplicate-keyword submission and removal from the pending list, 2026-10-01.
