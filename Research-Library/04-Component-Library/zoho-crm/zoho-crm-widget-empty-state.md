---
component: "Zoho CRM Dashboard Widget Empty State"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "An inline empty message replaces table rows while preserving widget controls, headers and total count."
---

# Component: Zoho CRM Dashboard Widget Empty State

## Overview

When a Home table widget has no visible records, a centered module-specific message appears inside the table body while the surrounding widget remains intact.

## Behavior & States

**OBSERVED:** Empty messages included patterns equivalent to no tasks, meetings, leads or deals found. The widget continued to show column headers and a zero total.

**RECONSTRUCTION:** Local fixtures use neutral fictional messages and counts.

**NEEDS VERIFICATION:** Distinction between truly empty, filtered empty, permission-restricted, loading failure and offline states. No recovery action was visible in the inspected empty widgets.

## Rules & Validation

Do not infer that no records exist in the organization. The observed message is limited to the current widget, view, owner and permissions.

## Technical Data

- **OBSERVED:** Empty copy is rendered within the list region rather than replacing the whole card.
- **OBSERVED:** `Total Records` remains visible with a zero value.
- **NOT OBSERVED:** Empty-state decision logic or API response.

### State Fixtures

```json
{"widget":"My Meetings","message":"No meetings found.","total":0,"filtersApplied":false}
```

## Accessibility

**NEEDS VERIFICATION:** whether the empty result is announced after refresh or filtering and whether assistive technology receives context from the widget title.

## Sources

Authenticated Zoho CRM Home, observed 2026-10-07. Private receipt `01-home-dashboard.png`.
