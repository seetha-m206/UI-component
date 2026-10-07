---
component: "Hostinger AI Memory Consent Card"
ui_category: "AI Assistance > Consent Card"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger AI Memory Consent Card

## Location

- **OBSERVED:** Authenticated AI memory profile route in the off state.

## Screenshot

- **NEEDS VERIFICATION:** The consent card was visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** The card explained project continuity, setup-aware help, and continuation across Agent and support. One primary `Turn on memory` action was visible.

## Actions

- **OBSERVED:** The off state and supporting explanation were inspected. Consent was not enabled.
- **NEEDS VERIFICATION:** Confirmation, enabled state, remembered-data inventory, edit and delete controls, retention, revocation, and cross-surface behavior.

## Technical Data

- **OBSERVED / DOM:** The route exposed benefit content and a single primary consent action.
- **NEEDS VERIFICATION:** Consent API, audit record, memory sources, retrieval, export, retention, and permission enforcement.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep AI memory opt-in explicit, explain concrete benefits, and provide a privacy link before the primary action.

## Sources

- **OBSERVED:** Authenticated Hostinger AI memory route and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-ai-memory-consent-card` uses fictional local data and sends no Hostinger request.
- `off` — observed or observed-structure starting state.
- `guarded` — local-only guard or reconstruction state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
