---
component: "HubSpot Marketing Analytics Entitlement Gate — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot Marketing Analytics Entitlement Gate. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-marketing-analytics-entitlement-gate"
component_level: "loading"
---

# HubSpot Marketing Analytics Entitlement Gate — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketing Analytics Entitlement Gate](./hubspot-marketing-analytics-entitlement-gate.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- OBSERVED: The gate described source reporting, visitor behavior, page performance and campaign tracking in one analytics surface.
- OBSERVED: Feature sections covered traffic-source filtering, page comparison, chart-type changes, dashboard saving and UTM dimensions.
- OBSERVED: Conversion controls and plan comparison tables were visible.
- NOT ACTIVATED: Talk to Sales, Start trial, View pricing, dashboard creation or report interaction.
- NEEDS VERIFICATION: Live dashboards, filters, chart changes, attribution, UTM drill-down, saved reports and exports.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketing-analytics-entitlement-gate-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Marketing Analytics Entitlement Gate. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific loading description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketing-analytics-entitlement-gate"
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

- Parent workflow: hubspot-marketing-analytics-entitlement-gate.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-marketing-analytics-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
