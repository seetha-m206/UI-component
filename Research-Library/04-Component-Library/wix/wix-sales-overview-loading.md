---
component: "Wix Sales Overview Loading Shell"
ui_category: "Sales > Sales Overview"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Sales Overview Loading Shell

## Location
- **OBSERVED:** Authenticated Wix `/analytics/overviews/sales` on a free-plan site.

## Structure
- **OBSERVED:** The primary route was reached, but no stable screen content rendered during the bounded observation window.

## Evidence Boundary
- **NOT OBSERVED:** Sales metrics, filters, comparisons, reports and exports.
- **RECONSTRUCTION:** The local fixture reproduces only the route shell or bounded loading state. It makes no claim about the unresolved screen and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed bounded loading state

![wix-sales-overview-loading — Observed bounded loading state](/research/wix/fixtures/wix-sales-overview-loading--loading.jpg)

- **RECONSTRUCTION / CAPTURE:** `loading` at 1600 × 1200. SHA-256 `70916d458c7e67217586432ebe70d88fe05949deb6723485f9acd5c2adc7f861`.

## Sources
- **OBSERVED:** Authenticated Wix dashboard, inspected 2026-10-07. No durable provider screenshot or network trace was archived.
