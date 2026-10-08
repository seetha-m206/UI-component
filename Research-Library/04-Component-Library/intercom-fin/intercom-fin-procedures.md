---
component: "Fin procedures empty state"
ui_category: "AI Orchestration > Workflow"
source_product: "Intercom + Fin"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated, read-only Intercom and Fin pattern with a fictional local fixture and provider writes left unverified."
---

# Fin procedures empty state

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/procedures` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin procedures empty state](screenshots/fin-procedures-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Procedure search and filters.
- **OBSERVED:** Data connectors and New procedure actions.
- **OBSERVED:** Education card and outcome metrics.

## Actions

- **OBSERVED:** Inspect filter taxonomy.
- **OBSERVED:** Read procedure explanation.
- **OBSERVED:** Do not create a procedure or connect data.

## Behavior & States

- **OBSERVED:** No procedures yet.
- **OBSERVED:** Outcome metrics unavailable.
- **OBSERVED:** Live-first sort selected.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-procedures` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
