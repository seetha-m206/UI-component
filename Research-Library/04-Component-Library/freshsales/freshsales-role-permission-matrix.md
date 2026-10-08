---
component: "Freshsales Role Permission Matrix"
ui_category: "Administration > Permission Matrix"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."
---

# Freshsales Role Permission Matrix

## Location

- **OBSERVED:** Default Account Admin role management screen.

## Structure

- **OBSERVED:** Permissions, Record types, Field Permissions and Assigned users tabs, followed by a section index and permission groups for modules, actions, analytics, email, sequences, channels, Freddy, user settings and admin settings.
- **OBSERVED:** Module rows separated View, Edit and Delete scope. Action rows covered creation, assignment, bulk update, restore, merge, export, import, recycle bin and tags.

## Actions

- **OBSERVED:** The long permission matrix was reviewed without selecting any control.
- **NOT EXECUTED:** Manage licenses, Assign users, permission toggles, limits, record types, field permissions, Save and Cancel.

## Behavior & States

- **OBSERVED:** Many default-role checkboxes were disabled. Some numeric limits remained editable in the provider form, so the page was treated as a protected write surface.
- **RECONSTRUCTION:** The local matrix uses disabled fictional controls and cannot save access changes.

## Technical Data

- **OBSERVED / DOM:** Permission sections used anchors and accessible checkbox descriptions. The route contained `/edit` even though no edit occurred.
- **NEEDS VERIFICATION:** Custom-role inheritance, conflict handling, authorization enforcement and audit history.

## Sources

- **OBSERVED:** Authenticated Freshsales Account Admin permission matrix, 2026-10-07.
