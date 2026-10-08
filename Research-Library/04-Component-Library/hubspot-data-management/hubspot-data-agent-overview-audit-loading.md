---
component: "HubSpot Data Agent Overview — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-data-agent-overview"
component_level: "loading"
---

# HubSpot Data Agent Overview — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Data Agent Overview](./hubspot-data-agent-overview.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- OBSERVED: Credit-aware Data Agent overview exposed Overview, Prompt library, Manage, Playground and Activity tabs, plus credit limits, permissions and Create smart property.
- OBSERVED: Cards covered visitor intent, smart properties, pipeline impact, estimated time saved, missing critical data, playground and prompt examples. All measured values were empty or zero.
- NOT ACTIVATED: Unlock, credit limits, permissions, smart-property creation, prompts, intent, missing-data review and playground.
- NEEDS VERIFICATION: Prompt execution, enrichment, property writes, automation and credit consumption.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-data-agent-overview-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Data Agent Overview. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific loading description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-data-agent-overview"
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

- Parent workflow: hubspot-data-agent-overview.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-data-management/hubspot-data-agent-overview.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
