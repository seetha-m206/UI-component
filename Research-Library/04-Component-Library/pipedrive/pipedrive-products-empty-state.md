---
component: "Pipedrive Products Empty State"
ui_category: "Feedback > Empty State"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Products Empty State

## Location
- **OBSERVED:** Authenticated Products screen.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Product split-create control, zero-product count, Filter and More actions, first-product guidance, Add product and Import products actions.
## Actions
- **OBSERVED:** No product creation, import, filter or action menu item was activated.
## Behavior & States
- **OBSERVED:** The product catalogue was empty.
- **RECONSTRUCTION:** The local preview preserves the empty state and guards both creation paths.
## Technical Data
- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network and API behavior were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Empty-state announcement, focus order, loading and responsive behavior.
## Human Context
- **RECOMMENDATION:** Explain why products improve pricing consistency before asking for creation or import.
## AI Context
- **RECONSTRUCTION:** The fixture contains no provider product or pricing data.
## Needs Verification
- **NEEDS VERIFICATION:** Creation, import, filtering, permissions, validation and persistence.
## Sources
- **OBSERVED:** Authenticated Pipedrive Products screen, 2026-10-07.
