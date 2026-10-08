---
component: "HubSpot Ticket Object and Add Menus — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-object-and-add-menus"
component_level: "screen"
---

# HubSpot Ticket Object and Add Menus — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Object and Add Menus](./hubspot-ticket-object-and-add-menus.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The Tickets heading is a disclosure that opens a searchable CRM object selector. Visible options were Calls, Carts, Communications, Companies, Contacts, Contracts Beta, Credit memos, Deals, Emails, Invoices, Marketing events, Meetings, Notes, Orders, Payments, Postal Mail, Products, Quotes, Subscriptions, Tasks and Tickets.
- **OBSERVED:** OBSERVED: The adjacent Add tickets menu exposed Create new and Import.

## Actions

- Element | Safe action | Observed result or boundary
- Tickets heading | Keyboard Space | Opened the searchable object selector. No object was selected.
- Add tickets | Keyboard Space | Opened a two-item action menu containing Create new and Import.
- Create new | Attempted activation | A distinct creation form was NOT OBSERVED. No ticket was created or submitted.
- Import | Not activated | Import flow and validation are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-object-and-add-menus-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Ticket Object and Add Menus. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The Tickets heading is a disclosure that opens a searchable CRM object selector. Visible options were Calls, Carts, Communications, Companies, Contacts, Contracts Beta, Credit memos, Deals, Emails, Invoices, Marketing events, Meetings, Notes, Orders, Payments, Postal Mail, Products, Quotes, Subscriptions, Tasks and Tickets.
- **OBSERVED:** OBSERVED: The adjacent Add tickets menu exposed Create new and Import.
- **OBSERVED:** OBSERVED / DOM: The Tickets and Add tickets controls expose popup-button semantics. The object selector includes a search input and option list.

### Network / API

- **OBSERVED:** OBSERVED / DOM: The Tickets and Add tickets controls expose popup-button semantics. The object selector includes a search input and option list.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-object-and-add-menus"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Actions"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-object-and-add-menus.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-object-and-add-menus.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
