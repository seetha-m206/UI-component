---
component: 'Gorgias Inbox Empty Queue'
ui_category: 'Messaging > Inbox Queue States'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Assigned-to-me empty state with view counts, table controls and pagination boundaries.'
---

# Component: Gorgias Inbox Empty Queue

## Location

- **OBSERVATION:** `Assigned to me` view at `/app` displayed zero matching open tickets.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-inbox-empty-queue.png)

## Structure

- **OBSERVATION:** Header includes view title, edit-view affordance, Create ticket and Edit table.
- **OBSERVATION:** The empty table body centres `No open tickets` and a closed-all-tickets explanation.
- **OBSERVATION:** Items-per-page remained at 20 and both pagination directions were disabled.

## Actions

| Action | Result or boundary |
| --- | --- |
| Change view | Not exercised because another view could expose customer content |
| Create ticket | Visible only. No ticket created |
| Edit view or table | Visible only. No configuration changed |

## Behavior & States

- **OBSERVATION:** Default view counters showed zero assigned and one unassigned or all ticket.
- **RECONSTRUCTION:** Counts are fictional examples and no ticket rows exist.
- **NOT OBSERVED:** Populated queue rows, bulk selection, sort and ticket-detail behavior.

## Technical Data

- **OBSERVATION / DOM:** Empty state is represented as a table row with disabled paging buttons.

## Evidence Boundary

- **NOT OBSERVED:** The single unassigned ticket was not opened or retained.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
