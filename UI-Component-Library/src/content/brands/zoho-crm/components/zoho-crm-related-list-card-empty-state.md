---
component: "Zoho CRM Related List Card and Empty State"
ui_category: "Data Display > Related records"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Related-list cards combine a title, context action and list or empty state beneath a record."
---

# Component: Zoho CRM Related List Card and Empty State

## Overview

The Overview stacks cards for connections, cadences, attachments, products, activities, meetings, emails, campaigns and social associations.

## Behavior & States

**OBSERVED:** Several cards showed empty messages while retaining action controls such as Add New, Enroll, Attach, Add Products or Compose Email. None were activated.

**RECONSTRUCTION:** Local cards use fictional related records and guarded actions.

**NEEDS VERIFICATION:** Populated rows, pagination, loading completion, creation flows, attachment upload, enrollment, email composition, social association and permissions.

## Technical Data

- **OBSERVED:** Related cards expose region descriptions and action buttons.
- **NOT OBSERVED:** Related-list query or mutation APIs.

```json
{"title":"Products","action":"Add Products","items":[],"emptyMessage":"No records found"}
```

## Accessibility

**NEEDS VERIFICATION:** region headings, empty-message announcements, action context and loading-state semantics.

## Sources

Authenticated Zoho CRM lead detail, observed 2026-10-07. No related-list action was executed.
