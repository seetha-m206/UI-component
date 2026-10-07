---
component: "Pipedrive Deals Filter Menu"
ui_category: "Search and Filtering > Filter Menu"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Deals Filter Menu

## Location
- **OBSERVED:** Filter control in the Deals pipeline toolbar.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the menu exposed account identity.
## Structure
- **OBSERVED:** Search field, Favorites, Owners and Filters groups, Everyone, current owner and Add new filter.
## Actions
- **OBSERVED:** Menu open and close only. No owner, filter or Add new filter item was selected.
## Behavior & States
- **RECONSTRUCTION:** Local owner and add-filter controls show no-apply notices.
## Technical Data
- **OBSERVED / DOM:** Search was a text field. Group headings and choices were present in the accessibility output.
## Accessibility
- **NEEDS VERIFICATION:** Search label, selection announcement and keyboard navigation.
## Human Context
- **RECOMMENDATION:** Separate ownership scope from saved filters without duplicating search controls.
## AI Context
- **RECONSTRUCTION:** Public fixtures omit the authenticated person's name.
## Needs Verification
- **NEEDS VERIFICATION:** Favorites, saved filters, creation, sharing, permissions, applied results and persistence.
## Sources
- **OBSERVED:** Authenticated Pipedrive Deals filter disclosure, 2026-10-07.
