---
component: "Fin Ecommerce content workspace"
ui_category: "AI Ecommerce > Workflow"
source_product: "Intercom + Fin"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated, read-only Intercom and Fin pattern with a fictional local fixture and provider writes left unverified."
---

# Fin Ecommerce content workspace

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/ecommerce/content` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin Ecommerce content workspace](/evidence/intercom-fin/fin-ecommerce-content-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Ecommerce content toolbar.
- **OBSERVED:** Create and sync source cards.
- **OBSERVED:** Role-aware content table and preview.

## Actions

- **OBSERVED:** Inspect Ecommerce content sources.
- **OBSERVED:** Review the role columns.
- **OBSERVED:** Do not create, sync or import content.

## Behavior & States

- **OBSERVED:** Zero live native content.
- **OBSERVED:** Service, Sales and Ecommerce role columns.
- **OBSERVED:** Preview waits for content.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-ecommerce-content` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
