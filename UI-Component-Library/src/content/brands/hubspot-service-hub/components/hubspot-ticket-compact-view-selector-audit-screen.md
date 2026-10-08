---
component: "HubSpot Ticket Compact View Selector — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Ticket Compact View Selector. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-compact-view-selector"
component_level: "screen"
---

# HubSpot Ticket Compact View Selector — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Compact View Selector](./hubspot-ticket-compact-view-selector.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The compact Unassigned tickets popup opened a search field and a pinned-view list containing All tickets, My open tickets and Unassigned tickets.
- **OBSERVED:** OBSERVED: An All views link appeared below the pinned views.

## Actions

- Element | Safe action | Observed result or boundary
- Unassigned tickets popup | Keyboard Space | Opened the saved-view selector.
- Escape | Keyboard Escape | Closed the selector and preserved the current view.
- Search, pinned views and All views | Not activated | Filtering, navigation and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-compact-view-selector-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Ticket Compact View Selector. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The compact Unassigned tickets popup opened a search field and a pinned-view list containing All tickets, My open tickets and Unassigned tickets.
- **OBSERVED:** OBSERVED: An All views link appeared below the pinned views.
- **OBSERVED:** OBSERVED / DOM: The trigger exposed popup expanded state. The panel exposed a settable search text field, a content list of buttons and a link for All views.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-compact-view-selector"
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

- Parent workflow: hubspot-ticket-compact-view-selector.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-compact-view-selector.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
