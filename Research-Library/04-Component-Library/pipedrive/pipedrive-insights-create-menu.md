---
component: "Pipedrive Insights Create Menu"
ui_category: "Navigation > Creation Menu"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Insights Create Menu

## Location
- **OBSERVED:** Authenticated Insights screen disclosure.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Create disclosure with Generate report AI, Report, Goal and Dashboard options.
## Actions
- **OBSERVED:** The menu was opened only. No report, AI request, goal or dashboard creation began.
## Behavior & States
- **RECONSTRUCTION:** The local preview uses fictional content and guard notices. It cannot create analytics artifacts or connect a mailbox.
## Technical Data
- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network, provider APIs and persistence were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Keyboard order, focus restoration, announcements, loading, validation and errors.
## Human Context
- **RECOMMENDATION:** Explain prerequisites and downstream effects before enabling creation or connection actions.
## AI Context
- **OBSERVED:** AI was visible as a labelled report or writing capability. **NOT OBSERVED:** AI request, response, quality or persistence.
## Needs Verification
- **NEEDS VERIFICATION:** Permissions, billing, provider errors, responsive behavior and downstream effects.
## Sources
- **OBSERVED:** Authenticated Pipedrive Authenticated Insights screen disclosure., 2026-10-07.
