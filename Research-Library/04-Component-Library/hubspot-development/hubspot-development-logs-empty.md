---
component: "HubSpot Development Logs Empty State"
ui_category: "Development > Monitoring > Logs"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Development Logs Empty State

## Location
- **OBSERVED:** `/developer-monitoring/343751787`.
## Screenshots
- **OBSERVED:** `2026-10-07-development-logs.png`.
## Screen, Actions & States
- **OBSERVED:** Empty monitoring state required a first project app deployment before logs appear and referenced `hs project deploy` or a Builds & Deploys page.
- **NOT ACTIVATED:** Project creation, deployment and documentation.
- **NEEDS VERIFICATION:** Log filters, severity, retention, app selection, detail and export.
## Fictional Local Fixture
```yaml
log_stream: northstar-extension
status: empty
deployment_required: true
entries: 0
```
## Evidence Boundary
- **FACT:** The empty log prerequisite was directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No app was deployed and no logs existed.
## Sources
- Authenticated HubSpot Development Logs empty state, observed 2026-10-07.
