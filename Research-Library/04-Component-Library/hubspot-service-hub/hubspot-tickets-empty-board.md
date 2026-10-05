---
component: "HubSpot Tickets Empty Board"
ui_category: "Data Display > Kanban Board"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Tickets Empty Board

## Location

- **OBSERVED:** Authenticated [Tickets board](https://app-na3.hubspot.com/contacts/343751787/objects/0-5/views/all/board), inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** The board and its first-run introduction were visually inspected in the in-app browser. No source screenshot was archived.

## Structure

- **OBSERVED:** Page header “Tickets”, Automate and Add tickets actions, pinned views All tickets, My open tickets and Unassigned tickets, search, Filter, Sort by, Support Pipeline, Board/Table view controls, View settings and Collapse header.
- **OBSERVED:** Four board columns were New, Waiting on contact, Waiting on us and Closed, each with count 0. The main empty state offered Add ticket and Import data from a file. A footer showed 0 tickets, freshness text, Refresh, Export, Reset to last view's save and Clone to new view.
- **OBSERVED:** A first-run dialog titled “A faster, more flexible CRM index” overlaid the board. It contained an Academy video and Show me what's new and Skip for now buttons.

## Actions

| Element | Safe action | Result or boundary |
| --- | --- | --- |
| Global search result “Tickets Tool” | Open | Navigated to the Tickets board route. |
| First-run dialog | Keyboard Space on Skip for now | Dialog closed and revealed the unobstructed board. Pointer activation was not a reliable signal. Dismissal persistence is **NOT OBSERVED**. |
| Search, Filter, Sort, pipeline and view toggles | Not activated | Applied results are **NOT OBSERVED**. |
| Add ticket, Import, Automate, Export | Not activated | Creation, data transfer and export outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The board exposed zero ticket cards and an empty-state invitation. The first-run dialog blurred the underlying board. The accessibility tree still exposed the board controls beneath it. Keyboard Space on Skip for now removed the dialog in the current page state.
- **NOT OBSERVED:** Populated board, drag and drop, table rows, filter persistence, ticket creation and all ticket record behavior.

## Technical Data

- **OBSERVED / DOM:** The board used buttons, a search text field, checkbox roles for Board view and Table view, and a dialog for the introduction. Filter and Sort by exposed disclosure states.
- **NOT OBSERVED:** API requests, save semantics, ticket schema, private event handlers, exact CSS values and animation timing.

## Human Context

- **RECOMMENDATION:** The board combines a record toolbar, pipeline columns, zero-count status and a prominent first-ticket prompt. Keep the introductory dialog as a separate overlay state in any future local reconstruction.

## AI Context

- **FACT:** The authenticated portal showed zero tickets in this view on 2026-10-05.
- **NOT OBSERVED:** Zero in this view does not establish zero tickets in every portal or pipeline.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, modal dismissal persistence, populated cards and record actions. The My open tickets filtered view has a separate record.

## Sources

- **OBSERVED:** Authenticated [Tickets board](https://app-na3.hubspot.com/contacts/343751787/objects/0-5/views/all/board), inspected 2026-10-05.
