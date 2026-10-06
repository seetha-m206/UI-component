---
component: "Zoho Desk Activities Empty State"
ui_category: "Feedback > Empty state"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An empty Activities workspace directs agents toward adding a call, task or event."
---

# Component: Zoho Desk Activities Empty State

## Overview

The Activities workspace showed Activities, Calls, Tasks and Events navigation, an All Activities picker, filter and Classic View controls, and a centered empty state with an Add Activity split action.

## Behavior & States

**OBSERVED:** The empty state and navigation were visible.

**RECONSTRUCTION:** Add Activity opens only a local menu and no activity is created.

**NOT OBSERVED:** Call, task or event forms, validation, reminders, completion and recurrence.

## State Fixtures

```json
{"view":"All Activities","items":[],"actions":["Call","Task","Event"],"creation":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06.
