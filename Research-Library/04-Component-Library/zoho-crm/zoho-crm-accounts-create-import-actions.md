---
component: "Zoho CRM Accounts Create and Import Actions"
ui_category: "Actions > Empty-state actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Create and Import actions sit beneath the business-customer path in the Accounts onboarding state."
---

# Component: Zoho CRM Accounts Create and Import Actions

## Overview

The other-business branch of Accounts onboarding offers manual creation and bulk import entry points.

## Behavior & States

**OBSERVED:** Create and Import appeared together beneath the other-business label.

**RECONSTRUCTION:** The fixture keeps both controls disabled and records only their relative placement.

**NEEDS VERIFICATION:** Forms, mapping, validation, deduplication, confirmation, cancellation and persistence were not exercised.

## Rules & Validation

Both controls can initiate provider writes. Observation-only research stops before activation.

## Technical Data

- **OBSERVED:** Create and Import are presented as sibling actions.
- **OBSERVED:** They are scoped visually to organizational customers.
- **NOT OBSERVED:** Handlers, network requests, permissions or outcomes.

### State Fixtures

```json
{"module":"Accounts","customerType":"Other businesses","actions":[{"label":"Create","enabled":false},{"label":"Import","enabled":false}]}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, names, grouping and disabled-state communication in a local reconstruction.

## Sources

Authenticated Zoho CRM Accounts, observed 2026-10-07. Private receipt `06-accounts-empty-state.png`.
