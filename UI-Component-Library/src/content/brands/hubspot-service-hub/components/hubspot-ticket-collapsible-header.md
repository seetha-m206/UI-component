---
component: "HubSpot Ticket Collapsible Header"
ui_category: "Application Layout > Collapsible Header"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "partial"
summary: "Reversible Tickets header compaction that preserves view, filters and layout controls."
---

# HubSpot Ticket Collapsible Header

## Structure

- **OBSERVED:** Expanded state showed title, actions and pinned views. Collapsed state replaced them with the selected-view popup beside Search, Filter and Sort while keeping filters and layout controls.

## Actions

| Action | Result |
| --- | --- |
| Collapse header | Compacted the header and changed the control to Expand header. |
| Expand header | Restored the original rows. |
| Open compact view selector | Revealed search, three pinned views and All views without changing the current view. |

## Technical Data

- **OBSERVED:** Accessible name changed between Collapse header and Expand header. The selected view changed from pinned-list item to popup button.

## Sources

- **OBSERVED:** Authenticated Unassigned tickets board, 2026-10-06.
