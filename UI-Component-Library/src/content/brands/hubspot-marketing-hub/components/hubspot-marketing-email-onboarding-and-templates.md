---
component: "HubSpot Marketing Email Onboarding and Template Library"
ui_category: "Marketing > Email"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Marketing Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Marketing Email Onboarding and Template Library

## Location

- **OBSERVED:** Marketing Email onboarding at `/email/343751787/manage/state/all` and template selection at `/email/343751787/create/all`.

## Screenshots

- **OBSERVED:** `2026-10-07-marketing-email-onboarding.png` and `2026-10-07-marketing-email-template-library.png`.

## Screen, Actions & States

- **OBSERVED:** The onboarding screen offered Simple, Newsletter and Promotion recommendations plus View all templates and Start from scratch.
- **OBSERVED:** View all templates opened a searchable library with 33 templates grouped into Ecommerce, Engagement, Event, Greeting, Newsletter, Plain text and Other.
- **OBSERVED:** Template cards exposed Use template and Preview. Several advanced templates and Saved templates displayed locked states.
- **OBSERVED:** Brand-kit selection, Create new template and Upload design appeared in the library header, with the latter two locked.
- **NOT ACTIVATED:** Use template, Preview, Start from scratch, Create new template, Upload design and any email creation or send action.
- **NEEDS VERIFICATION:** Editor layout, validation, audience selection, review, scheduling, sending and analytics.

## Fictional Local Fixture

```yaml
template_count: 33
selected_category: All templates
brand_kit: none
sample_template:
  name: Northstar Monthly Brief
  category: Newsletter
  entitlement: available
```

## Evidence Boundary

- **FACT:** Onboarding and template-library states were directly observed.
- **RECONSTRUCTION:** The sample template is fictional and local only.
- **NEEDS VERIFICATION:** No email artifact was created or transmitted.

## Sources

- Authenticated HubSpot Marketing Email screens, observed 2026-10-07.
