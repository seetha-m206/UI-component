---
component: "Zoho CRM List Toolbar and View Controls"
ui_category: "Data Controls > List toolbar"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Filter, sort, display-mode, refresh, create and overflow controls sit above a CRM list."
---

# Component: Zoho CRM List Toolbar and View Controls

## Overview

The list toolbar groups query controls on the left, several icon-only display controls in the middle, and refresh, Create Lead and overflow controls on the right.

## Behavior & States

**OBSERVED:** Filter, Sort, multiple view icons, Refresh Custom View, Create Lead and overflow controls were visible. Only Sort was opened, then cancelled.

**RECONSTRUCTION:** A local toolbar may switch among fictional list, compact and chart previews without provider calls.

**NEEDS VERIFICATION:** Icon meanings, display-mode persistence, refresh feedback, creation form, import and overflow actions.

## Technical Data

- **OBSERVED:** Create Lead is exposed as a named button.
- **OBSERVED:** Refresh Custom View and More expose descriptive accessible names.
- **NOT OBSERVED:** Toolbar action endpoints, telemetry or permission gates.

```json
{"filterOpen":true,"sortOpen":false,"view":"list","refreshing":false,"selectionCount":0}
```

## Accessibility

**NEEDS VERIFICATION:** accessible names for every icon-only mode control, pressed state, shortcut support and tooltips.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. No create, import or overflow action was activated.
