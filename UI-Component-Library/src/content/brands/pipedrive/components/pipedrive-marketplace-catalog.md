---
component: "Pipedrive Marketplace Catalog"
ui_category: "Navigation > Marketplace"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Marketplace search, recommendations and goal categories."
---

# Pipedrive Marketplace Catalog

## Location
- **OBSERVED:** Authenticated Marketplace catalogue.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Marketplace search, installed-app management, featured app shortcuts, MCP announcement, recommendation cards, goal categories and a Built by Pipedrive section.
## Actions
- **OBSERVED:** No search, app detail, category, install, installed-app management, MCP, dismissal or external link was activated.
## Behavior & States
- **OBSERVED:** Recommendation cards loaded after an initial skeleton state.
- **RECONSTRUCTION:** The local preview uses a small fictional app catalogue and guards every destination.
## Technical Data
- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Installation and network behavior were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Search announcements, card semantics, focus order, loading and responsive behavior.
## Human Context
- **RECOMMENDATION:** Distinguish discovery, installed-app management and installation consequences.
## AI Context
- **RECONSTRUCTION:** App descriptions and any metrics are omitted or simplified in the fixture.
## Needs Verification
- **NEEDS VERIFICATION:** Search, category filtering, app details, permissions, OAuth, installation and uninstall behavior.
## Sources
- **OBSERVED:** Authenticated Pipedrive Marketplace catalogue, 2026-10-07.
