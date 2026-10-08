---
component: "HubSpot Ticket Stage Type Menu — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Stage Type Menu. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-ticket-stage-type-menu"
component_level: "atomic"
---

# HubSpot Ticket Stage Type Menu — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Stage Type Menu](./hubspot-ticket-stage-type-menu.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **NOT OBSERVED:** OBSERVED: Opening the New stage type exposed Open and Closed choices, with Open selected.
- **NOT OBSERVED:** OBSERVED: The surrounding row retained New, #016DE1, Used in 0 and status ID 1.

## Actions

- Element | Safe action | Observed result or boundary
- Open stage type | Open disclosure | Displayed Open and Closed choices.
- Closed | Not selected | Stage conversion and save behavior are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-stage-type-menu-audit-atomic.
- **RECONSTRUCTION:** Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Stage Type Menu. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Opening the New stage type exposed Open and Closed choices, with Open selected.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The surrounding row retained New, #016DE1, Used in 0 and status ID 1.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-stage-type-menu"
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

- Parent workflow: hubspot-ticket-stage-type-menu.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-stage-type-menu.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
