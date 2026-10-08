---
component: "HubSpot Ticket Views Manager — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-ticket-views-manager"
component_level: "loading"
---

# HubSpot Ticket Views Manager — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Views Manager](./hubspot-ticket-views-manager.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result or boundary
- All views destination | Page visit | Opened the view-management screen without changing the selected ticket view.
- Default view customization | Page visit | Opened Manage Views with Save disabled.
- Search, filters, checkboxes, pinned views and Save | Not activated | Filtering, selection and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-views-manager-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Ticket Views Manager. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A standalone All Views screen provided Back, All views and Default views controls, Search views, Tickets object selector, Owner filter, Clear All and Standard views.
- **OBSERVED:** OBSERVED / DOM: Search was a settable field. Standard and custom groups exposed expanded state. The three pinned views were buttons and Save was disabled.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-views-manager"
component_level: "loading"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
progress: "synthetic pending state"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-views-manager.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-views-manager.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
