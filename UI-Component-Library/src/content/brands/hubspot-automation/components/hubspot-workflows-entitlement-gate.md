---
component: "HubSpot Workflows Entitlement Gate"
ui_category: "Automation > Workflows"
source_product: "HubSpot Sales Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Automation screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Workflows Entitlement Gate

## Location
- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=workflows-locked-nav-item`.

## Screenshots
- **OBSERVED:** `2026-10-07-workflows.png`.

## Screen, Actions & States
- **OBSERVED:** The Professional gate described advanced automated email campaigns and a drag-and-drop canvas connecting agents, triggers, tools and data.
- **OBSERVED:** Benefits covered external app triggers and actions plus a centralized view of approvals and issues needing review.
- **NOT ACTIVATED:** Talk to Sales, trial, workflow creation, app connection, automation and approval actions.
- **NEEDS VERIFICATION:** Workflow index, builder, triggers, branching, actions, testing, enrollment, history and error handling.

## Fictional Local Fixture
```yaml
workflow: Northstar Lead Handoff
status: locked
trigger: lifecycle_stage_is_mql
actions: [assign_owner, create_task]
enrolled: 0
```

## Evidence Boundary
- **FACT:** The Workflows entitlement gate was directly observed.
- **RECONSTRUCTION:** The workflow fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated workflow workspace was accessible.

## Sources
- Authenticated HubSpot Workflows entitlement gate, observed 2026-10-07.
