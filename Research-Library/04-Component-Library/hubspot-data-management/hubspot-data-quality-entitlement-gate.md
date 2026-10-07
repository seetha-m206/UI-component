---
component: "HubSpot Data Quality Entitlement Gate"
ui_category: "Data Management > Data Quality"
source_product: "HubSpot Data Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Data Quality Entitlement Gate

## Location
- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=data-quality-locked-nav-item`.

## Screenshots
- **OBSERVED:** `2026-10-07-data-quality.png`.

## Screen, Actions & States
- **OBSERVED:** The Professional gate positioned duplicate, formatting, gap, property and integration-health detection in a data-quality command center.
- **OBSERVED:** Benefits included property usage analysis, AI-suggested cleanup automation and sync diagnostics. The plan table exposed automation, overview, health trends, duplicate management and programmable workflow boundaries.
- **NOT ACTIVATED:** Sales contact, trial, scans, fixes, merge and automation.
- **NEEDS VERIFICATION:** Command center, issue triage, property analysis, duplicate review, automation and integrations.

## Fictional Local Fixture
```yaml
issue: Duplicate company domains
status: locked
severity: medium
records_affected: 14
suggested_action: review_merge
```

## Evidence Boundary
- **FACT:** The Data Quality entitlement gate was directly observed.
- **RECONSTRUCTION:** The issue fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated command center was accessible.

## Sources
- Authenticated HubSpot Data Quality entitlement gate, observed 2026-10-07.
