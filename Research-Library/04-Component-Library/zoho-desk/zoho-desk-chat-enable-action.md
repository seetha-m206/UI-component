---
component: "Zoho Desk Chat Enable Action"
ui_category: "Actions > Integration activation"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An Enable Chat call to action gates live-chat setup."
---

# Component: Zoho Desk Chat Enable Action

## Overview

An Enable Chat call to action gates live-chat setup.

## Behavior & States

**OBSERVED:** Enable Chat was visible on the Chat onboarding screen.

**RECONSTRUCTION:** The local action is guarded.

**NOT OBSERVED:** Enablement, authentication, widget setup, routing and persistence.

## Rules & Validation

**NEEDS VERIFICATION:** Provider outcomes remain unverified because no consequential action was executed.

## State Fixtures

```json
{"mode":"fictional local preview","providerAction":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider values were excluded.
