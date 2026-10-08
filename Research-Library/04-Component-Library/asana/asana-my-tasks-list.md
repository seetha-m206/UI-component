---
component: "Asana My Tasks List"
ui_category: "Task Management > Task List"
source_product: "Asana"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
---

# Asana My Tasks List

## Location
- **OBSERVED:** Authenticated My tasks List view.

## Structure
- **OBSERVED:** View tabs, toolbar, column headers, grouped sections and editable-looking task rows with due date, collaborators, projects and visibility fields.

## Actions
- **OBSERVED:** Filter, sort, group and options disclosures were opened independently. Task editing and completion were not used.

## Behavior & States
- **OBSERVED:** Sections included recently assigned and empty planning groups. Rows preserved project context.
- **RECONSTRUCTION:** Fixture uses fictional tasks and disables provider writes.

## Technical Data
- **OBSERVED:** Accessibility output exposed table, row and cell semantics alongside role-based controls.

## Needs Verification
- **NOT OBSERVED:** Inline edit validation, reordering, task creation, multi-select and persistence.

## Sources
- **OBSERVED:** Authenticated Asana My tasks, 2026-10-08.
