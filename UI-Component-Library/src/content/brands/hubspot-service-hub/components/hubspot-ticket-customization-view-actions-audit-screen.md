---
component: "HubSpot Ticket Customization View Actions — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Ticket Customization View Actions. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-customization-view-actions"
component_level: "screen"
---

# HubSpot Ticket Customization View Actions — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Customization View Actions](./hubspot-ticket-customization-view-actions.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Both Default view rows exposed Clone view and Reset default view in their Actions disclosure.
- **OBSERVED:** OBSERVED: Both actions were disabled. The clone control showed an upgrade prompt.
- **OBSERVED:** OBSERVED: Create team view was locked and did not open a dialog in this portal.

## Actions

- Element | Safe action | Observed result or boundary
- Default view actions | Open disclosure | Displayed disabled Clone view and Reset default view.
- Create team view | Read-only attempt | Remained locked with no dialog.
- Clone and reset | Not activated | Creation, reset and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-customization-view-actions-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Ticket Customization View Actions. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Both Default view rows exposed Clone view and Reset default view in their Actions disclosure.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Both actions were disabled. The clone control showed an upgrade prompt.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Create team view was locked and did not open a dialog in this portal.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-customization-view-actions"
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

- Parent workflow: hubspot-ticket-customization-view-actions.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-customization-view-actions.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
