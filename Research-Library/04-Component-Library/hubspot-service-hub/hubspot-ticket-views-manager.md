---
component: "HubSpot Ticket Views Manager"
ui_category: "Navigation > Views Management Screen"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Views Manager

## Location

- **OBSERVED:** Authenticated All Views destination opened from the compact Tickets view selector, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** No durable provider screenshot was archived.

## Structure

- **OBSERVED:** A standalone All Views screen provided Back, All views and Default views controls, Search views, Tickets object selector, Owner filter, Clear All and Standard views.
- **OBSERVED:** The current state displayed “No matches for the current filters” and a catch-up message.
- **OBSERVED:** Default view customization opened Manage Views with disabled Save, expandable Standard Views and Custom Views, three pinned ticket views and a note explaining that defaults apply only to users who have not customized their views.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| All views destination | Page visit | Opened the view-management screen without changing the selected ticket view. |
| Default view customization | Page visit | Opened Manage Views with Save disabled. |
| Search, filters, checkboxes, pinned views and Save | Not activated | Filtering, selection and persistence are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Both management states loaded without ticket records. Save remained disabled in the untouched default-view configuration.
- **NOT OBSERVED:** View filtering, default selection changes, validation, save outcomes and user-specific application.

## Technical Data

- **OBSERVED / DOM:** Search was a settable field. Standard and custom groups exposed expanded state. The three pinned views were buttons and Save was disabled.

## Human Context

- **RECOMMENDATION:** Separate personal view discovery from account-wide defaults and state clearly which users a default change affects.

## AI Context

- **FACT:** No view selection or account default was changed.

## Needs Verification

- **NEEDS VERIFICATION:** Search and filter results, reorder behavior, default changes, Save enablement, persistence and permission differences.

## Sources

- **OBSERVED:** Authenticated Tickets All Views and Manage Views screens, inspected 2026-10-06.
