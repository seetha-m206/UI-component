---
component: "HubSpot Tickets Empty Board — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Tickets Empty Board. Derived from the authored observation record."
parent_workflow: "hubspot-tickets-empty-board"
component_level: "atomic"
---

# HubSpot Tickets Empty Board — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Tickets Empty Board](./hubspot-tickets-empty-board.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Page header “Tickets”, Automate and Add tickets actions, pinned views All tickets, My open tickets and Unassigned tickets, search, Filter, Sort by, Support Pipeline, Board/Table view controls, View settings and Collapse header.
- **OBSERVED:** OBSERVED: Four board columns were New, Waiting on contact, Waiting on us and Closed, each with count 0. The main empty state offered Add ticket and Import data from a file. A footer showed 0 tickets, freshness text, Refresh, Export, Reset to last view's save and Clone to new view.
- **OBSERVED:** OBSERVED: A first-run dialog titled “A faster, more flexible CRM index” overlaid the board. It contained an Academy video and Show me what's new and Skip for now buttons.
- **OBSERVED:** OBSERVED / DOM: The board used buttons, a search text field, checkbox roles for Board view and Table view, and a dialog for the introduction. Filter and Sort by exposed disclosure states.
- **OBSERVED:** NOT OBSERVED: API requests, save semantics, ticket schema, private event handlers, exact CSS values and animation timing.

## Actions

- Element | Safe action | Result or boundary
- Global search result “Tickets Tool” | Open | Navigated to the Tickets board route.
- First-run dialog | Keyboard Space on Skip for now | Dialog closed and revealed the unobstructed board. Pointer activation was not a reliable signal. Dismissal persistence is NOT OBSERVED.
- Search, Filter, Sort, pipeline and view toggles | Not activated | Applied results are NOT OBSERVED.
- Add ticket, Import, Automate, Export | Not activated | Creation, data transfer and export outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-tickets-empty-board-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Tickets Empty Board. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Page header “Tickets”, Automate and Add tickets actions, pinned views All tickets, My open tickets and Unassigned tickets, search, Filter, Sort by, Support Pipeline, Board/Table view controls, View settings and Collapse header.
- **OBSERVED:** OBSERVED: A first-run dialog titled “A faster, more flexible CRM index” overlaid the board. It contained an Academy video and Show me what's new and Skip for now buttons.
- **OBSERVED:** OBSERVED / DOM: The board used buttons, a search text field, checkbox roles for Board view and Table view, and a dialog for the introduction. Filter and Sort by exposed disclosure states.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: API requests, save semantics, ticket schema, private event handlers, exact CSS values and animation timing.
- **NOT OBSERVED:** Global search result “Tickets Tool” | Open | Navigated to the Tickets board route.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-tickets-empty-board"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "5"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-tickets-empty-board.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-tickets-empty-board.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
