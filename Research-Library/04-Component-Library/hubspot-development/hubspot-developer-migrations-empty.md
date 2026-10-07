---
component: "HubSpot Developer Migrations Empty State"
ui_category: "Development > Migrations"
source_product: "HubSpot Developer Platform Beta"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Developer Migrations Empty State

## Location
- **OBSERVED:** `/developer-migration/343751787`.
## Screenshots
- **OBSERVED:** `2026-10-07-developer-migrations.png`.
## Screen, Actions & States
- **OBSERVED:** Beta screen framed migrations as platform-update management across apps, exposed Scopes and APIs tabs, and showed No migrations found.
- **NOT ACTIVATED:** Tabs and migration actions.
- **NEEDS VERIFICATION:** Available migration cards, impact, acknowledgements, deadlines and completion states.
## Fictional Local Fixture
```yaml
migration: scopes_v2
category: scopes
status: none_available
affected_apps: 0
```
## Evidence Boundary
- **FACT:** The empty Migrations Beta state was directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No migration was available or performed.
## Sources
- Authenticated HubSpot Developer Migrations Beta, observed 2026-10-07.
