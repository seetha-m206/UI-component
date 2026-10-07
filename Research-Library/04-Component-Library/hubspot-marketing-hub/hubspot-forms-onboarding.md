---
component: "HubSpot Forms Onboarding"
ui_category: "Marketing > Forms"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Forms Onboarding

## Location

- **OBSERVED:** Forms at `/forms/343751787`.

## Screenshots

- **OBSERVED:** `2026-10-07-forms-onboarding.png`.

## Screen, Actions & States

- **OBSERVED:** A first-run hero promoted drag-and-drop multi-step forms, brand-kit styling, conditional logic and AI form shortening through enrichment.
- **OBSERVED:** The screen presented a single Create form primary action and a success illustration.
- **NOT ACTIVATED:** Create form.
- **NEEDS VERIFICATION:** Form-type selection, builder controls, field validation, conditional branches, preview, embed, publication and submission handling.

## Fictional Local Fixture

```yaml
name: Northstar Consultation Request
steps: 2
fields: [work_email, company_size, priority]
conditional_logic: company_size_over_50
status: draft
```

## Evidence Boundary

- **FACT:** The pre-creation screen was directly observed.
- **RECONSTRUCTION:** The sample form is fictional and local only.
- **NEEDS VERIFICATION:** No form was created, saved or published.

## Sources

- Authenticated HubSpot Forms onboarding, observed 2026-10-07.
