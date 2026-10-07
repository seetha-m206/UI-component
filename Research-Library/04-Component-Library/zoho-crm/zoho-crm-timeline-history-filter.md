---
component: "Zoho CRM Timeline History Filter"
ui_category: "Filtering > Timeline filter"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Timeline history can be narrowed by modules, users, time and sources before applying the filter."
---

# Component: Zoho CRM Timeline History Filter

## Overview

The Timeline tab provides History, an upcoming automated-actions summary, a Timeline History section and a filter disclosure.

## Behavior & States

**OBSERVED:** Opening the filter exposed Modules, Users, Time and Sources controls with Apply Filter disabled before any criterion changed. Escape dismissed the filter. The inspected timeline displayed no logs.

**RECONSTRUCTION:** Fictional timeline events can demonstrate filtered results locally.

**NEEDS VERIFICATION:** Option contents, multi-select behavior, custom dates, apply, clear, persistence, loading and error states.

## Technical Data

- **OBSERVED:** Users and Time expose collapsed combobox states. Apply Filter exposes disabled state.
- **NOT OBSERVED:** Filter query format or automated-action data source.

```json
{"modules":"All Modules","users":"All Users","time":"Any Time","sources":"All Sources","applyDisabled":true}
```

## Accessibility

**NEEDS VERIFICATION:** filter-popover role, field labels, Escape focus return and result-count announcement.

## Sources

Authenticated Zoho CRM lead Timeline, observed 2026-10-07. Private receipt `04-lead-detail-timeline.png`.
