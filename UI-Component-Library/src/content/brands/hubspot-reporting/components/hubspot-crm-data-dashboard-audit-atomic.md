---
component: "HubSpot CRM Data Dashboard — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Reporting"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot CRM Data Dashboard. Derived from the authored observation record."
parent_workflow: "hubspot-crm-data-dashboard"
component_level: "atomic"
---

# HubSpot CRM Data Dashboard — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot CRM Data Dashboard](./hubspot-crm-data-dashboard.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: A report-caching coachmark appeared over a dashboard with Explore reports, Create dashboard, Actions, Share, Add content, quick and advanced filters, and Refresh.
- OBSERVED: Cards combined populated metrics and charts with no-data states across contacts, deals, activities and tickets, plus comment controls and a timezone footer.
- NOT ACTIVATED: Coachmark navigation, create, actions, share, add content, comments, filters, refresh and report drilldown.
- NEEDS VERIFICATION: Dashboard editor, permissions, sharing, caching, filtering, refresh, comments and exports.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-crm-data-dashboard-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot CRM Data Dashboard. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-crm-data-dashboard"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "1"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-crm-data-dashboard.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-reporting/hubspot-crm-data-dashboard.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
