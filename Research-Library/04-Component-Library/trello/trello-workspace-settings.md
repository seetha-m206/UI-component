---
component: "Trello Workspace Settings"
ui_category: "Settings and Administration > Workspace Policy Settings"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Premium workspace AI, visibility, membership, board and integration restrictions."
---

# Component: Trello Workspace Settings

## Location

- **OBSERVATION:** `/w/:workspace/account`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-workspace-settings.png)

## Structure

- **OBSERVATION:** AI, visibility, membership, board creation, board deletion, guest sharing and Slack linking form distinct policy sections.
- **OBSERVATION:** Current policy text is paired with a Change boundary.
- **OBSERVATION:** Subscription cancellation is shown as a prerequisite for workspace deletion.

## Behavior

- **OBSERVATION:** AI shows an active switch and every policy section has current-state copy.
- **RECONSTRUCTION:** Preview displays policies but disables changes.

## Actions

- **OBSERVATION:** Read current workspace policies.
- **NOT OBSERVED:** Toggle AI, change restrictions, link Slack or cancel a subscription.

## States

- **OBSERVATION:** Premium, private, AI active and permissive membership/board defaults.
- **NEEDS VERIFICATION:** Saved-state feedback, validation and non-admin access.

## Rules and Validation

- **RECONSTRUCTION:** All provider-changing controls are disabled.

## Technical Data

- **OBSERVATION:** Full-page settings shell with checkbox and action-button semantics.

## Lessons

- **RECOMMENDATION:** Pair each policy setting with a plain-language consequence and current effective value.

## Sources

- **OBSERVATION:** Authenticated Trello workspace settings, 2026-10-08.
- **NOT OBSERVED:** Workspace policy mutations.
