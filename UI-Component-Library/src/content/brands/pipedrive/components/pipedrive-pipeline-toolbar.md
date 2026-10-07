---
component: "Pipedrive Pipeline Toolbar"
ui_category: "Actions > Collection Toolbar"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Pipeline Toolbar

## Location
- **OBSERVED:** Above the Deals pipeline board.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained.
## Structure
- **OBSERVED:** Deal split-create control, deal count, total-value control, pipeline selector, edit-pipeline control, Filter, Actions, Open-status condition, Add condition, Clear, Save, Show closed deals, Change order and Sort by Next activity.
## Actions
- **OBSERVED:** Filter, Actions, pipeline selector and Sort disclosures were opened and closed. No condition, order, deal or configuration changed.
## Behavior & States
- **OBSERVED:** Open status appeared as an active condition and Save was present without a submitted change.
- **RECONSTRUCTION:** Local controls emit boundary messages and never call Pipedrive.
## Technical Data
- **OBSERVED / DOM:** Toolbar controls were buttons. The active condition exposed Status is Open.
## Accessibility
- **NEEDS VERIFICATION:** Split-button relationships, tooltip names and keyboard traversal.
## Human Context
- **RECOMMENDATION:** Keep collection scope, filters, actions, ordering and creation in one predictable control band.
## AI Context
- **NEEDS VERIFICATION:** Visible controls do not prove availability for every role or plan.
## Needs Verification
- **NEEDS VERIFICATION:** Create, edit, filter persistence, totals, closed-deal visibility and ordering outcomes.
## Sources
- **OBSERVED:** Authenticated Pipedrive Deals pipeline, 2026-10-07.
