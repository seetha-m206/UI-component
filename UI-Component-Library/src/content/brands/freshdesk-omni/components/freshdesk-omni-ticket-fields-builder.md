---
component: "Freshdesk Omni Ticket Fields Builder"
ui_category: "Administration > Field Builder"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the ticket fields builder read-only with consequential actions left untouched."
---

# Freshdesk Omni Ticket Fields Builder

## Location

- **OBSERVED:** Admin → Workflows → Ticket Fields.

## Structure

- **OBSERVED:** A builder exposed a drag-and-drop palette for text, checkbox, dropdown, dependent, date, number and decimal fields beside default ticket fields with filter, search, Edit and section controls.
- **RECONSTRUCTION:** The local fixture preserves the two-column builder with fictional neutral labels.

## Actions

- **NOT OBSERVED:** No field was dragged, edited, reordered, added, removed or saved.

## Technical Data

- **OBSERVED / DOM:** Field palette, default field rows, filter, search and edit controls were exposed.
- **NEEDS VERIFICATION:** Validation, dependencies, visibility rules, reordering, sections and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni ticket fields builder, 2026-10-08.
