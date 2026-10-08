---
component: "HubSpot Navigation Manager Guide — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Navigation Manager Guide. Derived from the authored observation record."
parent_workflow: "hubspot-navigation-manager-guide"
component_level: "screen"
---

# HubSpot Navigation Manager Guide — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Navigation Manager Guide](./hubspot-navigation-manager-guide.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Manage navigation opened a modal titled Manage navigation inside a Bookmarks Manager frame.
- **OBSERVED:** OBSERVED: The modal contained Close, How to customize, Switch navigation, an embedded HubSpot video and a tip explaining that tools can be organized with groups from a tool menu.

## Actions

- Element | Safe action | Observed result or boundary
- Manage navigation | Pointer click | Opened the guide modal.
- Close | Pointer click | Closed the modal and returned to the unchanged Tickets view.
- How to customize, Switch navigation and video | Not activated | Their destinations and outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-navigation-manager-guide-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Navigation Manager Guide. Derived from the authored observation record.
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

- Parent workflow: hubspot-navigation-manager-guide.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-navigation-manager-guide.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
