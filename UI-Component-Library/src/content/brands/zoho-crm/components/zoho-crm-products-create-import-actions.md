---
component: "Zoho CRM Products Create and Import Actions"
ui_category: "Actions > Action group"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A paired action group starts product creation or bulk import from the empty Products module."
---

# Component: Zoho CRM Products Create and Import Actions

## Overview

A paired action group starts product creation or bulk import from the empty Products module.

## Behavior & States

**OBSERVED:** Create and Import were presented together beneath the Products guidance.

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
{"module":"Products","actions":["Create","Import"],"enabled":true}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `products-provider-observation.json` and screenshot `14-products.png`.
