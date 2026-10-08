---
component: "HubSpot Data Studio Entitlement Gate — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Data Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Data Studio Entitlement Gate. Derived from the authored observation record."
parent_workflow: "hubspot-data-studio-entitlement-gate"
component_level: "state"
---

# HubSpot Data Studio Entitlement Gate — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Data Studio Entitlement Gate](./hubspot-data-studio-entitlement-gate.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The Professional gate described joining Snowflake, Google Sheets and other app data with CRM data for segments, workflows and insights.
- **OBSERVED:** OBSERVED: Benefits covered unified datasets, cleanup and transformation before CRM sync, plus AI-assisted dataset creation, missing-data fills and custom insights.
- **OBSERVED:** NOT ACTIVATED: Sales contact, trial, connections, dataset creation, transformation and sync.
- **OBSERVED:** NEEDS VERIFICATION: Connector setup, dataset builder, transforms, previews, schedules, syncs and credit use.

## Actions

- OBSERVED: The Professional gate described joining Snowflake, Google Sheets and other app data with CRM data for segments, workflows and insights.
- OBSERVED: Benefits covered unified datasets, cleanup and transformation before CRM sync, plus AI-assisted dataset creation, missing-data fills and custom insights.
- NOT ACTIVATED: Sales contact, trial, connections, dataset creation, transformation and sync.
- NEEDS VERIFICATION: Connector setup, dataset builder, transforms, previews, schedules, syncs and credit use.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-data-studio-entitlement-gate-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Data Studio Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The Professional gate described joining Snowflake, Google Sheets and other app data with CRM data for segments, workflows and insights.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Benefits covered unified datasets, cleanup and transformation before CRM sync, plus AI-assisted dataset creation, missing-data fills and custom insights.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Sales contact, trial, connections, dataset creation, transformation and sync.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Connector setup, dataset builder, transforms, previews, schedules, syncs and credit use.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-data-studio-entitlement-gate"
component_level: "state"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
selected_state: "documented"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-data-studio-entitlement-gate.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-data-management/hubspot-data-studio-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
