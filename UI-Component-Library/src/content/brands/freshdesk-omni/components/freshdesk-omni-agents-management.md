---
component: "Freshdesk Omni Agents Management"
ui_category: "Administration > Team"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the agents management read-only with consequential actions left untouched."
---

# Freshdesk Omni Agents Management

## Location

- **OBSERVED:** Admin → Team → Agents.

## Structure

- **OBSERVED:** The page showed an Agents heading, unavailable seat capacity, Export, New agent, search, tabs for support agents, collaborators and deactivated agents, an empty table, and explanatory cards.
- **RECONSTRUCTION:** The local fixture uses an empty table and neutral capacity wording.

## Actions

- **NOT OBSERVED:** No agent was invited, exported, searched, selected, edited, deactivated or assigned.

## Technical Data

- **OBSERVED / DOM:** Tabs, table headers, search and actions were exposed.
- **NEEDS VERIFICATION:** Agent records, invitation, roles, groups, add-on access, seat purchase and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni agents management, 2026-10-08.
