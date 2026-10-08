---
component: "HubSpot Ticket Stage Type Menu — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-stage-type-menu"
component_level: "action"
---

# HubSpot Ticket Stage Type Menu — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Stage Type Menu](./hubspot-ticket-stage-type-menu.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result or boundary
- **OBSERVED:** Open stage type | Open disclosure | Displayed Open and Closed choices.
- **OBSERVED:** Closed | Not selected | Stage conversion and save behavior are NOT OBSERVED.

## Actions

- Element | Safe action | Observed result or boundary
- Open stage type | Open disclosure | Displayed Open and Closed choices.
- Closed | Not selected | Stage conversion and save behavior are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-stage-type-menu-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Ticket Stage Type Menu. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: Element | Safe action | Observed result or boundary
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: Open stage type | Open disclosure | Displayed Open and Closed choices.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: Closed | Not selected | Stage conversion and save behavior are NOT OBSERVED.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-stage-type-menu"
component_level: "action"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
last_action: "none"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-stage-type-menu.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-stage-type-menu.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
