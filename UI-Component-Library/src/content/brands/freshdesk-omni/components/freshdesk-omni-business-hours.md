---
component: "Freshdesk Omni Business Hours"
ui_category: "Administration > Business Hours"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the business hours read-only with consequential actions left untouched."
---

# Freshdesk Omni Business Hours

## Location

- **OBSERVED:** Admin → Support Operations → Business Hours.

## Structure

- **OBSERVED:** The page showed New business hour, a default working-hours card, associated group count, overflow action, and guidance about holidays and multiple schedules.
- **RECONSTRUCTION:** The local fixture uses a fictional Eastern time schedule and zero associated groups.

## Actions

- **NOT OBSERVED:** No schedule, holiday, time zone, group association or overflow action was changed.

## Technical Data

- **OBSERVED / DOM:** Schedule card, time-zone label, group association count and guidance were exposed.
- **NEEDS VERIFICATION:** Schedule editor, holiday rules, SLA evaluation, time-zone conversion and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni business hours, 2026-10-08.
