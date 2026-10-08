---
component: "HubSpot Sales Activity Feed — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Sales Activity Feed. Derived from the authored observation record."
parent_workflow: "hubspot-sales-activity-feed"
component_level: "screen"
---

# HubSpot Sales Activity Feed — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Activity Feed](./hubspot-sales-activity-feed.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The feed provides activity search and an activity-type filter.
- **OBSERVED:** OBSERVED: A first-use panel asks how tracked emails will be sent, with Gmail, Outlook and HubSpot-only options plus a three-step onboarding list.
- **OBSERVED:** OBSERVED: A separate Sample activity section demonstrates click, open and page-visit cards with avatar, person, role, company, asset, time and activity badge.
- **OBSERVED:** OBSERVED: A browser-extension prompt appeared before the loaded onboarding state and was not acted on.

## Actions

- Element | Safe action | Observed result
- Activity Feed nav item | Open | Loaded the onboarding state and sample feed.
- Search, activity type and sample disclosures | Not activated | Filtering and disclosure behavior remain NEEDS VERIFICATION.
- Gmail, Outlook, HubSpot-only and extension actions | Not activated | Provider connection and onboarding persistence remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-activity-feed-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Sales Activity Feed. Derived from the authored observation record.
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
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Sales Intelligence"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-sales-activity-feed.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-activity-feed.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
