---
component: "Trello Board Switcher"
ui_category: "Navigation > Board Switcher"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Searchable board switcher with workspace tabs, recents and pin control."
---

# Component: Trello Board Switcher

## Location

- **OBSERVATION:** Bottom island navigation Switch boards control.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-board-switcher.png)

## Structure

- **OBSERVATION:** Search, list-view and pin controls sit above workspace tabs.
- **OBSERVATION:** Recent boards are shown as a link table with separate star controls.

## Behavior

- **OBSERVATION:** Switcher overlays and dims the board without navigating.
- **RECONSTRUCTION:** Search filters fictional boards locally.

## Actions

- **OBSERVATION:** Open and dismiss the switcher.
- **NOT OBSERVED:** Search, select, star or pin.

## States

- **OBSERVATION:** All tab selected with one recent board.
- **NEEDS VERIFICATION:** Many-workspace grouping, empty results and pinned-sidebar persistence.

## Rules and Validation

- **RECONSTRUCTION:** Board selection never leaves the catalogue.

## Technical Data

- **OBSERVATION:** Modal-like overlay with tab group, search field, link table and star action.

## Lessons

- **RECOMMENDATION:** Combine fuzzy search, workspace scope and recent context in one navigation surface.

## Sources

- **OBSERVATION:** Authenticated Trello board switcher, 2026-10-08.
- **NOT OBSERVED:** Selection persistence.
