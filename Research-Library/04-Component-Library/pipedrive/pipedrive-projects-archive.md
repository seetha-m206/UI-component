---
component: "Pipedrive Projects Archive"
ui_category: "Data Display > Empty State"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Projects Archive

## Location
- **OBSERVED:** Authenticated Projects Archive screen.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Projects navigation, Filter and Actions controls and a no-archived-projects empty state.
## Actions
- **OBSERVED:** No filter, archive action, restoration, feedback or user-management action was activated.
## Behavior & States
- **OBSERVED:** After loading, the page resolved to “No archived projects found.”
- **RECONSTRUCTION:** Local controls return guard notices and do not modify an archive.
## Technical Data
- **OBSERVED / DOM:** Visible controls and settled empty state were inspected. Network and persistence were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Loading announcements, empty-state semantics and filter focus behavior.
## Human Context
- **RECOMMENDATION:** Keep archive recovery discoverable without implying that an empty archive is an error.
## AI Context
- **RECONSTRUCTION:** The fixture contains no archived provider data.
## Needs Verification
- **NEEDS VERIFICATION:** Filtering, bulk actions, restoration, retention and permissions.
## Sources
- **OBSERVED:** Authenticated Pipedrive Projects Archive, 2026-10-07.
