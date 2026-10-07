---
component: "HubSpot AI Context Summary"
ui_category: "Agents > Context"
source_product: "HubSpot Breeze"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot agent and AI context patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot AI Context Summary

## Location
- **OBSERVED:** `/context-home/343751787/summary`.

## Screenshots
- **OBSERVED:** `2026-10-07-context.png`.

## Screen, Actions & States
- **OBSERVED:** AI Context navigation covered Summary, Business, Customers, Team & process, Personal, Custom, Recommendations and Knowledge vaults.
- **OBSERVED:** Coverage was 0%. Missing states identified business knowledge, ICPs or personas, email personalities and custom files. Actions included Manage, Import now, Upload files, Write free-form text and Edit business details.
- **NOT ACTIVATED:** Edits, manage actions, import, upload, free-form entry and knowledge-vault navigation.
- **NEEDS VERIFICATION:** Context editing, imports, recommendations, access controls and AI consumption.

## Fictional Local Fixture
```yaml
context_item: Northstar Positioning Guide
category: business
status: draft
coverage_after: 20
source: local_fixture
```

## Evidence Boundary
- **FACT:** The Context summary and 0% coverage state were directly observed.
- **RECONSTRUCTION:** The context fixture is fictional and local only.
- **NEEDS VERIFICATION:** No context was uploaded or edited.

## Sources
- Authenticated HubSpot AI Context summary, observed 2026-10-07.
