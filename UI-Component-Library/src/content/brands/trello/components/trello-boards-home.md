---
component: "Trello Boards Home"
ui_category: "Application Layout > Product Home and Recents"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Boards landing page with templates, recents and workspace board inventory."
---

# Component: Trello Boards Home

## Location

- **OBSERVATION:** `/u/:member/boards`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-boards-home.png)

## Structure

- **OBSERVATION:** Boards, Templates and Home navigation sit beside workspace navigation.
- **OBSERVATION:** Popular templates, recent boards and workspace board grids occupy the main content.
- **RECONSTRUCTION:** Fixture uses a fictional studio and project board.

## Behavior

- **OBSERVATION:** Existing boards open from both recent and workspace sections.
- **RECONSTRUCTION:** Local cards select a preview state without creating a board.

## Actions

- **OBSERVATION:** Open an existing board or browse template entries.
- **NOT OBSERVED:** Create board, dismiss recommendations or start from a template.

## States

- **OBSERVATION:** Populated recent and workspace sections with a create-new-board boundary.
- **NEEDS VERIFICATION:** Empty recents, multi-workspace ordering and recommendation personalization.

## Rules and Validation

- **RECONSTRUCTION:** Create controls remain disabled.

## Technical Data

- **OBSERVATION:** Board cards are link surfaces with separate star controls.

## Lessons

- **RECOMMENDATION:** Separate discovery, recent work and owned work into clear visual groups.

## Sources

- **OBSERVATION:** Authenticated Trello boards home, 2026-10-08.
- **NOT OBSERVED:** Board creation outcome.
