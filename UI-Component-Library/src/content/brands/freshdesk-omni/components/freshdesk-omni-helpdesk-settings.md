---
component: "Freshdesk Omni Helpdesk Settings"
ui_category: "Account > Helpdesk Settings"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the account-wide settings form while excluding selected provider preferences and identifiers."
---

# Freshdesk Omni Helpdesk Settings

## Location

- **OBSERVED:** Admin → Account → Helpdesk Settings.

## Structure

- **OBSERVED:** The page exposed language, date, time zone, ticket ID, conversation order, ticket layout, page size, forums, summary, branding, portal, chat support, response display, font and domain restriction controls with Save and Cancel.
- **RECONSTRUCTION:** The local fixture uses neutral fictional selections and a reduced representative subset.

## Actions

- **NOT OBSERVED:** No language, time zone, ticket, portal, branding, restriction, font, ID, Save, Cancel, or upgrade action was changed or invoked.

## Technical Data

- **OBSERVED / DOM:** Account-wide preference fields, toggles, navigation links, restriction radios, Save, and Cancel were exposed.
- **NEEDS VERIFICATION:** Provider selections, ticket ID, branding, restrictions, access consequences, upgrade, validation, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
