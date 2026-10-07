---
component: "HubSpot Developer Projects Empty State"
ui_category: "Development > Projects"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Developer Projects Empty State

## Location
- **OBSERVED:** `/developer-projects/343751787`.
## Screenshots
- **OBSERVED:** `2026-10-07-development-projects.png`.
## Screen, Actions & States
- **OBSERVED:** Empty state said no projects existed, offered Create project, described GitHub CI/CD integration and bundled deployable apps or extensions, and referenced `hs project create`.
- **NOT ACTIVATED:** Project creation, CLI setup, CI/CD and deployment.
- **NEEDS VERIFICATION:** Project wizard, build history, GitHub linking, deployments and rollback.
## Fictional Local Fixture
```yaml
project: northstar-extension
status: empty
repository: example/northstar-extension
deployments: 0
```
## Evidence Boundary
- **FACT:** The Projects empty state was directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No project was created.
## Sources
- Authenticated HubSpot Developer Projects empty state, observed 2026-10-07.
