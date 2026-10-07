---
component: "Pipedrive Deals Workspace Navigation"
ui_category: "Navigation > View Tabs"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Deals Workspace Navigation

## Location
- **OBSERVED:** Authenticated Deals pipeline on 2026-10-07.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the screen contained authenticated identity and live tenant context.
## Structure
- **OBSERVED:** Pipeline, List, Forecast and Archive destinations formed the primary Deals sub-navigation. Pipeline was active.
## Actions
- **OBSERVED:** Pipeline was loaded. Other destination screens were not opened in this batch.
## Behavior & States
- **RECONSTRUCTION:** Local tabs show explicit no-navigation notices.
## Technical Data
- **OBSERVED / DOM:** Each destination was a link with its own route.
## Accessibility
- **NEEDS VERIFICATION:** Active-state announcement, focus order and keyboard behavior.
## Human Context
- **RECOMMENDATION:** Keep board, list, forecast and archived records as peer views of the same sales object.
## AI Context
- **NEEDS VERIFICATION:** No product-wide coverage follows from observing the Pipeline tab.
## Needs Verification
- **NEEDS VERIFICATION:** List, Forecast and Archive layouts, states and permissions.
## Sources
- **OBSERVED:** Authenticated Pipedrive Deals pipeline inspected via Codex in-app browser, 2026-10-07.
