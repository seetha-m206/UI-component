---
component: "Fin email deployment configuration error component"
ui_category: "AI Deployment > error"
source_product: "Intercom + Fin"
parent_workflow: "Fin email deployment configuration"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent error-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Fin email deployment configuration error component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/deploy/email` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin email deployment configuration](screenshots/fin-deploy-email-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Email deployment workflow.
- **OBSERVED:** Audience, introduction, content, guidance, handoff, CSAT and inactivity stages.
- **OBSERVED:** Answer preview panel.

## Actions

- **OBSERVED:** Inspect the email deployment stages.
- **OBSERVED:** Read the custom-domain prerequisite.
- **OBSERVED:** Do not deploy Fin, edit settings or configure email forwarding.

## Behavior & States

- **OBSERVED:** Set Fin Live disabled.
- **OBSERVED:** More content required.
- **OBSERVED:** CSAT disabled.
- **OBSERVED:** One-day follow-up and six-hour auto-close displayed.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-deploy-email-audit-error` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
