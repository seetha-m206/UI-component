---
component: "HubSpot Videos Entitlement Gate — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-videos-entitlement-gate"
component_level: "interaction"
---

# HubSpot Videos Entitlement Gate — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Videos Entitlement Gate](./hubspot-videos-entitlement-gate.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **NOT OBSERVED:** OBSERVED: The Professional gate positioned CRM-connected video hosting, editing, clipping, repurposing and optimization.
- **NOT OBSERVED:** OBSERVED: Benefits covered AI clips and translation, transcript editing, captions, cropping, brand styling, in-video forms and CTAs, and conversion or revenue analytics.
- **NOT OBSERVED:** OBSERVED: Talk to Sales and Start 14-day trial appeared above a Free versus Professional comparison table.
- **NOT OBSERVED:** NOT ACTIVATED: Sales contact, trial, upgrade, upload, edit, embed and analytics actions.
- **NOT OBSERVED:** NEEDS VERIFICATION: Video library, editor, player settings, publishing, forms, CTAs and performance reporting.
- **NOT OBSERVED:** OBSERVED: The Professional gate positioned CRM-connected video hosting, editing, clipping, repurposing and optimization.
- **NOT OBSERVED:** OBSERVED: Benefits covered AI clips and translation, transcript editing, captions, cropping, brand styling, in-video forms and CTAs, and conversion or revenue analytics.
- **NOT OBSERVED:** OBSERVED: Talk to Sales and Start 14-day trial appeared above a Free versus Professional comparison table.
- **NOT OBSERVED:** NOT ACTIVATED: Sales contact, trial, upgrade, upload, edit, embed and analytics actions.
- **NOT OBSERVED:** NEEDS VERIFICATION: Video library, editor, player settings, publishing, forms, CTAs and performance reporting.

## Actions

- OBSERVED: The Professional gate positioned CRM-connected video hosting, editing, clipping, repurposing and optimization.
- OBSERVED: Benefits covered AI clips and translation, transcript editing, captions, cropping, brand styling, in-video forms and CTAs, and conversion or revenue analytics.
- OBSERVED: Talk to Sales and Start 14-day trial appeared above a Free versus Professional comparison table.
- NOT ACTIVATED: Sales contact, trial, upgrade, upload, edit, embed and analytics actions.
- NEEDS VERIFICATION: Video library, editor, player settings, publishing, forms, CTAs and performance reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-videos-entitlement-gate-audit-interaction.
- **RECONSTRUCTION:** Evidence-bounded local interaction transitions and state changes for HubSpot Videos Entitlement Gate. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The Professional gate positioned CRM-connected video hosting, editing, clipping, repurposing and optimization.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Benefits covered AI clips and translation, transcript editing, captions, cropping, brand styling, in-video forms and CTAs, and conversion or revenue analytics.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Talk to Sales and Start 14-day trial appeared above a Free versus Professional comparison table.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Sales contact, trial, upgrade, upload, edit, embed and analytics actions.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-videos-entitlement-gate"
component_level: "interaction"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
interaction_result: "local guard"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-videos-entitlement-gate.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-videos-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
