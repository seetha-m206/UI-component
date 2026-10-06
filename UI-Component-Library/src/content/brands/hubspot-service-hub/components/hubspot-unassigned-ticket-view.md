---
component: "HubSpot Unassigned Ticket View"
ui_category: "Search and Filtering > Saved Views"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "partial"
summary: "Unassigned tickets saved view across list and four-column board layouts with a filtered empty result."
---

# HubSpot Unassigned Ticket View

## Screen level

- **OBSERVED:** The pinned Unassigned tickets view displayed Filter (1) and the quick-filter row. Table and Board layouts shared the same filtered empty message and 0-ticket result.
- **OBSERVED:** Board view showed New, Waiting on contact, Waiting on us and Closed, each with count 0.

## Action level

| Control | Observed behavior |
| --- | --- |
| Unassigned tickets | Navigated to the list route. |
| Board view | Navigated to the board route and selected the four-column layout. |
| Refresh, Export, Clone and Clear all | Not activated. |

## Evidence boundary

- **NOT OBSERVED:** Populated records, drag and drop, pagination, bulk actions, export, clone or refresh outcomes.
- **NEEDS VERIFICATION:** Durable screenshots and populated states.
- **SOURCE:** Authenticated Unassigned tickets board and list, inspected 2026-10-05.
