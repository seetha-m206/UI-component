---
component: "HubSpot Reports Inventory"
ui_category: "Reporting > Reports"
source_product: "HubSpot Reporting"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Reporting screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Reports Inventory

## Location
- **OBSERVED:** `/reports-list/343751787`.

## Screenshots
- **OBSERVED:** `2026-10-07-reports.png`.

## Screen, Actions & States
- **OBSERVED:** Reports inventory exposed Create, Search, My dashboards, My reports, Marketing, Sales and Service analytics suites.
- **OBSERVED:** All reports, Custom reports and Favorites tabs sat above view-mode, dashboard, owner, updated and assignment controls. The table exposed selection, sorting, report links, row actions, dashboard counts, ownership, views and timestamps.
- **NOT ACTIVATED:** Create, search, tabs, filters, sorting, selection, report links, row actions and dashboard links.
- **NEEDS VERIFICATION:** Report builder, custom sources, charts, filters, permissions, scheduling, sharing and export.

## Fictional Local Fixture
```yaml
report: Northstar Pipeline Coverage
status: draft
owner: Example Analyst
visualization: funnel
dashboard: Northstar Operating Pulse
```

## Evidence Boundary
- **FACT:** The report inventory structure was directly observed.
- **RECONSTRUCTION:** The report fixture is fictional and local only.
- **NEEDS VERIFICATION:** No report was opened, created or modified.

## Sources
- Authenticated HubSpot Reports inventory, observed 2026-10-07.
