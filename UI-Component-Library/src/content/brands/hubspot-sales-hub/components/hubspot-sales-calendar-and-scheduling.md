---
component: "HubSpot Sales Calendar and Scheduling Onboarding"
ui_category: "Productivity > Scheduling"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Separate calendar and scheduling onboarding surfaces sharing a connection prerequisite and outcome-led empty states."
---

# HubSpot Sales Calendar and Scheduling Onboarding

## Location

- **OBSERVED:** Meetings Scheduler at `/meetings/343751787` and Calendar at `/calendar/343751787`.

## Screenshots

- **OBSERVED:** `2026-10-07-meetings-scheduler-onboarding.png` and `2026-10-07-calendar-connect-state.png`.

## Structure

- **OBSERVED:** Meetings Scheduler presented an onboarding hero with benefits for calendar connection, link sharing, availability, duration and scheduling preferences.
- **OBSERVED:** A preview card showed the shape of a personal `meet.hubspot.com` scheduling page and a Get Started action.
- **OBSERVED:** Calendar embedded a Schedule Workspace iframe with the empty state “Capture your live meetings in HubSpot,” explanatory copy and Connect calendar.
- **OBSERVED:** Calendar and Meetings Scheduler are separate navigation destinations despite sharing the same connection prerequisite.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Meetings Scheduler and Calendar nav items | Open | Displayed two distinct onboarding surfaces. |
| Get Started and Connect calendar | Not activated | OAuth, permission, calendar and scheduling configuration remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** Onboarding leads with the user outcome before requesting a connection.
- **OBSERVED:** Calendar uses an embedded workspace while scheduling uses a full-page product onboarding layout.
- **NEEDS VERIFICATION:** Calendar provider selection, OAuth scopes, availability editor, scheduling-link publication and live synchronization.

## Technical Data

- **OBSERVED / DOM:** Calendar content is hosted in a `schedule-workspace-iframe` surface.
- **NEEDS VERIFICATION:** Calendar connection APIs, external provider redirects and synchronization cadence.

## AI Context

- **FACT:** Both pre-connection states were directly observed.
- **RECONSTRUCTION:** Local previews may show a fictional calendar and booking URL only.
- **NEEDS VERIFICATION:** No calendar was connected and no scheduling page was configured.

## Sources

- Authenticated HubSpot Calendar and Meetings Scheduler, observed 2026-10-07.
