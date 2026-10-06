---
component: "Zoho Desk Social Connect Action"
ui_category: "Actions > Integration activation"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A Get Started action begins social-channel onboarding."
---

# Component: Zoho Desk Social Connect Action

## Overview

A Get Started action begins social-channel onboarding.

## Behavior & States

**OBSERVED:** Get Started was visible on the Social onboarding screen.

**RECONSTRUCTION:** The local button is guarded and connects no provider.

**NOT OBSERVED:** Brand creation, import, OAuth, account selection, permissions and billing.

## Rules & Validation

**NEEDS VERIFICATION:** Provider outcomes remain unverified because no consequential action was executed.

## State Fixtures

```json
{"mode":"fictional local preview","providerAction":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider values were excluded.
