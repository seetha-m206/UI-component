---
component: "HubSpot Ticket Object and Add Menus"
ui_category: "Actions > Action Menu"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Object and Add Menus

## Location

- **OBSERVED:** Authenticated Tickets index, inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** Visually and semantically inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** The Tickets heading is a disclosure that opens a searchable CRM object selector. Visible options were Calls, Carts, Communications, Companies, Contacts, Contracts Beta, Credit memos, Deals, Emails, Invoices, Marketing events, Meetings, Notes, Orders, Payments, Postal Mail, Products, Quotes, Subscriptions, Tasks and Tickets.
- **OBSERVED:** The adjacent Add tickets menu exposed Create new and Import.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Tickets heading | Keyboard Space | Opened the searchable object selector. No object was selected. |
| Add tickets | Keyboard Space | Opened a two-item action menu containing Create new and Import. |
| Create new | Attempted activation | A distinct creation form was **NOT OBSERVED**. No ticket was created or submitted. |
| Import | Not activated | Import flow and validation are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Both menus layer over the current Tickets index and preserve the current view beneath them.
- **NOT OBSERVED:** Search matching, object-switch outcomes, ticket creation fields, import requirements, validation, cancellation and success states.

## Technical Data

- **OBSERVED / DOM:** The Tickets and Add tickets controls expose popup-button semantics. The object selector includes a search input and option list.
- **NOT OBSERVED:** Internal routing contracts, payloads, handlers or persistence.

## Human Context

- **RECOMMENDATION:** Keep object switching separate from record creation even though both controls appear in the same page header.

## AI Context

- **FACT:** Menu labels and available object names were read from the authenticated interface.
- **NOT OBSERVED:** A menu item does not establish the shape or success of its destination workflow.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, object search behavior, creation form, import flow and focus restoration.

## Sources

- **OBSERVED:** Authenticated HubSpot Tickets index, inspected 2026-10-05.
