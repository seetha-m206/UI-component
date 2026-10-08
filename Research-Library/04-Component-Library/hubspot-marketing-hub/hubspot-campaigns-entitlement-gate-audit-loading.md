---
component: "HubSpot Campaigns Entitlement Gate — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-campaigns-entitlement-gate"
component_level: "loading"
---

# HubSpot Campaigns Entitlement Gate — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Campaigns Entitlement Gate](./hubspot-campaigns-entitlement-gate.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- OBSERVED: The gate positioned Campaigns as a shared canvas for planning, asset creation, approvals, automation and cross-campaign performance.
- OBSERVED: Benefit sections covered Campaign Agent, collaborative campaign canvas, performance tracking and ranked recommended actions.
- OBSERVED: Conversion controls included Talk to Sales, Start 14-day trial and View pricing, followed by a Free versus Professional comparison table.
- NOT ACTIVATED: Talk to Sales, Start trial, View pricing and any campaign action.
- NEEDS VERIFICATION: Campaign index, creation canvas, collaboration, approvals, asset association, automation and reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-campaigns-entitlement-gate-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Campaigns Entitlement Gate. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific loading description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-campaigns-entitlement-gate"
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

- Parent workflow: hubspot-campaigns-entitlement-gate.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-campaigns-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
