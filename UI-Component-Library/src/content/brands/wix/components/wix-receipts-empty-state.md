---
component: "Wix Receipts Empty State"
ui_category: "Sales > Receipts"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "The receipts list showed filters, More Actions, Receipt Settings and a No Receipts yet state with automated-receipt setup."
---

# Wix Receipts Empty State

## Structure
- **OBSERVED:** The receipts list showed filters, More Actions, Receipt Settings and a No Receipts yet state with automated-receipt setup.

## Behavior & States
- **OBSERVED:** Primary controls and navigation were visible.
- **NOT OBSERVED:** Receipt creation, automated receipt setup, settings changes and populated rows.
- **RECONSTRUCTION:** The fictional local fixture renders the observed state and guards all actions without contacting Wix.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed empty state

![wix-receipts-empty-state — Observed empty state](/research/wix/fixtures/wix-receipts-empty-state--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `3b72f7fa2561fd3f2194d748c9a6af02d64bad5ef594699bf733119d11af8d5e`.

## Sources
- **OBSERVED:** Authenticated Wix `/receipts/list`, 2026-10-07. No durable provider screenshot was archived.
