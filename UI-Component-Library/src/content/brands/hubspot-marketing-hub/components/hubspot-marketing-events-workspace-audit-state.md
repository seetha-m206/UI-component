---
component: "HubSpot Marketing Events Workspace — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Marketing Events Workspace. Derived from the authored observation record."
parent_workflow: "hubspot-marketing-events-workspace"
component_level: "state"
---

# HubSpot Marketing Events Workspace — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketing Events Workspace](./hubspot-marketing-events-workspace.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The empty index retained CRM-style pinned views, search, Filter, Sort by, View settings, quick filters, advanced filters and Create marketing event.
- **OBSERVED:** OBSERVED: The empty state explained centralized event tracking and displayed an embedded integration carousel for event and webinar providers.
- **OBSERVED:** OBSERVED: Footer actions included Refresh, Export and Clone with a zero-event count and freshness indicator.
- **OBSERVED:** NOT ACTIVATED: Create marketing event, integrations, filters, sorting, export and clone.
- **OBSERVED:** NEEDS VERIFICATION: Event creation, integration authorization, attendance synchronization, populated rows and analytics.

## Actions

- OBSERVED: The empty index retained CRM-style pinned views, search, Filter, Sort by, View settings, quick filters, advanced filters and Create marketing event.
- OBSERVED: The empty state explained centralized event tracking and displayed an embedded integration carousel for event and webinar providers.
- OBSERVED: Footer actions included Refresh, Export and Clone with a zero-event count and freshness indicator.
- NOT ACTIVATED: Create marketing event, integrations, filters, sorting, export and clone.
- NEEDS VERIFICATION: Event creation, integration authorization, attendance synchronization, populated rows and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketing-events-workspace-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Marketing Events Workspace. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The empty index retained CRM-style pinned views, search, Filter, Sort by, View settings, quick filters, advanced filters and Create marketing event.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The empty state explained centralized event tracking and displayed an embedded integration carousel for event and webinar providers.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Footer actions included Refresh, Export and Clone with a zero-event count and freshness indicator.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Create marketing event, integrations, filters, sorting, export and clone.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketing-events-workspace"
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

- Parent workflow: hubspot-marketing-events-workspace.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-marketing-events-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
