---
component: "Trello Workspace Overview"
ui_category: "Application Layout > Workspace Overview"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Workspace identity, navigation, template discovery and board inventory."
---

# Component: Trello Workspace Overview

## Location

- **OBSERVATION:** `/w/:workspace/home`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-workspace-overview.png)

## Structure

- **OBSERVATION:** Workspace header exposes Premium and Private status.
- **OBSERVATION:** Sidebar links Boards, Members, Settings and Billing.
- **OBSERVATION:** Templates, Jira promotion and existing boards share the main canvas.

## Behavior

- **OBSERVATION:** Workspace navigation opens dedicated full-page settings surfaces.
- **RECONSTRUCTION:** Fictional workspace cards remain local.

## Actions

- **OBSERVATION:** Open existing board, member and settings pages.
- **NOT OBSERVED:** Edit workspace, change logo, try Jira or create board.

## States

- **OBSERVATION:** Premium trial and private workspace.
- **NEEDS VERIFICATION:** Free-tier layout and multi-workspace comparison.

## Rules and Validation

- **RECONSTRUCTION:** Upgrade and create boundaries are inert.

## Technical Data

- **OBSERVATION:** Responsive sidebar plus grouped link-card composition.

## Lessons

- **RECOMMENDATION:** Surface workspace privacy and plan state near its identity rather than burying them in settings.

## Sources

- **OBSERVATION:** Authenticated Trello workspace home, 2026-10-08.
- **NOT OBSERVED:** Workspace edits or purchases.
