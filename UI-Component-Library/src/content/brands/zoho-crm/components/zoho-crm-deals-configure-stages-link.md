---
component: "Zoho CRM Deals Configure Stages Link"
ui_category: "Navigation > Configuration link"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "An inline link routes sales-cycle onboarding toward the Deals layout stage-mapping settings."
---

# Component: Zoho CRM Deals Configure Stages Link

## Overview

The first Deals guidance row offers a direct path to stage configuration.

## Behavior & States

**OBSERVED:** Configure Stages appeared inline after the sales-cycle prompt and targeted Deals layout settings.

**RECONSTRUCTION:** The fixture records a disabled navigation target only.

**NEEDS VERIFICATION:** Access control, mapping UI, validation, persistence and return navigation were not exercised.

## Rules & Validation

Treat this as a consequential configuration entry point. Observation-only research stops before activation.

## Technical Data

- **OBSERVED:** The destination is specific to a Deals layout and stage mapping.
- **OBSERVED:** The link is embedded in guidance copy.
- **NOT OBSERVED:** Final settings state or mutation request.

### State Fixtures

```json
{"label":"Configure stages","enabled":false,"destination":"Deals layout stage mapping"}
```

## Accessibility

**NEEDS VERIFICATION:** Destination context, focus indicator and whether opening settings is announced.

## Sources

Authenticated Zoho CRM Deals, observed 2026-10-07. Private receipt `07-deals-empty-state.png`.
