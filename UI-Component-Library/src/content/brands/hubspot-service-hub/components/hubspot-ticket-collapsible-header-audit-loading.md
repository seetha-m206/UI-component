---
component: "HubSpot Ticket Collapsible Header — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot Ticket Collapsible Header. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-ticket-collapsible-header"
component_level: "loading"
---

# HubSpot Ticket Collapsible Header — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Collapsible Header](./hubspot-ticket-collapsible-header.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result or boundary
- Collapse header | Keyboard Space | Removed the title and pinned-view rows, changed its label to Expand header and compacted the controls.
- Expand header | Keyboard Space | Restored the original title, actions and pinned-view rows.
- Compact Unassigned tickets popup | Keyboard Space | Opened a searchable pinned-view selector with All tickets, My open tickets, Unassigned tickets and All views.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-collapsible-header-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Ticket Collapsible Header. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Expanded state showed the Tickets title, Automate and Add tickets, plus separate pinned-view tabs above the search and filter toolbar.
- **OBSERVED:** OBSERVED / DOM: The collapse button changed accessible name between Collapse header and Expand header. Expanded pinned views were exposed as a content list, while collapsed state exposed the selected view as a popup button.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-collapsible-header"
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

- Parent workflow: hubspot-ticket-collapsible-header.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-collapsible-header.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
