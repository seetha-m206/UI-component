---
component: "Zoho Desk Tag View Toolbar"
ui_category: "Search and Filtering > Tag toolbar"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A tag-scoped toolbar combines count, filter, edit, layout and sort controls."
---

# Component: Zoho Desk Tag View Toolbar

## Overview

A tag-scoped toolbar combines count, filter, edit, layout and sort controls.

## Behavior & States

**OBSERVED:** A selected tag, count, filter, edit, Classic View and sort controls were visible.

**RECONSTRUCTION:** The preview uses a fictional follow-up tag and guards edits.

**NOT OBSERVED:** Tag inventory, filter results, rename, deletion, layout changes and persistence.

## Rules & Validation

**NEEDS VERIFICATION:** Provider outcomes remain unverified because no consequential action was executed.

## State Fixtures

```json
{"mode":"fictional local preview","providerAction":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider values were excluded.
