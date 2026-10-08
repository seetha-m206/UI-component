---
component: "Freshdesk Omni Contact Fields Builder"
ui_category: "Administration > Contact Fields"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the contact fields builder read-only with consequential actions left untouched."
---

# Freshdesk Omni Contact Fields Builder

## Location

- **OBSERVED:** Admin → Support Operations → Contact Fields.

## Structure

- **OBSERVED:** A drag-and-drop builder exposed text, checkbox, dropdown, date, number and URL field types plus search, hidden-field inclusion, widget customization and default contact fields with unique markers.
- **RECONSTRUCTION:** The local fixture preserves the field inventory with a guarded fictional builder.

## Actions

- **NOT OBSERVED:** No field, widget, visibility, uniqueness, order or validation setting was changed.

## Technical Data

- **OBSERVED / DOM:** Palette, default field names, unique indicators, hidden-field control and widget action were exposed.
- **NEEDS VERIFICATION:** Field editing, validation, uniqueness enforcement, widget behavior, order and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni contact fields builder, 2026-10-08.
