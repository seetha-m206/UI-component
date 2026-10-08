---
component: "Inbox workspace and status filter state component"
ui_category: "Channels > state"
source_product: "Intercom + Fin"
parent_workflow: "Inbox workspace and status filter"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Intercom and Fin audit record with a fictional local fixture and consequential provider behavior left unverified."
---

# Inbox workspace and status filter state component

## Evidence boundary

- **OBSERVED:** Authenticated route `/a/inbox/{workspace}/inbox/admin/{teammate}` was inspected without submitting, sending, uploading, purchasing, inviting or changing provider data.
- **RECONSTRUCTION:** The preview uses fictional company, contact and conversation values and cannot contact Intercom.
- **NOT OBSERVED:** Provider persistence, mutation APIs, outbound delivery, Fin answer generation, permission enforcement and billing consequences were not exercised.

## Screenshot

- **NOT RETAINED:** The authenticated screen exposed a teammate identity, so no screenshot was persisted.

## Structure

- **OBSERVED:** Inbox navigation with personal, shared and channel views.
- **OBSERVED:** Conversation list and detail split pane.
- **OBSERVED:** Status and sort controls.

## Actions

- **OBSERVED:** Open the status filter.
- **OBSERVED:** Inspect channel views.
- **OBSERVED:** Do not open, reply to or create a conversation.

## Behavior & States

- **OBSERVED:** No conversation selected.
- **OBSERVED:** No items in personal inbox.
- **OBSERVED:** Open, Closed, Snoozed, Submitted, In progress, Waiting on customer and Resolved statuses.
- **RECONSTRUCTION:** Local fixture actions update a notice or visual selection only.

## Technical Data

- **OBSERVED / DOM:** The authenticated app combined Ember route shells with React teammate-app islands, accessible roles, Radix popovers and Base UI controls.
- **OBSERVED / ROUTING:** Navigation used workspace-scoped `/a/apps/{workspace}/...` routes. Workspace and teammate identifiers are redacted here.
- **NOT OBSERVED / NETWORK:** Request payloads, mutation contracts and authorization responses were not captured or exercised.
- **NEEDS VERIFICATION:** Responsive breakpoints, keyboard coverage beyond exposed labels, server persistence and provider error responses.

## Registered fixture

- **RECONSTRUCTION:** `intercom-inbox-workspace-audit-state` renders an independent, fictional local preview.
- **RECONSTRUCTION:** The fixture never sends a provider request and keeps write-shaped controls disabled or locally intercepted.

## Sources

- **OBSERVED:** Authenticated Intercom workspace, read-only capture, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/intercom-fin-deep-audit/`.
