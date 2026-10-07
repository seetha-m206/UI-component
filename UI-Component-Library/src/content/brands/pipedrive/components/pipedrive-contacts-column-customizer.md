---
component: "Pipedrive Contacts Column Customizer"
ui_category: "Data Entry > Column Configuration"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Searchable contacts-column configuration dialog."
---

# Pipedrive Contacts Column Customizer

## Location
- **OBSERVED:** Authenticated Contacts People screen disclosure.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Searchable dialog with visible and not-visible field groups, checkboxes, defaults, Cancel and Save.
## Actions
- **OBSERVED:** Dialog was opened and cancelled. No column choice was changed or saved.
## Behavior & States
- **RECONSTRUCTION:** The local preview uses fictional identities and values. Consequential controls return guard notices and make no provider request.
## Technical Data
- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected in the authenticated application. Network and API behavior were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Keyboard order, focus restoration, screen-reader announcements, loading, validation and error behavior.
## Human Context
- **RECOMMENDATION:** Preserve clear hierarchy and relationship context while keeping destructive or consequential actions visually distinct.
## AI Context
- **RECONSTRUCTION:** Public fixtures contain invented names, organizations, values and activity text.
## Needs Verification
- **NEEDS VERIFICATION:** Persistence, permissions, provider errors, responsive behavior and downstream effects.
## Sources
- **OBSERVED:** Authenticated Pipedrive Authenticated Contacts People screen disclosure., 2026-10-07.
