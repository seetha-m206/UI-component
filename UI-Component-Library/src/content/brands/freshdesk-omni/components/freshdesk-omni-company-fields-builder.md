---
component: "Freshdesk Omni Company Fields Builder"
ui_category: "Administration > Company Fields"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the company fields builder read-only with consequential actions left untouched."
---

# Freshdesk Omni Company Fields Builder

## Location

- **OBSERVED:** Admin → Support Operations → Company Fields.

## Structure

- **OBSERVED:** A drag-and-drop builder exposed text, checkbox, dropdown, date, phone, number and URL types plus search, hidden-field inclusion, widget customization and eight default company fields.
- **RECONSTRUCTION:** The local fixture preserves the inventory with neutral field labels.

## Actions

- **NOT OBSERVED:** No field, widget, visibility, uniqueness, order or validation setting was changed.

## Technical Data

- **OBSERVED / DOM:** Palette, default company fields, unique indicator and widget controls were exposed.
- **NEEDS VERIFICATION:** Field editing, validation, uniqueness enforcement, widget behavior, order and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni company fields builder, 2026-10-08.
