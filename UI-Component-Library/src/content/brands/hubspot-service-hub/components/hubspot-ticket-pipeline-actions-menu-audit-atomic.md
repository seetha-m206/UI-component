---
component: "HubSpot Ticket Pipeline Actions Menu — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Pipeline Actions Menu. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-ticket-pipeline-actions-menu"
component_level: "atomic"
---

# HubSpot Ticket Pipeline Actions Menu — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Pipeline Actions Menu](./hubspot-ticket-pipeline-actions-menu.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **NOT OBSERVED:** OBSERVED: The Support Pipeline row exposed an Actions disclosure containing only Delete.
- **NOT OBSERVED:** OBSERVED: Delete was disabled for the portal's only pipeline.

## Actions

- Element | Safe action | Observed result or boundary
- Actions for Support Pipeline | Open disclosure | Displayed disabled Delete.
- Delete | Not activated | Deletion behavior is NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-pipeline-actions-menu-audit-atomic.
- **RECONSTRUCTION:** Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Pipeline Actions Menu. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The Support Pipeline row exposed an Actions disclosure containing only Delete.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Delete was disabled for the portal's only pipeline.

### Network / API

- **NOT OBSERVED:** Delete | Not activated | Deletion behavior is NOT OBSERVED.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-pipeline-actions-menu"
component_level: "atomic"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
control_count: "2"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-pipeline-actions-menu.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-pipeline-actions-menu.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
