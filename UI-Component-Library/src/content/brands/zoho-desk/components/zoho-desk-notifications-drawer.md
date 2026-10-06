---
component: "Zoho Desk Notifications Drawer"
ui_category: "Notifications > Notification centre"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A right-side notification drawer groups feed tabs, a read action and compact event rows."
---

# Component: Zoho Desk Notifications Drawer

## Overview

The header bell opened a right drawer with Notifications title, Mark All As Read, settings and close controls, ALL and EMAIL FAILURE tabs, and one timestamped assignment event.

## Behavior & States

**OBSERVED:** Opening and closing disclosure only. The notification was not opened and no read state was changed.

**RECONSTRUCTION:** The preview uses a fictional ticket assignment event and blocks mark-read and settings actions.

**NOT OBSERVED:** Read transitions, populated email failures, settings, pagination, delivery and deep-link behavior.

## State Fixtures

```json
{"tab":"ALL","unread":1,"event":"Ticket #DEMO-1042 was assigned to Alex Morgan","timestamp":"09:15 AM","markRead":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider notification text was excluded.
