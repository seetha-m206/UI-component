---
component: 'ClickUp AI Onboarding'
ui_category: 'AI > Onboarding'
source_product: 'ClickUp'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Brain squared personalization modal and prompt surface.'
---

# Component: ClickUp AI Onboarding

## Location

- **OBSERVATION:** Authenticated ClickUp runtime observed read-only on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses Northstar Studio, Avery Chen, and fictional work items.

## Screenshot

![Fictional local preview](/research/clickup/fixtures/clickup-ai-onboarding.png)

## Structure

- **OBSERVATION:** The onboarding introduces the AI work partner and offers personalization or dismissal.

## Behavior

- **OBSERVATION:** Prompt submission and personalization remain disabled in the fictional fixture.
- **RECONSTRUCTION:** Interactions are local-only and do not contact ClickUp.

## Actions

- **OBSERVATION:** Safe navigation, tabs, menus, filters, and empty states were inspected without mutation.
- **NOT OBSERVED:** AI prompt execution, personalization, retention, permissions, and billing.

## States

- **OBSERVATION:** Default authenticated desktop state and the specific visible state documented above.
- **NEEDS VERIFICATION:** Mobile provider behavior, keyboard focus order, persistence, entitlements, and collaborative updates.

## Rules and Validation

- **RECONSTRUCTION:** Write-shaped, connection, invite, export, submit, record, upload, billing, permission, and destructive controls are disabled or return a local boundary.

## Technical Data

- **OBSERVATION:** The shell uses semantic controls inside a dark, application-style layout. Normalized asset-host and route-shape evidence is retained separately without identifiers.

## Lessons

- **RECOMMENDATION:** Keep context, view controls, empty states, and consequential actions visually distinct, with safe defaults and explicit disabled states.

## Sources

- **OBSERVATION:** Authenticated ClickUp runtime, 2026-10-08.
- **RECONSTRUCTION:** src/previews/clickup-shared/ClickupPreview.tsx.
- **NOT OBSERVED:** Private contracts, mutations, persistence, provider-side consequences, and permission boundaries.
