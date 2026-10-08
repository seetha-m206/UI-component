---
component: "Trello Personal Cards"
ui_category: "Application Layout > Aggregated Work"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Personal card aggregation with sort, filter and empty-state messaging."
---

# Component: Trello Personal Cards

## Location

- **OBSERVATION:** `/u/:member/cards`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-personal-cards.png)

## Structure and Behavior

- **OBSERVATION:** Due-date sort, filter, disabled clear-filters control and assigned-card empty state.
- **RECONSTRUCTION:** The fixture retains the observed empty state without account identity.

## Actions and States

- **NOT OBSERVED:** Apply filters, change sorting or open a card.
- **NEEDS VERIFICATION:** Populated grouping and cross-board pagination.

## Sources

- **OBSERVATION:** Authenticated personal Cards screen, 2026-10-08.
