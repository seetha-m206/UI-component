---
component: "Freshsales Deal Import Setup"
ui_category: "Data Management > Import Wizard"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."
---

# Freshsales Deal Import Setup

## Location

- **OBSERVED:** Deals table, Import deals, step 1 of 2.

## Structure

- **OBSERVED:** Close action, sample CSV link, drop/upload zone, file-format and size guidance, mandatory-field disclosure, import options, duplicate matching, owner fallback, Cancel and disabled Next.
- **OBSERVED:** CSV and XLSX were listed with a 5 MB maximum. Deal name and Deal value were disclosed as mandatory fields.

## Actions

- **OBSERVED:** The import modal and mandatory-field disclosure were opened, then Cancel was used.
- **NOT EXECUTED:** Sample download, file chooser, upload, mapping, duplicate processing, owner assignment and import submission.

## Behavior & States

- **OBSERVED:** Create new deals was the displayed option. Automatic duplicate skipping referenced Freshsales ID and remained unavailable before file selection.
- **RECONSTRUCTION:** Fixture owner and all file or record content are fictional. The local Next control is disabled.

## Technical Data

- **OBSERVED / DOM:** Opening added an `open_modal=bulkImport` query parameter and cancelling removed it.
- **NEEDS VERIFICATION:** Mapping, validation errors, deduplication result, limits, rollback and imported-record outcomes.

## Sources

- **OBSERVED:** Authenticated Freshsales deal import entry, 2026-10-07.
