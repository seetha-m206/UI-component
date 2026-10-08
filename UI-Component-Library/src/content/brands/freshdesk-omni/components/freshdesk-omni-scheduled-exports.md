---
component: "Freshdesk Omni Scheduled Exports"
ui_category: "Administration > Scheduled Exports"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the scheduled exports read-only with consequential actions left untouched."
---

# Freshdesk Omni Scheduled Exports

## Location

- **OBSERVED:** Admin → Account → Scheduled Exports.

## Structure

- **OBSERVED:** The embedded page described one daily account schedule and listed daily ticket-activity and handling-time stopwatch export types with configuration links.
- **RECONSTRUCTION:** The local fixture uses generalized activity descriptions and no delivery target.

## Actions

- **NOT OBSERVED:** No schedule, configuration, file generation or download was opened or tested.

## Technical Data

- **OBSERVED / DOM:** Two export categories, schedule explanation and configuration actions were exposed.
- **NEEDS VERIFICATION:** Schedule settings, file schema, delivery, retention, permissions and recurring execution.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni scheduled exports, 2026-10-08.
