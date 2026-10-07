---
component: "Zoho CRM Forecast Configure Action"
ui_category: "Actions > Setup action"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A single Configure Now call to action exits the introductory Forecasts setup state."
---

# Component: Zoho CRM Forecast Configure Action

## Overview

The Forecasts onboarding panel ends with one prominent configuration entry point.

## Behavior & States

**OBSERVED:** Configure Now appeared after the three feature explanations.

**RECONSTRUCTION:** The fixture keeps the action disabled for documentation.

**NEEDS VERIFICATION:** Wizard steps, validation, permissions, save behavior, cancellation and resulting forecast state were not exercised.

## Rules & Validation

Forecast configuration changes provider state. Observation-only research stops before activation.

## Technical Data

- **OBSERVED:** One setup action is visually separated from the benefit content.
- **OBSERVED:** The action label is imperative and setup-oriented.
- **NOT OBSERVED:** Handler, requests, authorization or persistence.

### State Fixtures

```json
{"module":"Forecasts","action":{"label":"Configure Now","enabled":false}}
```

## Accessibility

**NEEDS VERIFICATION:** Control role, focus indicator, accessible name and setup-context announcement.

## Sources

Authenticated Zoho CRM Forecasts, observed 2026-10-07. Private receipt `08-forecasts-onboarding.png`.
