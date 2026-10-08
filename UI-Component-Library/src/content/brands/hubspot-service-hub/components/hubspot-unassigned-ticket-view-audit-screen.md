---
component: "HubSpot Unassigned Ticket View — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Unassigned Ticket View. Derived from the authored observation record."
parent_workflow: "hubspot-unassigned-ticket-view"
component_level: "screen"
---

# HubSpot Unassigned Ticket View — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Unassigned Ticket View](./hubspot-unassigned-ticket-view.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Unassigned tickets is a pinned view beside All tickets and My open tickets. It displayed Filter (1), Ticket owner, Create date, Last activity date, Priority, Clear all and Advanced filters.
- **OBSERVED:** OBSERVED: Table view displayed the filtered empty message, 0 tickets and the footer actions. Board view displayed four zero-count columns: New, Waiting on contact, Waiting on us and Closed.
- **OBSERVED:** OBSERVED: Both layouts used “No Tickets match the current filters” and the hint to retry while the system catches up.

## Actions

- Element | Safe action | Observed result or boundary
- Unassigned tickets | Keyboard Space | Navigated to `/views/unassigned/list` and selected the pinned view.
- Board view | Keyboard Space | Navigated to `/views/unassigned/board` and displayed the four empty columns.
- Table view | Previously selected | Displayed the same filtered empty result in list layout.
- Refresh, Export, Clone and Clear all | Not activated | Their outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-unassigned-ticket-view-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Unassigned Ticket View. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Table view displayed the filtered empty message, 0 tickets and the footer actions. Board view displayed four zero-count columns: New, Waiting on contact, Waiting on us and Closed.
- **OBSERVED:** OBSERVED / DOM: Board and Table controls expose checked state. Column headers are buttons and counts are separate text values.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Record data model, network requests, column configuration and saved-view persistence.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-unassigned-ticket-view"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Search and Filtering"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-unassigned-ticket-view.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-unassigned-ticket-view.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
