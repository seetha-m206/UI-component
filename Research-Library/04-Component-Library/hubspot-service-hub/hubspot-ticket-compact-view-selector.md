---
component: "HubSpot Ticket Compact View Selector"
ui_category: "Navigation > Saved View Selector"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Compact View Selector

## Location

- **OBSERVED:** Authenticated Unassigned tickets board with the Tickets header collapsed, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** The open selector was visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** The compact Unassigned tickets popup opened a search field and a pinned-view list containing All tickets, My open tickets and Unassigned tickets.
- **OBSERVED:** An All views link appeared below the pinned views.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Unassigned tickets popup | Keyboard Space | Opened the saved-view selector. |
| Escape | Keyboard Escape | Closed the selector and preserved the current view. |
| Search, pinned views and All views | Not activated | Filtering, navigation and persistence are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Opening and closing the selector did not change the selected Unassigned tickets view, route, filters or board state.
- **NOT OBSERVED:** Search behavior, view switching, All views destination contents and responsive layout.

## Technical Data

- **OBSERVED / DOM:** The trigger exposed popup expanded state. The panel exposed a settable search text field, a content list of buttons and a link for All views.

## Human Context

- **RECOMMENDATION:** Preserve the active view label while making pinned views searchable in compact page chrome.

## AI Context

- **FACT:** Menu contents were directly observed without selecting a different view.
- **NOT OBSERVED:** View-change outcomes and persistence remain unverified.

## Needs Verification

- **NEEDS VERIFICATION:** Search filtering, selection outcomes, All views contents, focus return and narrow-screen behavior.

## Sources

- **OBSERVED:** Authenticated Unassigned tickets board, inspected 2026-10-06.
