---
component: "lemlist Deliverability Outreach Analytics"
ui_category: "Deliverability > Outreach Analytics"
source_product: "lemlist"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Authenticated lemlist deliverability outreach analytics reconstructed with fictional data and guarded actions."
---

# Component: lemlist Deliverability Outreach Analytics

## Location

- **OBSERVED:** Deliverability Outreach tab.

## Screenshot

![Fictional local preview](/research/lemlist/fixtures/lemlist-deliverability-outreach.png)

## Structure

- **OBSERVED:** Date and cadence filters, delivery metric cards, sent and bounce charts, provider breakdown, mailbox table and recipient-domain table.
- **RECONSTRUCTION:** The local preview uses fictional people, companies, accounts, dates, metrics and business context.

## Behavior

- **OBSERVED:** This surface was visible in the authenticated lemlist application on 2026-10-09.
- **RECONSTRUCTION:** Safe local navigation and disclosure states may change only fixture state.
- **NOT OBSERVED:** Provider computation, date persistence, exports and mailbox or domain drill-down results.

## Actions

- **OBSERVED:** Review zero-state outreach metrics and breakdown dimensions.
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
