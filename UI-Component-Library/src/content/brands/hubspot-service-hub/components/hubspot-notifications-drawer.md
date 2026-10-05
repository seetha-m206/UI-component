---
component: "HubSpot Notifications Drawer"
ui_category: "Feedback > Notification Center"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "partial"
summary: "Shared Notifications drawer with Unread, All and Trash tabs and a zero-unread educational empty state."
---

# HubSpot Notifications Drawer

## Screen level

- **OBSERVED:** The right drawer contained Unread (0), All, Trash and Notification Preferences. Unread showed no notifications plus education about mentions, assignments and unassigned email, with an Invite your team CTA.

## Action level

| Control | Observed behavior |
| --- | --- |
| Notifications | Keyboard Space opened the drawer. |
| Close | Keyboard Space closed the loaded drawer. |
| All, Trash, Preferences and Invite your team | Not activated. |

## Evidence boundary

- **NOT OBSERVED:** Populated rows, read transitions, trash behavior, invitation or preferences.
- **NEEDS VERIFICATION:** Durable screenshot and populated states.
- **SOURCE:** Authenticated HubSpot shared toolbar, inspected 2026-10-05.
