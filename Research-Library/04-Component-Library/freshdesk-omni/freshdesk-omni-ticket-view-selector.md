---
component: "Freshdesk Omni Ticket View Selector"
ui_category: "Navigation > Saved Views"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed searchable ticket-view drawer with grouped default views and no route change."
---

# Freshdesk Omni Ticket View Selector

## Location

- **OBSERVED:** Command Center → Ticket Views.

## Structure

- **OBSERVED:** Left drawer with view search, collapsed Shared group and expanded Default group.
- **OBSERVED:** Default destinations covered all tickets, undelivered messages, unresolved, new and open, AI-handled, raised, mentioned, watched, archive, spam and trash.

## Actions

- **OBSERVED:** The drawer opened and closed from the title-bar control.
- **NOT OBSERVED:** Search and route navigation were not exercised.

## Behavior & States

- **OBSERVED:** Closed and open drawer states.
- **RECONSTRUCTION:** View links only update an in-memory local selection.

## Technical Data

- **OBSERVED / DOM:** View groups were disclosure buttons and view destinations were links with filter-specific routes.
- **NEEDS VERIFICATION:** Custom view creation, search ranking, permissions and route persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni Ticket Views, 2026-10-08.
