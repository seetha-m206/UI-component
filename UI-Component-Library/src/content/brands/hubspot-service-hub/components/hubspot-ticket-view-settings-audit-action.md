---
component: "HubSpot Ticket View Settings Drawer — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Ticket View Settings Drawer. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-view-settings"
component_level: "action"
---

# HubSpot Ticket View Settings Drawer — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket View Settings Drawer](./hubspot-ticket-view-settings.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result or boundary
- **OBSERVED:** View settings | Activated | Opened the settings drawer for My open tickets.
- **OBSERVED:** Escape | Pressed | Closed the drawer and returned focus context to the Tickets page.
- **OBSERVED:** View type, data, sharing and action controls | Not activated | No view, sharing state, export or saved configuration changed.

## Actions

- Element | Safe action | Observed result or boundary
- View settings | Activated | Opened the settings drawer for My open tickets.
- Escape | Pressed | Closed the drawer and returned focus context to the Tickets page.
- View type, data, sharing and action controls | Not activated | No view, sharing state, export or saved configuration changed.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-view-settings-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Ticket View Settings Drawer. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The drawer displayed disabled Name value “My open tickets”, view-type choices for Table view and Board view, and Table settings.
- **OBSERVED:** OBSERVED: Data controls were grouped as Pipeline, Filters and Sort by. Sharing offered Copy link to view, disabled Manage sharing and Export with shortcut Command-Shift-X.
- **OBSERVED:** OBSERVED / DOM: The drawer exposes labelled controls and keyboard shortcut text. Disabled actions expose disabled semantics.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Save requests, permission rules, generated URLs and backend state.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-view-settings"
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

- Parent workflow: hubspot-ticket-view-settings.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-view-settings.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
