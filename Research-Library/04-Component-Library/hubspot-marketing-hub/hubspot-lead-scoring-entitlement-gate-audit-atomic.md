---
component: "HubSpot Lead Scoring Entitlement Gate — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-lead-scoring-entitlement-gate"
component_level: "atomic"
---

# HubSpot Lead Scoring Entitlement Gate — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Lead Scoring Entitlement Gate](./hubspot-lead-scoring-entitlement-gate.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: The gate framed lead scoring around profile fit and behavioral engagement.
- OBSERVED: Benefit sections described flexible score categories, score decay, threshold alerts, separate fit and engagement dimensions and record-level score history.
- OBSERVED: Talk to Sales, Start 14-day trial and View pricing were available above plan comparison tables.
- NOT ACTIVATED: Sales, trial, pricing or score creation.
- NEEDS VERIFICATION: Score builder, criteria validation, decay, thresholds, recalculation, permissions and CRM-card history.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-lead-scoring-entitlement-gate-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Lead Scoring Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-lead-scoring-entitlement-gate"
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

- Parent workflow: hubspot-lead-scoring-entitlement-gate.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-lead-scoring-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
