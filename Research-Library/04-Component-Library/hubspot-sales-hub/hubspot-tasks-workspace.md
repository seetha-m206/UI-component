---
component: "HubSpot Tasks Workspace"
ui_category: "Productivity > Task Management"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Tasks Workspace

## Location

- **OBSERVED:** Tasks at `/contacts/343751787/objects/0-27/views/all/list` and `/board`.

## Screenshots

- **OBSERVED:** `2026-10-07-tasks-empty-list.png`, `2026-10-07-tasks-add-menu.png`, `2026-10-07-tasks-sort.png`, and `2026-10-07-tasks-empty-board.png`.

## Structure

- **OBSERVED:** Pinned views include All tasks, Due today, Overdue and Upcoming.
- **OBSERVED:** The header provides search, filters, sorting, list or board layout, view settings and Add tasks.
- **OBSERVED:** Add tasks disclosed Create new and Import without entering either flow.
- **OBSERVED:** The empty table state explains delayed indexing and offers Refresh, Export and Clone.
- **OBSERVED:** Board view groups zero tasks into Not Started, In Progress, Waiting, Completed and Deferred stages.
- **OBSERVED:** A calendar connection prompt links to settings but was not followed.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Add tasks | Open, then close | Disclosed Create new and Import. |
| Sort by | Open, then close | Due date with Oldest selected and Most recent available. |
| Board view | Select | Re-rendered the same view as five task-stage columns. |
| Create, Import, Export, Clone and calendar settings | Not activated | Write, transfer and configuration behavior remains **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** List and board representations share the same saved-view and filter shell.
- **OBSERVED:** Empty-state copy distinguishes no results from a possible indexing delay.
- **NEEDS VERIFICATION:** Task creation, drag-and-drop stage updates, reminders, bulk actions and saved-view persistence.

## Technical Data

- **OBSERVED / DOM:** Tasks use CRM object type `0-27`. Layout is encoded as the terminal `/list` or `/board` route segment.
- **NEEDS VERIFICATION:** Task mutation endpoints, board ordering and calendar-sync behavior.

## AI Context

- **FACT:** All recorded states were directly observed in an empty portal view.
- **RECONSTRUCTION:** Local fixtures must use fictional assignees and tasks.
- **NEEDS VERIFICATION:** No task was created, imported, exported, cloned or moved.

## Sources

- Authenticated HubSpot Tasks workspace, observed 2026-10-07.
