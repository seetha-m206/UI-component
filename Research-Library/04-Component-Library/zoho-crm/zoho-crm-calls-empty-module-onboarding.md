---
component: "Zoho CRM Calls Empty Module Onboarding"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "An empty Calls state contrasts automatic telephony logging with manual call activity entry."
---

# Component: Zoho CRM Calls Empty Module Onboarding

## Overview

The Calls module introduces two ways to track customer interactions when no calls are visible.

## Behavior & States

**OBSERVED:** The primary guidance recommended telephony integration and a secondary path described manual logging and scheduling.

**RECONSTRUCTION:** The fixture documents both paths without connecting telephony or creating activity records.

**NEEDS VERIFICATION:** Populated lists, call status, permission limits, loading and error states were not observed.

## Rules & Validation

Keep the automatic and manual paths distinct. Recommendation copy does not prove an integration is configured.

## Technical Data

- **OBSERVED:** The panel is organized around integration and manual alternatives.
- **OBSERVED:** Import appears within the manual path.
- **NOT OBSERVED:** Telephony status or call payload.

### State Fixtures

```json
{"module":"Calls","workspace":"Northwind Demo","visibleRecords":0,"paths":["Telephony integration","Manual activity"]}
```

## Accessibility

**NEEDS VERIFICATION:** Group labels, reading order and relationship between guidance and actions.

## Sources

Authenticated Zoho CRM Calls, observed 2026-10-07. Private receipt `13-calls-empty-state.png`.
