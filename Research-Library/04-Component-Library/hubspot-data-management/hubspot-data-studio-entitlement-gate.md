---
component: "HubSpot Data Studio Entitlement Gate"
ui_category: "Data Management > Data Studio"
source_product: "HubSpot Data Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Data Studio Entitlement Gate

## Location
- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=data-studio-locked-nav-item`.

## Screenshots
- **OBSERVED:** `2026-10-07-data-studio.png`.

## Screen, Actions & States
- **OBSERVED:** The Professional gate described joining Snowflake, Google Sheets and other app data with CRM data for segments, workflows and insights.
- **OBSERVED:** Benefits covered unified datasets, cleanup and transformation before CRM sync, plus AI-assisted dataset creation, missing-data fills and custom insights.
- **NOT ACTIVATED:** Sales contact, trial, connections, dataset creation, transformation and sync.
- **NEEDS VERIFICATION:** Connector setup, dataset builder, transforms, previews, schedules, syncs and credit use.

## Fictional Local Fixture
```yaml
dataset: Northstar Customer 360
status: locked
sources: [hubspot_crm, snowflake]
rows: 0
sync_target: company
```

## Evidence Boundary
- **FACT:** The Data Studio entitlement gate was directly observed.
- **RECONSTRUCTION:** The dataset fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated Data Studio workspace was accessible.

## Sources
- Authenticated HubSpot Data Studio entitlement gate, observed 2026-10-07.
