---
component: "Trello Board Views Menu"
ui_category: "Navigation > Board View Selector"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Board, table, calendar, dashboard, timeline and map view disclosure with Premium gate."
---

# Component: Trello Board Views Menu

## Location

- **OBSERVATION:** Board header Views disclosure.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-board-views-menu.png)

## Structure

- **OBSERVATION:** Menu lists Board, Table, Calendar, Dashboard, Timeline and Map.
- **OBSERVATION:** Premium badge and explanatory availability copy precede the options.

## Behavior

- **OBSERVATION:** Disclosure opens above the board and closes without navigation.
- **RECONSTRUCTION:** View choices change only the local selected marker.

## Actions

- **OBSERVATION:** Open and close the menu.
- **NOT OBSERVED:** Navigate into paid views or save a view.

## States

- **OBSERVATION:** Board is the current view and alternatives are premium-labelled.
- **NEEDS VERIFICATION:** Per-view entitlements and route-loading failures.

## Rules and Validation

- **RECONSTRUCTION:** Premium navigation remains local and consequence-free.

## Technical Data

- **OBSERVATION:** Popover heading plus link list to route-specific views.

## Lessons

- **RECOMMENDATION:** Explain the entitlement once at the group level rather than repeating it on every row.

## Sources

- **OBSERVATION:** Authenticated Trello board Views menu, 2026-10-08.
- **NOT OBSERVED:** Paid-view contents.
