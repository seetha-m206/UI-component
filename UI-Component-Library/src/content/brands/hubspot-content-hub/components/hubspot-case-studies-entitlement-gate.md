---
component: "HubSpot Case Studies Entitlement Gate"
ui_category: "Content > Case Studies"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Content Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Case Studies Entitlement Gate

## Location

- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=case-studies-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-case-studies-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The Professional gate described using AI to turn notes, interviews and CRM data into polished success stories and a dynamic website library.
- **OBSERVED:** Benefits included an industry-filterable library, prioritized suggested actions and engagement planning or measurement.
- **OBSERVED:** Talk to Sales and Start 14-day trial were offered above a plan comparison table.
- **NOT ACTIVATED:** Sales contact, trial, generation, CRM association, publication and filtering.
- **NEEDS VERIFICATION:** Case-study index, generator, approval, library configuration, publishing and analytics.

## Fictional Local Fixture

```yaml
case_study: Northstar Reduces Response Time
status: locked
industry: professional_services
metric: 32_percent_faster
approval: pending
```

## Evidence Boundary

- **FACT:** The Case Studies entitlement gate was directly observed.
- **RECONSTRUCTION:** The case-study fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated case-study workspace was accessible.

## Sources

- Authenticated HubSpot Case Studies entitlement gate, observed 2026-10-07.
