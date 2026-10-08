---
component: "Freshdesk Omni Analytics Report Library"
ui_category: "Data Display > Report Library"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed analytics navigation and the populated All reports library with fictional local reports."
---

# Freshdesk Omni Analytics Report Library

## Location

- **OBSERVED:** Primary navigation → Analytics → All reports.

## Structure

- **OBSERVED:** Search, Help Center and New Report controls above a navigation rail.
- **OBSERVED:** Navigation included Recent, Favorites, All reports, Curated reports, Shared reports, My reports, Trash and Settings.
- **OBSERVED:** The report table exposed Name, Location, Created by, Created date, Last modified by and Last modified date, with sorting, pagination and per-page controls.
- **RECONSTRUCTION:** Fictional report names and relative dates replace provider catalogue values.

## Actions

- **NOT OBSERVED:** Report opening, creation, search, sort, pagination, menu actions, sharing, deletion and settings.

## Technical Data

- **OBSERVED / DOM:** Analytics rendered as a nested reporting application with accessible table rows and navigation controls.
- **NEEDS VERIFICATION:** Report data, builder, scheduling, export, permissions and refresh behavior.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni Analytics All reports library, 2026-10-08. Provider catalogue values omitted from the fixture.
