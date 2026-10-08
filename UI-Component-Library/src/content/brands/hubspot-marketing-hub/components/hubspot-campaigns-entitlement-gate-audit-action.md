---
component: "HubSpot Campaigns Entitlement Gate — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Campaigns Entitlement Gate. Derived from the authored observation record."
parent_workflow: "hubspot-campaigns-entitlement-gate"
component_level: "action"
---

# HubSpot Campaigns Entitlement Gate — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Campaigns Entitlement Gate](./hubspot-campaigns-entitlement-gate.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: The gate positioned Campaigns as a shared canvas for planning, asset creation, approvals, automation and cross-campaign performance.
- **OBSERVED:** OBSERVED: Benefit sections covered Campaign Agent, collaborative campaign canvas, performance tracking and ranked recommended actions.
- **OBSERVED:** OBSERVED: Conversion controls included Talk to Sales, Start 14-day trial and View pricing, followed by a Free versus Professional comparison table.
- **OBSERVED:** NOT ACTIVATED: Talk to Sales, Start trial, View pricing and any campaign action.
- **OBSERVED:** NEEDS VERIFICATION: Campaign index, creation canvas, collaboration, approvals, asset association, automation and reporting.

## Actions

- OBSERVED: The gate positioned Campaigns as a shared canvas for planning, asset creation, approvals, automation and cross-campaign performance.
- OBSERVED: Benefit sections covered Campaign Agent, collaborative campaign canvas, performance tracking and ranked recommended actions.
- OBSERVED: Conversion controls included Talk to Sales, Start 14-day trial and View pricing, followed by a Free versus Professional comparison table.
- NOT ACTIVATED: Talk to Sales, Start trial, View pricing and any campaign action.
- NEEDS VERIFICATION: Campaign index, creation canvas, collaboration, approvals, asset association, automation and reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-campaigns-entitlement-gate-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Campaigns Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The gate positioned Campaigns as a shared canvas for planning, asset creation, approvals, automation and cross-campaign performance.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Benefit sections covered Campaign Agent, collaborative campaign canvas, performance tracking and ranked recommended actions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Conversion controls included Talk to Sales, Start 14-day trial and View pricing, followed by a Free versus Professional comparison table.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Talk to Sales, Start trial, View pricing and any campaign action.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-campaigns-entitlement-gate"
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

- Parent workflow: hubspot-campaigns-entitlement-gate.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-campaigns-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
