---
component: "HubSpot Segments Analysis Dashboard — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-segments-analysis-dashboard"
component_level: "state"
---

# HubSpot Segments Analysis Dashboard — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Segments Analysis Dashboard](./hubspot-segments-analysis-dashboard.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: Usage metrics showed zero contact segments in use across the categories.
- **OBSERVED:** OBSERVED: The overlap empty state explicitly asks the user to select a segment.
- **OBSERVED:** NEEDS VERIFICATION: Populated overlap visualization, attention rules, metric refresh and object-type switching results.

## Actions

- Element | Safe action | Observed result
- Segment type | Open, then close | Listed six supported object types. Contacts stayed selected.
- Select segments | Open, then close | Displayed Type to search and Clear all with no options.
- Manage | Activate | Returned to the Manage route.
- View Segments links | Not activated | Filtered-view outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-segments-analysis-dashboard-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Segments Analysis Dashboard. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Five usage categories are shown: Personalization, Communication, Automation, Analytics and Segmentation, each with a View Segments link.
- **OBSERVED:** OBSERVED: Segment overlap allows selecting up to five segments and showed a Type to search empty selector because no segments existed.
- **OBSERVED:** OBSERVED: A Segments that require your attention card appeared in a loading state before resolving to an empty table with Segment Name, 7-Day Size Change, Type, Object and Last Updated columns.
- **OBSERVED:** OBSERVED / DOM: Object type and overlap controls use searchable listbox patterns. Usage-category links include reference-category query parameters.

### Network / API

- **NOT OBSERVED:** Manage | Activate | Returned to the Manage route.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-segments-analysis-dashboard"
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

- Parent workflow: hubspot-segments-analysis-dashboard.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-segments-analysis-dashboard.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
