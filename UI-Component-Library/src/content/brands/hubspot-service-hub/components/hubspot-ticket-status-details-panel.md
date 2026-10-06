---
component: "HubSpot Ticket Status Details Panel"
ui_category: "Data Display > Board Column Settings"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "partial"
summary: "Untouched board-column status editor with a global-scope warning and disabled Save."
---

# HubSpot Ticket Status Details Panel

## Structure

- **OBSERVED:** The panel retained sort controls and showed a warning, Status name New, empty description, 18 color choices, selected #016DE1, disabled Save and Cancel.

## Actions

| Action | Result |
| --- | --- |
| New column header | Opened the sort and status-details panel. |
| Escape | Closed it without editing any value. |

## Technical Data

- **OBSERVED:** Name and description were settable fields. Color choices were named by hex value.

## Sources

- **OBSERVED:** Authenticated Unassigned tickets board, 2026-10-06.
