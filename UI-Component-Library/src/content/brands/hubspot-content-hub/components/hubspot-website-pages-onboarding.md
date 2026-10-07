---
component: "HubSpot Website Pages Onboarding"
ui_category: "Content > Website Pages"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Content Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Website Pages Onboarding

## Location

- **OBSERVED:** `/page-ui/343751787/management/pages/site`.

## Screenshots

- **OBSERVED:** `2026-10-07-website-pages-onboarding.png`.

## Screen, Actions & States

- **OBSERVED:** Empty onboarding presented AI-assisted creation or a theme, no-code customization and lead-generation positioning.
- **OBSERVED:** A brand-kit alignment banner exposed Edit brand kit and Close. The page also offered import-existing-site and Create actions.
- **NOT ACTIVATED:** Create, Edit brand kit, import existing site and Close.
- **NEEDS VERIFICATION:** Editor, theme selection, publishing, analytics, page states and connected-domain behavior.

## Fictional Local Fixture

```yaml
page: Northstar Home
status: draft
theme: studio-light
lead_form: true
domain: preview.example.test
```

## Evidence Boundary

- **FACT:** The onboarding screen and visible actions were directly observed.
- **RECONSTRUCTION:** The page fixture is fictional and local only.
- **NEEDS VERIFICATION:** No page was created, edited or published.

## Sources

- Authenticated HubSpot Website Pages onboarding, observed 2026-10-07.
