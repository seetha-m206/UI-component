---
component: "Knowledge content catalogue and filters interaction component"
ui_category: "Knowledge Management > interaction"
source_product: "Intercom + Fin"
parent_workflow: "Knowledge content catalogue and filters"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent interaction-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Knowledge content catalogue and filters interaction component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/knowledge-hub/all-content` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Knowledge content catalogue and filters](/evidence/intercom-fin/knowledge-content-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Content search, audience and filters toolbar.
- **OBSERVED:** Add-content entry cards.
- **OBSERVED:** Content source table with product-role columns.

## Actions

- **OBSERVED:** Open filters.
- **OBSERVED:** Inspect content-source summary.
- **OBSERVED:** Do not create, import or sync content.

## Behavior & States

- **OBSERVED:** Zero live native content.
- **OBSERVED:** Expanded filter taxonomy.
- **OBSERVED:** Role columns for Help Center, Copilot, Service, Sales and Ecommerce.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-knowledge-content-catalogue-audit-interaction` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
