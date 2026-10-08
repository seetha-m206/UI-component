---
component: "HubSpot Ticket Filter Controls — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Filter Controls. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-filter-controls"
component_level: "atomic"
---

# HubSpot Ticket Filter Controls — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Filter Controls](./hubspot-ticket-filter-controls.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Advanced filters opened a drawer headed All filters. It included “Filter by associated object”, an Add filter action, an AND separator, Advanced filters and Group 1.
- **OBSERVED:** OBSERVED: My open tickets showed the rule “Ticket status is none of All closed”, plus actions to add an AND filter or an OR filter group.
- **OBSERVED:** OBSERVED: Unassigned tickets displayed Filter (1). Its advanced-filter drawer showed no explicit stored rule, while the Ticket owner quick-filter disclosure directly showed the value Unassigned with operator “is unknown”.
- **OBSERVED:** OBSERVED: Priority opened operator “is any of” and a searchable value picker with Low, Medium, High and Urgent, each with a short description.
- **OBSERVED:** OBSERVED: Create date exposed operators is, is equal to, is before, is after, is between, is more than, is less than, is known and is unknown.
- **OBSERVED:** OBSERVED: The pipeline selector offered All Pipelines and Support Pipeline, plus a Manage pipelines link that opens a new window.
- **OBSERVED:** OBSERVED / DOM: Value choices expose checkbox semantics. Operator and pipeline selectors expose popup/list semantics. Board and Table controls expose pressed state.
- **OBSERVED:** NOT OBSERVED: Provider query grammar, API requests, saved-view persistence or error recovery.

## Actions

- Element | Safe action | Observed result or boundary
- Advanced filters | Activated | Opened the filter drawer. No rule was added, removed or changed.
- Ticket owner on Unassigned tickets | Activated | Opened the quick filter and directly exposed value Unassigned with operator “is unknown”. No value was changed.
- Priority | Keyboard Space | Opened its operator and value controls. No priority was selected.
- Create date operator | Keyboard Space | Opened the operator list. No operator or date was selected.
- Support Pipeline | Keyboard Space | Opened All Pipelines, Support Pipeline and Manage pipelines. No selection changed.
- Escape or route reload | Used after inspection | Returned to the unchanged Tickets view without saving filter edits.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-filter-controls-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Filter Controls. Derived from the authored observation record.
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
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "8"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-filter-controls.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-filter-controls.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
