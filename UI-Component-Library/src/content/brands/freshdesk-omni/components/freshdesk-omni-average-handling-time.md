---
component: "Freshdesk Omni Average Handling Time"
ui_category: "Agent Productivity > Average Handling Time"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed disabled handling-time configuration options without enabling or saving them."
---

# Freshdesk Omni Average Handling Time

## Location

- **OBSERVED:** Admin → Agent Productivity → Average Handling Time.

## Structure

- **OBSERVED:** The page described automatic ticket-view timing and offered Enable, stopwatch visibility, billable logging, unassigned view-time inclusion, status-based pauses, Save, and Cancel.
- **RECONSTRUCTION:** The local fixture keeps the option structure with all controls inactive.

## Actions

- **NOT OBSERVED:** No timer, billing flag, unassigned time, ticket status, Save, Cancel, or enable action was invoked.

## Technical Data

- **OBSERVED / DOM:** Heading, explanatory copy, three setting groups, ticket-status link, and save controls were exposed.
- **NEEDS VERIFICATION:** Timer accuracy, reporting, billing consequences, pause logic, permissions, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
