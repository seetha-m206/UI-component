---
component: 'monday.com Board Controls'
ui_category: 'Data Controls > Board Filter and Display Controls'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Quick filters, column display and group-by controls observed without applying changes.'
---

# Component: monday.com Board Controls

## Location

- **OBSERVATION:** Board toolbar at `/boards/:id`.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-board-controls.png)

## Structure

- **OBSERVATION:** Person filter, all-column quick filter, sort, hidden-column and group-by controls sit above the board.
- **OBSERVATION:** Quick filters enumerate task names, owners, status labels, date buckets and groups.
- **OBSERVATION:** Display panel shows selected columns. Group-by panel exposes column, sort and empty-group controls.

## Behavior

- **OBSERVATION:** Clear and save actions remain disabled before a selection.
- **RECONSTRUCTION:** Preview panels open and close, while options only produce boundary notices.

## Actions

- **OBSERVATION:** Open and close quick-filter, display-column and group-by panels.
- **NOT OBSERVED:** Filter choice, sorting, column hiding, grouping, applying or saving a view.

## States

- **OBSERVATION:** Three displayed data columns and no active filter or group-by selection.
- **NEEDS VERIFICATION:** Multi-condition logic, saved-view persistence and collaborative filter visibility.

## Rules and Validation

- **RECONSTRUCTION:** No control sends data or persists a selection.

## Technical Data

- **OBSERVATION:** Pop-up buttons, comboboxes, checkboxes and disabled save actions expose control state.

## Lessons

- **RECOMMENDATION:** Keep filtering, display and grouping separate while exposing disabled save affordances until state changes.

## Sources

- **OBSERVATION:** Authenticated monday.com board controls, 2026-10-08.
- **NOT OBSERVED:** Saved-view and filter mutation contracts.
