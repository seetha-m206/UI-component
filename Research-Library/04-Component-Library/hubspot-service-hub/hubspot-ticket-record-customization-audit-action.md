---
component: "HubSpot Ticket Record Customization — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-record-customization"
component_level: "action"
---

# HubSpot Ticket Record Customization — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Record Customization](./hubspot-ticket-record-customization.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result or boundary
- **OBSERVED:** Record Customization tab | Page visit | Loaded the existing default record view.
- **OBSERVED:** Default view Actions | Open disclosure | Displayed disabled Clone view and Reset default view with an upgrade prompt.
- **OBSERVED:** Default view | Page visit | Opened the populated Ticket record-page editor.
- **OBSERVED:** More card actions | Open disclosure | Displayed Set conditional logic and Remove card.
- **OBSERVED:** Search, Create team view, row selection, editing and save controls | Not activated | Assignment, editing and persistence are NOT OBSERVED.

## Actions

- Element | Safe action | Observed result or boundary
- Record Customization tab | Page visit | Loaded the existing default record view.
- Default view Actions | Open disclosure | Displayed disabled Clone view and Reset default view with an upgrade prompt.
- Default view | Page visit | Opened the populated Ticket record-page editor.
- More card actions | Open disclosure | Displayed Set conditional logic and Remove card.
- Search, Create team view, row selection, editing and save controls | Not activated | Assignment, editing and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-record-customization-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Ticket Record Customization. Derived from the authored observation record.
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
component_level: "action"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
last_action: "none"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-record-customization.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-record-customization.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
