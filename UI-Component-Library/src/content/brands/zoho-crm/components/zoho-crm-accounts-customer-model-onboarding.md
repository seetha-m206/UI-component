---
component: "Zoho CRM Accounts Customer Model Onboarding"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "An empty Accounts module explains the account concept by contrasting business customers with end users."
---

# Component: Zoho CRM Accounts Customer Model Onboarding

## Overview

The Accounts module uses an explanatory empty state to help a new workspace decide whether organizational account records fit its customer model.

## Behavior & States

**OBSERVED:** The panel asked who the customer is and explained that an Account represents an organization or department.

**RECONSTRUCTION:** Fictional copy retains the business-model decision without referring to live organization data.

**NEEDS VERIFICATION:** Populated, filtered-empty, permission-limited and plan-specific variants were not observed.

## Rules & Validation

Frame the decision in domain language before exposing setup actions. Do not infer that the module is unused outside the inspected empty state.

## Technical Data

- **OBSERVED:** The panel replaces the normal Accounts record workspace.
- **OBSERVED:** Explanatory copy precedes the two customer-model options.
- **NOT OBSERVED:** Eligibility logic, analytics or provider payload.

### State Fixtures

```json
{"module":"Accounts","workspace":"Northwind Demo","visibleRecords":0,"question":"Who are your customers?"}
```

## Accessibility

**NEEDS VERIFICATION:** Heading association, reading order and replacement announcements.

## Sources

Authenticated Zoho CRM Accounts, observed 2026-10-07. Private receipt `06-accounts-empty-state.png`.
