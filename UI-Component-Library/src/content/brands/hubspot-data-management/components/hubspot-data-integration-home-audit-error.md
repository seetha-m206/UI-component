---
component: "HubSpot Data Integration Home — Error Component"
ui_category: "Deep Audit > Error Level"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed error, unavailable, validation, retry, and failure states for HubSpot Data Integration Home. Derived from the authored observation record."
parent_workflow: "hubspot-data-integration-home"
component_level: "error"
---

# HubSpot Data Integration Home — Error Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Data Integration Home](./hubspot-data-integration-home.md).
- **COMPONENT LEVEL:** error.

## Structure

- **OBSERVED:** NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.
- **OBSERVED:** NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.

## Actions

- OBSERVED: Four entry cards offered one-time file import, app sync, Smart Transfer Beta and an upgrade for unified campaign data.
- OBSERVED: Monitoring tabs covered File imports, App syncs and Data studio syncs, with a Connected apps link.
- NOT ACTIVATED: Import data, Connect an app, Transfer data, upgrade and connected-app navigation.
- NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-data-integration-home-audit-error.
- **OBSERVED:** Evidence-backed error, unavailable, validation, retry, and failure states for HubSpot Data Integration Home. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-data-integration-home"
component_level: "error"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
error_message: "NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states."
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-data-integration-home.
- Reusable level: error.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-data-management/hubspot-data-integration-home.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
