---
component: SE Ranking audit issue report
ui_category: 'Data Display > Issue Report'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: Live-observed audit issue report with scope tabs, issue filters, category totals, tables, and a documented subscription gate.
---

# Component: SE Ranking audit issue report

## Human View

The report separates Current, Fixed, New, All Tracked, and Turned Off issue scopes, combines them with an issue-type filter, and groups audit findings by category.

## State Fixtures

- Observed refreshed Current scope with 1,600 issues.
- Observed New scope with 9 issues and Fixed, All Tracked, and Turned Off tabs at zero.
- Observed All types selected filter.
- Observed category navigation and current, fixed, and new columns.
- Observed subscription gate over issue URL details.

## Actions

| Element | Action | Result | Evidence |
| --- | --- | --- | --- |
| Scope tab | Select | Changes the issue population | Live controls observed |
| Type filter | Open | Scopes issue types | Closed control observed |
| Category | Select | Changes the visible issue group | Category inventory observed |
| Current count | Expand | Requests affected URL detail | Detail was subscription gated |
| Unlock Audit | Activate | Opens the upgrade path | Destination not exercised |

## Evidence Boundary

- **OBSERVED:** Report route, scope tabs, totals, issue-type filter, seven category totals, tables, current/fixed/new columns, and subscription gate.
- **NOT OBSERVED:** Paid issue URL details and upgrade completion.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Website Audit Issue Report before and after the manual audit completed, 2026-10-01.
- **RUNTIME:** Live route `/admin.audit.site_id-12996545.html#/report` opened from View all issues.
