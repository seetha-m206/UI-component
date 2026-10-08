---
component: "HubSpot Ticket Record Customization — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Ticket Record Customization. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-record-customization"
component_level: "screen"
---

# HubSpot Ticket Record Customization — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Record Customization](./hubspot-ticket-record-customization.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The page explained that views customize the layout and content of Ticket records. It provided Search by view name and Create team view.
- **OBSERVED:** OBSERVED: The table columns were View name, Assigned to, Last updated and Actions. One Default view row was assigned to all unassigned teams and users, with no last-updated value.

## Actions

- Element | Safe action | Observed result or boundary
- Record Customization tab | Page visit | Loaded the existing default record view.
- Default view Actions | Open disclosure | Displayed disabled Clone view and Reset default view with an upgrade prompt.
- Default view | Page visit | Opened the populated Ticket record-page editor.
- More card actions | Open disclosure | Displayed Set conditional logic and Remove card.
- Search, Create team view, row selection, editing and save controls | Not activated | Assignment, editing and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-record-customization-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Ticket Record Customization. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The table columns were View name, Assigned to, Last updated and Actions. One Default view row was assigned to all unassigned teams and users, with no last-updated value.
- **OBSERVED:** OBSERVED / DOM: Search was settable, rows used checkboxes, sortable headings and a popup action.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-record-customization"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Account / Settings"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-record-customization.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-record-customization.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
