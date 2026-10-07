---
component: "Zoho CRM Purchase Orders Finance Suite Promotion"
ui_category: "Marketing > Cross-product promotion"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A cross-product panel promotes finance-suite integrations from Purchase Orders."
---

# Component: Zoho CRM Purchase Orders Finance Suite Promotion

## Overview

A cross-product panel promotes finance-suite integrations from Purchase Orders.

## Behavior & States

**OBSERVED:** The panel listed finance products with Get Started and dismiss actions.

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
{"module":"Purchase Orders","products":["Books","Expense","Billing","Inventory"],"actions":["Get Started","Dismiss"]}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `purchase-orders-provider-observation.json` and screenshot `18-purchase-orders.png`.
