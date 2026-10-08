---
component: "Trello Planner Agenda"
ui_category: "Scheduling > Agenda Planner"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Agenda planner with calendar connection boundary and empty dated rows."
---

# Component: Trello Planner Agenda

## Location

- **OBSERVATION:** Planner pane inside the board workspace.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-planner-agenda.png)

## Structure

- **OBSERVATION:** Date selector, previous, today, next, view and options controls form the toolbar.
- **OBSERVATION:** Calendar-connection education precedes dated agenda rows.
- **OBSERVATION:** Agenda and board remain visible side by side.

## Behavior

- **OBSERVATION:** Empty dates show Nothing planned while the pane scrolls independently.
- **RECONSTRUCTION:** Fictional dates remain fixed and calendar connection is disabled.

## Actions

- **OBSERVATION:** Open Planner and inspect its empty agenda.
- **NOT OBSERVED:** Connect account, change date, drag cards or schedule work.

## States

- **OBSERVATION:** Agenda view, no connected calendar and no planned items.
- **NEEDS VERIFICATION:** Connected-calendar events, drag/drop, timezone and conflict states.

## Rules and Validation

- **RECONSTRUCTION:** No calendar authorization or scheduling mutation exists.

## Technical Data

- **OBSERVATION:** Resizable pane with scrollable date groups and a connection callout.

## Lessons

- **RECOMMENDATION:** Pair unscheduled work with a calendar view while keeping connection optional.

## Sources

- **OBSERVATION:** Authenticated Trello Planner agenda, 2026-10-08.
- **NOT OBSERVED:** Calendar provider behavior.
