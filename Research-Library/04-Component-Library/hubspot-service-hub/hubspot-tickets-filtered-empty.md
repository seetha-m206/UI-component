---
component: "HubSpot Tickets Filtered Empty View"
ui_category: "Search and Filtering > Saved Views"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Tickets Filtered Empty View

## Location

- **OBSERVED:** Authenticated [My open tickets list](https://app-na3.hubspot.com/contacts/343751787/objects/0-5/views/my/list), reached from the Tickets board on 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** Visually inspected in the in-app browser. No source screenshot was archived.

## Structure

- **OBSERVED:** The selected My open tickets tab switched to Table view. Filter displayed a count of 2. The visible chip row included Ticket owner (1), Create date, Last activity date, Priority, Clear all and Advanced filters. The result panel displayed “No Tickets match the current filters” with a brief delay hint, an illustration and 0 tickets.
- **OBSERVED:** The footer offered Refresh, Export and Clone. Board/Table controls were still present. The Support Pipeline selector remained above the result.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| My open tickets | Activated from pinned views | Navigated to `/views/my/list`, switched to Table view, and showed a filter count of 2 and the filtered empty state. |
| Sort by | Keyboard Space | Opened a popover headed Sort by. Create date was the visible sort field. Most recent was selected and Oldest was available. Neither option was changed. |
| Ticket owner (1) | Keyboard Space | Opened an owner filter showing operator “is any of” and value “Me”. No value was changed. |
| Clear all, Advanced filters, Export, Clone | Not activated | Outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The filtered empty message differs from the first-ticket board empty state. It directs the user to retry after the system catches up. The toolbar keeps the filter count and owner chip visible so the empty result has context.
- **NOT OBSERVED:** Whether another owner or time range returns tickets, whether sort changes the order of a populated list, filter persistence after reload, and table row behavior.

## Technical Data

- **OBSERVED / DOM:** Board and Table view controls expose pressed state. Sort by exposes expanded state. The selected Most recent sort choice exposes pressed state. The owner filter shows its operator and selected value as buttons.
- **NOT OBSERVED:** Provider query parameters beyond the visible route, backend API contract, JavaScript handlers, CSS tokens and error behavior.

## Human Context

- **RECOMMENDATION:** Differentiate a true first-record empty state from a filtered-no-results state. The latter should show filter context and a clear path to revise it.

## AI Context

- **FACT:** The observed My open tickets list returned 0 in this portal at inspection time.
- **NOT OBSERVED:** The empty result does not establish absence of tickets in other views, owners or portals.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, changing a safe filter and restoring it, populated table, sort outcome and saved-view persistence.

## Sources

- **OBSERVED:** Authenticated [My open tickets list](https://app-na3.hubspot.com/contacts/343751787/objects/0-5/views/my/list), inspected 2026-10-05.
