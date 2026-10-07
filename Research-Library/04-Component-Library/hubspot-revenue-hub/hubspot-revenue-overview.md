---
component: "HubSpot Revenue Overview"
ui_category: "Revenue > Overview"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Revenue Overview

## Location

- **OBSERVED:** `/commerce/343751787`.

## Screenshots

- **OBSERVED:** `2026-10-07-revenue-overview.png`.

## Screen, Actions & States

- **OBSERVED:** Welcome screen linked quoting, billing and payments on the same record and offered Try Revenue Hub today and Set up online payments.
- **OBSERVED:** An interactive lifecycle presented Sales-Led, Invoice-Based and Self-Serve at Scale models, then connected Deal, Quote, Contract, Invoice, Payment and Revenue Intelligence states.
- **OBSERVED:** Secondary cards covered AI-powered quotes, partners and payment education.
- **NOT ACTIVATED:** Model changes, lifecycle stage controls, trial, payment setup, deal creation, partner directory and learning links.
- **NEEDS VERIFICATION:** Activated dashboards, transactions, lifecycle data and revenue reports.

## Fictional Local Fixture

```yaml
model: sales_led
deal: Northstar Expansion
contract_value: 48000
invoice_status: scheduled
payment_status: pending
```

## Evidence Boundary

- **FACT:** The overview and lifecycle model were directly observed.
- **RECONSTRUCTION:** The revenue fixture is fictional and local only.
- **NEEDS VERIFICATION:** No revenue workflow was configured or executed.

## Sources

- Authenticated HubSpot Revenue Overview, observed 2026-10-07.
