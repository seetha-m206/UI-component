---
component: "Zoho CRM Projects Onboarding Actions"
ui_category: "Actions > Action group"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "The Projects onboarding offers a primary integration action and a secondary option to hide the tab."
---

# Component: Zoho CRM Projects Onboarding Actions

## Overview

The Projects onboarding offers a primary integration action and a secondary option to hide the tab.

## Behavior & States

**OBSERVED:** Get Started and a do-not-show-again control were visible.

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
{"module":"Projects","actions":["Get Started","Hide tab"],"enabled":true}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `projects-provider-observation.json` and screenshot `26-projects.png`.
