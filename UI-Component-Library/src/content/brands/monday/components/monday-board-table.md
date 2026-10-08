---
component: 'monday.com Board Table'
ui_category: 'Data Display > Project Board Table'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Grouped project table with owner, status, due date and summaries observed.'
---

# Component: monday.com Board Table

## Location

- **OBSERVATION:** Existing board at `/boards/:id`.
- **RECONSTRUCTION:** Fictional rows replace provider member identity and dates.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-board-table.png)

## Structure

- **OBSERVATION:** Board header, main-table view, toolbar and grouped table canvas.
- **OBSERVATION:** Task, Owner, Status and Due date columns with group headers, row menus and column summaries.
- **OBSERVATION:** To-Do group contains three tasks. Completed group is empty.

## Behavior

- **OBSERVATION:** Groups can collapse. Columns expose sorting and options. Rows expose more actions.
- **RECONSTRUCTION:** Local group collapse is reversible and does not edit provider data.

## Actions

- **OBSERVATION:** New task, add group, column options, sort and row menus are visible.
- **NOT OBSERVED:** Task editing, assignment, status or date change, item move, add or delete.

## States

- **OBSERVATION:** Working on it, Done and Stuck status labels, one assigned row and two unassigned rows.
- **NEEDS VERIFICATION:** Large-board virtualization, subitems, dependencies, formulas and permission locks.

## Rules and Validation

- **RECONSTRUCTION:** Fictional rows use Alex, Jordan and Casey with non-current dates.

## Technical Data

- **OBSERVATION:** Groups and rows are exposed as content lists rather than a native table.
- **INFERENCE:** Virtualized list semantics support large boards but do not establish performance limits.

## Lessons

- **RECOMMENDATION:** Pair flexible column types with strong group identity and summary feedback.

## Sources

- **OBSERVATION:** Authenticated monday.com project board, 2026-10-08.
- **NOT OBSERVED:** Provider write calls and persistence.
