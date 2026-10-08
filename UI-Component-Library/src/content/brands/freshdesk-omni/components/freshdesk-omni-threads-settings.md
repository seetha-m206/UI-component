---
component: "Freshdesk Omni Threads Settings"
ui_category: "Agent Productivity > Threads"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the enabled Threads overview without disabling the feature."
---

# Freshdesk Omni Threads Settings

## Location

- **OBSERVED:** Admin → Agent Productivity → Threads.

## Structure

- **OBSERVED:** The page described organized chat-like discussions around tickets, displayed Disable, and warned that automations and APIs may require updates.
- **RECONSTRUCTION:** The local fixture preserves the overview and safety warning.

## Actions

- **NOT OBSERVED:** No thread, participant, ticket, disable action, automation, API, or configuration was opened or changed.

## Technical Data

- **OBSERVED / DOM:** Feature heading, disable action, explanatory text, automation and API warning, and learning link were exposed.
- **NEEDS VERIFICATION:** Thread creation, participants, notifications, automation impact, API impact, permissions, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
