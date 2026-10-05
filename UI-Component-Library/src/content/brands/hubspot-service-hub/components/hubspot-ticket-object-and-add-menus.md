---
component: "HubSpot Ticket Object and Add Menus"
ui_category: "Actions > Action Menu"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "partial"
summary: "Searchable CRM object selector and Add tickets menu with Create new and Import boundaries."
---

# HubSpot Ticket Object and Add Menus

## Screen level

- **OBSERVED:** The Tickets heading opens a searchable selector listing the available CRM objects. The adjacent Add tickets control opens Create new and Import actions.
- **NOT OBSERVED:** No object was switched and no creation or import workflow was completed.

## Action level

| Control | Observed behavior |
| --- | --- |
| Tickets heading | Keyboard Space opened the searchable object selector. |
| Add tickets | Keyboard Space opened Create new and Import. |
| Create new | Attempted activation did not establish a visible form. No submission occurred. |
| Import | Not activated. |

## Evidence boundary

- **NEEDS VERIFICATION:** Durable screenshot, search matching, destinations, validation and success states.
- **SOURCE:** Authenticated HubSpot Tickets index, inspected 2026-10-05.
