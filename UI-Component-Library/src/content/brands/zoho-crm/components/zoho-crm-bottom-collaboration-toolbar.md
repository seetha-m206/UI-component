---
component: "Zoho CRM Bottom Collaboration Toolbar"
ui_category: "Application Layout > Collaboration toolbar"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A persistent bottom rail surfaces messaging, reminders, recent items, accessibility and help utilities."
---

# Component: Zoho CRM Bottom Collaboration Toolbar

## Overview

A narrow toolbar spans the bottom of the application and exposes My Pins, Chats, Channels, Threads, People, Announcements, Sticky Notes, Activity Reminders, Recent Items, Accessibility and Help.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Collaboration item | Activate | **NEEDS VERIFICATION:** drawer or panel behavior not exercised | Guarded |
| Accessibility | Activate | **NEEDS VERIFICATION:** settings were not opened | Unverified |
| Help | Activate | **NEEDS VERIFICATION:** help surface was not opened | Unverified |

## Behavior & States

**OBSERVED:** The rail remained visible on the inspected Home screen and contains a mix of text-labeled and description-labeled controls.

**RECONSTRUCTION:** A local preview may show fictional chat or reminder items only.

**NEEDS VERIFICATION:** unread indicators, message sending, drawer stacking, notification behavior, persistence and cross-module availability.

## Rules & Validation

Messaging and collaboration controls were not opened because they may expose or transmit private communications.

## Technical Data

- **OBSERVED:** The embedded messaging surface exposes a menu bar and named controls.
- **OBSERVED:** A same-origin application page contains an embedded Zoho messaging frame.
- **NOT OBSERVED:** Provider message APIs, real-time transport, storage or notification permissions.

### State Fixtures

```json
{"activePanel":null,"unread":{"chats":2,"announcements":1},"recentItems":["Aurora Labs","Renewal Q4"]}
```

## Accessibility

**OBSERVED:** Several controls expose descriptive names. **NEEDS VERIFICATION:** focus trapping inside panels, unread announcements and keyboard dismissal.

## Sources

Authenticated Zoho CRM Home, observed 2026-10-07. Private receipt `01-home-dashboard.png`.
