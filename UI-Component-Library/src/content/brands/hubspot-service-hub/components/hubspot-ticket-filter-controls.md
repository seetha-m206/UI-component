---
component: "HubSpot Ticket Filter Controls"
ui_category: "Search and Filtering > Filter Panel"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "partial"
summary: "Advanced grouped filters, quick-filter operators, priority values and pipeline selector on Tickets views."
---

# HubSpot Ticket Filter Controls

## Screen level

- **OBSERVED:** Advanced filters opened All filters with association filtering and grouped AND/OR rules. My open tickets showed “Ticket status is none of All closed”. Unassigned tickets showed Filter (1) without an explicit drawer rule.
- **OBSERVED:** Priority values were Low, Medium, High and Urgent. Create date offered is, equal, before, after, between, more than, less than, known and unknown operators. Pipeline offered All Pipelines and Support Pipeline.

## Action level

| Control | Observed behavior |
| --- | --- |
| Advanced filters | Opened the drawer without changing a rule. |
| Priority and Create date | Opened option lists without applying a value. |
| Support Pipeline | Opened the pipeline list without changing selection. |
| Reload | Discarded the transient incomplete filter state. |

## Evidence boundary

- **NOT OBSERVED:** Applied results, date picker, persistence, populated results or pipeline management.
- **NEEDS VERIFICATION:** Durable screenshot and reversible applied-filter tests.
- **SOURCE:** Authenticated HubSpot Tickets views, inspected 2026-10-05.
