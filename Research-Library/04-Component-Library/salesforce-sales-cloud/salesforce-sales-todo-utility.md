---
component: "Salesforce Sales To Do Utility"
ui_category: "Application Layout > Utility Panel"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales To Do Utility

## Location

- **OBSERVED:** Persistent utility bar opened over the Sales Leads screen.

## Screenshot

- **RECONSTRUCTION:** A fictional local To Do fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Header with minimize and pop-out, navigation-panel control, All scope, search, refresh, sort, filter, list actions, item count and New Task.
- **OBSERVED:** Empty copy read “Ahh, a clean slate” and described labels and colors.

## Actions

| Element and action | Result or boundary                        |
| ------------------ | ----------------------------------------- |
| Open To Do List    | Expanded the utility panel.               |
| Minimize           | Returned it toward the utility-bar state. |

## Behavior & States

- **OBSERVED:** The inspected state contained zero tasks and reported sorting by Created Date.
- **NOT OBSERVED:** Creating, completing, labeling, filtering or editing a task.

## Technical Data

- **OBSERVED / DOM:** Utility panel was exposed as a dialog inside the utility bar with labelled controls.

## Needs Verification

- **NEEDS VERIFICATION:** Populated task rows, task composer validation and durable state.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-todo-utility`.
