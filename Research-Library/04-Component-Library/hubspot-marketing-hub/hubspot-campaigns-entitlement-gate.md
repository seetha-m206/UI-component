---
component: "HubSpot Campaigns Entitlement Gate"
ui_category: "Marketing > Campaign Management"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Campaigns Entitlement Gate

## Location

- **OBSERVED:** Campaigns locked route at `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=campaigns-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-campaigns-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The gate positioned Campaigns as a shared canvas for planning, asset creation, approvals, automation and cross-campaign performance.
- **OBSERVED:** Benefit sections covered Campaign Agent, collaborative campaign canvas, performance tracking and ranked recommended actions.
- **OBSERVED:** Conversion controls included Talk to Sales, Start 14-day trial and View pricing, followed by a Free versus Professional comparison table.
- **NOT ACTIVATED:** Talk to Sales, Start trial, View pricing and any campaign action.
- **NEEDS VERIFICATION:** Campaign index, creation canvas, collaboration, approvals, asset association, automation and reporting.

## Fictional Local Fixture

```yaml
campaign: Northstar Spring Launch
status: planning
channels: [email, social, landing_page]
assets_ready: 2
assets_total: 5
entitlement: locked
```

## Evidence Boundary

- **FACT:** The entitlement gate was directly observed.
- **RECONSTRUCTION:** The campaign fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated campaign-management workspace was accessible.

## Sources

- Authenticated HubSpot Campaigns entitlement gate, observed 2026-10-07.
