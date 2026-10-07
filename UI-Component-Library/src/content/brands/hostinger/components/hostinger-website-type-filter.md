---
component: "Hostinger Website Type Filter"
ui_category: "Filtering > Segmented Filter"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "URL-backed website inventory filter for All, WordPress, AI Builder, Web Apps, and PHP or HTML states."
---

# Hostinger Website Type Filter

## Location

- **OBSERVED:** Authenticated Websites inventory.

## Screenshot

- **NEEDS VERIFICATION:** Filter states were visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** Pill-like checkbox controls represented All websites, WordPress, AI Builder, Web Apps, and PHP/HTML above the inventory state.

## Actions

- **OBSERVED:** Selecting AI Builder and Web Apps replaced the empty-state content and updated the `websiteType` query parameter.
- **NEEDS VERIFICATION:** Multi-select rules, browser-history restoration, loading, count badges, and populated inventories.

## Technical Data

- **OBSERVED / DOM:** The control group exposed checkbox roles and selection state.
- **NEEDS VERIFICATION:** Filter API, caching, responsive overflow, focus order, and analytics.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep the filter above the inventory and preserve the selected type in the URL for local fictional states.

## Sources

- **OBSERVED:** Authenticated Hostinger Websites route and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-website-type-filter` uses fictional local data and sends no Hostinger request.
- `all` — observed or observed-structure starting state.
- `ai-builder` — observed or observed-structure starting state.
- `web-apps` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
