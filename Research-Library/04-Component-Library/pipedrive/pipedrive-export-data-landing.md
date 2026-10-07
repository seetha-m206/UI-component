---
component: "Pipedrive Export Data Landing"
ui_category: "Data Display > Export"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Export Data Landing

## Location
- **OBSERVED:** Authenticated Tools and apps Export data screen.
## Screenshot
- **NEEDS VERIFICATION:** Authenticated provider screenshots are not retained.
## Structure
- **OBSERVED:** Entity-type selector, archive-status selector, Excel and CSV formats, Export control and no-exports history state.
## Actions
- **OBSERVED:** No entity, archive status, format, export or generated-file action was activated.
## Behavior & States
- **OBSERVED:** The empty state explained that generated files may expire.
- **RECONSTRUCTION:** Local controls never generate or download a file.
## Technical Data
- **OBSERVED / DOM:** Entity, status and format controls were inspected. Export requests and files were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Selection state, export progress, expiration messaging and file-download announcements.
## Human Context
- **RECOMMENDATION:** Summarize scope and sensitive fields before export generation.
## AI Context
- **RECONSTRUCTION:** No provider records or exports are created.
## Needs Verification
- **NEEDS VERIFICATION:** Export generation, scope, permissions, expiry, downloading and audit history.
## Sources
- **OBSERVED:** Authenticated Pipedrive Export data landing, 2026-10-07.
