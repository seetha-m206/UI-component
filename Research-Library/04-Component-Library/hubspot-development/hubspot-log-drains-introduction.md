---
component: "HubSpot Log Drains Introduction"
ui_category: "Development > Monitoring > Log Drains"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Log Drains Introduction

## Location
- **OBSERVED:** `/developer-monitoring/343751787/log-drains`.
## Screenshots
- **OBSERVED:** `2026-10-07-log-drains.png`.
## Screen, Actions & States
- **OBSERVED:** Intro described streaming app logs to external monitoring, configuring drains through the CLI, verifying status in HubSpot and retaining data externally.
- **OBSERVED:** Partner cards linked to Sentry and Honeycomb.
- **NOT ACTIVATED:** CLI configuration, partner navigation and connection verification.
- **NEEDS VERIFICATION:** Drain creation, authentication, destinations, status, failures and deletion.
## Fictional Local Fixture
```yaml
drain: Northstar Sentry
status: not_configured
destination: sentry
retention_days: 30
```
## Evidence Boundary
- **FACT:** The Log Drains introduction was directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No external monitoring service was connected.
## Sources
- Authenticated HubSpot Log Drains introduction, observed 2026-10-07.
