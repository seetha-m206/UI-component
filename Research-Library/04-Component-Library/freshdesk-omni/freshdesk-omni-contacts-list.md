---
component: "Freshdesk Omni Contacts List"
ui_category: "Data Display > Contact Directory"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed populated contact directory, toolbar, pagination and filter rail with fictional local data."
---

# Freshdesk Omni Contacts List

## Location

- **OBSERVED:** Contacts → All contacts.

## Structure

- **OBSERVED:** Select-all, directory search, Export, Import, Sync, pagination and filter visibility controls.
- **OBSERVED:** The table exposed Contact, Title, Company, Email address, Mobile phone, Work phone and Social Handle columns.
- **OBSERVED:** Filters covered creation time, time zone, tags, companies and contact type.
- **RECONSTRUCTION:** All people, companies, addresses and phone numbers are fictional.

## Actions

- **NOT OBSERVED:** Contact selection, detail opening, export, import, sync, pagination, filtering and row actions.

## Technical Data

- **OBSERVED / DOM:** Table rows used checkboxes, links and an action button. Filter inputs included searchable combo boxes.
- **NEEDS VERIFICATION:** Directory API, bulk actions, import validation and filter persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni contacts directory, 2026-10-08. Provider identities and values omitted.
