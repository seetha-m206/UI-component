---
component: "Trello Board Menu and Settings"
ui_category: "Settings and Administration > Board Menu and Settings"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Board utilities, integration boundaries and non-mutating settings disclosure."
---

# Component: Trello Board Menu and Settings

## Location

- **OBSERVATION:** Board header Show menu control and Settings subpanel.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-board-menu-and-settings.png)

## Structure

- **OBSERVATION:** Menu groups identity/access, appearance, extensions, activity and lifecycle actions.
- **OBSERVATION:** Settings exposes workspace, permissions, completion status, covers and premium collections.
- **OBSERVATION:** Close-board and report-abuse boundaries remain separated at the bottom.

## Behavior

- **OBSERVATION:** Settings replaces the menu body and provides a back control.
- **RECONSTRUCTION:** Preview supports menu-to-settings navigation while all switches remain inert.

## Actions

- **OBSERVATION:** Open menu, open settings and return.
- **NOT OBSERVED:** Share, export, star, change background, enable extensions, watch, copy, close or report.

## States

- **OBSERVATION:** Private board with completion status and covers enabled.
- **NEEDS VERIFICATION:** Permission combinations, collection entitlement and lifecycle confirmations.

## Rules and Validation

- **RECONSTRUCTION:** Consequential actions produce a local boundary notice only.

## Technical Data

- **OBSERVATION:** Nested popover state combines buttons, links, checkboxes and disabled permission copy.

## Lessons

- **RECOMMENDATION:** Keep high-frequency tools above a divider and irreversible lifecycle actions at the end.

## Sources

- **OBSERVATION:** Authenticated Trello board menu and settings, 2026-10-08.
- **NOT OBSERVED:** Any provider setting change.
