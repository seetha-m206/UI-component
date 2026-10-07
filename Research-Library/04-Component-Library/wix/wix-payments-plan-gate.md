---
component: "Wix Payments Plan Gate"
ui_category: "Sales > Payments"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Payments Plan Gate

## Location
- **OBSERVED:** Authenticated Wix `/payments-dashboard` on a free-plan, unpublished site.

## Structure
- **OBSERVED:** The Payments screen required a Business and eCommerce plan before online payments could be accepted.

## Actions
- **OBSERVED:** The named controls and primary navigation were rendered. Read-only route navigation was exercised.
- **NOT OBSERVED:** Upgrade purchase, payment connection, transaction data, refunds and exports.

## Human Context
- **RECONSTRUCTION:** The local fixture uses fictional data and keeps every action local. Buttons display a guard and send no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed upgrade gate

![wix-payments-plan-gate — Observed upgrade gate](/research/wix/fixtures/wix-payments-plan-gate--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `f1636cb17f3abe9d96437b8727ada713a53a230b7f48bcd1a1924628c26322c0`.

## Sources
- **OBSERVED:** Authenticated Wix dashboard, inspected 2026-10-07. Rendered UI text was recorded in the local evidence package. No durable provider screenshot or network trace was archived.
