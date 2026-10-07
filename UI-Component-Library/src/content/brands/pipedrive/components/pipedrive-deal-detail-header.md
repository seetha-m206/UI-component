---
component: "Pipedrive Deal Detail Header"
ui_category: "Application Layout > Record Header"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Deal identity and guarded outcome controls."
---

# Pipedrive Deal Detail Header

## Location
- **OBSERVED:** Authenticated sample Deal detail screen.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Editable-style deal title, owner link, ownership transfer, follower count, Won, Options and Lost controls.
## Actions
- **OBSERVED:** Outcome, ownership and option controls were visible. None were activated.
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
- **OBSERVED:** Authenticated Pipedrive Authenticated sample Deal detail screen., 2026-10-07.
