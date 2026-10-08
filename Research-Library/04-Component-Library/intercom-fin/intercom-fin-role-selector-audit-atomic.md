---
component: "Fin role selector atomic component"
ui_category: "AI & Automation > atomic"
source_product: "Intercom + Fin"
parent_workflow: "Fin role selector"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Fin role selector atomic component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/all-roles` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **NOT RETAINED:** The route transitioned to the Fin setup overview before a stable role-selector screenshot could be retained.

## Structure

- **OBSERVED:** Service, Sales and Ecommerce role cards.
- **OBSERVED:** Train, Test, Deploy and Analyze navigation.
- **OBSERVED:** Expandable FAQ group.

## Actions

- **OBSERVED:** Inspect role cards.
- **OBSERVED:** Expand role FAQ.
- **OBSERVED:** Do not start role setup.

## Behavior & States

- **OBSERVED:** All roles selected.
- **OBSERVED:** Role navigation disabled until selection.
- **OBSERVED:** Expanded FAQ answer.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-role-selector-audit-atomic` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
