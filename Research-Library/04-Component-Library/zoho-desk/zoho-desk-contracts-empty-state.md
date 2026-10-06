---
component: "Zoho Desk Contracts Empty State"
ui_category: "Customer Management > Contracts"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An empty contracts list explains service-validity periods within the standard list toolbar."
---

# Component: Zoho Desk Contracts Empty State

## Overview

**OBSERVED:** All Contracts, filter, refresh, total count and an empty-state explanation were visible. The global add action changed to Add new Contract.

**RECONSTRUCTION:** The local fixture contains no contracts and blocks creation.

**NOT OBSERVED:** Contract creation, validation, renewal, expiration, entitlement and ticket association.

## State Fixtures

```json
{"view":"All Contracts","contracts":[],"creation":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06.
