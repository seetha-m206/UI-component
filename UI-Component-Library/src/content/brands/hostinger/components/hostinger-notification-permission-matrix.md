---
component: "Hostinger Notification Permission Matrix"
ui_category: "Settings > Notification Matrix"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Topic-by-channel notification matrix with editable, mandatory, and disabled controls."
---

# Hostinger Notification Permission Matrix

## Location

- **OBSERVED:** Authenticated notification settings profile route.

## Screenshot

- **NEEDS VERIFICATION:** The matrix was visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** Topic rows grouped subscription, security, service, and marketing messages against SMS, WhatsApp, and Email columns.
- **OBSERVED:** Some Email controls appeared mandatory or disabled.

## Actions

- **OBSERVED:** Control roles and disabled states were inspected. No communication preference was changed.
- **NEEDS VERIFICATION:** Save behavior, dependency rules, channel eligibility, confirmation, delivery, rollback, and error states.

## Technical Data

- **OBSERVED / DOM:** Repeated checkbox controls and disabled state formed a table-like matrix.
- **NEEDS VERIFICATION:** Preference API, mandatory-policy source, channel verification, audit events, and authorization.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use topic rows and channel columns with clear unavailable and mandatory states. Keep local toggles non-functional unless backed by fictional state.

## Sources

- **OBSERVED:** Authenticated Hostinger notification settings and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-notification-permission-matrix` uses fictional local data and sends no Hostinger request.
- `observed` — observed or observed-structure starting state.
- `mandatory` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
