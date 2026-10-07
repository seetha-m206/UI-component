---
component: "Pipedrive Activities Toolbar"
ui_category: "Application Layout > Page Toolbar"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Activities list navigation and controls."
---

# Pipedrive Activities Toolbar

## Location
- **OBSERVED:** Authenticated Activities List screen.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** List and Calendar views, Activity split button, Meeting scheduler, activity count, Filter and More actions.
## Actions
- **OBSERVED:** More actions and Filter were disclosed. Add, meeting scheduler and calendar sync were not started.
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
- **OBSERVED:** Authenticated Pipedrive Authenticated Activities List screen., 2026-10-07.
