---
component: "HubSpot Marketing Events Workspace — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot Marketing Events Workspace. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-marketing-events-workspace"
component_level: "loading"
---

# HubSpot Marketing Events Workspace — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketing Events Workspace](./hubspot-marketing-events-workspace.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- OBSERVED: The empty index retained CRM-style pinned views, search, Filter, Sort by, View settings, quick filters, advanced filters and Create marketing event.
- OBSERVED: The empty state explained centralized event tracking and displayed an embedded integration carousel for event and webinar providers.
- OBSERVED: Footer actions included Refresh, Export and Clone with a zero-event count and freshness indicator.
- NOT ACTIVATED: Create marketing event, integrations, filters, sorting, export and clone.
- NEEDS VERIFICATION: Event creation, integration authorization, attendance synchronization, populated rows and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketing-events-workspace-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Marketing Events Workspace. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific loading description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketing-events-workspace"
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

- Parent workflow: hubspot-marketing-events-workspace.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-marketing-events-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
