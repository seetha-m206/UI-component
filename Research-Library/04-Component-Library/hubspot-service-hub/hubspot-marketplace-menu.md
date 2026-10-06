---
component: "HubSpot Marketplace Menu"
ui_category: "Navigation > Context Menu"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Marketplace Menu

## Location

- **OBSERVED:** Shared authenticated global toolbar above Unassigned tickets, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** Visually and semantically inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** The Marketplace control opened a dark floating menu containing HubSpot Marketplace, Connected Apps, Marketplace Downloads and Added Agents.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Marketplace | Keyboard Space | Opened the menu and exposed expanded state. |
| Marketplace | Keyboard Space while open | Closed the menu. |
| Four destinations | Not activated | Marketplace, connection, download and agent-management screens are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The menu anchors below the toolbar control and leaves the Tickets screen unchanged.
- **NOT OBSERVED:** Destination loading, badges, permissions, installed-state variants and errors.

## Technical Data

- **OBSERVED / DOM:** The trigger is an expandable button. All four menu items are links with distinct authenticated routes.
- **NOT OBSERVED:** Destination APIs, installation flows or entitlement logic.

## Human Context

- **RECOMMENDATION:** Group discovery, installed connections, downloads and agents under one marketplace entry while preserving explicit destination names.

## AI Context

- **FACT:** Menu labels and destinations were observed without following them.
- **NOT OBSERVED:** Presence of a link does not establish installed apps, downloads or agents.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, keyboard navigation, destination screens and installed/empty states.

## Sources

- **OBSERVED:** Authenticated HubSpot Marketplace menu, inspected 2026-10-06.
