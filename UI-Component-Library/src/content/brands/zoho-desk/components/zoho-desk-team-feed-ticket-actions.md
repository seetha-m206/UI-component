---
component: "Zoho Desk Team Feed Ticket Actions"
ui_category: "Actions > Inline record actions"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Reply, Comment and Close Ticket actions appear beneath a ticket activity card."
---

# Component: Zoho Desk Team Feed Ticket Actions

## Overview

Reply, Comment and Close Ticket actions appear beneath a ticket activity card.

## Behavior & States

**OBSERVED:** The three inline actions were visible.

**RECONSTRUCTION:** Each local action displays a guard.

**NOT OBSERVED:** Composer behavior, comment persistence, closure confirmation and permissions.

## Rules & Validation

**NEEDS VERIFICATION:** Provider outcomes remain unverified because no consequential action was executed.

## State Fixtures

```json
{"mode":"fictional local preview","providerAction":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider values were excluded.
