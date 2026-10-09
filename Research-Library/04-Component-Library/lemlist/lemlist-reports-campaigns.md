---
component: "lemlist Campaign Reports"
ui_category: "Analytics > Campaign Performance"
source_product: "lemlist"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Authenticated lemlist campaign reports reconstructed with fictional data and guarded actions."
---

# Component: lemlist Campaign Reports

## Location

- **OBSERVED:** Reports Campaigns tab.

## Screenshot

![Fictional local preview](/research/lemlist/fixtures/lemlist-reports-campaigns.png)

## Structure

- **OBSERVED:** Shared date and entity filters, campaign funnel, channel selector, trend chart, cohort breakdown and cross-campaign step ranking.
- **RECONSTRUCTION:** The local preview uses fictional people, companies, accounts, dates, metrics and business context.

## Behavior

- **OBSERVED:** This surface was visible in the authenticated lemlist application on 2026-10-09.
- **RECONSTRUCTION:** Safe local navigation and disclosure states may change only fixture state.
- **NOT OBSERVED:** Metric computation, report sharing, tab personalization and provider drill-downs.

## Actions

- **OBSERVED:** Review campaign-performance dimensions and empty-state metrics.
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
