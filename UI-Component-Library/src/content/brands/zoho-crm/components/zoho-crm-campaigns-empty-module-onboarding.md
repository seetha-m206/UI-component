---
component: "Zoho CRM Campaigns Empty Module Onboarding"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A compact empty Campaigns state defines campaigns as marketing efforts planned, executed and monitored in CRM."
---

# Component: Zoho CRM Campaigns Empty Module Onboarding

## Overview

The Campaigns module presents a concise explanatory panel when no campaign records are visible.

## Behavior & States

**OBSERVED:** The panel used a planning-oriented heading, one explanatory sentence and Create and Import actions.

**RECONSTRUCTION:** The fixture represents an empty fictional campaign workspace.

**NEEDS VERIFICATION:** Populated, filtered-empty, permission-limited, loading and error variants were not observed.

## Rules & Validation

Use the explanatory sentence to establish the module's purpose before data-entry actions. Do not treat the empty state as proof of organization-wide absence.

## Technical Data

- **OBSERVED:** The panel occupies the main module content region.
- **OBSERVED:** The explanation describes planning, execution and monitoring.
- **NOT OBSERVED:** Empty-state logic or provider payload.

### State Fixtures

```json
{"module":"Campaigns","workspace":"Northwind Demo","visibleRecords":0,"mode":"onboarding"}
```

## Accessibility

**NEEDS VERIFICATION:** Heading hierarchy, announcement behavior and reading order.

## Sources

Authenticated Zoho CRM Campaigns, observed 2026-10-07. Private receipt `10-campaigns-empty-state.png`.
