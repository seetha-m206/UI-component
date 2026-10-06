---
component: "HubSpot Ticket Index Customization"
ui_category: "Account / Settings > Index Customization"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Index Customization

## Location

- **OBSERVED:** Authenticated Ticket Index Customization and Manage Views default configuration, inspected 2026-10-06.

## Structure

- **OBSERVED:** Customize Index Page offered All Views and Default view customization with descriptions of their scope.
- **OBSERVED:** Default view customization opened Manage Views with disabled Save, expanded Standard Views and Custom Views, search, three pinned views and a scope note.
- **OBSERVED:** The note said defaults apply to users who have not customized their own pinned views, while already customized users are unaffected.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Index Customization tab | Page visit | Loaded the two index-management destinations. |
| Default view customization | Keyboard Return | Opened Manage Views with Save disabled. |
| View selection, ordering, search, feedback and Save | Not activated | Editing and persistence are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The current pinned views were All tickets, My open tickets and Unassigned tickets.
- **NOT OBSERVED:** Changed defaults, search results, reorder behavior, Save enablement and user propagation.

## Technical Data

- **OBSERVED / DOM:** Standard and Custom sections exposed expanded state. Save and Assistant collaboration were disabled.

## Human Context

- **RECOMMENDATION:** Explain the audience and precedence of account defaults directly beside the configuration controls.

## AI Context

- **FACT:** Existing pinned views and the untouched default configuration were observed.

## Needs Verification

- **NEEDS VERIFICATION:** Editing, save validation, persistence, permission differences and effect on new versus existing users.

## Sources

- **OBSERVED:** Authenticated Ticket Index Customization and Manage Views screens, inspected 2026-10-06.
