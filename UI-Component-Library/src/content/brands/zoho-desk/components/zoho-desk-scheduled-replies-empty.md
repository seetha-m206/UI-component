---
component: "Zoho Desk Scheduled Replies Empty State"
ui_category: "Communication > Scheduled replies"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An empty scheduled-replies list explains advance response delivery and offers a guarded enablement action."
---

# Component: Zoho Desk Scheduled Replies Empty State

## Overview

**OBSERVED:** All Scheduled Replies, filter, sort, an explanatory empty state, Learn More and Enable Now were visible.

**RECONSTRUCTION:** Enable Now is guarded locally.

**NOT OBSERVED:** Feature enablement, scheduling, delivery, editing, cancellation, permissions and department scope.

## State Fixtures

```json
{"view":"All Scheduled Replies","replies":[],"enablement":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06.
