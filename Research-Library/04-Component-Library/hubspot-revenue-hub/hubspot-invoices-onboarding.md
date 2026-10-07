---
component: "HubSpot Invoices Onboarding"
ui_category: "Revenue > Invoices"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Invoices Onboarding

## Location

- **OBSERVED:** `/contacts/343751787/objects/0-53`.

## Screenshots

- **OBSERVED:** `2026-10-07-invoices-state.png`.

## Screen, Actions & States

- **OBSERVED:** Empty onboarding promoted invoice status and revenue insight in CRM, two-way QuickBooks Online bookkeeping sync and transaction-fee-only online payment collection.
- **OBSERVED:** A Create action was available.
- **NOT ACTIVATED:** Create, accounting connection and payment setup.
- **NEEDS VERIFICATION:** Invoice builder, line items, taxes, sending, reminders, payments, sync and status transitions.

## Fictional Local Fixture

```yaml
invoice: INV-NORTHSTAR-1042
status: draft
amount: 6800
currency: CAD
due_in_days: 30
```

## Evidence Boundary

- **FACT:** The Invoices onboarding was directly observed.
- **RECONSTRUCTION:** The invoice fixture is fictional and local only.
- **NEEDS VERIFICATION:** No invoice or accounting connection was created.

## Sources

- Authenticated HubSpot Invoices onboarding, observed 2026-10-07.
