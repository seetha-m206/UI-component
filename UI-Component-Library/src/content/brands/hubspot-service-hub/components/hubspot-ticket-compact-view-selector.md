---
component: "HubSpot Ticket Compact View Selector"
ui_category: "Navigation > Saved View Selector"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "partial"
summary: "Searchable pinned-view selector exposed by the collapsed Tickets header."
---

# HubSpot Ticket Compact View Selector

## Structure

- **OBSERVED:** The open selector contained search, All tickets, My open tickets, Unassigned tickets and an All views link.

## Actions

| Action | Result |
| --- | --- |
| Open selected view | Revealed search and pinned views. |
| Escape | Closed the menu without changing the active view. |

## Technical Data

- **OBSERVED:** The trigger exposed popup expanded state. Search was a settable text field and pinned views were buttons in a content list.

## Sources

- **OBSERVED:** Authenticated Unassigned tickets board, 2026-10-06.
