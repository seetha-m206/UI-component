---
component: 'ClickUp Inbox'
ui_category: 'Messaging > Notification Inbox'
source_product: 'ClickUp'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Primary, Other, Later, and Cleared inbox states.'
---

# Component: ClickUp Inbox

## Location

- **OBSERVATION:** Authenticated ClickUp runtime observed read-only on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses Northstar Studio, Avery Chen, and fictional work items.

## Screenshot

![Fictional local preview](/research/clickup/fixtures/clickup-inbox.png)

## Structure

- **OBSERVATION:** Tabs divide notification urgency and lifecycle, with filter and clear controls nearby.

## Behavior

- **OBSERVATION:** The fictional Primary state shows the collaboration empty state.
- **RECONSTRUCTION:** Interactions are local-only and do not contact ClickUp.

## Actions

- **OBSERVATION:** Safe navigation, tabs, menus, filters, and empty states were inspected without mutation.
- **NOT OBSERVED:** Clearing, snoozing, notification delivery, and provider-side read state.

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
