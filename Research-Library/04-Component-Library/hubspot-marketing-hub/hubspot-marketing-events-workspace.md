---
component: "HubSpot Marketing Events Workspace"
ui_category: "Marketing > Events"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Marketing Events Workspace

## Location

- **OBSERVED:** Marketing Events CRM object at `/contacts/343751787/objects/0-54/views/all/list`.

## Screenshots

- **OBSERVED:** `2026-10-07-marketing-events-empty.png`.

## Screen, Actions & States

- **OBSERVED:** The empty index retained CRM-style pinned views, search, Filter, Sort by, View settings, quick filters, advanced filters and Create marketing event.
- **OBSERVED:** The empty state explained centralized event tracking and displayed an embedded integration carousel for event and webinar providers.
- **OBSERVED:** Footer actions included Refresh, Export and Clone with a zero-event count and freshness indicator.
- **NOT ACTIVATED:** Create marketing event, integrations, filters, sorting, export and clone.
- **NEEDS VERIFICATION:** Event creation, integration authorization, attendance synchronization, populated rows and analytics.

## Fictional Local Fixture

```yaml
name: Northstar Product Briefing
provider: Example Webinar
start_at: 2026-11-12T14:00:00Z
registrations: 24
attendees: 0
status: scheduled
```

## Evidence Boundary

- **FACT:** The empty workspace and integration recommendations were observed.
- **RECONSTRUCTION:** The event fixture is fictional and local only.
- **NEEDS VERIFICATION:** No event or integration was created.

## Sources

- Authenticated HubSpot Marketing Events workspace, observed 2026-10-07.
