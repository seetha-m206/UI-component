---
component: "Contacts active segment empty state screen component"
ui_category: "Data Management > screen"
source_product: "Intercom + Fin"
parent_workflow: "Contacts active segment empty state"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Contacts active segment empty state screen component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/users/segments/active` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Contacts active segment empty state](/evidence/intercom-fin/contacts-active-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** People and company navigation.
- **OBSERVED:** Segment counts.
- **OBSERVED:** Contacts education empty state and filters.

## Actions

- **OBSERVED:** Inspect active segment.
- **OBSERVED:** Read provider review notice.
- **OBSERVED:** Do not import or create contacts.

## Behavior & States

- **OBSERVED:** Active segment at zero.
- **OBSERVED:** Workspace email review banner.
- **OBSERVED:** Last seen filter summary.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-contacts-active-empty-audit-screen` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
