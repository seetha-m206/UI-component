---
component: "lemlist Campaign Inventory"
ui_category: "Campaigns > Inventory Table"
source_product: "lemlist"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Authenticated lemlist campaign inventory reconstructed with fictional data and guarded actions."
---

# Component: lemlist Campaign Inventory

## Location

- **OBSERVED:** Campaigns.

## Screenshot

![Fictional local preview](/research/lemlist/fixtures/lemlist-campaign-inventory.png)

## Structure

- **OBSERVED:** Search, status and ownership filters, favourites, create action, selectable table, bulk actions and zero state.
- **RECONSTRUCTION:** The local preview uses fictional people, companies, accounts, dates, metrics and business context.

## Behavior

- **OBSERVED:** This surface was visible in the authenticated lemlist application on 2026-10-09.
- **RECONSTRUCTION:** Safe local navigation and disclosure states may change only fixture state.
- **NOT OBSERVED:** Campaign creation, row selection, resume, tagging, launch and deletion.

## Actions

- **OBSERVED:** Review inventory columns, filters and disabled actions.
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
