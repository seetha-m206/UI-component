---
component: "HubSpot Legacy Apps Unavailable State — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-legacy-apps-unavailable"
component_level: "action"
---

# HubSpot Legacy Apps Unavailable State — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Legacy Apps Unavailable State](./hubspot-legacy-apps-unavailable.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: The account could not use legacy apps. Copy directed developers to service keys for API calls or project-based apps for webhooks and UI extensions.
- **OBSERVED:** OBSERVED: Actions offered Create a service key, Create a project-based app and Learn more.
- **OBSERVED:** NOT ACTIVATED: Key creation, project creation and documentation.
- **OBSERVED:** NEEDS VERIFICATION: Migration behavior for existing legacy apps and replacement setup.

## Actions

- OBSERVED: The account could not use legacy apps. Copy directed developers to service keys for API calls or project-based apps for webhooks and UI extensions.
- OBSERVED: Actions offered Create a service key, Create a project-based app and Learn more.
- NOT ACTIVATED: Key creation, project creation and documentation.
- NEEDS VERIFICATION: Migration behavior for existing legacy apps and replacement setup.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-legacy-apps-unavailable-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Legacy Apps Unavailable State. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The account could not use legacy apps. Copy directed developers to service keys for API calls or project-based apps for webhooks and UI extensions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Actions offered Create a service key, Create a project-based app and Learn more.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Key creation, project creation and documentation.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Migration behavior for existing legacy apps and replacement setup.

### Network / API

- **OBSERVED:** OBSERVED: The account could not use legacy apps. Copy directed developers to service keys for API calls or project-based apps for webhooks and UI extensions.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-legacy-apps-unavailable"
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

- Parent workflow: hubspot-legacy-apps-unavailable.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-legacy-apps-unavailable.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
