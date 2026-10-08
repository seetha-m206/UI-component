---
component: "HubSpot Videos Entitlement Gate — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-videos-entitlement-gate"
component_level: "atomic"
---

# HubSpot Videos Entitlement Gate — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Videos Entitlement Gate](./hubspot-videos-entitlement-gate.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: The Professional gate positioned CRM-connected video hosting, editing, clipping, repurposing and optimization.
- OBSERVED: Benefits covered AI clips and translation, transcript editing, captions, cropping, brand styling, in-video forms and CTAs, and conversion or revenue analytics.
- OBSERVED: Talk to Sales and Start 14-day trial appeared above a Free versus Professional comparison table.
- NOT ACTIVATED: Sales contact, trial, upgrade, upload, edit, embed and analytics actions.
- NEEDS VERIFICATION: Video library, editor, player settings, publishing, forms, CTAs and performance reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-videos-entitlement-gate-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Videos Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-videos-entitlement-gate"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "1"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-videos-entitlement-gate.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-videos-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
