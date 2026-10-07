---
component: "Pipedrive Merge Duplicates Empty State"
ui_category: "Data Management > Deduplication"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed no-duplicate People state reconstructed with guarded tabs and matching rules."
---

# Pipedrive Merge Duplicates Empty State

## Location
- **OBSERVED:** Authenticated Tools and apps Merge duplicates screen.
## Screenshot
- **NEEDS VERIFICATION:** Authenticated provider screenshots are not retained.
## Structure
- **OBSERVED:** Edit matching rules, People and Organizations tabs and a no-duplicate-people success state.
## Actions
- **OBSERVED:** No matching rule, tab, candidate or merge action was activated.
## Behavior & States
- **OBSERVED:** The selected People view reported no duplicate people.
- **RECONSTRUCTION:** Local tabs and rule control never read or merge provider records.
## Technical Data
- **OBSERVED / DOM:** Tabs, rule control and empty-state copy were inspected. Matching and merge behavior were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Tab semantics, candidate comparison, confirmation and merge feedback.
## Human Context
- **RECOMMENDATION:** Explain retained-field precedence and irreversible effects before merging.
## AI Context
- **RECONSTRUCTION:** The fixture contains no provider identities or matching data.
## Needs Verification
- **NEEDS VERIFICATION:** Rule editing, organization state, candidate review, field precedence, permissions and merge recovery.
## Sources
- **OBSERVED:** Authenticated Pipedrive Merge duplicates landing, 2026-10-07.
