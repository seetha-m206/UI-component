---
component: "Zoho CRM Deals Create and Import Actions"
ui_category: "Actions > Empty-state actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Create and Import provide two guarded exits from the empty Deals onboarding state."
---

# Component: Zoho CRM Deals Create and Import Actions

## Overview

The Deals onboarding panel ends with manual creation and import actions.

## Behavior & States

**OBSERVED:** Create appeared first, followed by a textual separator and Import.

**RECONSTRUCTION:** Fictional controls remain disabled for documentation.

**NEEDS VERIFICATION:** Forms, mapping, validation, duplicate handling, cancellation and persistence were not exercised.

## Rules & Validation

Both controls can initiate provider-side writes. Do not activate them during observation-only research.

## Technical Data

- **OBSERVED:** The two actions form one compact choice group.
- **OBSERVED:** Create has stronger visual priority.
- **NOT OBSERVED:** Handlers, requests, authorization or outcomes.

### State Fixtures

```json
{"module":"Deals","actions":[{"label":"Create","enabled":false},{"label":"Import","enabled":false}]}
```

## Accessibility

**NEEDS VERIFICATION:** Group semantics, focus order and separator treatment.

## Sources

Authenticated Zoho CRM Deals, observed 2026-10-07. Private receipt `07-deals-empty-state.png`.
