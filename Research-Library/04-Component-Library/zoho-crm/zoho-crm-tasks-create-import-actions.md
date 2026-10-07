---
component: "Zoho CRM Tasks Create and Import Actions"
ui_category: "Actions > Empty-state actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Create and Import provide manual and bulk entry points from the Tasks onboarding state."
---

# Component: Zoho CRM Tasks Create and Import Actions

## Overview

The Tasks empty state offers manual task creation and import.

## Behavior & States

**OBSERVED:** Create and Import appeared beneath the task-reminder explanation.

**RECONSTRUCTION:** Both controls remain disabled in fictional documentation.

**NEEDS VERIFICATION:** Forms, recurrence, reminders, mapping, validation, cancellation and persistence were not exercised.

## Rules & Validation

Both controls can initiate provider writes. Observation-only research stops before activation.

## Technical Data

- **OBSERVED:** Create targets a task-creation route.
- **OBSERVED:** Import is presented as a sibling action.
- **NOT OBSERVED:** Handlers, requests, permissions or outcomes.

### State Fixtures

```json
{"module":"Tasks","actions":[{"label":"Create","enabled":false},{"label":"Import","enabled":false}]}
```

## Accessibility

**NEEDS VERIFICATION:** Link-versus-button semantics, focus order and grouping.

## Sources

Authenticated Zoho CRM Tasks, observed 2026-10-07. Private receipt `11-tasks-empty-state.png`.
