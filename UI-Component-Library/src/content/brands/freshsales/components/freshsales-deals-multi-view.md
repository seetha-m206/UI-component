---
component: "Freshsales Deals Multi-view Workspace"
ui_category: "Data Display > Kanban and Table Views"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."
---

# Freshsales Deals Multi-view Workspace

## Location

- **OBSERVED:** Authenticated Deals workspace in Pipeline, Forecast, and Table views.

## Structure

- **OBSERVED:** Shared controls included saved view, aggregate value, import/add/settings actions, view switcher, sorting, applied-filter indicator, owner filter, search, and Quotas and Forecasting link.
- **OBSERVED:** Pipeline columns showed stage name, count, weighted value, add action, and stacked deal cards.
- **OBSERVED:** Forecast grouped the same workspace by month or quarter with year selection.
- **OBSERVED:** Table view exposed products, value, stage, close date, owner, pipeline, related account, next activity, row selection, and pagination.

## Actions

- **OBSERVED:** Pipeline, Forecast, and Table were switched safely. No deal was opened, moved, edited, imported, or created.

## Behavior & States

- **OBSERVED:** Both pipeline and table displayed skeleton placeholders before data resolved. Forecast showed an empty month-grouped state for the selected period.
- **RECONSTRUCTION:** Local cards and financial values are fictional and cannot be dragged or persisted.

## Technical Data

- **OBSERVED / DOM:** Accessible view menu with Table, Pipeline, Forecast, and Group by options.
- **NEEDS VERIFICATION:** Drag/drop persistence, optimistic updates, forecast calculations, archive behavior, and permissions.

## Sources

- **OBSERVED:** Authenticated Freshsales Deals views, 2026-10-07.
