---
component: "HubSpot Landing Pages Onboarding"
ui_category: "Content > Landing Pages"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Content Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Landing Pages Onboarding

## Location

- **OBSERVED:** `/page-ui/343751787/management/pages/landing`.

## Screenshots

- **OBSERVED:** `2026-10-07-landing-pages-onboarding.png` and `2026-10-07-landing-pages-create-menu.png`.

## Screen, Actions & States

- **OBSERVED:** Empty onboarding emphasized conversion analytics and AI-generated landing pages, with a brand-kit alignment banner.
- **OBSERVED:** Opening Create disclosed Create with AI Beta and Create from scratch.
- **SAFE ACTION:** The reversible Create menu was opened and closed.
- **NOT ACTIVATED:** Either creation path, Edit brand kit and banner Close.
- **NEEDS VERIFICATION:** Builder, template selection, testing, publishing and performance states.

## Fictional Local Fixture

```yaml
page: Northstar Webinar Registration
status: draft
creation_mode: ai
goal: registrations
variant: control
```

## Evidence Boundary

- **FACT:** The onboarding and Create disclosure were directly observed.
- **RECONSTRUCTION:** The landing-page fixture is fictional and local only.
- **NEEDS VERIFICATION:** No creation flow was started.

## Sources

- Authenticated HubSpot Landing Pages onboarding, observed 2026-10-07.
