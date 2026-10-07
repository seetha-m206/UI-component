---
component: "Zoho CRM Accounts Disable Module Link"
ui_category: "Navigation > Destructive settings link"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "An end-user customer path offers a settings link for disabling the Accounts module."
---

# Component: Zoho CRM Accounts Disable Module Link

## Overview

The Accounts onboarding panel routes teams that work directly with end users toward module organization settings.

## Behavior & States

**OBSERVED:** A Disable module link appeared beneath the end-user label and targeted module settings.

**RECONSTRUCTION:** The local fixture records the link as disabled documentation only.

**NEEDS VERIFICATION:** Confirmation, authorization, dependency warnings, reversibility and resulting navigation were not exercised.

## Rules & Validation

Disabling a module can alter workspace configuration. Do not activate this link during observation-only research and do not infer that opening settings would itself disable the module.

## Technical Data

- **OBSERVED:** The control is styled as a link rather than a primary button.
- **OBSERVED:** Its destination is a module-organization settings route.
- **NOT OBSERVED:** Confirmation, mutation request or final provider state.

### State Fixtures

```json
{"module":"Accounts","action":{"label":"Disable module","enabled":false,"destination":"module settings"}}
```

## Accessibility

**NEEDS VERIFICATION:** Whether the link communicates its consequential purpose and destination before navigation.

## Sources

Authenticated Zoho CRM Accounts, observed 2026-10-07. Private receipt `06-accounts-empty-state.png`.
