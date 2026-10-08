---
component: "Simple automations configuration overview error component"
ui_category: "Automation > error"
source_product: "Intercom + Fin"
parent_workflow: "Simple automations configuration overview"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent error-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Simple automations configuration overview error component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/basics` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Simple automations configuration overview](screenshots/simple-automations-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Users and Leads sections.
- **OBSERVED:** Accordion groups for first-message and closed-conversation automations.
- **OBSERVED:** Embedded Messenger preview.

## Actions

- **OBSERVED:** Inspect automation groups.
- **OBSERVED:** Read the Workflows upgrade prompt.
- **OBSERVED:** Do not toggle or configure automations.

## Behavior & States

- **OBSERVED:** Two first-message automations.
- **OBSERVED:** Context collection off.
- **OBSERVED:** Typical reply time on.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-simple-automations-audit-error` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
