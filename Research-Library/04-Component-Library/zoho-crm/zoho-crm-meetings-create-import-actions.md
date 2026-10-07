---
component: "Zoho CRM Meetings Create and Import Actions"
ui_category: "Actions > Empty-state actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Create and Import provide manual and bulk entry points from the Meetings onboarding state."
---

# Component: Zoho CRM Meetings Create and Import Actions

## Overview

The Meetings empty state ends with actions for adding meeting records.

## Behavior & States

**OBSERVED:** Create and Import appeared beneath the meeting guidance.

**RECONSTRUCTION:** Both controls remain disabled in documentation fixtures.

**NEEDS VERIFICATION:** Scheduling, invite delivery, recurrence, mapping, validation and persistence were not exercised.

## Rules & Validation

Both controls can create or import provider data. Observation-only research stops before activation.

## Technical Data

- **OBSERVED:** Create has first visual position.
- **OBSERVED:** Import is a sibling action.
- **NOT OBSERVED:** Handlers, requests, permissions or outcomes.

### State Fixtures

```json
{"module":"Meetings","actions":[{"label":"Create","enabled":false},{"label":"Import","enabled":false}]}
```

## Accessibility

**NEEDS VERIFICATION:** Button names, focus order and grouping semantics.

## Sources

Authenticated Zoho CRM Meetings, observed 2026-10-07. Private receipt `12-meetings-empty-state.png`.
