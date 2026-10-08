---
component: "Freshdesk Omni Session Replay Onboarding"
ui_category: "Agent Productivity > Session Replay"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the disconnected Freshmarketer integration onboarding without entering an API key."
---

# Freshdesk Omni Session Replay Onboarding

## Location

- **OBSERVED:** Admin → Agent Productivity → Session Replay.

## Structure

- **OBSERVED:** The page introduced session replay, displayed a Freshmarketer API key input, Integrate action, account creation path, product explanation, and help resources.
- **RECONSTRUCTION:** The local fixture renders a disabled fictional API-key field.

## Actions

- **NOT OBSERVED:** No API key, email address, account, recording, trial, or integration was entered, created, or connected.

## Technical Data

- **OBSERVED / DOM:** Integration introduction, API-key field, actions, product explanation, and help links were exposed.
- **NEEDS VERIFICATION:** Credential validation, connection, session capture, replay access, permissions, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
