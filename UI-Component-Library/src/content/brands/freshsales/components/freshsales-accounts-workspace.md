---
component: 'Freshsales Accounts Workspace'
ui_category: 'Data Display > Relationship Table'
source_product: 'Freshsales'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified.'
---

# Freshsales Accounts Workspace

## Location

- **OBSERVED:** Authenticated Accounts list.

## Structure

- **OBSERVED:** The configurable table reused Contacts patterns with account-specific columns for related contacts, website, phone, employee range, open-deal value, tags, industry, and owner.
- **OBSERVED:** Related contacts appeared as compact avatar groups and missing values exposed inline add affordances.

## Actions

- **OBSERVED:** The list and one applied-filter indicator were inspected. No account or inline value was opened or changed.

## Behavior & States

- **OBSERVED:** Account import, creation, saved views, filtering, bulk actions, and pagination were present.
- **RECONSTRUCTION:** Fixture relationships and company values are fictional.

## Technical Data

- **OBSERVED / DOM:** Accessible treegrid, row-selection checkboxes, links, buttons, and column disclosures.
- **NEEDS VERIFICATION:** Inline editing persistence, duplicate handling, permissions, relationship limits, and error states.

## Sources

- **OBSERVED:** Authenticated Freshsales Accounts list, 2026-10-07.
