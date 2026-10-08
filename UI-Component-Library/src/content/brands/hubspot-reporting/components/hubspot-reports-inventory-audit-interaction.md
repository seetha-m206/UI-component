---
component: "HubSpot Reports Inventory — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Reporting"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed local interaction transitions and state changes for HubSpot Reports Inventory. Derived from the authored observation record."
parent_workflow: "hubspot-reports-inventory"
component_level: "interaction"
---

# HubSpot Reports Inventory — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Reports Inventory](./hubspot-reports-inventory.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **OBSERVED:** OBSERVED: Reports inventory exposed Create, Search, My dashboards, My reports, Marketing, Sales and Service analytics suites.
- **OBSERVED:** OBSERVED: All reports, Custom reports and Favorites tabs sat above view-mode, dashboard, owner, updated and assignment controls. The table exposed selection, sorting, report links, row actions, dashboard counts, ownership, views and timestamps.
- **OBSERVED:** NOT ACTIVATED: Create, search, tabs, filters, sorting, selection, report links, row actions and dashboard links.
- **OBSERVED:** NEEDS VERIFICATION: Report builder, custom sources, charts, filters, permissions, scheduling, sharing and export.
- **OBSERVED:** OBSERVED: Reports inventory exposed Create, Search, My dashboards, My reports, Marketing, Sales and Service analytics suites.
- **OBSERVED:** OBSERVED: All reports, Custom reports and Favorites tabs sat above view-mode, dashboard, owner, updated and assignment controls. The table exposed selection, sorting, report links, row actions, dashboard counts, ownership, views and timestamps.
- **OBSERVED:** NOT ACTIVATED: Create, search, tabs, filters, sorting, selection, report links, row actions and dashboard links.
- **OBSERVED:** NEEDS VERIFICATION: Report builder, custom sources, charts, filters, permissions, scheduling, sharing and export.

## Actions

- OBSERVED: Reports inventory exposed Create, Search, My dashboards, My reports, Marketing, Sales and Service analytics suites.
- OBSERVED: All reports, Custom reports and Favorites tabs sat above view-mode, dashboard, owner, updated and assignment controls. The table exposed selection, sorting, report links, row actions, dashboard counts, ownership, views and timestamps.
- NOT ACTIVATED: Create, search, tabs, filters, sorting, selection, report links, row actions and dashboard links.
- NEEDS VERIFICATION: Report builder, custom sources, charts, filters, permissions, scheduling, sharing and export.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-reports-inventory-audit-interaction.
- **OBSERVED:** Evidence-backed local interaction transitions and state changes for HubSpot Reports Inventory. Derived from the authored observation record.
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
component_level: "interaction"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
interaction_result: "local guard"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-reports-inventory.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-reporting/hubspot-reports-inventory.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
