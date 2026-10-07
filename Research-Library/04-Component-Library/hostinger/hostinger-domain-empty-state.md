---
component: "Hostinger Domain Empty State"
ui_category: "Empty States > Domain Portfolio"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Domain Empty State

## Location

- **OBSERVED:** Authenticated Domains portfolio on an account without domains.

## Screenshot

- **NEEDS VERIFICATION:** The empty state was visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** A centred explanatory card paired empty-domain copy with `Get new domain` and `Transfer domain` actions.

## Actions

- **OBSERVED:** The empty state was inspected without opening acquisition or transfer.
- **NEEDS VERIFICATION:** Search results, availability, pricing, registration, transfer, DNS, validation, and failure states.

## Technical Data

- **OBSERVED / DOM:** The state exposed a heading, explanatory content, and two action controls.
- **NEEDS VERIFICATION:** Domain APIs, polling, transfer authorization, purchase, and permission checks.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use one primary acquisition action and one lower-emphasis transfer alternative with fictional domain examples.

## Sources

- **OBSERVED:** Authenticated Hostinger Domains route and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-domain-empty-state` uses fictional local data and sends no Hostinger request.
- `empty` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
