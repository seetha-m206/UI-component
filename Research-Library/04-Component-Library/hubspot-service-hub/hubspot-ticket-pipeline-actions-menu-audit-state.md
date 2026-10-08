---
component: "HubSpot Ticket Pipeline Actions Menu — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-pipeline-actions-menu"
component_level: "state"
---

# HubSpot Ticket Pipeline Actions Menu — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Pipeline Actions Menu](./hubspot-ticket-pipeline-actions-menu.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific state description.

## Actions

- Element | Safe action | Observed result or boundary
- Actions for Support Pipeline | Open disclosure | Displayed disabled Delete.
- Delete | Not activated | Deletion behavior is NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-pipeline-actions-menu-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Ticket Pipeline Actions Menu. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific state description.

### Network / API

- **NOT OBSERVED:** Delete | Not activated | Deletion behavior is NOT OBSERVED.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-pipeline-actions-menu"
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

- Parent workflow: hubspot-ticket-pipeline-actions-menu.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-pipeline-actions-menu.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
