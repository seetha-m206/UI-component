---
component: "HubSpot Unassigned Ticket View"
ui_category: "Search and Filtering > Saved Views"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Unassigned Ticket View

## Location

- **OBSERVED:** Authenticated Unassigned tickets list and board, inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** Both layouts were visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** Unassigned tickets is a pinned view beside All tickets and My open tickets. It displayed Filter (1), Ticket owner, Create date, Last activity date, Priority, Clear all and Advanced filters.
- **OBSERVED:** Table view displayed the filtered empty message, 0 tickets and the footer actions. Board view displayed four zero-count columns: New, Waiting on contact, Waiting on us and Closed.
- **OBSERVED:** Both layouts used “No Tickets match the current filters” and the hint to retry while the system catches up.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Unassigned tickets | Keyboard Space | Navigated to `/views/unassigned/list` and selected the pinned view. |
| Board view | Keyboard Space | Navigated to `/views/unassigned/board` and displayed the four empty columns. |
| Table view | Previously selected | Displayed the same filtered empty result in list layout. |
| Refresh, Export, Clone and Clear all | Not activated | Their outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The selected layout and selected pinned view expose state. The same no-results message persists while the surrounding data layout changes.
- **NOT OBSERVED:** Populated cards, rows, drag and drop, pagination, bulk selection, export, clone and refresh outcomes.

## Technical Data

- **OBSERVED / DOM:** Board and Table controls expose checked state. Column headers are buttons and counts are separate text values.
- **NOT OBSERVED:** Record data model, network requests, column configuration and saved-view persistence.

## Human Context

- **RECOMMENDATION:** Keep the view scope, applied-filter signal and chosen data layout visible together so the empty result remains explainable.

## AI Context

- **FACT:** This portal returned zero visible tickets in both Unassigned layouts at inspection time.
- **NOT OBSERVED:** That result does not establish that other views or portals are empty.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshots, populated cards and rows, drag and drop, table actions, refresh, export, clone and persistence.

## Sources

- **OBSERVED:** Authenticated [Unassigned tickets board](https://app-na3.hubspot.com/contacts/343751787/objects/0-5/views/unassigned/board), inspected 2026-10-05.
