---
component: "Fin for Sales simulations empty state error component"
ui_category: "AI Sales > error"
source_product: "Intercom + Fin"
parent_workflow: "Fin for Sales simulations empty state"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent error-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Fin for Sales simulations empty state error component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/sales/test` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin for Sales simulations empty state](/evidence/intercom-fin/fin-sales-test-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Simulations workspace.
- **OBSERVED:** Create-from-scratch action.
- **OBSERVED:** Playbook-based generation action.

## Actions

- **OBSERVED:** Inspect simulation entry points.
- **OBSERVED:** Read the testing explanation.
- **OBSERVED:** Do not create or generate a simulation.

## Behavior & States

- **OBSERVED:** Beta label.
- **OBSERVED:** No simulations yet.
- **OBSERVED:** Generate from Playbook disabled.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-sales-test-audit-error` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
