---
component: "HubSpot Data Model Introduction"
ui_category: "Data Management > Data Model"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Data Management screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Data Model Introduction

## Location
- **OBSERVED:** `/data-model-intro/343751787/`.

## Screenshots
- **OBSERVED:** `2026-10-07-data-model.png`.

## Screen, Actions & States
- **OBSERVED:** Intro, Manage, Health and Analysis tabs framed the model as a blueprint for reporting, segmentation and automation.
- **OBSERVED:** Edit Data Model and an AI recommendation prompt were available. Recommendation submission stayed disabled while the textbox was empty. Links led to records, import, workflow, list and report tools.
- **NOT ACTIVATED:** Editing, prompt entry, recommendations and downstream links.
- **NEEDS VERIFICATION:** Object editing, relationships, health analysis, recommendation output and save behavior.

## Fictional Local Fixture
```yaml
model: Northstar Customer Graph
status: draft
objects: [contact, company, subscription]
relationships: 2
health_score: null
```

## Evidence Boundary
- **FACT:** The Data Model introduction was directly observed.
- **RECONSTRUCTION:** The model fixture is fictional and local only.
- **NEEDS VERIFICATION:** No model or AI recommendation was created.

## Sources
- Authenticated HubSpot Data Model introduction, observed 2026-10-07.
