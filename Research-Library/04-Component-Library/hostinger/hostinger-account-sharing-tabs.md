---
component: "Hostinger Account Sharing Tabs"
ui_category: "Permissions > Sharing Tabs"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Account Sharing Tabs

## Location

- **OBSERVED:** Authenticated account-sharing profile route.

## Screenshot

- **NEEDS VERIFICATION:** Both tab states were visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** `Request access` and `Give access` tabs changed instructional copy and the primary action. Both observed states showed a `Nothing found` empty state.

## Actions

- **OBSERVED:** Switching tabs was reversible and did not submit a request or invitation.
- **NEEDS VERIFICATION:** Request forms, invite forms, role scope, confirmation, pending state, revocation, notifications, and authorization failures.

## Technical Data

- **OBSERVED / DOM:** The direction selector exposed tab semantics followed by instructional content, a primary action, and an empty result region.
- **NEEDS VERIFICATION:** Sharing API, role model, audit trail, recipient validation, expiry, and permission enforcement.

## Reconstruction Guidance

- **RECONSTRUCTION:** Separate inbound and outbound sharing with tabs. Use fictional people and disabled submission in local previews.

## Sources

- **OBSERVED:** Authenticated Hostinger account sharing and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-account-sharing-tabs` uses fictional local data and sends no Hostinger request.
- `request` — observed or observed-structure starting state.
- `give` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
