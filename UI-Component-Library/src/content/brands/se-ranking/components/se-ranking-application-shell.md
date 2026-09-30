---
component: SE Ranking application shell
ui_category: 'Application Layout > Product Navigation'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: observed_reconstructed
status: partial
summary: Authenticated SE Ranking shell with persistent product rail, task-level top navigation, announcement banner, and account controls.
---

# Component: SE Ranking application shell

## Human View

The authenticated workspace combines a persistent dark product rail, a blue task-level top bar, and a promotional banner above the content canvas. The rail groups projects, research, backlinks, audit, AI, content, local marketing, reports, agency, API, and social tools.

## State Fixtures

- Observed authenticated shell with Research active.
- Observed Projects-active shell from Project Overview.
- Observed shell with audit-complete notification.

## Technical View

- Fixed top product navigation and a persistent left navigation rail frame the main workspace.
- The local reconstruction keeps navigation buttons inert and never changes the live account.
- Compact presentation collapses several top navigation labels while retaining the rail.

## Evidence Boundary

- **OBSERVED:** Navigation labels, active-item styling, product banner, account initials, and two content contexts.
- **RECONSTRUCTION:** Responsive collapse, dimensions, icons, and local hover treatment.
- **NOT OBSERVED:** Keyboard shortcuts, persisted navigation state, notification counts, and account-menu behavior. These need verification.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview and Keyword Research screens in the Codex in-app browser, 2026-09-30.
