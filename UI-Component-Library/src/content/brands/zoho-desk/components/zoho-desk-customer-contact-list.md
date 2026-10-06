---
component: "Zoho Desk Customer Contact List"
ui_category: "Customer Management > Contact list"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A compact customer directory pairs Contact and Account navigation with an alphabetical index."
---

# Component: Zoho Desk Customer Contact List

## Overview

The Customers workspace showed Contact and Account navigation, an All Contacts view picker, filter and layout controls, one populated contact row, and an ALL to Z alphabetical index.

## Behavior & States

**OBSERVED:** The populated list structure and alphabet index were visible. The contact was not opened.

**RECONSTRUCTION:** Fictional names, organization, email and telephone values replace provider data.

**NOT OBSERVED:** Search, alphabet filtering, contact details, creation, editing, deletion and account switching.

## State Fixtures

```json
{"name":"Taylor Reed","account":"Northwind Demo","email":"taylor@example.test","phone":"+1 555 010 1042","index":"ALL"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider contact data was excluded.
