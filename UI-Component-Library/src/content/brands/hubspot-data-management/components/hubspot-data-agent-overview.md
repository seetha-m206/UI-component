---
component: "HubSpot Data Agent Overview"
ui_category: "Data Management > Data Agent"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Data Management screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Data Agent Overview

## Location
- **OBSERVED:** `/data-agent/343751787`.

## Screenshots
- **OBSERVED:** `2026-10-07-data-agent.png`.

## Screen, Actions & States
- **OBSERVED:** Credit-aware Data Agent overview exposed Overview, Prompt library, Manage, Playground and Activity tabs, plus credit limits, permissions and Create smart property.
- **OBSERVED:** Cards covered visitor intent, smart properties, pipeline impact, estimated time saved, missing critical data, playground and prompt examples. All measured values were empty or zero.
- **NOT ACTIVATED:** Unlock, credit limits, permissions, smart-property creation, prompts, intent, missing-data review and playground.
- **NEEDS VERIFICATION:** Prompt execution, enrichment, property writes, automation and credit consumption.

## Fictional Local Fixture
```yaml
prompt: Identify primary market
object: company
status: draft
credit_estimate: 1
review_required: true
```

## Evidence Boundary
- **FACT:** The Data Agent overview and actions were directly observed.
- **RECONSTRUCTION:** The prompt fixture is fictional and local only.
- **NEEDS VERIFICATION:** No agent task or smart property was run.

## Sources
- Authenticated HubSpot Data Agent overview, observed 2026-10-07.
