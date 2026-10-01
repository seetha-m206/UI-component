---
component: SE Ranking project page header
ui_category: 'Application Layout > Page Header'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: Project breadcrumb and title with the live-observed eleven-control Widgets visibility menu.
---

# Component: SE Ranking project page header

## Human View

The header combines the centilio.com breadcrumb, Overview title, site label, and Widgets control.

## State Fixtures

- Observed closed header.
- Observed open Widgets menu with eleven checked visibility controls and drag handles.
- Observed Insights visibility toggle off and restored on.
- Observed Content dragged above Insights, persisted after reload, then the original Insights-before-Content order restored and persisted.

## Actions

| Element | Local behavior | Evidence |
| --- | --- | --- |
| Breadcrumb | Guard message | Destination not exercised |
| Widgets | Opens menu | Eleven live-observed widget controls |
| Widget checkbox | Toggles widget visibility | Insights was hidden and restored |
| Drag handle | Reorders a widget | Content-before-Insights persisted after reload, then the original order was restored |

## Evidence Boundary

- **OBSERVED:** Breadcrumb, title, site label, Widgets trigger, eleven menu labels, checked state, drag handles, hide/show behavior, drag reorder, reload persistence, and restored original order.
- **RECONSTRUCTION:** Responsive local layout and icon substitutions.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview, 2026-09-30.
- **OBSERVATION:** Authenticated Widgets menu and reversible Insights visibility toggle, 2026-10-01.
- **OBSERVATION:** Authenticated Content/Insights drag reorder, reload persistence, and restoration, 2026-10-01.
