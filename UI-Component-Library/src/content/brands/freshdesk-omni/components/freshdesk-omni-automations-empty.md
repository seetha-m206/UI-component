---
component: "Freshdesk Omni Automations Empty State"
ui_category: "Empty States > Automation"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the automations empty state read-only with consequential actions left untouched."
---

# Freshdesk Omni Automations Empty State

## Location

- **OBSERVED:** Admin → Workflows → Automations.

## Structure

- **OBSERVED:** The page exposed Ticket creation, Ticket updates and Hourly triggers tabs, a Quick Automations card, search, and an empty state with Create from Scratch and Start with Templates.
- **RECONSTRUCTION:** The local fixture preserves the tab and empty-state hierarchy with guarded local interactions.

## Actions

- **NOT OBSERVED:** No rule, template or quick automation was opened, created, enabled or run.

## Technical Data

- **OBSERVED / DOM:** Tabs, empty-state actions and quick-automation promotion were exposed.
- **NEEDS VERIFICATION:** Rule builder, conditions, actions, ordering, execution, templates and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni automations empty state, 2026-10-08.
