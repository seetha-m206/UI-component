---
component: "Zoho Desk Contract Create Action"
ui_category: "Actions > Primary creation action"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A context-sensitive global action opens contract creation from the Contracts module."
---

# Component: Zoho Desk Contract Create Action

## Overview

A context-sensitive global action opens contract creation from the Contracts module.

## Behavior & States

**OBSERVED:** The global add action was labelled Add new Contract.

**RECONSTRUCTION:** The local action displays a guard and opens no form.

**NOT OBSERVED:** Contract form, validation, save, permissions and persistence.

## Rules & Validation

**NEEDS VERIFICATION:** Provider outcomes remain unverified because no consequential action was executed.

## State Fixtures

```json
{"mode":"fictional local preview","providerAction":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider values were excluded.
