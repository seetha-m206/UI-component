---
component: "HubSpot Payments Onboarding"
ui_category: "Revenue > Payments"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Revenue Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Payments Onboarding

## Location

- **OBSERVED:** `/contacts/343751787/objects/0-101`.

## Screenshots

- **OBSERVED:** `2026-10-07-payments-state.png`.

## Screen, Actions & States

- **OBSERVED:** Empty onboarding promoted secure no-code payments through links, invoices, subscriptions and quotes, plus CRM segmentation, automation and reporting.
- **OBSERVED:** Actions included Record manual payment, Set up payments, a mailto contact for custom rates and an Academy video.
- **NOT ACTIVATED:** Manual payment, setup, email, video and Academy navigation.
- **NEEDS VERIFICATION:** Processor enrollment, payment records, refunds, payouts, reconciliation and reporting.

## Fictional Local Fixture

```yaml
payment: PAY-NORTHSTAR-219
status: pending
amount: 6800
currency: CAD
source: invoice
```

## Evidence Boundary

- **FACT:** The Payments onboarding and visible actions were directly observed.
- **RECONSTRUCTION:** The payment fixture is fictional and local only.
- **NEEDS VERIFICATION:** No payment was recorded and no processor was configured.

## Sources

- Authenticated HubSpot Payments onboarding, observed 2026-10-07.
