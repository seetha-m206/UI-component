---
component: "Hostinger Account Settings and Permissions"
ui_category: "Account & Settings > Security and Permissions"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Profile routes group identity, sharing, security, activity, notification-channel permissions, and explicit AI-memory consent under a stable secondary menu."
---

# Hostinger Account Settings and Permissions

## Structure

- **OBSERVED:** Profile routes share breadcrumbs and a secondary menu for Account information, Account sharing, Security, Account activity, Notification settings, and AI memory.
- **OBSERVED:** Sensitive identity values visible in the provider UI were intentionally omitted.

## Behavior & States

- **OBSERVED:** Account sharing uses Request access and Give access tabs with guidance, primary actions, and empty states.
- **OBSERVED:** Security pairs state, explanation, and action for two-factor authentication and shared-device verification.
- **OBSERVED:** Activity uses a searchable table and pagination. Notifications use a topic-by-channel permission matrix. AI memory begins with an explicit consent action.
- **NEEDS VERIFICATION:** No access, credential, security, notification, consent, integration, logout, or deletion action was performed.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use tabs for sharing directions, cards for binary security states, and a matrix for repeated communication permissions. Add confirmation for consequential changes.

## Evidence

- **OBSERVED:** Authenticated Hostinger profile routes, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-account-settings-and-permissions` uses fictional local data and sends no Hostinger request.
- `overview` — observed or observed-structure starting state.
- `sharing` — observed or observed-structure starting state.
- `notifications` — observed or observed-structure starting state.
- `memory` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
