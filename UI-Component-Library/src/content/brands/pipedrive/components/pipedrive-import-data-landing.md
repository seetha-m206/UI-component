---
component: "Pipedrive Import Data Landing"
ui_category: "Data Entry > Import"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed Import data chooser reconstructed without file selection or external migration."
---

# Pipedrive Import Data Landing

## Location
- **OBSERVED:** Authenticated Tools and apps Import data screen.
## Screenshot
- **NEEDS VERIFICATION:** Authenticated provider screenshots are not retained.
## Structure
- **OBSERVED:** New import and Import history, permission warning, spreadsheet upload and drag-and-drop, sample-file links, third-party software import and help resources.
## Actions
- **OBSERVED:** No file chooser, upload, sample download, history, third-party importer, tutorial or import action was activated.
## Behavior & States
- **OBSERVED:** The page stated that unsupported imported item types would be skipped.
- **RECONSTRUCTION:** Local source controls return notices and never request a file.
## Technical Data
- **OBSERVED / DOM:** Visible controls and file-source options were inspected. Upload, mapping, validation and persistence were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Drag-and-drop alternative, file errors, mapping table and progress announcements.
## Human Context
- **RECOMMENDATION:** Surface permission gaps and provide a dry-run summary before committing an import.
## AI Context
- **RECONSTRUCTION:** No file or provider data is transmitted.
## Needs Verification
- **NEEDS VERIFICATION:** Upload, mapping, duplicate handling, permissions, rollback, history and third-party migration.
## Sources
- **OBSERVED:** Authenticated Pipedrive Import data landing, 2026-10-07.
