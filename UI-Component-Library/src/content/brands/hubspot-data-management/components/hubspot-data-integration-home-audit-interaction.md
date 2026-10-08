---
component: "HubSpot Data Integration Home — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded local interaction transitions and state changes for HubSpot Data Integration Home. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-data-integration-home"
component_level: "interaction"
---

# HubSpot Data Integration Home — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Data Integration Home](./hubspot-data-integration-home.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **NOT OBSERVED:** OBSERVED: Four entry cards offered one-time file import, app sync, Smart Transfer Beta and an upgrade for unified campaign data.
- **NOT OBSERVED:** OBSERVED: Monitoring tabs covered File imports, App syncs and Data studio syncs, with a Connected apps link.
- **NOT OBSERVED:** NOT ACTIVATED: Import data, Connect an app, Transfer data, upgrade and connected-app navigation.
- **NOT OBSERVED:** NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.
- **NOT OBSERVED:** OBSERVED: Four entry cards offered one-time file import, app sync, Smart Transfer Beta and an upgrade for unified campaign data.
- **NOT OBSERVED:** OBSERVED: Monitoring tabs covered File imports, App syncs and Data studio syncs, with a Connected apps link.
- **NOT OBSERVED:** NOT ACTIVATED: Import data, Connect an app, Transfer data, upgrade and connected-app navigation.
- **NOT OBSERVED:** NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.

## Actions

- OBSERVED: Four entry cards offered one-time file import, app sync, Smart Transfer Beta and an upgrade for unified campaign data.
- OBSERVED: Monitoring tabs covered File imports, App syncs and Data studio syncs, with a Connected apps link.
- NOT ACTIVATED: Import data, Connect an app, Transfer data, upgrade and connected-app navigation.
- NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-data-integration-home-audit-interaction.
- **RECONSTRUCTION:** Evidence-bounded local interaction transitions and state changes for HubSpot Data Integration Home. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Four entry cards offered one-time file import, app sync, Smart Transfer Beta and an upgrade for unified campaign data.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Monitoring tabs covered File imports, App syncs and Data studio syncs, with a Connected apps link.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Import data, Connect an app, Transfer data, upgrade and connected-app navigation.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Mapping, validation, sync configuration, transfer execution, history and failure states.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-data-integration-home"
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

- Parent workflow: hubspot-data-integration-home.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-data-management/hubspot-data-integration-home.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
