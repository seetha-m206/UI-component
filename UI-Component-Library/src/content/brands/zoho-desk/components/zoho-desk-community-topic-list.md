---
component: "Zoho Desk Community Topic List"
ui_category: "Community > Topic list"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A community list combines recency, type and status filters with topic engagement columns."
---

# Component: Zoho Desk Community Topic List

## Overview

The Forums workspace showed Recents, Type, Status and Classic View controls, a search field, Views, Comments and Likes columns, one populated topic row, pagination and moderation navigation.

## Behavior & States

**OBSERVED:** A populated list state and the surrounding toolbar were visible. No row or filter was activated.

**RECONSTRUCTION:** The local fixture replaces the provider topic and author with fictional values.

**NOT OBSERVED:** Topic details, creation, moderation actions, filter results, alternate layouts and pagination behavior.

## State Fixtures

```json
{"view":"Recents","type":"All","status":"All status","topic":"Welcome to Northwind Community","author":"Jordan Lee","views":0,"comments":0,"likes":0}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider record values were redacted.
