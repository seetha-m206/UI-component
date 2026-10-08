---
component: "HubSpot Ticket Status Details Panel — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-status-details-panel"
component_level: "atomic"
---

# HubSpot Ticket Status Details Panel — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Status Details Panel](./hubspot-ticket-status-details-panel.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The panel was headed Sort by and retained Create date with Most recent selected and Oldest available.
- **OBSERVED:** OBSERVED: Edit status details warned that pipeline status changes made there apply across HubSpot. It showed Status name with value New, an empty Status description, 18 labeled color choices, disabled Save and Cancel.
- **OBSERVED:** OBSERVED: The selected status color was #016DE1.
- **OBSERVED:** OBSERVED / DOM: Name and description were settable text controls. Colors were exposed as checkbox controls named by hex value, with #016DE1 selected.

## Actions

- Element | Safe action | Observed result or boundary
- New board column header | Keyboard Space | Opened the combined sort and status-details panel.
- Escape | Keyboard Escape | Closed the panel without editing any value.
- Name, description, colors, sort choices and Save | Not activated | Editing, validation, global application and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-status-details-panel-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Status Details Panel. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED / DOM: Name and description were settable text controls. Colors were exposed as checkbox controls named by hex value, with #016DE1 selected.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-status-details-panel"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "4"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-status-details-panel.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-status-details-panel.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
