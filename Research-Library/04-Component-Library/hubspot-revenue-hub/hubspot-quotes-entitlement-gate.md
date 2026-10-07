---
component: "HubSpot Quotes Entitlement Gate"
ui_category: "Revenue > Quotes"
source_product: "HubSpot Revenue Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Quotes Entitlement Gate

## Location

- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=cpq-quotes-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-quotes-state.png`.

## Screen, Actions & States

- **OBSERVED:** The Professional gate described AI-generated branded quotes using product, pricing and deal context, with a buyer link for review, signature and payment.
- **OBSERVED:** Benefits included engagement tracking, e-signatures, approval workflows and tiered pricing. The plan table exposed product-library, price-book, API, quote-editor, template, workflow and reporting boundaries.
- **NOT ACTIVATED:** Trial, sales contact, quote creation, approval, signature and payment.
- **NEEDS VERIFICATION:** Quote index, editor, approvals, templates, sharing, e-sign, payment and reporting.

## Fictional Local Fixture

```yaml
quote: Q-NORTHSTAR-77
status: locked
deal: Northstar Expansion
pricing_model: tiered
approval_state: pending
```

## Evidence Boundary

- **FACT:** The Quotes entitlement gate was directly observed.
- **RECONSTRUCTION:** The quote fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated quote workspace was accessible.

## Sources

- Authenticated HubSpot Quotes entitlement gate, observed 2026-10-07.
