---
component: "Zoho CRM Visits SalesIQ Onboarding"
ui_category: "Integrations > Onboarding"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "The Visits module introduces website visitor tracking powered by Zoho SalesIQ."
---

# Component: Zoho CRM Visits SalesIQ Onboarding

## Overview

The Visits module introduces website visitor tracking powered by Zoho SalesIQ.

## Behavior & States

**OBSERVED:** The page described identifying, engaging and converting website visitors without leaving CRM.

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
{"module":"Visits","provider":"SalesIQ","connected":false}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `visits-provider-observation.json` and screenshot `24-visits.png`.
