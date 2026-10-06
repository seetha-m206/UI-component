---
component: "Zoho Desk Contracts List Toolbar"
ui_category: "Enterprise Tables > List toolbar"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A compact contracts toolbar combines saved view, filter, refresh and count controls."
---

# Component: Zoho Desk Contracts List Toolbar

## Overview

A compact contracts toolbar combines saved view, filter, refresh and count controls.

## Behavior & States

**OBSERVED:** All Contracts, filter, refresh and Total Count controls were visible.

**RECONSTRUCTION:** The local toolbar uses an empty fictional list and guards changes.

**NOT OBSERVED:** View changes, filters, refresh semantics, counts and persistence.

## Rules & Validation

**NEEDS VERIFICATION:** Provider outcomes remain unverified because no consequential action was executed.

## State Fixtures

```json
{"mode":"fictional local preview","providerAction":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider values were excluded.
