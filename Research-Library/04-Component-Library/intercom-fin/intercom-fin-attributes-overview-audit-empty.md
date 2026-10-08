---
component: "Fin attributes overview empty component"
ui_category: "AI Training > empty"
source_product: "Intercom + Fin"
parent_workflow: "Fin attributes overview"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent empty-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Fin attributes overview empty component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/conversation-data` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin attributes overview](screenshots/fin-attributes-overview-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Attribute education panel.
- **OBSERVED:** Preset attribute cards.
- **OBSERVED:** Preview panel.

## Actions

- **OBSERVED:** Inspect attribute presets.
- **OBSERVED:** Review attribute education.
- **OBSERVED:** Do not create or dismiss an attribute.

## Behavior & States

- **OBSERVED:** No configured attributes.
- **OBSERVED:** Six preset types.
- **OBSERVED:** Preview waits for content.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-attributes-overview-audit-empty` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
