---
component: "Trello Application Shell"
ui_category: "Application Layout > Global Application Shell"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Authenticated global header and contextual navigation shell reconstructed with fictional identity."
---

# Component: Trello Application Shell

## Location

- **OBSERVATION:** Authenticated Trello boards, workspace settings and board routes.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-application-shell.png)

## Structure

- **OBSERVATION:** Dark header contains app switching, home, search, create, feedback, notifications, help and profile controls.
- **OBSERVATION:** Contextual navigation changes between boards home, workspace settings and board workspaces.
- **RECONSTRUCTION:** Preview uses a fictional profile and disables provider-bound creation.

## Behavior

- **OBSERVATION:** Header persists while the contextual page shell changes.
- **RECONSTRUCTION:** Local navigation only changes fixture notices.

## Actions

- **OBSERVATION:** Navigate through existing home, workspace and board surfaces.
- **NOT OBSERVED:** Create, notification-state change, feedback submission or account update.

## States

- **OBSERVATION:** Dark theme, authenticated profile and trial-plan indicator.
- **NEEDS VERIFICATION:** Theme preference persistence and account-level entitlement behavior.

## Rules and Validation

- **RECONSTRUCTION:** Create and account mutation controls are inert.

## Technical Data

- **OBSERVATION:** Atlassian Sans with system fallbacks, semantic buttons and links, and route-specific content regions.

## Lessons

- **RECOMMENDATION:** Keep global utilities stable while allowing the main product context to become denser.

## Sources

- **OBSERVATION:** Authenticated Trello application shell, 2026-10-08.
- **NOT OBSERVED:** Account or provider mutation contracts.
