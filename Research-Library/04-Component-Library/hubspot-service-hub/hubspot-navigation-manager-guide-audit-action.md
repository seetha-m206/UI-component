---
component: "HubSpot Navigation Manager Guide — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-navigation-manager-guide"
component_level: "action"
---

# HubSpot Navigation Manager Guide — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Navigation Manager Guide](./hubspot-navigation-manager-guide.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result or boundary
- **OBSERVED:** Manage navigation | Pointer click | Opened the guide modal.
- **OBSERVED:** Close | Pointer click | Closed the modal and returned to the unchanged Tickets view.
- **OBSERVED:** How to customize, Switch navigation and video | Not activated | Their destinations and outcomes are NOT OBSERVED.

## Actions

- Element | Safe action | Observed result or boundary
- Manage navigation | Pointer click | Opened the guide modal.
- Close | Pointer click | Closed the modal and returned to the unchanged Tickets view.
- How to customize, Switch navigation and video | Not activated | Their destinations and outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-navigation-manager-guide-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Navigation Manager Guide. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The modal contained Close, How to customize, Switch navigation, an embedded HubSpot video and a tip explaining that tools can be organized with groups from a tool menu.
- **OBSERVED:** OBSERVED / DOM: The Bookmarks Manager was exposed as a named frame containing a nested document and modal controls.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-navigation-manager-guide"
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

- Parent workflow: hubspot-navigation-manager-guide.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-navigation-manager-guide.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
