---
component: "HubSpot Billing Portal Entitlement Gate"
ui_category: "Revenue > Billing Portal"
source_product: "HubSpot Revenue Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Billing Portal Entitlement Gate

## Location

- **OBSERVED:** `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=buyer-portal-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-billing-portal-state.png`.

## Screen, Actions & States

- **OBSERVED:** The Billing Portal navigation item opened a Revenue Hub Professional CPQ gate titled around AI-powered quote-to-close.
- **OBSERVED:** Visible content repeated smart quoting benefits such as engagement tracking, e-signatures, AI quote creation, approval workflows and tiered pricing.
- **NOT ACTIVATED:** Trial, sales contact, portal setup, quote actions and payments.
- **NEEDS VERIFICATION:** Whether the buyer billing portal has a distinct workspace, customer authentication, invoices, subscriptions, payment methods and self-service actions.

## Fictional Local Fixture

```yaml
portal: Northstar Buyer Billing
status: locked
customer: Alder & Pine Ltd
open_invoices: 2
self_service_changes: false
```

## Evidence Boundary

- **FACT:** The Billing Portal nav route and reused CPQ entitlement content were directly observed.
- **RECONSTRUCTION:** The portal fixture is fictional and local only.
- **NEEDS VERIFICATION:** No distinct billing-portal workspace or customer flow was accessible.

## Sources

- Authenticated HubSpot Billing Portal entitlement route, observed 2026-10-07.
