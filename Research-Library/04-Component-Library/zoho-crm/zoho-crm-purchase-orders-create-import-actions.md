---
component: "Zoho CRM Purchase Orders Create and Import Actions"
ui_category: "Actions > Action group"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A paired action group starts purchase-order creation or import."
---

# Component: Zoho CRM Purchase Orders Create and Import Actions

## Overview

A paired action group starts purchase-order creation or import.

## Behavior & States

**OBSERVED:** Create and Import were visible in the empty Purchase Orders module.

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
{"module":"Purchase Orders","actions":["Create","Import"],"enabled":true}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `purchase-orders-provider-observation.json` and screenshot `18-purchase-orders.png`.
