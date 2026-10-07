---
component: "Zoho CRM Contacts Empty Module Onboarding"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A full-module onboarding state explains the value of Contacts and presents guarded creation and import entry points."
---

# Component: Zoho CRM Contacts Empty Module Onboarding

## Overview

The Contacts module replaces its normal record workspace with a centered onboarding panel when no contacts are visible in the current account.

## Behavior & States

**OBSERVED:** The panel showed a benefit-oriented heading, two guidance rows and Create and Import actions.

**RECONSTRUCTION:** The fixture models an empty fictional workspace without suggesting that the organization has no contacts beyond the inspected view.

**NEEDS VERIFICATION:** Populated, filtered-empty, permission-limited, loading, error and offline variants were not observed.

## Rules & Validation

Do not treat the empty state as proof of organization-wide absence. Create and Import are consequential entry points and were not activated.

## Technical Data

- **OBSERVED:** The onboarding panel occupies the main module content region.
- **OBSERVED:** Existing global navigation remains available.
- **NOT OBSERVED:** Empty-state eligibility logic or provider response payload.

### State Fixtures

```json
{"module":"Contacts","visibleRecords":0,"mode":"onboarding","workspace":"Northwind Demo"}
```

## Accessibility

**NEEDS VERIFICATION:** Heading association, focus order and announcement behavior when the empty state replaces a record list.

## Sources

Authenticated Zoho CRM Contacts, observed 2026-10-07. Private receipt `05-contacts-empty-state.png`.
