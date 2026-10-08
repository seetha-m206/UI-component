---
component: "HubSpot Ticket Compact View Selector — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Ticket Compact View Selector. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-compact-view-selector"
component_level: "action"
---

# HubSpot Ticket Compact View Selector — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Compact View Selector](./hubspot-ticket-compact-view-selector.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result or boundary
- **OBSERVED:** Unassigned tickets popup | Keyboard Space | Opened the saved-view selector.
- **OBSERVED:** Escape | Keyboard Escape | Closed the selector and preserved the current view.
- **OBSERVED:** Search, pinned views and All views | Not activated | Filtering, navigation and persistence are NOT OBSERVED.

## Actions

- Element | Safe action | Observed result or boundary
- Unassigned tickets popup | Keyboard Space | Opened the saved-view selector.
- Escape | Keyboard Escape | Closed the selector and preserved the current view.
- Search, pinned views and All views | Not activated | Filtering, navigation and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-compact-view-selector-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Ticket Compact View Selector. Derived from the authored observation record.
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

- Parent workflow: hubspot-ticket-compact-view-selector.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-compact-view-selector.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
