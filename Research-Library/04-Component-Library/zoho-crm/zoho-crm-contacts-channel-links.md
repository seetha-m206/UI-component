---
component: "Zoho CRM Contacts Channel Links"
ui_category: "Navigation > Contextual links"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Inline channel links connect empty-state guidance to telephony, email and social configuration surfaces."
---

# Component: Zoho CRM Contacts Channel Links

## Overview

The first Contacts guidance row embeds channel links directly inside explanatory copy.

## Behavior & States

**OBSERVED:** Call, Email and Social were presented as separate inline links.

**RECONSTRUCTION:** Fictional fixtures preserve the link grouping without invoking any settings destination.

**NEEDS VERIFICATION:** Destination access, plan gating, return navigation and setup completion states were not exercised.

## Rules & Validation

Treat each link as navigation to configuration, not as proof that the channel is connected. Do not activate setup flows during observation-only research.

## Technical Data

- **OBSERVED:** Three links are embedded in a single sentence and separated by punctuation.
- **OBSERVED:** Destinations are configuration-oriented routes.
- **NOT OBSERVED:** Authorization checks or configuration persistence.

### State Fixtures

```json
{"channels":[{"label":"Call","configured":false},{"label":"Email","configured":false},{"label":"Social","configured":false}]}
```

## Accessibility

**NEEDS VERIFICATION:** Link focus indicators, announced destination context and keyboard traversal order.

## Sources

Authenticated Zoho CRM Contacts, observed 2026-10-07. Private receipt `05-contacts-empty-state.png`.
