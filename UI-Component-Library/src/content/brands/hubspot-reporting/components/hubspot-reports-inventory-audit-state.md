---
component: "HubSpot Reports Inventory — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Reporting"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded visible selection, entitlement, disabled, expanded, and status states for HubSpot Reports Inventory. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-reports-inventory"
component_level: "state"
---

# HubSpot Reports Inventory — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Reports Inventory](./hubspot-reports-inventory.md).
- **COMPONENT LEVEL:** state.

## Structure

- **NOT OBSERVED:** OBSERVED: Reports inventory exposed Create, Search, My dashboards, My reports, Marketing, Sales and Service analytics suites.
- **NOT OBSERVED:** OBSERVED: All reports, Custom reports and Favorites tabs sat above view-mode, dashboard, owner, updated and assignment controls. The table exposed selection, sorting, report links, row actions, dashboard counts, ownership, views and timestamps.
- **NOT OBSERVED:** NOT ACTIVATED: Create, search, tabs, filters, sorting, selection, report links, row actions and dashboard links.
- **NOT OBSERVED:** NEEDS VERIFICATION: Report builder, custom sources, charts, filters, permissions, scheduling, sharing and export.

## Actions

- OBSERVED: Reports inventory exposed Create, Search, My dashboards, My reports, Marketing, Sales and Service analytics suites.
- OBSERVED: All reports, Custom reports and Favorites tabs sat above view-mode, dashboard, owner, updated and assignment controls. The table exposed selection, sorting, report links, row actions, dashboard counts, ownership, views and timestamps.
- NOT ACTIVATED: Create, search, tabs, filters, sorting, selection, report links, row actions and dashboard links.
- NEEDS VERIFICATION: Report builder, custom sources, charts, filters, permissions, scheduling, sharing and export.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-reports-inventory-audit-state.
- **RECONSTRUCTION:** Evidence-bounded visible selection, entitlement, disabled, expanded, and status states for HubSpot Reports Inventory. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Reports inventory exposed Create, Search, My dashboards, My reports, Marketing, Sales and Service analytics suites.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: All reports, Custom reports and Favorites tabs sat above view-mode, dashboard, owner, updated and assignment controls. The table exposed selection, sorting, report links, row actions, dashboard counts, ownership, views and timestamps.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Create, search, tabs, filters, sorting, selection, report links, row actions and dashboard links.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Report builder, custom sources, charts, filters, permissions, scheduling, sharing and export.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-reports-inventory"
component_level: "state"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
selected_state: "synthetic"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-reports-inventory.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-reporting/hubspot-reports-inventory.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
