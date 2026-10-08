---
component: "HubSpot CRM Index Filtering and View Settings — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot CRM Index Filtering and View Settings. Derived from the authored observation record."
parent_workflow: "hubspot-crm-index-filtering-and-view-settings"
component_level: "state"
---

# HubSpot CRM Index Filtering and View Settings — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot CRM Index Filtering and View Settings](./hubspot-crm-index-filtering-and-view-settings.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: Filter disclosures did not navigate away and could be dismissed without changing the view.
- **OBSERVED:** OBSERVED: Manage sharing and Delete view were disabled on the account-default All contacts view. Clone to new view remained available.
- **OBSERVED:** NEEDS VERIFICATION: Applying filters, grouped filter logic, saving, copying a view link, cloning, permissions and persistence.

## Actions

- Element | Safe action | Observed result
- Filter | Open, then close | Revealed the quick-filter row.
- Contact owner | Open, then close | Revealed operator and owner-value controls without selecting a value.
- Advanced filters | Open, then close | Revealed the All filters drawer without adding a rule.
- Sort by | Open, then close | Showed Create Date with Most recent selected and Oldest unselected.
- View settings | Open, then close | Displayed configuration and view actions. Save changes and Reset to last save were disabled.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-crm-index-filtering-and-view-settings-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot CRM Index Filtering and View Settings. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Advanced filters opens an All filters drawer with Association and Advanced filters groups, each offering Add filter.
- **OBSERVED:** OBSERVED: View settings showed disabled view name, view type, Table settings, Filters, Sort by, Copy link to view, sharing, export and action controls.
- **OBSERVED:** OBSERVED / DOM: Filters and sort controls expose expanded/collapsed accessibility states. The owner selector uses a searchable multi-select list with checkbox options.
- **OBSERVED:** OBSERVED / DOM: View settings exposes keyboard hints for Export and Save changes.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Filter serialization, server query parameters, debouncing, save API and share policy.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-crm-index-filtering-and-view-settings"
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

- Parent workflow: hubspot-crm-index-filtering-and-view-settings.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-crm-index-filtering-and-view-settings.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
