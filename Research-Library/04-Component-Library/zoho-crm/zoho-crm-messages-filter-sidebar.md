---
component: "Zoho CRM Messages Filter Sidebar"
ui_category: "Navigation > Filter sidebar"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A filter sidebar combines system-defined states with field-based message filters."
---

# Component: Zoho CRM Messages Filter Sidebar

## Overview

A filter sidebar combines system-defined states with field-based message filters.

## Behavior & States

**OBSERVED:** The sidebar showed replied-state filters plus Message Time, Notifications, Record Owner and Replied By fields.

**RECONSTRUCTION:** The fixture below uses a fictional workspace and synthetic state to document the reusable pattern.

**NEEDS VERIFICATION:** Activation outcomes, populated data, permission differences, responsive behavior, loading and error states were not exercised.

## Rules & Validation

Keep the observed structure separate from provider behavior. Visible actions were documented but not activated.

## Technical Data

- **OBSERVED:** The component was visible in the authenticated module surface.
- **RECONSTRUCTION:** No live organization values or record data are copied into this record.
- **NOT OBSERVED:** Provider-side mutations, integration status and downstream outcomes.

### State Fixtures

```json
{"module":"Messages","systemFilters":["Not Replied","Replied"],"fieldFilters":["Message Time","Notifications","Record Owner","Replied By"]}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `messages-provider-observation.json` and screenshot `25-messages.png`.
