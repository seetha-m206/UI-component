---
component: "HubSpot Ticket Status Details Panel"
ui_category: "Data Display > Board Column Settings"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Status Details Panel

## Location

- **OBSERVED:** Authenticated Unassigned tickets empty board, opened from the New column header and inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** The open panel was visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** The panel was headed Sort by and retained Create date with Most recent selected and Oldest available.
- **OBSERVED:** Edit status details warned that pipeline status changes made there apply across HubSpot. It showed Status name with value New, an empty Status description, 18 labeled color choices, disabled Save and Cancel.
- **OBSERVED:** The selected status color was #016DE1.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| New board column header | Keyboard Space | Opened the combined sort and status-details panel. |
| Escape | Keyboard Escape | Closed the panel without editing any value. |
| Name, description, colors, sort choices and Save | Not activated | Editing, validation, global application and persistence are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Save was disabled in the untouched state. The panel closed without changing the New column or board.
- **NOT OBSERVED:** Dirty-state behavior, Save enablement, validation, cancel confirmation, permissions and cross-HubSpot propagation.

## Technical Data

- **OBSERVED / DOM:** Name and description were settable text controls. Colors were exposed as checkbox controls named by hex value, with #016DE1 selected.

## Human Context

- **RECOMMENDATION:** Pair globally applied status edits with an explicit scope warning and keep Save disabled until a meaningful change exists.

## AI Context

- **FACT:** The panel structure and untouched control states were directly observed.
- **NOT OBSERVED:** No edit or provider save outcome was attempted.

## Needs Verification

- **NEEDS VERIFICATION:** Dirty-state validation, Save enablement, successful update, cancel behavior, permissions and resulting board changes.

## Sources

- **OBSERVED:** Authenticated Unassigned tickets board, inspected 2026-10-06.
