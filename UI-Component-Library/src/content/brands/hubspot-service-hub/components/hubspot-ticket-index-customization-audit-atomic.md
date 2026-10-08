---
component: "HubSpot Ticket Index Customization — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Index Customization. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-index-customization"
component_level: "atomic"
---

# HubSpot Ticket Index Customization — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Index Customization](./hubspot-ticket-index-customization.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Customize Index Page offered All Views and Default view customization with descriptions of their scope.
- **OBSERVED:** OBSERVED: Default view customization opened Manage Views with disabled Save, expanded Standard Views and Custom Views, search, three pinned views and a scope note.
- **OBSERVED:** OBSERVED: The note said defaults apply to users who have not customized their own pinned views, while already customized users are unaffected.
- **OBSERVED:** OBSERVED / DOM: Standard and Custom sections exposed expanded state. Save and Assistant collaboration were disabled.

## Actions

- Element | Safe action | Observed result or boundary
- Index Customization tab | Page visit | Loaded the two index-management destinations.
- Default view customization | Keyboard Return | Opened Manage Views with Save disabled.
- View selection, ordering, search, feedback and Save | Not activated | Editing and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-index-customization-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Index Customization. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED / DOM: Standard and Custom sections exposed expanded state. Save and Assistant collaboration were disabled.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-index-customization"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "4"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-index-customization.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-index-customization.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
