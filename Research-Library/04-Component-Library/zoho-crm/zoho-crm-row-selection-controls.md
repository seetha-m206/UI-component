---
component: "Zoho CRM Row Selection Controls"
ui_category: "Selection > Table row selection"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A select-all checkbox and per-row checkboxes prepare a list for bulk actions without changing records themselves."
---

# Component: Zoho CRM Row Selection Controls

## Overview

The Leads table places a select-all checkbox in the header and one checkbox on every visible record row.

## Behavior & States

**OBSERVED:** All checkboxes were initially unselected. No live row was selected because selection can reveal consequential bulk controls.

**RECONSTRUCTION:** Local examples may select fictional records and expose guarded bulk actions.

**NEEDS VERIFICATION:** Indeterminate state, page-only versus all-record selection, selection persistence, bulk toolbar contents and keyboard behavior.

## Technical Data

- **OBSERVED:** Header checkbox uses `id="selectAllEntity"`.
- **OBSERVED:** Row checkboxes expose checkbox roles but record-derived identifiers.
- **NOT OBSERVED:** Bulk-operation API or selection model.

```json
{"visibleRows":30,"selectedIds":[],"selectAll":false,"indeterminate":false}
```

## Accessibility

**NEEDS VERIFICATION:** record-specific accessible labels, indeterminate announcement and bulk-action focus changes.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. No selection control was changed.
