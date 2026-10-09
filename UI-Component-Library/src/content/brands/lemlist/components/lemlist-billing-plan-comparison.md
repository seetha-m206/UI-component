---
component: "lemlist Billing Plan Comparison"
ui_category: "Billing > Plan Comparison"
source_product: "lemlist"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Authenticated lemlist billing plan comparison reconstructed with fictional data and guarded actions."
---

# Component: lemlist Billing Plan Comparison

## Location

- **OBSERVED:** Billing and Users.

## Screenshot

![Fictional local preview](/research/lemlist/fixtures/lemlist-billing-plan-comparison.png)

## Structure

- **OBSERVED:** Period and currency selectors, Email, Multichannel and Enterprise plan cards, seat controls, feature lists and add-on catalogue.
- **RECONSTRUCTION:** The local preview uses fictional people, companies, accounts, dates, metrics and business context.

## Behavior

- **OBSERVED:** This surface was visible in the authenticated lemlist application on 2026-10-09.
- **RECONSTRUCTION:** Safe local navigation and disclosure states may change only fixture state.
- **NOT OBSERVED:** Coupon application, plan upgrade, seat change, payment, enrichment and add-on purchase.

## Actions

- **OBSERVED:** Review plan and add-on structure.
- **RECONSTRUCTION:** Consequential controls are disabled and explain the boundary.

## States

- **OBSERVED:** Default, empty, disabled, gated, selected and loading states are represented only when visible in the provider.
- **NEEDS VERIFICATION:** Populated customer data, error recovery, responsive provider layouts and paid entitlements remain outside this pass.

## Human Context

- A growth operator uses this pattern to understand next work, reduce outreach mistakes and keep channel state visible.

## AI Context

- An assistant should distinguish navigation and suggestion from execution, summarize why a control is unavailable, and require human approval before any consequential outreach action.

## Technical Data

- Provider DOM structure, network requests, payloads, headers, tokens, opaque IDs and persistence contracts are not retained.
- The preview is a guarded React reconstruction, not provider code.

## Sources

- Authenticated read-only lemlist observation, 2026-10-09.
- Local fictional reconstruction and verification receipts under Internal/scratch-2026-10/lemlist/.
