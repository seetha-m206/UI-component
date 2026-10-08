---
component: "Freshdesk Omni Scenario Automations"
ui_category: "Administration > Scenario Automations"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the scenario automations read-only with consequential actions left untouched."
---

# Freshdesk Omni Scenario Automations

## Location

- **OBSERVED:** Admin → Agent Productivity → Scenario Automations.

## Structure

- **OBSERVED:** The page explained one-click multi-action updates, exposed search, New Scenario, Shared filtering and one scenario with clone, edit and overflow actions.
- **RECONSTRUCTION:** The local fixture rewrites the scenario as a fictional overdue-ticket follow-up.

## Actions

- **NOT OBSERVED:** No scenario was searched, opened, created, cloned, edited, run or deleted.

## Technical Data

- **OBSERVED / DOM:** Search, sharing filter, scenario summary and row actions were exposed.
- **NEEDS VERIFICATION:** Conditions, actions, execution, access scope, bulk behavior and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni scenario automations, 2026-10-08.
