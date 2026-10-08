---
component: "HubSpot Agent Hub Entitlement Gate — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Starter Customer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Agent Hub Entitlement Gate. Derived from the authored observation record."
parent_workflow: "hubspot-agent-hub-entitlement-gate"
component_level: "state"
---

# HubSpot Agent Hub Entitlement Gate — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Agent Hub Entitlement Gate](./hubspot-agent-hub-entitlement-gate.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The Starter gate positioned prebuilt and custom agents managed in one place, with Buy now and Talk to Sales.
- **OBSERVED:** OBSERVED: Benefits covered business-specific context, schedule or event execution, one-off colleague runs, access controls, workflow connections, detailed execution traces and performance monitoring.
- **OBSERVED:** NOT ACTIVATED: Buy now, sales contact, agent creation, automation and access changes.
- **OBSERVED:** NEEDS VERIFICATION: Agent Builder, deployment, schedules, triggers, permissions, run traces and performance views.

## Actions

- OBSERVED: The Starter gate positioned prebuilt and custom agents managed in one place, with Buy now and Talk to Sales.
- OBSERVED: Benefits covered business-specific context, schedule or event execution, one-off colleague runs, access controls, workflow connections, detailed execution traces and performance monitoring.
- NOT ACTIVATED: Buy now, sales contact, agent creation, automation and access changes.
- NEEDS VERIFICATION: Agent Builder, deployment, schedules, triggers, permissions, run traces and performance views.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-agent-hub-entitlement-gate-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Agent Hub Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The Starter gate positioned prebuilt and custom agents managed in one place, with Buy now and Talk to Sales.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Benefits covered business-specific context, schedule or event execution, one-off colleague runs, access controls, workflow connections, detailed execution traces and performance monitoring.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Buy now, sales contact, agent creation, automation and access changes.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Agent Builder, deployment, schedules, triggers, permissions, run traces and performance views.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-agent-hub-entitlement-gate"
component_level: "state"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
selected_state: "documented"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-agent-hub-entitlement-gate.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-agents/hubspot-agent-hub-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
