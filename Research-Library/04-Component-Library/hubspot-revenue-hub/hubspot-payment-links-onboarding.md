---
component: "HubSpot Payment Links Onboarding"
ui_category: "Revenue > Payment Links"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Payment Links Onboarding

## Location

- **OBSERVED:** `/payment-links/343751787`.

## Screenshots

- **OBSERVED:** `2026-10-07-payment-links-state.png`.

## Screen, Actions & States

- **OBSERVED:** Empty onboarding promoted branded no-code payment links and CRM tracking across email, pages, forms and meetings.
- **OBSERVED:** Create a payment link and Set up payments were available. A notice said only a draft can be created before Payments setup, after which the link can be shared and collect payments.
- **NOT ACTIVATED:** Draft creation, payment setup, sharing and collection.
- **NEEDS VERIFICATION:** Builder, line items, branding, checkout, sharing, payment status and link lifecycle.

## Fictional Local Fixture

```yaml
payment_link: Northstar Deposit
status: draft
amount: 1500
currency: CAD
payments_configured: false
```

## Evidence Boundary

- **FACT:** The Payment Links onboarding and draft boundary were directly observed.
- **RECONSTRUCTION:** The payment-link fixture is fictional and local only.
- **NEEDS VERIFICATION:** No link or payment account was created.

## Sources

- Authenticated HubSpot Payment Links onboarding, observed 2026-10-07.
