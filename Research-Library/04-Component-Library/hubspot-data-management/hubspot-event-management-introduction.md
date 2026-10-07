---
component: "HubSpot Event Management Introduction"
ui_category: "Data Management > Event Management"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Event Management Introduction

## Location
- **OBSERVED:** `/events/343751787/manage`.

## Screenshots
- **OBSERVED:** `2026-10-07-event-management.png`.

## Screen, Actions & States
- **OBSERVED:** Navigation exposed Explore, Manage, Occurrences and Analyze, with All events and App events tabs.
- **OBSERVED:** Intro copy described capturing signups, activations and purchases across a tech stack, then using events in reports, segments, workflows, pipeline, retention and attribution.
- **NOT ACTIVATED:** Navigation tabs, event creation and analysis.
- **NEEDS VERIFICATION:** Event definitions, sources, occurrence data, filters, activation and reporting.

## Fictional Local Fixture
```yaml
event: northstar_trial_activated
status: draft
source: product_app
properties: [plan, region]
occurrences: 0
```

## Evidence Boundary
- **FACT:** The Event Management introduction was directly observed.
- **RECONSTRUCTION:** The event fixture is fictional and local only.
- **NEEDS VERIFICATION:** No event was created or tracked.

## Sources
- Authenticated HubSpot Event Management introduction, observed 2026-10-07.
