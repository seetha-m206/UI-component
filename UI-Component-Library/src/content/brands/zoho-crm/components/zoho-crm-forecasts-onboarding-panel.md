---
component: "Zoho CRM Forecasts Onboarding Panel"
ui_category: "Feedback & Status > Setup state"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A setup-first Forecasts landing page explains the feature before any forecast configuration is created."
---

# Component: Zoho CRM Forecasts Onboarding Panel

## Overview

The Forecasts module opens to a dedicated setup state with a feature heading, three benefit explanations and a configuration entry point.

## Behavior & States

**OBSERVED:** The page introduced sales forecasting and presented three explanatory items followed by Configure Now.

**RECONSTRUCTION:** The fixture documents an unconfigured fictional workspace without initiating setup.

**NEEDS VERIFICATION:** Configured, permission-limited, loading, error and plan-gated states were not observed.

## Rules & Validation

Describe this as an unconfigured setup state, not as an empty forecast report. Configuration was not activated.

## Technical Data

- **OBSERVED:** The setup panel occupies the full module content area.
- **OBSERVED:** A Help affordance appears near the introductory content.
- **NOT OBSERVED:** Setup eligibility or provider payload.

### State Fixtures

```json
{"module":"Forecasts","workspace":"Northwind Demo","configured":false,"mode":"setup"}
```

## Accessibility

**NEEDS VERIFICATION:** Heading hierarchy, landmark structure and replacement announcements after configuration.

## Sources

Authenticated Zoho CRM Forecasts, observed 2026-10-07. Private receipt `08-forecasts-onboarding.png`.
