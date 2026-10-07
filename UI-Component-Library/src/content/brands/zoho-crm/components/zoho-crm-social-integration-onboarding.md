---
component: "Zoho CRM Social Integration Onboarding"
ui_category: "Integrations > Onboarding"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "The Social module introduces linking social accounts to engage customers, gain insights and generate leads."
---

# Component: Zoho CRM Social Integration Onboarding

## Overview

The Social module introduces linking social accounts to engage customers, gain insights and generate leads.

## Behavior & States

**OBSERVED:** The page presented a single integration onboarding message with no connected-account state shown.

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
{"module":"Social","connected":false,"workspace":"Northwind Demo"}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `social-provider-observation.json` and screenshot `23-social.png`.
