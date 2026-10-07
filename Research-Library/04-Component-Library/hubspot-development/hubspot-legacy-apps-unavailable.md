---
component: "HubSpot Legacy Apps Unavailable State"
ui_category: "Development > Legacy Apps"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Legacy Apps Unavailable State

## Location
- **OBSERVED:** `/legacy-apps/343751787`.
## Screenshots
- **OBSERVED:** `2026-10-07-legacy-apps.png`.
## Screen, Actions & States
- **OBSERVED:** The account could not use legacy apps. Copy directed developers to service keys for API calls or project-based apps for webhooks and UI extensions.
- **OBSERVED:** Actions offered Create a service key, Create a project-based app and Learn more.
- **NOT ACTIVATED:** Key creation, project creation and documentation.
- **NEEDS VERIFICATION:** Migration behavior for existing legacy apps and replacement setup.
## Fictional Local Fixture
```yaml
legacy_app: Northstar Legacy Sync
status: unavailable
replacement: project_based_app
```
## Evidence Boundary
- **FACT:** The unavailable state and replacement paths were directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** Credential destinations were not opened.
## Sources
- Authenticated HubSpot Legacy Apps state, observed 2026-10-07.
