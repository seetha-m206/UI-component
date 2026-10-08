---
component: "Freshdesk Omni Ticket Forms"
ui_category: "Administration > Ticket Forms"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the ticket forms read-only with consequential actions left untouched."
---

# Freshdesk Omni Ticket Forms

## Location

- **OBSERVED:** Admin → Workflows → Ticket Forms.

## Structure

- **OBSERVED:** A form inventory exposed New form, Filter, columns for name, creation and update metadata, portal associations, and four configured form rows with overflow actions.
- **RECONSTRUCTION:** The local fixture uses fictional form names, neutral timestamps and a fictional portal.

## Actions

- **NOT OBSERVED:** No form, filter, portal association, options menu or row was opened, created or changed.

## Technical Data

- **OBSERVED / DOM:** Table structure, form descriptions, default-form indicators and row actions were exposed.
- **NEEDS VERIFICATION:** Form editor, conditional fields, portal publishing, permissions, filtering and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni ticket forms, 2026-10-08.
