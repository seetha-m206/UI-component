---
component: "HubSpot Navigation Manager Guide — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-navigation-manager-guide"
component_level: "empty"
---

# HubSpot Navigation Manager Guide — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Navigation Manager Guide](./hubspot-navigation-manager-guide.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific empty description.

## Actions

- Element | Safe action | Observed result or boundary
- Manage navigation | Pointer click | Opened the guide modal.
- Close | Pointer click | Closed the modal and returned to the unchanged Tickets view.
- How to customize, Switch navigation and video | Not activated | Their destinations and outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-navigation-manager-guide-audit-empty.
- **RECONSTRUCTION:** Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot Navigation Manager Guide. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
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
component_level: "empty"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
result_count: "0"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-navigation-manager-guide.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-navigation-manager-guide.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
