---
component: "HubSpot Legacy Apps Unavailable State — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-legacy-apps-unavailable"
component_level: "empty"
---

# HubSpot Legacy Apps Unavailable State — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Legacy Apps Unavailable State](./hubspot-legacy-apps-unavailable.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific empty description.

## Actions

- OBSERVED: The account could not use legacy apps. Copy directed developers to service keys for API calls or project-based apps for webhooks and UI extensions.
- OBSERVED: Actions offered Create a service key, Create a project-based app and Learn more.
- NOT ACTIVATED: Key creation, project creation and documentation.
- NEEDS VERIFICATION: Migration behavior for existing legacy apps and replacement setup.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-legacy-apps-unavailable-audit-empty.
- **RECONSTRUCTION:** Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot Legacy Apps Unavailable State. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific empty description.

### Network / API

- **OBSERVED:** OBSERVED: The account could not use legacy apps. Copy directed developers to service keys for API calls or project-based apps for webhooks and UI extensions.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-legacy-apps-unavailable"
component_level: "empty"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
result_count: "0"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-legacy-apps-unavailable.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-legacy-apps-unavailable.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
