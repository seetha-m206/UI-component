---
component: "Wix Payments Plan Gate"
ui_category: "Sales > Payments"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "The Payments screen required a Business and eCommerce plan before online payments could be accepted."
---

# Wix Payments Plan Gate

## Structure
- **OBSERVED:** The Payments screen required a Business and eCommerce plan before online payments could be accepted.

## Behavior & States
- **OBSERVED:** Primary controls and navigation were visible.
- **NOT OBSERVED:** Upgrade purchase, payment connection, transaction data, refunds and exports.
- **RECONSTRUCTION:** The fictional local fixture renders the observed state and guards all actions without contacting Wix.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed upgrade gate

![wix-payments-plan-gate — Observed upgrade gate](/research/wix/fixtures/wix-payments-plan-gate--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `f1636cb17f3abe9d96437b8727ada713a53a230b7f48bcd1a1924628c26322c0`.

## Sources
- **OBSERVED:** Authenticated Wix `/payments-dashboard`, 2026-10-07. No durable provider screenshot was archived.
