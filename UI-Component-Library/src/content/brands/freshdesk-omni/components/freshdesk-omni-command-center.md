---
component: "Freshdesk Omni Command Center"
ui_category: "Data Display > Ticket Workspace"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed ticket-card workspace with filtering, view status and guarded fictional reconstruction."
---

# Freshdesk Omni Command Center

## Location

- **OBSERVED:** Quick start → Explore Command Center.

## Structure

- **OBSERVED:** View title and count, Unsaved badge, save/discard controls, list toolbar, card layout, three ticket cards and a persistent filter panel.
- **OBSERVED:** The toolbar included select all, sort, layout, Export, pagination and filter visibility.
- **OBSERVED:** Each card grouped selection, requester image, status, subject, requester/company, timing, priority, assignment and ticket status.

## Actions

- **OBSERVED:** Opening and closing Ticket Views did not change the active view.
- **NOT OBSERVED:** Ticket selection, open, edit, assignment, priority, status, export, save-view and filter-apply actions.

## Behavior & States

- **OBSERVED:** Populated three-card state with applied agent and status filters and a disabled Apply control.
- **RECONSTRUCTION:** Fictional tickets and disabled write controls preserve the layout without provider data.

## Technical Data

- **OBSERVED / DOM:** Ticket cards exposed selectable controls, accessible subject links, requester links and grouped status controls. The filter panel used searchable combo boxes.
- **NEEDS VERIFICATION:** Fetch, pagination, filtering, assignment, export and update APIs.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni Command Center, 2026-10-08. Provider identities and values omitted.
