---
component: "HubSpot Ticket Filter Controls — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Ticket Filter Controls. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-filter-controls"
component_level: "action"
---

# HubSpot Ticket Filter Controls — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Filter Controls](./hubspot-ticket-filter-controls.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result or boundary
- **OBSERVED:** Advanced filters | Activated | Opened the filter drawer. No rule was added, removed or changed.
- **OBSERVED:** Ticket owner on Unassigned tickets | Activated | Opened the quick filter and directly exposed value Unassigned with operator “is unknown”. No value was changed.
- **OBSERVED:** Priority | Keyboard Space | Opened its operator and value controls. No priority was selected.
- **OBSERVED:** Create date operator | Keyboard Space | Opened the operator list. No operator or date was selected.
- **OBSERVED:** Support Pipeline | Keyboard Space | Opened All Pipelines, Support Pipeline and Manage pipelines. No selection changed.
- **OBSERVED:** Escape or route reload | Used after inspection | Returned to the unchanged Tickets view without saving filter edits.

## Actions

- Element | Safe action | Observed result or boundary
- Advanced filters | Activated | Opened the filter drawer. No rule was added, removed or changed.
- Ticket owner on Unassigned tickets | Activated | Opened the quick filter and directly exposed value Unassigned with operator “is unknown”. No value was changed.
- Priority | Keyboard Space | Opened its operator and value controls. No priority was selected.
- Create date operator | Keyboard Space | Opened the operator list. No operator or date was selected.
- Support Pipeline | Keyboard Space | Opened All Pipelines, Support Pipeline and Manage pipelines. No selection changed.
- Escape or route reload | Used after inspection | Returned to the unchanged Tickets view without saving filter edits.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-filter-controls-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Ticket Filter Controls. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Advanced filters opened a drawer headed All filters. It included “Filter by associated object”, an Add filter action, an AND separator, Advanced filters and Group 1.
- **OBSERVED:** OBSERVED: Unassigned tickets displayed Filter (1). Its advanced-filter drawer showed no explicit stored rule, while the Ticket owner quick-filter disclosure directly showed the value Unassigned with operator “is unknown”.
- **OBSERVED:** OBSERVED: The pipeline selector offered All Pipelines and Support Pipeline, plus a Manage pipelines link that opens a new window.
- **OBSERVED:** OBSERVED / DOM: Value choices expose checkbox semantics. Operator and pipeline selectors expose popup/list semantics. Board and Table controls expose pressed state.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Provider query grammar, API requests, saved-view persistence or error recovery.
- **NOT OBSERVED:** Escape or route reload | Used after inspection | Returned to the unchanged Tickets view without saving filter edits.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-filter-controls"
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

- Parent workflow: hubspot-ticket-filter-controls.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-filter-controls.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
