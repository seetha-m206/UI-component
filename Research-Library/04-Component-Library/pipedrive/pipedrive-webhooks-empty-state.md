---
component: "Pipedrive Webhooks Empty State"
ui_category: "Developer Tools > Webhooks"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Webhooks Empty State

## Location
- **OBSERVED:** Authenticated Tools and apps Webhooks screen.
## Screenshot
- **NEEDS VERIFICATION:** Authenticated provider screenshots are not retained.
## Structure
- **OBSERVED:** Webhooks and Automated webhooks sections, create control, empty illustration, Add a webhook and documentation link.
## Actions
- **OBSERVED:** No webhook, documentation or automation action was activated.
## Behavior & States
- **OBSERVED:** The account showed no webhooks in the visible state.
- **RECONSTRUCTION:** The local create control only displays a guard notice.
## Technical Data
- **OBSERVED / DOM:** Empty-state text, create route and documentation destination were inspected. Endpoint submission and delivery were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Empty-state description, create-flow focus and validation errors.
## Human Context
- **RECOMMENDATION:** Show event scope, endpoint and delivery consequences before webhook creation.
## AI Context
- **RECONSTRUCTION:** No endpoint or secret is stored in the fixture.
## Needs Verification
- **NEEDS VERIFICATION:** Event types, authentication, validation, retries, logs, deletion and permissions.
## Sources
- **OBSERVED:** Authenticated Pipedrive Webhooks landing, 2026-10-07.
