---
component: "Freshsales Duplicate Matching Option"
ui_category: "Data Management > Duplicate Control"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Freshsales Duplicate Matching Option

## Location

- **OBSERVED:** Deal import step one.

## Structure

- **OBSERVED:** Disabled automatic-skip option and Freshsales ID matching label.

## Actions

- **RECONSTRUCTION:** The control is intentionally disabled and cannot process a record.

## Behavior & States

- **OBSERVED:** The source pattern was visible during authenticated observation.
- **RECONSTRUCTION:** Unavailable-before-upload is the only observed state.

## Technical Data

- **NEEDS VERIFICATION:** Ready state, match result, conflicts, merge policy and import outcome.

## Sources

- **OBSERVED:** Authenticated Freshsales deal import duplicate boundary, 2026-10-07.
