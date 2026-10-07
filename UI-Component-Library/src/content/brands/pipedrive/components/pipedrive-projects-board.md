---
component: "Pipedrive Projects Board"
ui_category: "Data Display > Kanban Board"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Empty delivery board with first-use welcome overlay."
---

# Pipedrive Projects Board

## Location
- **OBSERVED:** Authenticated Projects board.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Projects, Templates, Archive and Tasks navigation, Board and List switcher, Project split-create control, board selector, Edit board, Filter and Actions, six empty delivery columns and a first-use welcome overlay.
## Actions
- **OBSERVED:** No project, template, task, board edit, filter, feedback, user-management or welcome action was activated.
## Behavior & States
- **OBSERVED:** Delivery board columns were Kick-off, Setup, Configuration, Testing, Go-Live and Support, each with zero projects.
- **RECONSTRUCTION:** The local preview preserves the empty board and welcome overlay with guarded controls.
## Technical Data
- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network and API behavior were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Board keyboard model, focus restoration, announcements, drag alternatives and responsive behavior.
## Human Context
- **RECOMMENDATION:** Keep onboarding dismissible and ensure the empty board remains understandable behind it.
## AI Context
- **RECONSTRUCTION:** Public fixtures contain no provider or customer project data.
## Needs Verification
- **NEEDS VERIFICATION:** Project creation, board editing, filtering, templates, archive, tasks, permissions and persistence.
## Sources
- **OBSERVED:** Authenticated Pipedrive Projects board, 2026-10-07.
