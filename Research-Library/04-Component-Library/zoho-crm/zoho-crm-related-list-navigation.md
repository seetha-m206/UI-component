---
component: "Zoho CRM Related List Navigation"
ui_category: "Navigation > Related lists"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A left detail rail links to notes, connections, activities, communications and extensible related lists."
---

# Component: Zoho CRM Related List Navigation

## Overview

The record detail rail lists Notes, Connected Records, Cadences, Attachments, Products, Open Activities, Closed Activities, Invited Meetings, Emails, Campaigns and Social, followed by Add Related List and Links.

## Behavior & States

**OBSERVED:** The rail remains distinct from the main record content and maps to corresponding related-list sections below the details.

**RECONSTRUCTION:** A local detail page may use the same information architecture with fictional related items.

**NEEDS VERIFICATION:** Scroll targeting, active-item state, reordering, adding a list or link, permissions and persistence.

## Technical Data

- **OBSERVED:** Related-list destinations expose named buttons.
- **NOT OBSERVED:** Related-list configuration schema or access rules.

```json
{"active":"Notes","items":["Notes","Connected Records","Cadences","Attachments","Products","Activities","Emails"]}
```

## Accessibility

**NEEDS VERIFICATION:** landmark semantics, active state, focus destination and skip behavior.

## Sources

Authenticated Zoho CRM lead detail, observed 2026-10-07.
