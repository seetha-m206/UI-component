---
component: "HubSpot Sales Activity Feed — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Sales Activity Feed. Derived from the authored observation record."
parent_workflow: "hubspot-sales-activity-feed"
component_level: "action"
---

# HubSpot Sales Activity Feed — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Activity Feed](./hubspot-sales-activity-feed.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result
- **OBSERVED:** Activity Feed nav item | Open | Loaded the onboarding state and sample feed.
- **OBSERVED:** Search, activity type and sample disclosures | Not activated | Filtering and disclosure behavior remain NEEDS VERIFICATION.
- **OBSERVED:** Gmail, Outlook, HubSpot-only and extension actions | Not activated | Provider connection and onboarding persistence remain NEEDS VERIFICATION.

## Actions

- Element | Safe action | Observed result
- Activity Feed nav item | Open | Loaded the onboarding state and sample feed.
- Search, activity type and sample disclosures | Not activated | Filtering and disclosure behavior remain NEEDS VERIFICATION.
- Gmail, Outlook, HubSpot-only and extension actions | Not activated | Provider connection and onboarding persistence remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-activity-feed-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Sales Activity Feed. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A separate Sample activity section demonstrates click, open and page-visit cards with avatar, person, role, company, asset, time and activity badge.
- **OBSERVED:** OBSERVED / DOM: Sample cards expose activity-specific badges such as Click, Open and Visit.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-sales-activity-feed"
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

- Parent workflow: hubspot-sales-activity-feed.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-activity-feed.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
