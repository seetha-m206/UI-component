---
component: "Trello Planner Controls"
ui_category: "Scheduling > Planner View and Filter Controls"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Planner range options and due-card filtering without calendar connection."
---

# Component: Trello Planner Controls

## Location

- **OBSERVATION:** Planner Change view and More menu options disclosures.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-planner-controls.png)

## Structure

- **OBSERVATION:** Fit, Day, Week, Month, Custom and Agenda form a radio group.
- **OBSERVATION:** Due-card filter includes assigned-to-me and personal-board switches.
- **OBSERVATION:** More options reveals per-board rule search and Add boundary.

## Behavior

- **OBSERVATION:** Agenda is selected and both default due-card filters are on.
- **RECONSTRUCTION:** Local controls change only preview labels.

## Actions

- **OBSERVATION:** Open view, options, filter and more-options disclosures.
- **NOT OBSERVED:** Change view, toggle filters, select board or add override.

## States

- **OBSERVATION:** Agenda plus two enabled due-card filters.
- **NEEDS VERIFICATION:** Custom range configuration and per-board override persistence.

## Rules and Validation

- **RECONSTRUCTION:** Add and account controls are disabled.

## Technical Data

- **OBSERVATION:** Radio group, switches, combobox and nested popovers expose current state.

## Lessons

- **RECOMMENDATION:** Put broad defaults first and reveal per-board exceptions only on demand.

## Sources

- **OBSERVATION:** Authenticated Trello Planner controls, 2026-10-08.
- **NOT OBSERVED:** Planner filter persistence.
