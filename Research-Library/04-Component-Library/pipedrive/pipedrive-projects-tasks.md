---
component: "Pipedrive Projects Tasks"
ui_category: "Data Display > Data Table"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Projects Tasks

## Location
- **OBSERVED:** Authenticated Projects Tasks screen.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Task split-create control, task count, status, priority, assignee, date, phase and project filters, column customization and a table with completion, subject, project, phase, group and row actions.
## Actions
- **OBSERVED:** No task, completion, filter, column, date-range, project or row action was activated.
## Behavior & States
- **OBSERVED:** The table settled after loading and showed four provider tutorial tasks linked to a provider tutorial project.
- **RECONSTRUCTION:** The local preview replaces all task and project labels with fictional content and guards completion, navigation and filtering.
## Technical Data
- **OBSERVED / DOM:** Table headings, controls, links and checkbox structure were inspected. Provider persistence was not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Checkbox labelling, table navigation, filter announcements, bulk selection and responsive behavior.
## Human Context
- **RECOMMENDATION:** Preserve active filter visibility and make task completion reversible.
## AI Context
- **RECONSTRUCTION:** Fictional tasks prevent provider tutorial or customer context from entering public records.
## Needs Verification
- **NEEDS VERIFICATION:** Task creation, completion, subtasks, columns, filters, detail view, actions, permissions and persistence.
## Sources
- **OBSERVED:** Authenticated Pipedrive Projects Tasks, 2026-10-07.
