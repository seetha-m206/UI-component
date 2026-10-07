---
component: "HubSpot Sales Activity Feed"
ui_category: "Sales Intelligence > Engagement Feed"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Sales engagement feed combining connection onboarding, search and activity filters with clearly labelled sample events."
---

# HubSpot Sales Activity Feed

## Location

- **OBSERVED:** Activity Feed at `/activity-feed/343751787`.

## Screenshot

- **OBSERVED:** `2026-10-07-sales-activity-feed.png`.

## Structure

- **OBSERVED:** The feed provides activity search and an activity-type filter.
- **OBSERVED:** A first-use panel asks how tracked emails will be sent, with Gmail, Outlook and HubSpot-only options plus a three-step onboarding list.
- **OBSERVED:** A separate Sample activity section demonstrates click, open and page-visit cards with avatar, person, role, company, asset, time and activity badge.
- **OBSERVED:** A browser-extension prompt appeared before the loaded onboarding state and was not acted on.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Activity Feed nav item | Open | Loaded the onboarding state and sample feed. |
| Search, activity type and sample disclosures | Not activated | Filtering and disclosure behavior remain **NEEDS VERIFICATION**. |
| Gmail, Outlook, HubSpot-only and extension actions | Not activated | Provider connection and onboarding persistence remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** Demonstration activity is visually separated and labelled as sample content.
- **OBSERVED:** Connection onboarding sits above the feed instead of replacing the full product shell.
- **NEEDS VERIFICATION:** Live event ingestion, filters, notification timing, contact resolution and extension installation.

## Technical Data

- **OBSERVED / DOM:** Sample cards expose activity-specific badges such as Click, Open and Visit.
- **NEEDS VERIFICATION:** Tracking event schema, deduplication, identity resolution and search implementation.

## AI Context

- **FACT:** Onboarding copy and sample activity cards were directly observed.
- **RECONSTRUCTION:** Any local feed must use fictional people, companies and events.
- **NEEDS VERIFICATION:** No inbox was connected and no onboarding preference was saved.

## Sources

- Authenticated HubSpot Activity Feed, observed 2026-10-07.
