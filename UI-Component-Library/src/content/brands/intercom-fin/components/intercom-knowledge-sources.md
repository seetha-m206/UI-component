---
component: "Knowledge sources overview"
ui_category: "Knowledge Management > Workflow"
source_product: "Intercom + Fin"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated, read-only Intercom and Fin pattern with a fictional local fixture and provider writes left unverified."
---

# Knowledge sources overview

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/knowledge-hub/overview` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Knowledge sources overview](/evidence/intercom-fin/knowledge-sources-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Audience tabs for All sources, AI Agent, Copilot and Help Center.
- **OBSERVED:** Source sections for public and internal articles, conversations, macros and websites.
- **OBSERVED:** Source rows with readiness counts and setup actions.

## Actions

- **OBSERVED:** Switch source audience tab.
- **OBSERVED:** Inspect source readiness.
- **OBSERVED:** Do not sync, import, upload or create content.

## Behavior & States

- **OBSERVED:** Fin not live.
- **OBSERVED:** Copilot live.
- **OBSERVED:** Help Center not live.
- **OBSERVED:** Mixed source counts and not-set-up labels.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-knowledge-sources` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
