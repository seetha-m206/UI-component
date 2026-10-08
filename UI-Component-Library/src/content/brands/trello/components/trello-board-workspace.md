---
component: "Trello Board Workspace"
ui_category: "Application Layout > Kanban Board Workspace"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Three-pane Inbox, Planner and Board composition with lists and cards."
---

# Component: Trello Board Workspace

## Location

- **OBSERVATION:** `/b/:boardId/:slug`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-board-workspace.png)

## Structure

- **OBSERVATION:** Inbox, optional Planner and Board are resizable adjacent panes.
- **OBSERVATION:** Board header exposes views, filters, visibility, sharing and menu controls.
- **OBSERVATION:** Lists contain count, collapse, overflow, card stack, add-card and template boundaries.

## Behavior

- **OBSERVATION:** Horizontal board scrolling coexists with independent pane scrolling.
- **RECONSTRUCTION:** Fictional cards collapse locally and cannot persist.

## Actions

- **OBSERVATION:** Open existing cards and safe transient menus.
- **NOT OBSERVED:** Add, edit, move, complete, archive or reorder board content.

## States

- **OBSERVATION:** One populated onboarding list and multiple empty lists.
- **NEEDS VERIFICATION:** Drag behavior, collaborative updates and large-board virtualization.

## Rules and Validation

- **RECONSTRUCTION:** All write-shaped card and list actions are inert.

## Technical Data

- **OBSERVATION:** Semantic board list, editable titles, sliders and nested card controls.

## Lessons

- **RECOMMENDATION:** Keep capture, planning and delivery contexts visible without forcing a route change.

## Sources

- **OBSERVATION:** Authenticated Trello board workspace, 2026-10-08.
- **NOT OBSERVED:** Board mutations or persistence.
