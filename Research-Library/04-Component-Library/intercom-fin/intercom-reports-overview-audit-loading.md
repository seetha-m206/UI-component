---
component: "Reports overview and empty analytics loading component"
ui_category: "Analytics > loading"
source_product: "Intercom + Fin"
parent_workflow: "Reports overview and empty analytics"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent loading-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Reports overview and empty analytics loading component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/apps/{workspace}/reports/overview` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **OBSERVED:** [Reports overview and empty analytics](screenshots/reports-overview-loaded.png) captured from the authenticated workspace on 2026-10-08.

## Structure

- **OBSERVED:** Reports navigation and favorites region.
- **OBSERVED:** Date range, filter and timezone controls.
- **OBSERVED:** Conversation, Fin, teammate, CX and CSAT metric cards.

## Actions

- **OBSERVED:** Inspect report sections.
- **OBSERVED:** Open no-data chart context.
- **OBSERVED:** Do not schedule or export reports.

## Behavior & States

- **OBSERVED:** Four-conversation summary.
- **OBSERVED:** Dash placeholders for unavailable metrics.
- **OBSERVED:** No-data chart guidance.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-reports-overview-audit-loading` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
