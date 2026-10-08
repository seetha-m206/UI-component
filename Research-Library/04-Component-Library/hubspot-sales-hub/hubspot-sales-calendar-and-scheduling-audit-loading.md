---
component: "HubSpot Sales Calendar and Scheduling Onboarding — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-sales-calendar-and-scheduling"
component_level: "loading"
---

# HubSpot Sales Calendar and Scheduling Onboarding — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Calendar and Scheduling Onboarding](./hubspot-sales-calendar-and-scheduling.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result
- Meetings Scheduler and Calendar nav items | Open | Displayed two distinct onboarding surfaces.
- Get Started and Connect calendar | Not activated | OAuth, permission, calendar and scheduling configuration remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-calendar-and-scheduling-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Sales Calendar and Scheduling Onboarding. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Meetings Scheduler presented an onboarding hero with benefits for calendar connection, link sharing, availability, duration and scheduling preferences.
- **OBSERVED:** OBSERVED: A preview card showed the shape of a personal `meet.hubspot.com` scheduling page and a Get Started action.
- **OBSERVED:** OBSERVED / DOM: Calendar content is hosted in a `schedule-workspace-iframe` surface.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Calendar connection APIs, external provider redirects and synchronization cadence.
- **NOT OBSERVED:** Get Started and Connect calendar | Not activated | OAuth, permission, calendar and scheduling configuration remain NEEDS VERIFICATION.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-sales-calendar-and-scheduling"
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

- Parent workflow: hubspot-sales-calendar-and-scheduling.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-calendar-and-scheduling.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
