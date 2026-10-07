---
component: "HubSpot Subscriptions Onboarding"
ui_category: "Revenue > Subscriptions"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Revenue Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Subscriptions Onboarding

## Location

- **OBSERVED:** `/contacts/343751787/objects/0-69`.

## Screenshots

- **OBSERVED:** `2026-10-07-subscriptions-state.png`.

## Screen, Actions & States

- **OBSERVED:** Empty onboarding framed subscriptions around CRM management, recurring-revenue reports, automatic reminders, saved payment methods and transaction-fee-only collection.
- **OBSERVED:** Create subscription was the primary action.
- **NOT ACTIVATED:** Subscription creation, payment setup and recurring billing.
- **NEEDS VERIFICATION:** Plans, billing frequency, payment methods, changes, cancellations, renewals and revenue reporting.

## Fictional Local Fixture

```yaml
subscription: SUB-NORTHSTAR-88
status: draft
amount: 2000
frequency: monthly
next_billing_date: 2026-11-01
```

## Evidence Boundary

- **FACT:** The Subscriptions onboarding was directly observed.
- **RECONSTRUCTION:** The subscription fixture is fictional and local only.
- **NEEDS VERIFICATION:** No subscription was created.

## Sources

- Authenticated HubSpot Subscriptions onboarding, observed 2026-10-07.
