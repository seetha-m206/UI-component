---
component: "Asana Board Toolbar"
ui_category: "Filtering and Sorting > Board Toolbar"
source_product: "Asana"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
---

# Asana Board Toolbar

## Location
- **OBSERVED:** Project Board view.

## Structure
- **OBSERVED:** Add task, More actions, Filter, Sort, Group, Options and Search this view controls.

## Actions
- **OBSERVED:** Controls were visible but not activated because the first-project onboarding overlay was present.

## Behavior & States
- **RECONSTRUCTION:** Fixture controls emit local notices and do not save view state or create tasks.

## Needs Verification
- **NOT OBSERVED:** Panel contents, compound rules, URL state, search results and persistence.

## Sources
- **OBSERVED:** Authenticated Asana project board, 2026-10-08.
