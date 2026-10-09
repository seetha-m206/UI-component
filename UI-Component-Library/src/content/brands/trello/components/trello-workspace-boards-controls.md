---
component: "Trello Workspace Boards Controls"
ui_category: "Application Layout > Workspace Inventory"
source_product: "Trello"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Workspace board inventory with sort, collection filter, search and empty-collection disclosure."
---

# Component: Trello Workspace Boards Controls

## Location

- **OBSERVATION:** `/w/:workspace`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-workspace-boards-controls.png)

## Structure and Behavior

- **OBSERVATION:** The settings-shell Boards view combines template recommendations with a board inventory.
- **OBSERVATION:** Inventory controls include four sort choices, a collection filter, board-name search, create-board boundary, existing board tiles and add-collection entry.
- **OBSERVATION:** With no collections, opening the filter shows an education panel and Create a collection boundary.
- **RECONSTRUCTION:** Fictional boards and identity are used. Sorting, filtering and search run locally only.

## Actions and States

- **NOT OBSERVED:** Applying a provider sort, entering a provider search, creating a collection, assigning a board to a collection, creating a board or starring a board.
- **NEEDS VERIFICATION:** Populated collection options, persisted sort behavior, large inventories and pagination.

## Sources

- **OBSERVATION:** Authenticated workspace Boards screen and reversible sort and collection disclosures, 2026-10-09.
