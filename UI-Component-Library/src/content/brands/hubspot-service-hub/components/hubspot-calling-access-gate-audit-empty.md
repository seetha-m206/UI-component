---
component: "HubSpot Calling Access Gate — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot Calling Access Gate. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-calling-access-gate"
component_level: "empty"
---

# HubSpot Calling Access Gate — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Calling Access Gate](./hubspot-calling-access-gate.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific empty description.

## Actions

- Element | Safe action | Observed result or boundary
- Calls | Keyboard Space | Opened the access gate.
- Calls | Keyboard Space while open | Closed the panel.
- Provider selector and Learn how to unlock calling | Not activated | Provider choices, upgrade content and calling behavior are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-calling-access-gate-audit-empty.
- **RECONSTRUCTION:** Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot Calling Access Gate. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Calls opened a compact popover with a HubSpot provider selector, illustration, heading HubSpot calling and explanatory upgrade copy.
- **OBSERVED:** OBSERVED / DOM: The content loaded in the calling remote frame. The provider selector is a popup control and the education action is a new-window button.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Telephony provider integration, browser media permissions and call APIs.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-calling-access-gate"
component_level: "empty"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
result_count: "0"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-calling-access-gate.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-calling-access-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
