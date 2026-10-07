---
component: "Zoho CRM Home Table Widget"
ui_category: "Dashboard > Table widget"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A dashboard widget combines a title, refresh, sort, configurable columns, horizontal scrolling, records and a total."
---

# Component: Zoho CRM Home Table Widget

## Overview

Home table widgets display operational lists such as open tasks, meetings, today's leads and deals closing this month inside card-like dashboard regions.

## Structure

Widget title and refresh → Sort control → column-settings control → column header row → record or empty area → horizontal scrollbar → Total Records footer.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Sort | Open | **NEEDS VERIFICATION:** sort menu not opened | Unverified |
| View Settings | Open | **NEEDS VERIFICATION:** column settings not opened | Unverified |
| Column header control | Activate | **NEEDS VERIFICATION:** sorting or filtering not exercised | Unverified |

## Behavior & States

**OBSERVED:** Different widgets reuse the same frame while defining module-specific columns. The table area can render an empty message and still preserves headers, settings and total count.

**RECONSTRUCTION:** Fictional rows demonstrate the pattern without copying contacts, deals or activities.

**NEEDS VERIFICATION:** populated rows, row actions, pagination, server sorting, column persistence, loading and errors.

## Technical Data

- **OBSERVED:** The rendered structure exposes a semantic table and row with named column cells.
- **OBSERVED:** A `View Settings` button is exposed beside the table.
- **NOT OBSERVED:** Data schema, query parameters or row-level authorization.

### State Fixtures

```json
{"title":"My Open Tasks","columns":["Subject","Due Date","Status","Priority"],"rows":[{"subject":"Prepare renewal summary","dueDate":"2026-10-09","status":"Not Started","priority":"High"}],"total":1}
```

## Accessibility

**OBSERVED:** Header labels are exposed in a table row. **NEEDS VERIFICATION:** sortable-header state, keyboard scrolling, settings dialog labeling and row navigation.

## Sources

Authenticated Zoho CRM Home, observed 2026-10-07. Private receipt `01-home-dashboard.png`.
