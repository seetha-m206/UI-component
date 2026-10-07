---
component: "Zoho CRM Quotes Empty Module Onboarding"
ui_category: "Feedback & Status > Empty state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "The empty Quotes module explains quote agreements around products, prices and delivery timing."
---

# Component: Zoho CRM Quotes Empty Module Onboarding

## Overview

The empty Quotes module explains quote agreements around products, prices and delivery timing.

## Behavior & States

**OBSERVED:** The module displayed quote-focused guidance with no visible quote records.

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
{"module":"Quotes","visibleRecords":0,"workspace":"Northwind Demo"}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `quotes-provider-observation.json` and screenshot `16-quotes.png`.
