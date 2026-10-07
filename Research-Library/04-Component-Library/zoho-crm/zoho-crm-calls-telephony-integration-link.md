---
component: "Zoho CRM Calls Telephony Integration Link"
ui_category: "Navigation > Integration link"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A recommended setup link routes the Calls onboarding state to telephony integration settings."
---

# Component: Zoho CRM Calls Telephony Integration Link

## Overview

The primary Calls onboarding path promotes automatic call logging through telephony integration.

## Behavior & States

**OBSERVED:** Integrate Telephony appeared after recommendation copy and targeted telephony settings.

**RECONSTRUCTION:** The fixture records a disabled integration link.

**NEEDS VERIFICATION:** Provider selection, permissions, credentials, connection, call logging and error handling were not exercised.

## Rules & Validation

Integration setup can change provider configuration and transmit account data. Observation-only research stops before activation.

## Technical Data

- **OBSERVED:** The action is a settings link.
- **OBSERVED:** Recommendation copy emphasizes automatic logging.
- **NOT OBSERVED:** Connection status or integration outcome.

### State Fixtures

```json
{"label":"Integrate Telephony","enabled":false,"destination":"Telephony settings"}
```

## Accessibility

**NEEDS VERIFICATION:** Link context, destination announcement and focus indicator.

## Sources

Authenticated Zoho CRM Calls, observed 2026-10-07. Private receipt `13-calls-empty-state.png`.
