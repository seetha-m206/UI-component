---
component: "HubSpot Ticket Stage Type Menu — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-stage-type-menu"
component_level: "screen"
---

# HubSpot Ticket Stage Type Menu — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Stage Type Menu](./hubspot-ticket-stage-type-menu.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Opening the New stage type exposed Open and Closed choices, with Open selected.
- **OBSERVED:** OBSERVED: The surrounding row retained New, #016DE1, Used in 0 and status ID 1.

## Actions

- Element | Safe action | Observed result or boundary
- Open stage type | Open disclosure | Displayed Open and Closed choices.
- Closed | Not selected | Stage conversion and save behavior are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-stage-type-menu-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Ticket Stage Type Menu. Derived from the authored observation record.
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
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Account / Settings"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-stage-type-menu.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-stage-type-menu.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
