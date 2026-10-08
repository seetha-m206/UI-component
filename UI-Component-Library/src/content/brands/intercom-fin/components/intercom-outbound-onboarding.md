---
component: "Outbound messages onboarding"
ui_category: "Outbound Messaging > Workflow"
source_product: "Intercom + Fin"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated, read-only Intercom and Fin pattern with a fictional local fixture and provider writes left unverified."
---

# Outbound messages onboarding

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/outbound/all` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Outbound messages onboarding](/evidence/intercom-fin/outbound-onboarding-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Messages, Series and Settings tabs.
- **OBSERVED:** Outbound education panel.
- **OBSERVED:** Chat, email and product-tour templates.

## Actions

- **OBSERVED:** Inspect template cards.
- **OBSERVED:** Read provider review notice.
- **OBSERVED:** Do not create or send a message.

## Behavior & States

- **OBSERVED:** Workspace email review banner.
- **OBSERVED:** Onboarding template selection.
- **OBSERVED:** No outbound message list yet.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-outbound-onboarding` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
