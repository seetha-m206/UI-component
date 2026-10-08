---
component: "Freshdesk Omni Companies List"
ui_category: "Data Display > Company Directory"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed populated company directory with linked contact counts and guarded fictional reconstruction."
---

# Freshdesk Omni Companies List

## Location

- **OBSERVED:** Contacts area → Companies route.

## Structure

- **OBSERVED:** Select-all, directory search, Export, Import, Sync, pagination and filter controls matched the contact-directory shell.
- **OBSERVED:** The compact table exposed Company and Contacts columns plus row actions.
- **OBSERVED:** Contact counts linked back to filtered contact results.
- **RECONSTRUCTION:** Fictional company names and counts preserve the pattern without provider data.

## Actions

- **NOT OBSERVED:** Company selection, detail opening, contact-count navigation, export, import, sync, filtering and row actions.

## Technical Data

- **OBSERVED / DOM:** Company and contact-count values were accessible links. Rows included checkboxes and an action button.
- **NEEDS VERIFICATION:** Company API, relationships, search, bulk actions and filter persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni companies directory, 2026-10-08. Provider values omitted.
