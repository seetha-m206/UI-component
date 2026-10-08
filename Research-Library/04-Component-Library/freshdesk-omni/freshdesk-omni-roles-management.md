---
component: "Freshdesk Omni Roles Management"
ui_category: "Administration > Roles"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the roles management read-only with consequential actions left untouched."
---

# Freshdesk Omni Roles Management

## Location

- **OBSERVED:** Admin → Team → Roles.

## Structure

- **OBSERVED:** Agent Roles showed New Role and a table of standard roles including account administration, administration, supervision, agents, collaborators and AI add-on access, followed by explanatory sections.
- **RECONSTRUCTION:** The local fixture preserves role categories without provider assignment counts or identifiers.

## Actions

- **NOT OBSERVED:** No role was opened, created, edited, assigned or deleted.

## Technical Data

- **OBSERVED / DOM:** Role names, table headings and explanatory content were exposed.
- **NEEDS VERIFICATION:** Permission matrices, custom roles, assignments, add-on enforcement and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni roles management, 2026-10-08.
