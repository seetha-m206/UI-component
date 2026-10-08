---
component: "Fin data attributes table state component"
ui_category: "AI Data > state"
source_product: "Intercom + Fin"
parent_workflow: "Fin data attributes table"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Fin data attributes table state component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/automation/fin-ai-agent/customer-data` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Fin data attributes table](/evidence/intercom-fin/fin-data-attributes-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Data attributes and connectors tabs.
- **OBSERVED:** Search, filter and column controls.
- **OBSERVED:** Attribute table with status, object type, format, coverage, references and audience.

## Actions

- **OBSERVED:** Inspect attribute inventory.
- **OBSERVED:** Open local filter controls only.
- **OBSERVED:** Do not enable, disable or select attributes.

## Behavior & States

- **OBSERVED:** 46 attributes.
- **OBSERVED:** Enabled and disabled statuses.
- **OBSERVED:** Preview requires contact selection.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-fin-data-attributes-audit-state` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
