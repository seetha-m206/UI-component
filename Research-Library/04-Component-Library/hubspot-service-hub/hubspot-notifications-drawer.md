---
component: "HubSpot Notifications Drawer"
ui_category: "Feedback > Notification Center"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Notifications Drawer

## Location

- **OBSERVED:** Shared authenticated application toolbar over the Unassigned tickets board, inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** The drawer was visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** A right-side drawer headed Notifications contained tabs Unread (0), All and Trash, plus a Notification Preferences link.
- **OBSERVED:** The selected Unread tab showed “You don’t have any unread notifications”. A secondary empty-state panel explained team mentions, contact assignments and new unassigned email notifications, illustrated with fictional examples, and offered Invite your team.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Notifications toolbar button | Keyboard Space | Opened the drawer. |
| Close | Keyboard Space | Closed the loaded drawer. |
| All, Trash, Notification Preferences and Invite your team | Not activated | Their content and outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The toolbar button exposed expanded state while the panel was open. The drawer overlaid the right side of the Tickets screen.
- **NOT OBSERVED:** Loaded notifications, read/unread transitions, trash actions, invitation flow, preferences and error states.

## Technical Data

- **OBSERVED / DOM:** The drawer was hosted in the notification application frame and exposed a Close button, tab-like buttons, a preferences link and one CTA.
- **NOT OBSERVED:** Notification polling, read receipts, deletion behavior, routing and persistence.

## Human Context

- **RECOMMENDATION:** Separate the primary empty result from the educational panel and keep the unread count visible in the tab label.

## AI Context

- **FACT:** The authenticated account displayed zero unread notifications at inspection time.
- **NOT OBSERVED:** All and Trash counts were not inspected.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, populated notification rows, tab switching, read state, trash recovery, invite flow and preferences.

## Sources

- **OBSERVED:** Authenticated HubSpot shared toolbar and notification drawer, inspected 2026-10-05.
