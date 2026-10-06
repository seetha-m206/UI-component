---
component: "Zoho Desk Tagged Tickets Empty State"
ui_category: "Search and Filtering > Tag view"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A tag-scoped ticket view pairs list controls with a no-matching-tickets state."
---

# Component: Zoho Desk Tagged Tickets Empty State

## Overview

**OBSERVED:** A selected tag with count, filter, edit, Classic View, sort and no-tickets message were visible.

**RECONSTRUCTION:** The local tag is `follow-up` and edit and filtering are guarded.

**NOT OBSERVED:** Tag inventory, creation, rename, deletion, assignment and populated results.

## State Fixtures

```json
{"tag":"follow-up","count":0,"tickets":[],"edit":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider tag values were redacted.
