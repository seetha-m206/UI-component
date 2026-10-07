---
component: "Zoho CRM Record Overview and Timeline Tabs"
ui_category: "Navigation > Detail tabs"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A two-tab switch separates current record information from chronological history."
---

# Component: Zoho CRM Record Overview and Timeline Tabs

## Overview

The record body offers Overview and Timeline as a compact tab group. Overview contains current fields and related lists, while Timeline contains history controls and automated-action context.

## Behavior & States

**OBSERVED:** Switching to Timeline replaced the Overview body. Returning to Overview restored the information sections. No write occurred.

**RECONSTRUCTION:** Fictional events can demonstrate the timeline in a local preview.

**NEEDS VERIFICATION:** Deep linking, lazy loading, state retention, unread indicators and error states.

## Technical Data

- **OBSERVED:** Both controls expose tab roles and selected boolean state.
- **NOT OBSERVED:** Routing or data-fetch boundaries.

```json
{"selected":"Overview","tabs":["Overview","Timeline"],"timelineEvents":[]}
```

## Accessibility

**OBSERVED:** Selection is exposed. **NEEDS VERIFICATION:** arrow-key behavior, panel relationships and focus handling.

## Sources

Authenticated Zoho CRM lead detail, observed 2026-10-07. Private receipts `03-lead-detail-overview.png` and `04-lead-detail-timeline.png`.
