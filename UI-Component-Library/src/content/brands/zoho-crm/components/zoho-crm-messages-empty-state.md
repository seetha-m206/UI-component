---
component: "Zoho CRM Messages Empty State"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "The Messages list shows a compact empty state when no messages match the current view and filters."
---

# Component: Zoho CRM Messages Empty State

## Overview

The Messages list shows a compact empty state when no messages match the current view and filters.

## Behavior & States

**OBSERVED:** The visible result region stated that there were no messages.

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
{"module":"Messages","view":"All Messages","visibleRecords":0,"message":"No messages"}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `messages-provider-observation.json` and screenshot `25-messages.png`.
