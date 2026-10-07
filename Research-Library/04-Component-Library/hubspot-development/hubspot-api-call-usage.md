---
component: "HubSpot API Call Usage"
ui_category: "Development > Monitoring > API Call Usage"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot API Call Usage

## Location
- **OBSERVED:** `/api-call-usage/343751787`.
## Screenshots
- **OBSERVED:** `2026-10-07-api-call-usage.png`.
## Screen, Actions & States
- **OBSERVED:** The 24-hour usage meter showed zero calls against a 250,000-call limit, midnight reset guidance, recent-update text and zero breakdowns for locally built apps or service keys and third-party apps.
- **NOT ACTIVATED:** Navigation to apps, keys or usage actions.
- **NEEDS VERIFICATION:** Non-zero charts, drilldowns, thresholds and historical usage.
## Fictional Local Fixture
```yaml
window: last_24_hours
calls_used: 1200
limit: 250000
source: northstar-extension
```
## Evidence Boundary
- **FACT:** The usage screen and its observed zero state were directly reviewed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No API activity was generated.
## Sources
- Authenticated HubSpot API Call Usage, observed 2026-10-07.
