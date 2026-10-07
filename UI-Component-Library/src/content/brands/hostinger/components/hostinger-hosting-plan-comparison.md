---
component: "Hostinger Hosting Plan Comparison"
ui_category: "Commerce > Plan Comparison"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Tabbed plan-family comparison with billing period, summary cards, and expandable detailed feature groups."
---

# Hostinger Hosting Plan Comparison

## Location

- **OBSERVED:** Hosting purchase route reached from the AI Builder empty state.

## Screenshot

- **NEEDS VERIFICATION:** Plan cards and comparison sections were visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** Individual & Business, Cloud, and Agency tabs sat above a billing-period selector, four plan cards, and grouped comparison rows.
- **OBSERVED:** Cards compared discount, monthly and term prices, renewal, sites, storage, mailboxes, AI credits, domain, ecommerce, backups, CDN, and support.

## Actions

- **OBSERVED:** The route and its expandable comparison groups were inspected. No plan or checkout action was selected.
- **NEEDS VERIFICATION:** Tab content changes, term repricing, checkout, taxes, regional pricing, validation, and activation.

## Technical Data

- **OBSERVED / DOM:** Plan families exposed a tab group, billing period a combo box, groups expandable buttons, and plans action buttons.
- **NEEDS VERIFICATION:** Pricing API, entitlement calculation, experiments, payment flow, and purchase events.

## Reconstruction Guidance

- **RECONSTRUCTION:** Separate plan family, term, summary cards, and detailed comparison. Use fictional prices and disable purchase behavior in local previews.

## Sources

- **OBSERVED:** Authenticated Hostinger purchase route and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-hosting-plan-comparison` uses fictional local data and sends no Hostinger request.
- `business` — observed or observed-structure starting state.
- `cloud` — observed or observed-structure starting state.
- `agency` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
