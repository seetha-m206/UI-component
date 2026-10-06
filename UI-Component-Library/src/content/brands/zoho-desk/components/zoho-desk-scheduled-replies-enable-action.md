---
component: "Zoho Desk Scheduled Replies Enable Action"
ui_category: "Actions > Feature activation"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An Enable Now action gates scheduled replies from the empty state."
---

# Component: Zoho Desk Scheduled Replies Enable Action

## Overview

An Enable Now action gates scheduled replies from the empty state.

## Behavior & States

**OBSERVED:** Enable Now and Learn More were visible.

**RECONSTRUCTION:** The local enable action is guarded.

**NOT OBSERVED:** Feature enablement, plan checks, department scope, scheduling and delivery.

## Rules & Validation

**NEEDS VERIFICATION:** Provider outcomes remain unverified because no consequential action was executed.

## State Fixtures

```json
{"mode":"fictional local preview","providerAction":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider values were excluded.
