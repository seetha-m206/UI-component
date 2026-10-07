---
component: "HubSpot Agent Hub Entitlement Gate"
ui_category: "Agents > Agent Hub"
source_product: "HubSpot Starter Customer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Agent Hub Entitlement Gate

## Location
- **OBSERVED:** `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=agent-hub-locked-nav-item`.

## Screenshots
- **OBSERVED:** `2026-10-07-agent-hub.png`.

## Screen, Actions & States
- **OBSERVED:** The Starter gate positioned prebuilt and custom agents managed in one place, with Buy now and Talk to Sales.
- **OBSERVED:** Benefits covered business-specific context, schedule or event execution, one-off colleague runs, access controls, workflow connections, detailed execution traces and performance monitoring.
- **NOT ACTIVATED:** Buy now, sales contact, agent creation, automation and access changes.
- **NEEDS VERIFICATION:** Agent Builder, deployment, schedules, triggers, permissions, run traces and performance views.

## Fictional Local Fixture
```yaml
agent: Northstar Renewal Monitor
status: locked
trigger: contract_renewal_30_days
context_scope: contracts_only
approval_required: true
```

## Evidence Boundary
- **FACT:** The Agent Hub entitlement gate was directly observed.
- **RECONSTRUCTION:** The agent fixture is fictional and local only.
- **NEEDS VERIFICATION:** No Agent Hub workspace was accessible.

## Sources
- Authenticated HubSpot Agent Hub entitlement gate, observed 2026-10-07.
