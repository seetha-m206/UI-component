---
component: "Salesforce Sales Opportunity Kanban and Filters"
ui_category: "Pipeline > Kanban Board"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales Opportunity Kanban and Filters

## Location

- **OBSERVED:** Sales → Opportunities → All Opportunities, switched from Table to Kanban.

## Screenshot

- **RECONSTRUCTION:** A fictional local empty pipeline fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Display menu offered Table, Kanban and Split View.
- **OBSERVED:** Empty Kanban retained search, list controls, refresh, Show more details, charts and filters, and showed “You don't have any Opportunities.”
- **OBSERVED:** Filter drawer contained owner scope All opportunities plus Add Filter and Remove All.

## Actions

| Element and action | Result or boundary                                     |
| ------------------ | ------------------------------------------------------ |
| Choose Kanban      | Rendered the empty board and Show more details toggle. |
| Open Filters       | Revealed the owner filter and filter actions.          |
| Close Filters      | Restored the board without saving a filter.            |

## Behavior & States

- **OBSERVED:** Switching presentation was reversible. No card existed to drag.
- **NOT OBSERVED:** Populated stages, totals, cards, drag and drop, inline edits, assignments or saved filters.

## Technical Data

- **OBSERVED / DOM:** The presentation selector was a menu with selected-state values. Filters used a labelled drawer heading and explicit close action.
- **NOT OBSERVED / Network:** No pipeline, card or filter persistence request was inspected.

## Needs Verification

- **NEEDS VERIFICATION:** Populated Kanban behavior, stage movement and permission outcomes.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-opportunities-all`.
