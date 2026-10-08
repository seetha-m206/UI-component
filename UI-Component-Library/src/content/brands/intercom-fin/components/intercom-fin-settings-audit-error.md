---
component: "Fin settings overview error component"
ui_category: "AI Administration > error"
source_product: "Intercom + Fin"
parent_workflow: "Fin settings overview"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent error-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Fin settings overview error component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/settings/ai-automation/fin-ai-agent` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin settings overview](/evidence/intercom-fin/fin-settings-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Usage and billing entry.
- **OBSERVED:** Customization cards.
- **OBSERVED:** Additional automation links.

## Actions

- **OBSERVED:** Inspect customization options.
- **OBSERVED:** Navigate to guidance.
- **OBSERVED:** Do not change Fin identity, language or billing limits.

## Behavior & States

- **OBSERVED:** Trial usage explanation.
- **OBSERVED:** Five customization categories.
- **OBSERVED:** Bot inbox and personality shortcuts.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-settings-audit-error` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
