---
component: "Hostinger Service Marketplace and Empty States"
ui_category: "Discovery > Service Marketplace"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Service Marketplace and Empty States

## Location

- **OBSERVED:** More services, Domains, Emails, and Ecommerce routes on an account without active services.

## Marketplace

- **OBSERVED:** More services combines category chips, local search, an AI-agent hero, and a long card catalogue.
- **OBSERVED:** Categories are Hosting & VPS, Websites, Domains, Email & marketing, AI & automation, and Other.
- **OBSERVED:** Cards mix first-party products, partner offers, discounts, AI badges, short value propositions, and `Explore offer`, `Try now`, or setup actions.
- **OBSERVED:** AI tools included image generation, background removal, image upscaling, attention heatmap, content generation, and logo creation.

## Empty and Plan-Gated States

- **OBSERVED:** Domain portfolio shows a centered empty state with `Get new domain` and `Transfer domain` actions.
- **OBSERVED:** Emails opens a professional-email hero followed by benefits and a plan comparison for Hostinger email and Google Workspace. No plan was selected.
- **OBSERVED:** Ecommerce presents a full-page offer explaining multichannel stores, shared product and stock updates, and AI-assisted setup, ending in `Explore plans`.
- **NEEDS VERIFICATION:** Domain search results, transfer flow, DNS management, mailbox creation, campaign sending, ecommerce catalogue, orders, payments, and post-purchase dashboards.

## Technical Data

- **OBSERVED / DOM:** The marketplace uses checkbox filters, a search field, headings, link and button actions, badges, and repeated offer cards. Empty services use a single prominent explanatory card and primary action.
- **NEEDS VERIFICATION:** Offer personalization, partner redirects, geo-pricing logic, purchase APIs, validation, loading failures, and permission states.

## Reconstruction Guidance

- **RECONSTRUCTION:** Pair empty states with one primary acquisition action and one lower-emphasis alternative. Keep marketplace filtering above the card grid and preserve category headings after filtering.

## Sources

- **OBSERVED:** Authenticated Hostinger hPanel service routes, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-service-marketplace-and-empty-states` uses fictional local data and sends no Hostinger request.
- `marketplace` — observed or observed-structure starting state.
- `domains` — observed or observed-structure starting state.
- `no-results` — local-only guard or reconstruction state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
