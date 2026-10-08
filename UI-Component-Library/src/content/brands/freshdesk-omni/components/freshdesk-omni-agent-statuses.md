---
component: "Freshdesk Omni Agent Statuses"
ui_category: "Team > Agent Statuses"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the configured status table and guidance without changing availability or routing."
---

# Freshdesk Omni Agent Statuses

## Location

- **OBSERVED:** Admin → Team → Agent Statuses.

## Structure

- **OBSERVED:** A table showed status name, queues, type and state for available and unavailable states, followed by guidance about routing, idle behavior, availability monitoring, and productivity.
- **RECONSTRUCTION:** The local fixture keeps the table structure but uses a fictional Focus time status instead of retaining account-specific custom rows.

## Actions

- **NOT OBSERVED:** No status, queue, switch, availability, idle rule, or routing state was changed.

## Technical Data

- **OBSERVED / DOM:** Table headings, enabled switches, default channel states, custom unavailable states, and help content were exposed.
- **NEEDS VERIFICATION:** Status creation, edit, deletion, switch behavior, analytics, routing consequences, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
