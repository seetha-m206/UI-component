---
component: "Freshdesk Omni Account Exports"
ui_category: "Administration > Account Exports"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the account exports read-only with consequential actions left untouched."
---

# Freshdesk Omni Account Exports

## Location

- **OBSERVED:** Admin → Account → Account Exports.

## Structure

- **OBSERVED:** The page stated a 30-day export window, exposed New export and Filters, and showed an empty table with initiated-by, initiated-at, type, status, progress, file and details columns.
- **RECONSTRUCTION:** The local fixture preserves the empty job state without creating a provider export.

## Actions

- **NOT OBSERVED:** No export or filter was created, opened, generated or downloaded.

## Technical Data

- **OBSERVED / DOM:** Export toolbar, table headings and No jobs found state were exposed.
- **NEEDS VERIFICATION:** Export types, generation, retention, file access, filters, permissions and delivery.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni account exports, 2026-10-08.
