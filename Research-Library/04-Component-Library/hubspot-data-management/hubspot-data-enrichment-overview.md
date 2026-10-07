---
component: "HubSpot Data Enrichment Overview"
ui_category: "Data Management > Data Enrichment"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Data Enrichment Overview

## Location
- **OBSERVED:** `/enrichment/343751787`.

## Screenshots
- **OBSERVED:** `2026-10-07-data-enrichment.png`.

## Screen, Actions & States
- **OBSERVED:** Data Quality Beta navigation opened an enrichment overview with settings, gap scanning, zero-value outcome metrics and coverage guidance.
- **OBSERVED:** Scan portal and segment enrichment controls were visible. Enrich segment stayed disabled without a segment selection. A Data Agent cross-link and enrichment-terms notice appeared.
- **NOT ACTIVATED:** Settings, gap scan, portal scan, segment selection, enrichment and Data Agent link.
- **NEEDS VERIFICATION:** Scan results, coverage, preview, field provenance, writes, credits and undo behavior.

## Fictional Local Fixture
```yaml
segment: Northstar Target Accounts
status: preview
records: 42
available_fields: [industry, employee_count]
enrichment_applied: false
```

## Evidence Boundary
- **FACT:** The Data Enrichment overview and empty metrics were directly observed.
- **RECONSTRUCTION:** The segment fixture is fictional and local only.
- **NEEDS VERIFICATION:** No scan or enrichment was executed.

## Sources
- Authenticated HubSpot Data Enrichment overview, observed 2026-10-07.
