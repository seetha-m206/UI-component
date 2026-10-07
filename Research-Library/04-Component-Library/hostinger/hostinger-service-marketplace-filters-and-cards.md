---
component: "Hostinger Service Marketplace Filters and Cards"
ui_category: "Discovery > Marketplace Grid"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Service Marketplace Filters and Cards

## Location

- **OBSERVED:** Authenticated More services marketplace.

## Screenshot

- **NEEDS VERIFICATION:** Filters and cards were visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** Category filters, local search, an AI-agent hero, and a repeated offer-card grid formed the marketplace.
- **OBSERVED:** Categories included Hosting & VPS, Websites, Domains, Email & marketing, AI & automation, and Other. Cards combined badges, value propositions, and `Explore offer`, `Try now`, or setup actions.

## Actions

- **OBSERVED:** The grid and controls were inspected without opening offers or partner destinations.
- **NEEDS VERIFICATION:** Search filtering, category intersections, partner redirects, setup flows, loading, and empty results.

## Technical Data

- **OBSERVED / DOM:** Filters exposed checkbox roles, search used a text field, and cards exposed heading, badge, copy, and action semantics.
- **NEEDS VERIFICATION:** Catalogue API, personalization, ranking, pricing, tracking, and partner handoff.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep filtering before the grid and use fictional services, prices, and provider names in a local implementation.

## Sources

- **OBSERVED:** Authenticated Hostinger marketplace and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-service-marketplace-filters-and-cards` uses fictional local data and sends no Hostinger request.
- `all` — observed or observed-structure starting state.
- `ai` — observed or observed-structure starting state.
- `no-results` — local-only guard or reconstruction state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
