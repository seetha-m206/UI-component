---
component: "Trello Personal Card Filters"
ui_category: "Forms and Controls > Filter Panels"
source_product: "Trello"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Personal-card filtering by keyword, completion, due date, board and activity with sort disclosure."
---

# Component: Trello Personal Card Filters

## Location

- **OBSERVATION:** `/u/:member/cards`, opened from Filter cards and Sort by due date.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-personal-card-filters.png)

## Structure and Behavior

- **OBSERVATION:** The filter popover includes card-name keyword, completion state, due-date windows, board selection and recent-activity windows.
- **OBSERVATION:** The separate sort disclosure offers board and due-date ordering.
- **OBSERVATION:** Clear filters remains disabled when no filter is active.
- **RECONSTRUCTION:** All controls operate only on fictional local state.

## Actions and States

- **NOT OBSERVED:** Applying a provider filter, changing provider sort order or opening a provider card.
- **NEEDS VERIFICATION:** Populated results, combined predicates, filter persistence and large-result behavior.

## Sources

- **OBSERVATION:** Authenticated personal Cards screen filter and sort disclosures, 2026-10-09.
