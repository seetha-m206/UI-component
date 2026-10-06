---
component: "HubSpot Ticket View Settings Drawer"
ui_category: "Account / Settings > Settings Layout"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Ticket View Settings Drawer

## Location

- **OBSERVED:** Authenticated My open tickets list, inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** Drawer was inspected in the in-app browser. No source screenshot was archived.

## Structure

- **OBSERVED:** The drawer displayed disabled Name value “My open tickets”, view-type choices for Table view and Board view, and Table settings.
- **OBSERVED:** Data controls were grouped as Pipeline, Filters and Sort by. Sharing offered Copy link to view, disabled Manage sharing and Export with shortcut Command-Shift-X.
- **OBSERVED:** Actions included disabled Save changes with Command-S, disabled Reset to last save, Clone to new view and disabled Delete view.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| View settings | Activated | Opened the settings drawer for My open tickets. |
| Escape | Pressed | Closed the drawer and returned focus context to the Tickets page. |
| View type, data, sharing and action controls | Not activated | No view, sharing state, export or saved configuration changed. |

## Behavior & States

- **OBSERVED:** Table view was selected. Controls that require an editable or changed view appeared disabled.
- **NOT OBSERVED:** Dirty-state activation, clone flow, copied link contents, sharing management, export result and persistence.

## Technical Data

- **OBSERVED / DOM:** The drawer exposes labelled controls and keyboard shortcut text. Disabled actions expose disabled semantics.
- **NOT OBSERVED:** Save requests, permission rules, generated URLs and backend state.

## Human Context

- **RECOMMENDATION:** Present configuration, sharing and destructive actions in distinct sections, and keep unavailable actions visibly disabled.

## AI Context

- **FACT:** The drawer was observed against the My open tickets system view.
- **NOT OBSERVED:** Disabled state on this view does not prove the same controls are disabled on cloned or user-owned views.

## Needs Verification

- **NEEDS VERIFICATION:** Editable custom view, changed-state controls, clone flow, sharing permissions, export and durable screenshot.

## Sources

- **OBSERVED:** Authenticated My open tickets list, inspected 2026-10-05.
