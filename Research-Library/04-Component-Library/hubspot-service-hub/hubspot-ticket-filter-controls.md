---
component: "HubSpot Ticket Filter Controls"
ui_category: "Search and Filtering > Filter Panel"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Filter Controls

## Location

- **OBSERVED:** Authenticated My open tickets list and Unassigned tickets board/list, inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** Controls were visually and semantically inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** Advanced filters opened a drawer headed All filters. It included “Filter by associated object”, an Add filter action, an AND separator, Advanced filters and Group 1.
- **OBSERVED:** My open tickets showed the rule “Ticket status is none of All closed”, plus actions to add an AND filter or an OR filter group.
- **OBSERVED:** Unassigned tickets displayed Filter (1), but its opened advanced-filter drawer showed no explicit stored rule. The system-view condition was therefore not inferred.
- **OBSERVED:** Priority opened operator “is any of” and a searchable value picker with Low, Medium, High and Urgent, each with a short description.
- **OBSERVED:** Create date exposed operators is, is equal to, is before, is after, is between, is more than, is less than, is known and is unknown.
- **OBSERVED:** The pipeline selector offered All Pipelines and Support Pipeline, plus a Manage pipelines link that opens a new window.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Advanced filters | Activated | Opened the filter drawer. No rule was added, removed or changed. |
| Priority | Keyboard Space | Opened its operator and value controls. No priority was selected. |
| Create date operator | Keyboard Space | Opened the operator list. No operator or date was selected. |
| Support Pipeline | Keyboard Space | Opened All Pipelines, Support Pipeline and Manage pipelines. No selection changed. |
| Escape or route reload | Used after inspection | Returned to the unchanged Tickets view without saving filter edits. |

## Behavior & States

- **OBSERVED:** Quick filters expand inline under their chip. Advanced filters use a side drawer and support grouped AND/OR logic.
- **OBSERVED:** A required-value message appeared while overlapping incomplete quick-filter controls were open. The route was reloaded to discard the transient unsaved state.
- **NOT OBSERVED:** Applied filter results, date picker, filter persistence, URL serialization and populated-result behavior.

## Technical Data

- **OBSERVED / DOM:** Value choices expose checkbox semantics. Operator and pipeline selectors expose popup/list semantics. Board and Table controls expose pressed state.
- **NOT OBSERVED:** Provider query grammar, API requests, saved-view persistence or error recovery.

## Human Context

- **RECOMMENDATION:** Preserve the distinction between visible filter count and inspectable rule text. A badge alone is insufficient evidence for a specific condition.

## AI Context

- **FACT:** Labels, operators and options were observed without applying a new value.
- **NOT OBSERVED:** The results produced by these filters remain untested.

## Needs Verification

- **NEEDS VERIFICATION:** Date picker, applied and cleared filters, saved persistence, populated results, manage-pipelines destination and durable screenshot.

## Sources

- **OBSERVED:** Authenticated HubSpot Tickets views, inspected 2026-10-05.
