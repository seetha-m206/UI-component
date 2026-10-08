---
component: "Fin for Sales playbook generator atomic component"
ui_category: "AI Sales > atomic"
source_product: "Intercom + Fin"
parent_workflow: "Fin for Sales playbook generator"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Fin for Sales playbook generator atomic component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/sales/playbook` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin for Sales playbook generator](/evidence/intercom-fin/fin-sales-playbook-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Qualification-process input.
- **OBSERVED:** Pricing-page input.
- **OBSERVED:** AI generation and default setup actions.

## Actions

- **OBSERVED:** Inspect playbook inputs.
- **OBSERVED:** Read the Sales-only configuration boundary.
- **OBSERVED:** Do not add files, enter data or generate a playbook.

## Behavior & States

- **OBSERVED:** Blank qualification process.
- **OBSERVED:** Blank pricing URL.
- **OBSERVED:** Generate disabled.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-sales-playbook-audit-atomic` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
