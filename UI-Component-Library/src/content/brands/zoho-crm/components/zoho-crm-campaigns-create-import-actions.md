---
component: "Zoho CRM Campaigns Create and Import Actions"
ui_category: "Actions > Empty-state actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Create and Import provide manual and bulk-data exits from the Campaigns onboarding state."
---

# Component: Zoho CRM Campaigns Create and Import Actions

## Overview

The Campaigns empty state ends with two adjacent actions for adding campaign records.

## Behavior & States

**OBSERVED:** Create and Import appeared as separate buttons beneath the explanatory copy.

**RECONSTRUCTION:** The fixture keeps both controls disabled for documentation.

**NEEDS VERIFICATION:** Forms, mapping, validation, duplicate handling, cancellation and persistence were not exercised.

## Rules & Validation

Both controls can initiate provider writes. Observation-only research stops before activation.

## Technical Data

- **OBSERVED:** Create precedes Import.
- **OBSERVED:** Both actions share the same compact onboarding panel.
- **NOT OBSERVED:** Handlers, requests, authorization or outcomes.

### State Fixtures

```json
{"module":"Campaigns","actions":[{"label":"Create","enabled":false},{"label":"Import","enabled":false}]}
```

## Accessibility

**NEEDS VERIFICATION:** Button names, focus order and grouping semantics.

## Sources

Authenticated Zoho CRM Campaigns, observed 2026-10-07. Private receipt `10-campaigns-empty-state.png`.
