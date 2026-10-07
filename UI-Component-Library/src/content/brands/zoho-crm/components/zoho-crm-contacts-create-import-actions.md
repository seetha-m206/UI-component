---
component: "Zoho CRM Contacts Create and Import Actions"
ui_category: "Actions > Empty-state actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A primary Create action and secondary Import action provide two guarded exits from the Contacts empty state."
---

# Component: Zoho CRM Contacts Create and Import Actions

## Overview

The Contacts onboarding panel ends with two adjacent actions for adding data manually or through an import workflow.

## Behavior & States

**OBSERVED:** Create was presented first, followed by the word “or” and an Import action.

**RECONSTRUCTION:** The fixture exposes disabled fictional controls for documentation only.

**NEEDS VERIFICATION:** Dialogs, validation, duplicate detection, mapping, confirmation, cancellation and persistence were not exercised.

## Rules & Validation

Both actions can initiate provider-side writes. Observation-only research stops before activation and does not infer workflow behavior from labels.

## Technical Data

- **OBSERVED:** The actions form one compact choice group.
- **OBSERVED:** Create has stronger visual priority than Import.
- **NOT OBSERVED:** Action handlers, network requests, authorization or provider outcomes.

### State Fixtures

```json
{"module":"Contacts","actions":[{"label":"Create","enabled":false},{"label":"Import","enabled":false}],"reason":"documentation fixture"}
```

## Accessibility

**NEEDS VERIFICATION:** Button names, grouping semantics, focus treatment and the accessibility of the textual separator.

## Sources

Authenticated Zoho CRM Contacts, observed 2026-10-07. Private receipt `05-contacts-empty-state.png`.
