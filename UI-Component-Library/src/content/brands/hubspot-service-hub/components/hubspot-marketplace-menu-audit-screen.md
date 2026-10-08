---
component: "HubSpot Marketplace Menu — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Marketplace Menu. Derived from the authored observation record."
parent_workflow: "hubspot-marketplace-menu"
component_level: "screen"
---

# HubSpot Marketplace Menu — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketplace Menu](./hubspot-marketplace-menu.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The Marketplace control opened a dark floating menu containing HubSpot Marketplace, Connected Apps, Marketplace Downloads and Added Agents.

## Actions

- Element | Safe action | Observed result or boundary
- Marketplace | Keyboard Space | Opened the menu and exposed expanded state.
- Marketplace | Keyboard Space while open | Closed the menu.
- Four destinations | Not activated | Marketplace, connection, download and agent-management screens are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketplace-menu-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Marketplace Menu. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The Marketplace control opened a dark floating menu containing HubSpot Marketplace, Connected Apps, Marketplace Downloads and Added Agents.
- **OBSERVED:** OBSERVED / DOM: The trigger is an expandable button. All four menu items are links with distinct authenticated routes.

### Network / API

- **OBSERVED:** OBSERVED / DOM: The trigger is an expandable button. All four menu items are links with distinct authenticated routes.
- **NOT OBSERVED:** NOT OBSERVED: Destination APIs, installation flows or entitlement logic.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketplace-menu"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Navigation"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-marketplace-menu.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-marketplace-menu.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
