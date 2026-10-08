---
component: "HubSpot Marketing Analytics Entitlement Gate — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-marketing-analytics-entitlement-gate"
component_level: "action"
---

# HubSpot Marketing Analytics Entitlement Gate — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketing Analytics Entitlement Gate](./hubspot-marketing-analytics-entitlement-gate.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: The gate described source reporting, visitor behavior, page performance and campaign tracking in one analytics surface.
- **OBSERVED:** OBSERVED: Feature sections covered traffic-source filtering, page comparison, chart-type changes, dashboard saving and UTM dimensions.
- **OBSERVED:** OBSERVED: Conversion controls and plan comparison tables were visible.
- **OBSERVED:** NOT ACTIVATED: Talk to Sales, Start trial, View pricing, dashboard creation or report interaction.
- **OBSERVED:** NEEDS VERIFICATION: Live dashboards, filters, chart changes, attribution, UTM drill-down, saved reports and exports.

## Actions

- OBSERVED: The gate described source reporting, visitor behavior, page performance and campaign tracking in one analytics surface.
- OBSERVED: Feature sections covered traffic-source filtering, page comparison, chart-type changes, dashboard saving and UTM dimensions.
- OBSERVED: Conversion controls and plan comparison tables were visible.
- NOT ACTIVATED: Talk to Sales, Start trial, View pricing, dashboard creation or report interaction.
- NEEDS VERIFICATION: Live dashboards, filters, chart changes, attribution, UTM drill-down, saved reports and exports.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketing-analytics-entitlement-gate-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Marketing Analytics Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The gate described source reporting, visitor behavior, page performance and campaign tracking in one analytics surface.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Feature sections covered traffic-source filtering, page comparison, chart-type changes, dashboard saving and UTM dimensions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Conversion controls and plan comparison tables were visible.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Talk to Sales, Start trial, View pricing, dashboard creation or report interaction.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketing-analytics-entitlement-gate"
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

- Parent workflow: hubspot-marketing-analytics-entitlement-gate.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-marketing-analytics-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
