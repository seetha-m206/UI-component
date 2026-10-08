---
component: "Trello Card Action Menus"
ui_category: "Contextual Actions > Card Action Menus"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Card actions and add-to-card disclosures with consequence boundaries."
---

# Component: Trello Card Action Menus

## Location

- **OBSERVATION:** Existing card Actions and Add to card controls.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-card-action-menus.png)

## Structure

- **OBSERVATION:** Actions menu contains Join, Move, Jira work item, Mirror, Make template, Watch, Share and Archive.
- **OBSERVATION:** Add-to-card menu contains Labels, Dates, Checklist, Members, Attachment, Location and Custom Fields.

## Behavior

- **OBSERVATION:** Each disclosure is transient and anchored to the card dialog.
- **RECONSTRUCTION:** Menu choice changes a local explanation without invoking a provider action.

## Actions

- **OBSERVATION:** Open and close both menus.
- **NOT OBSERVED:** Any join, move, integration, template, watch, share, archive or field-add action.

## States

- **OBSERVATION:** Existing card with neither action menu selected.
- **NEEDS VERIFICATION:** Permission-dependent items and confirmation subflows.

## Rules and Validation

- **RECONSTRUCTION:** Consequential rows are disabled or intercepted locally.

## Technical Data

- **OBSERVATION:** Popover lists mix buttons and toggle-like checkbox rows.

## Lessons

- **RECOMMENDATION:** Separate adding structured metadata from lifecycle and integration actions.

## Sources

- **OBSERVATION:** Authenticated Trello card action menus, 2026-10-08.
- **NOT OBSERVED:** Card action consequences.
