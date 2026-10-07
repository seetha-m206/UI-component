---
component: "Zoho CRM Accounts Customer Type Choice"
ui_category: "Selection > Conceptual choice"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A two-part onboarding choice separates other-business customers from end-user customers and routes each to a different next step."
---

# Component: Zoho CRM Accounts Customer Type Choice

## Overview

The empty Accounts experience presents two conceptual customer types rather than a conventional form control.

## Behavior & States

**OBSERVED:** The first option represented other businesses and exposed Create and Import. The second represented end users and exposed a module-disable route.

**RECONSTRUCTION:** The fixture represents the options as neutral, non-interactive documentation data.

**NEEDS VERIFICATION:** Selection persistence, responsive arrangement, localization and whether either option is remembered.

## Rules & Validation

Do not describe the options as mutually exclusive saved settings. Only their visual grouping and adjacent actions were observed.

## Technical Data

- **OBSERVED:** Each customer type has a distinct label and action set.
- **OBSERVED:** The choices are informational groupings rather than radio controls.
- **NOT OBSERVED:** Saved state or decision telemetry.

### State Fixtures

```json
{"options":[{"label":"Other businesses","actions":["Create","Import"]},{"label":"End users","actions":["Disable module"]}]}
```

## Accessibility

**NEEDS VERIFICATION:** Group semantics and whether each action is announced with its customer-type context.

## Sources

Authenticated Zoho CRM Accounts, observed 2026-10-07. Private receipt `06-accounts-empty-state.png`.
