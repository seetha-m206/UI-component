---
component: "HubSpot Deal Pipeline Board"
ui_category: "Data Display > Kanban Board"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Seven-stage empty Deal board, pipeline selector, and corresponding table empty state."
---

# HubSpot Deal Pipeline Board

## Location

- **OBSERVED:** All deals board and table routes for the Sales Pipeline.

## Screenshot

- **OBSERVED:** Board: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-deals-empty-board.png`.
- **OBSERVED:** Pipeline selector: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-deals-pipeline-selector.png`.
- **OBSERVED:** Table empty state: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-deals-empty-table.png`.

## Structure

- **OBSERVED:** The Deal index adds a Sales Pipeline selector before the board/table controls.
- **OBSERVED:** The empty board contained seven stages: Appointment Scheduled, Qualified To Buy, Presentation Scheduled, Decision Maker Bought-In, Contract Sent, Closed Won and Closed Lost. Each displayed a zero count.
- **OBSERVED:** The empty workspace presented guidance, knowledge links, Add deal and Import data from a file actions.
- **OBSERVED:** Table view replaced the board with “No Deals match the current filters” and a retry explanation while preserving the shared toolbar and zero-count footer.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Sales Pipeline | Open, then close | Showed disabled All Pipelines, selected Sales Pipeline and a Manage pipelines link. |
| Add deals | Open, then close | Offered Create new and Import. |
| Board/Table view | Switch both ways | Updated the route between `/board` and `/list` and rendered the matching empty state. |
| Add deal / Import / Export / Clone | Not activated | Outcomes remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** The selected layout is reflected in both the route and accessible checked state.
- **OBSERVED:** Board and table empty states are purpose-specific rather than identical.
- **NEEDS VERIFICATION:** Populated cards, drag and drop, stage totals, card preview, pagination, permissions and view persistence.

## Technical Data

- **OBSERVED / DOM:** Board and Table view are mutually exclusive checkbox-like controls. Stage headings are buttons.
- **OBSERVED / DOM:** The pipeline selector uses a searchable list structure and links to pipeline settings.
- **NEEDS VERIFICATION:** Board data contract, drag mutation, aggregation logic and pipeline authorization.

## Human Context

- **RECOMMENDATION:** Preserve parity between board and table toolbars while tailoring the content and empty-state guidance to the selected layout.

## AI Context

- **FACT:** Empty board and empty table states were directly observed.
- **RECONSTRUCTION:** A local board should use fictional deals and local drag state only.
- **NEEDS VERIFICATION:** No deal was created, imported, moved, exported or cloned.

## Sources

- Authenticated HubSpot Deals screens, observed 2026-10-07.
