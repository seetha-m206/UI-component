---
component: "HubSpot API Call Usage — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot API Call Usage. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-api-call-usage"
component_level: "loading"
---

# HubSpot API Call Usage — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot API Call Usage](./hubspot-api-call-usage.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- OBSERVED: The 24-hour usage meter showed zero calls against a 250,000-call limit, midnight reset guidance, recent-update text and zero breakdowns for locally built apps or service keys and third-party apps.
- NOT ACTIVATED: Navigation to apps, keys or usage actions.
- NEEDS VERIFICATION: Non-zero charts, drilldowns, thresholds and historical usage.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-api-call-usage-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot API Call Usage. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific loading description.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: No API activity was generated.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-api-call-usage"
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

- Parent workflow: hubspot-api-call-usage.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-api-call-usage.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
