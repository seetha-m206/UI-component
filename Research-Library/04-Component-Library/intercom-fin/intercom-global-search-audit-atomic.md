---
component: "Global search command palette atomic component"
ui_category: "Navigation > atomic"
source_product: "Intercom + Fin"
parent_workflow: "Global search command palette"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Global search command palette atomic component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/operator` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **NOT RETAINED:** The palette was opened over an authenticated screen that exposed a teammate identity, so no screenshot was persisted.

## Structure

- **OBSERVED:** Search field.
- **OBSERVED:** Grouped navigation results.
- **OBSERVED:** Keyboard shortcut footer.

## Actions

- **OBSERVED:** Open and dismiss palette.
- **OBSERVED:** Inspect grouped destinations.
- **OBSERVED:** Do not search customer data.

## Behavior & States

- **OBSERVED:** Open overlay.
- **OBSERVED:** Grouped default destinations.
- **OBSERVED:** Keyboard navigation hints.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-global-search-audit-atomic` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
