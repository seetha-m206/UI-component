---
component: "Wix Receipts Empty State"
ui_category: "Sales > Receipts"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Receipts Empty State

## Location
- **OBSERVED:** Authenticated Wix `/receipts/list` on a free-plan, unpublished site.

## Structure
- **OBSERVED:** The receipts list showed filters, More Actions, Receipt Settings and a No Receipts yet state with automated-receipt setup.

## Actions
- **OBSERVED:** The named controls and primary navigation were rendered. Read-only route navigation was exercised.
- **NOT OBSERVED:** Receipt creation, automated receipt setup, settings changes and populated rows.

## Human Context
- **RECONSTRUCTION:** The local fixture uses fictional data and keeps every action local. Buttons display a guard and send no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed empty state

![wix-receipts-empty-state — Observed empty state](/research/wix/fixtures/wix-receipts-empty-state--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `3b72f7fa2561fd3f2194d748c9a6af02d64bad5ef594699bf733119d11af8d5e`.

## Sources
- **OBSERVED:** Authenticated Wix dashboard, inspected 2026-10-07. Rendered UI text was recorded in the local evidence package. No durable provider screenshot or network trace was archived.
