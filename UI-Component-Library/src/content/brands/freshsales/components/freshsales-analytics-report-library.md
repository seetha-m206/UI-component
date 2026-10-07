---
component: 'Freshsales Analytics Report Library'
ui_category: 'Analytics & Reporting > Report Catalogue'
source_product: 'Freshsales'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified.'
---

# Freshsales Analytics Report Library

## Location

- **OBSERVED:** Analytics module embedded from the Freshreports/Freshvisuals surface.

## Structure

- **OBSERVED:** Secondary navigation for Recent, Favorites, All reports, My reports, Curated reports, Private reports, Shared reports, Trash, and Settings.
- **OBSERVED:** Header search, Help Center, New Report, sort control, report table, favorite stars, Curated badges, row menus, pagination, and per-page control.

## Actions

- **OBSERVED:** The report catalogue was inspected. No report, menu, favorite, trash, or create action was activated.

## Behavior & States

- **OBSERVED:** A module-level Loading state preceded the embedded catalogue.
- **RECONSTRUCTION:** Local report names and dates are fictional.

## Technical Data

- **OBSERVED / DOM:** Analytics loaded in an embedded Freshvisuals frame on a Freshworks-controlled domain and exposed an accessible table.
- **NEEDS VERIFICATION:** Report editor, query execution, scheduling, export, permissions, errors, and saved-state behavior.

## Sources

- **OBSERVED:** Authenticated Freshsales Analytics catalogue, 2026-10-07.
