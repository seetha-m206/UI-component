---
component: "Zoho CRM Calls Manual Activity Actions"
ui_category: "Actions > Activity entry actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Manual alternatives in the Calls onboarding state cover logging calls, scheduling follow-ups and importing records."
---

# Component: Zoho CRM Calls Manual Activity Actions

## Overview

The Calls onboarding panel offers manual activity entry when telephony integration is not used.

## Behavior & States

**OBSERVED:** The manual path referenced Log Calls, scheduling a follow-up call and Import.

**RECONSTRUCTION:** All actions remain disabled in fictional fixtures.

**NEEDS VERIFICATION:** Control roles, forms, reminders, mapping, validation, cancellation and persistence were not exercised.

## Rules & Validation

Every manual path can create provider records. Do not activate during observation-only research.

## Technical Data

- **OBSERVED:** Manual actions follow an explicit alternative separator.
- **OBSERVED:** Import is exposed as a button.
- **NOT OBSERVED:** Handlers, requests, permissions or outcomes.

### State Fixtures

```json
{"module":"Calls","actions":[{"label":"Log Calls","enabled":false},{"label":"Schedule call","enabled":false},{"label":"Import","enabled":false}]}
```

## Accessibility

**NEEDS VERIFICATION:** Whether Log Calls and Schedule call are interactive controls and how the alternative group is announced.

## Sources

Authenticated Zoho CRM Calls, observed 2026-10-07. Private receipt `13-calls-empty-state.png`.
