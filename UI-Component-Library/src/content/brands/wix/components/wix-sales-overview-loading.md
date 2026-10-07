---
component: "Wix Sales Overview Loading Shell"
ui_category: "Sales > Sales Overview"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "The primary route was reached, but no stable screen content rendered during the bounded observation window."
---

# Wix Sales Overview Loading Shell

## Structure
- **OBSERVED:** The primary route was reached, but no stable screen content rendered during the bounded observation window.

## Behavior & States
- **NOT OBSERVED:** Sales metrics, filters, comparisons, reports and exports.
- **RECONSTRUCTION:** The local fixture preserves the bounded loading-state evidence and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed bounded loading state

![wix-sales-overview-loading — Observed bounded loading state](/research/wix/fixtures/wix-sales-overview-loading--loading.jpg)

- **RECONSTRUCTION / CAPTURE:** `loading` at 1600 × 1200. SHA-256 `70916d458c7e67217586432ebe70d88fe05949deb6723485f9acd5c2adc7f861`.

## Sources
- **OBSERVED:** Authenticated Wix `/analytics/overviews/sales`, 2026-10-07.
