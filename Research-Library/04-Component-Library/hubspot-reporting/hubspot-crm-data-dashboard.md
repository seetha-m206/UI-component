---
component: "HubSpot CRM Data Dashboard"
ui_category: "Reporting > Dashboards"
source_product: "HubSpot Reporting"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot CRM Data Dashboard

## Location
- **OBSERVED:** `/reports-dashboard/343751787/view` resolved to a CRM Data Overview dashboard.

## Screenshots
- **OBSERVED:** `2026-10-07-dashboards.png`.

## Screen, Actions & States
- **OBSERVED:** A report-caching coachmark appeared over a dashboard with Explore reports, Create dashboard, Actions, Share, Add content, quick and advanced filters, and Refresh.
- **OBSERVED:** Cards combined populated metrics and charts with no-data states across contacts, deals, activities and tickets, plus comment controls and a timezone footer.
- **NOT ACTIVATED:** Coachmark navigation, create, actions, share, add content, comments, filters, refresh and report drilldown.
- **NEEDS VERIFICATION:** Dashboard editor, permissions, sharing, caching, filtering, refresh, comments and exports.

## Fictional Local Fixture
```yaml
dashboard: Northstar Operating Pulse
status: draft
date_range: this_month
cards: [new_contacts, deal_pipeline, activity_summary]
shared: false
```

## Evidence Boundary
- **FACT:** The dashboard structure and mixed data states were directly observed.
- **RECONSTRUCTION:** The dashboard fixture is fictional and local only.
- **NEEDS VERIFICATION:** No dashboard was changed, shared or refreshed.

## Sources
- Authenticated HubSpot CRM Data Overview dashboard, observed 2026-10-07.
