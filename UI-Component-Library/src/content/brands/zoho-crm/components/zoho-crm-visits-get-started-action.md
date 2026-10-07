---
component: "Zoho CRM Visits Get Started Action"
ui_category: "Actions > Primary action"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A primary action begins visitor-tracking integration setup."
---

# Component: Zoho CRM Visits Get Started Action

## Overview

A primary action begins visitor-tracking integration setup.

## Behavior & States

**OBSERVED:** A Get Started action appeared beneath the Visits onboarding copy.

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
{"module":"Visits","action":"Get Started","enabled":true}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `visits-provider-observation.json` and screenshot `24-visits.png`.
