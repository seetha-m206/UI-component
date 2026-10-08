---
component: "Freshdesk Omni Tags Management"
ui_category: "Administration > Tags"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the tags management read-only with consequential actions left untouched."
---

# Freshdesk Omni Tags Management

## Location

- **OBSERVED:** Admin → Agent Productivity → Tags.

## Structure

- **OBSERVED:** Tag management explained rename and merge behavior, exposed sorting, search, add field, selection, disabled Delete and usage counts for archived tickets, recent tickets, contacts and articles.
- **RECONSTRUCTION:** The local fixture uses one fictional zero-usage tag.

## Actions

- **NOT OBSERVED:** No tag was added, selected, searched, renamed, merged, opened or deleted.

## Technical Data

- **OBSERVED / DOM:** Tag row, usage columns, sorting, search, select-all and disabled deletion were exposed.
- **NEEDS VERIFICATION:** Rename propagation, merge rules, linked-item views, deletion and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni tags management, 2026-10-08.
