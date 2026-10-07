---
component: "Hostinger Account Settings and Permissions"
ui_category: "Account & Settings > Security and Permissions"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Account Settings and Permissions

## Location

- **OBSERVED:** Authenticated profile routes for account information, account sharing, security, activity, notifications, and AI memory.

## Structure

- **OBSERVED:** Profile routes share breadcrumbs, a page heading, the global hPanel shell, and a secondary menu.
- **OBSERVED:** Account information groups invoice identity, account settings, social logins, account integrations, and account deletion.
- **OBSERVED:** Sensitive identity values were visible in the provider UI and intentionally excluded from all local artifacts.

## States

- **OBSERVED:** Account sharing has Request access and Give access tabs. Both showed instructional copy, a primary action, and a `Nothing found` empty state.
- **OBSERVED:** Security shows independent cards for two-factor authentication and new/shared-device verification with current state and opposing actions.
- **OBSERVED:** Account activity uses a searchable table with Device, Location, First Login, and Login Type columns plus page-size and pagination controls. The empty result reported `1 to 5 of 0` while Next and Last controls remained exposed.
- **OBSERVED:** Notification settings use a matrix of subscription, security, service, and marketing topics against SMS, WhatsApp, and Email channels. Some email controls are mandatory or disabled.
- **OBSERVED:** AI memory begins in an off state with a consent-oriented `Turn on memory` action and explains project continuity, setup-aware help, and cross-chat context.

## Actions and Safety

- **OBSERVED:** Tabs and navigation were exercised because they are reversible disclosures.
- **NEEDS VERIFICATION:** No access request, access grant, credential change, integration connection, security toggle, communication preference change, AI-memory consent, logout, or deletion was performed.

## Technical Data

- **OBSERVED / DOM:** Profile screens used tab groups, checkboxes, tables, combo boxes, breadcrumbs, disabled controls, and empty-state illustrations.
- **NEEDS VERIFICATION:** Permission granularity, confirmation dialogs, email delivery, audit-event creation, session revocation, and authorization failures.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep status, explanation, and action together. Use tables for repeated channel permissions and require a separate confirmation layer for access, security, consent, and deletion changes.

## Sources

- **OBSERVED:** Authenticated Hostinger profile routes, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-account-settings-and-permissions` uses fictional local data and sends no Hostinger request.
- `overview` — observed or observed-structure starting state.
- `sharing` — observed or observed-structure starting state.
- `notifications` — observed or observed-structure starting state.
- `memory` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
