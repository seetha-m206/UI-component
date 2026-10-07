---
component: "Zoho CRM Deals Empty Module Onboarding"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "An empty Deals workspace introduces sales-cycle setup, pipeline monitoring and guarded data-entry actions."
---

# Component: Zoho CRM Deals Empty Module Onboarding

## Overview

The Deals module replaces its normal workspace with a sales-monitoring onboarding panel when no deals are visible.

## Behavior & States

**OBSERVED:** The panel used a question-style heading, two setup guidance rows and Create and Import actions.

**RECONSTRUCTION:** The fictional state keeps the structure while avoiding live pipeline or organization data.

**NEEDS VERIFICATION:** Populated, filtered-empty, permission-limited, loading and error variants were not observed.

## Rules & Validation

Do not interpret the empty panel as proof that no deals exist outside the inspected scope. Setup and creation controls were not activated.

## Technical Data

- **OBSERVED:** The onboarding panel occupies the main module region.
- **OBSERVED:** Existing global and module navigation remain available.
- **NOT OBSERVED:** Empty-state decision logic or provider payload.

### State Fixtures

```json
{"module":"Deals","workspace":"Northwind Demo","visibleRecords":0,"mode":"onboarding"}
```

## Accessibility

**NEEDS VERIFICATION:** Heading association, focus order and announcement behavior.

## Sources

Authenticated Zoho CRM Deals, observed 2026-10-07. Private receipt `07-deals-empty-state.png`.
