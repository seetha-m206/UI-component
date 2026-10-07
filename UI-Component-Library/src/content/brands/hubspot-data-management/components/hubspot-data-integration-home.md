---
component: "HubSpot Data Integration Home"
ui_category: "Data Management > Data Integration"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Data Management screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Data Integration Home

## Location
- **OBSERVED:** `/data-integration-home/343751787`.

## Screenshots
- **OBSERVED:** `2026-10-07-data-integration.png`.

## Screen, Actions & States
- **OBSERVED:** Four entry cards offered one-time file import, app sync, Smart Transfer Beta and an upgrade for unified campaign data.
- **OBSERVED:** Monitoring tabs covered File imports, App syncs and Data studio syncs, with a Connected apps link.
- **NOT ACTIVATED:** Import data, Connect an app, Transfer data, upgrade and connected-app navigation.
- **NEEDS VERIFICATION:** Mapping, validation, sync configuration, transfer execution, history and failure states.

## Fictional Local Fixture
```yaml
integration: Northstar CRM Import
mode: file_import
status: not_started
rows: 125
objects: [contacts, companies]
```

## Evidence Boundary
- **FACT:** The Data Integration home was directly observed.
- **RECONSTRUCTION:** The integration fixture is fictional and local only.
- **NEEDS VERIFICATION:** No file, app or transfer was connected or run.

## Sources
- Authenticated HubSpot Data Integration home, observed 2026-10-07.
