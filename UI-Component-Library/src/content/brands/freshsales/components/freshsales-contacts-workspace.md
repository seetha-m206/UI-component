---
component: "Freshsales Contacts Workspace"
ui_category: "Data Display > Data Table"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."
---

# Freshsales Contacts Workspace

## Location

- **OBSERVED:** Authenticated Contacts list.

## Structure

- **OBSERVED:** Saved-view tabs, total count, table customization, import and add actions, view switcher, bulk actions, filter control, column disclosure menus, selectable rows, horizontal scrolling, and pagination.
- **OBSERVED:** Visible columns included Name, Account, Job title, Email, Mobile, Status, Tags, and Sales owner.

## Actions

- **OBSERVED:** The table and filter controls were inspected. No contact, import, bulk action, communication action, or add form was executed.

## Behavior & States

- **OBSERVED:** Rows exposed avatars, links, status pills, tags, and row menus. Sorting changed row order without editing records.
- **RECONSTRUCTION:** Public fixtures use invented contacts and `.example` addresses only.

## Technical Data

- **OBSERVED / DOM:** The list was exposed as an accessible treegrid with row-selection instructions and column buttons.
- **NEEDS VERIFICATION:** Bulk-action confirmation, duplicate detection, import validation, permissions, and error states.

## Sources

- **OBSERVED:** Authenticated Freshsales Contacts list, 2026-10-07.
