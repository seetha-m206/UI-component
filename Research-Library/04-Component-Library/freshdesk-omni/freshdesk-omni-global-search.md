---
component: "Freshdesk Omni Global Search"
ui_category: "Navigation > Global Search"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the global search read-only with consequential actions left untouched."
---

# Freshdesk Omni Global Search

## Location

- **OBSERVED:** Global top bar → Search.

## Structure

- **OBSERVED:** A search overlay exposed a query field, All, Tickets, Companies, Contacts, Solutions and Forums scopes, plus Search preferences.
- **RECONSTRUCTION:** The local fixture preserves the empty overlay and scope controls.

## Actions

- **NOT OBSERVED:** No query was entered or submitted and Search preferences was not opened.

## Technical Data

- **OBSERVED / DOM:** Search input, scope controls and preference entry were exposed.
- **NEEDS VERIFICATION:** Results, ranking, permissions, history, keyboard shortcuts and saved preferences.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni global search, 2026-10-08.
