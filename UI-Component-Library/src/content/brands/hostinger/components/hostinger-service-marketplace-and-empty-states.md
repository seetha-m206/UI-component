---
component: "Hostinger Service Marketplace and Empty States"
ui_category: "Discovery > Service Marketplace"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "A category-filtered service marketplace connects first-party products, AI tools, partner offers, and focused empty states for domains, email, and ecommerce."
---

# Hostinger Service Marketplace and Empty States

## Structure

- **OBSERVED:** More services combines category chips, search, a promotional hero, and repeated cards across hosting, websites, domains, email, AI automation, and partner offers.
- **OBSERVED:** Domain portfolio uses a centered empty state. Emails uses an offer hero and plan grid. Ecommerce uses a full-page value proposition ending in `Explore plans`.

## Behavior & States

- **OBSERVED:** Marketplace actions vary among `Explore offer`, `Try now`, and setup actions. Cards expose discounts and AI badges where relevant.
- **NEEDS VERIFICATION:** Domain search, transfer, DNS, mailbox setup, marketing sends, ecommerce catalogue, orders, payments, and post-purchase management.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep category filters above the card grid. Pair empty states with one primary acquisition action and one lower-emphasis alternative.

## Evidence

- **OBSERVED:** Authenticated Hostinger service routes, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-service-marketplace-and-empty-states` uses fictional local data and sends no Hostinger request.
- `marketplace` — observed or observed-structure starting state.
- `domains` — observed or observed-structure starting state.
- `no-results` — local-only guard or reconstruction state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
