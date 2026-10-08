---
component: "Workflows overview and upgrade boundary loading component"
ui_category: "Automation > loading"
source_product: "Intercom + Fin"
parent_workflow: "Workflows overview and upgrade boundary"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent loading-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Workflows overview and upgrade boundary loading component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/workflows-overview` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Workflows overview and upgrade boundary](screenshots/workflows-overview-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Workflow education panel.
- **OBSERVED:** New workflow action.
- **OBSERVED:** Troubleshoot and Learn controls.

## Actions

- **OBSERVED:** Inspect workflow overview.
- **OBSERVED:** Read the upgrade boundary.
- **OBSERVED:** Do not create a workflow or upgrade the plan.

## Behavior & States

- **OBSERVED:** Upgrade required to set Workflows live.
- **OBSERVED:** No workflow list visible.
- **OBSERVED:** AI disclosure notice.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-workflows-overview-audit-loading` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
