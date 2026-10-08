---
component: "Trello Board Filter Panel"
ui_category: "Data Controls > Board Filter Panel"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Keyword, member, completion, due-date, label and activity filters."
---

# Component: Trello Board Filter Panel

## Location

- **OBSERVATION:** Board header Filter cards control.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-board-filter-panel.png)

## Structure

- **OBSERVATION:** Keyword field is followed by Members, Card status, Due date, Labels and Activity sections.
- **OBSERVATION:** Empty-list collapse and match-mode controls sit at the end.

## Behavior

- **OBSERVATION:** Every criterion exposes an unchecked current state.
- **RECONSTRUCTION:** Local checkboxes update the fixture only and can be cleared.

## Actions

- **OBSERVATION:** Open and close filter panel.
- **NOT OBSERVED:** Enter keyword, select criteria, collapse lists or change match mode.

## States

- **OBSERVATION:** No active filters with label colors available.
- **NEEDS VERIFICATION:** Filter persistence, URL representation and collaborative visibility.

## Rules and Validation

- **RECONSTRUCTION:** No query or filter state leaves the preview.

## Technical Data

- **OBSERVATION:** Text field, checkbox groups, comboboxes and a toggle are exposed semantically.

## Lessons

- **RECOMMENDATION:** Group filters by object property and keep list-collapse behavior separate from match logic.

## Sources

- **OBSERVATION:** Authenticated Trello board filter, 2026-10-08.
- **NOT OBSERVED:** Filter application outcome.
