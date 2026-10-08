---
component: 'monday.com Application Shell'
ui_category: 'Application Layout > Work Management Shell'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Global utility bar, product rail and workspace navigation observed in authenticated monday.com.'
---

# Component: monday.com Application Shell

## Location

- **OBSERVATION:** Authenticated shell observed across workspace, board, dashboard and product routes on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses Acme Studio, fictional initials and no provider identifiers.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-application-shell.png)

## Structure

- **OBSERVATION:** A full-width utility bar sits above a narrow product rail, a workspace navigation column and the active content surface.
- **OBSERVATION:** Global controls include plan, search, notifications, updates, invite, marketplace, help, product switcher and user menu.
- **OBSERVATION:** The product rail exposes Workspace, Sidekick, Agents, Vibe, Workflows, Notetaker, Favorites and More.

## Behavior

- **OBSERVATION:** Primary-product navigation replaces the main content while keeping global utilities available.
- **RECONSTRUCTION:** Local rail buttons switch fictional surfaces and announce that no provider navigation occurred.

## Actions

- **OBSERVATION:** Search opens an overlay. Workspace navigation opens existing content.
- **NOT OBSERVED:** Invite, marketplace, plan, notification and profile consequences.

## States

- **OBSERVATION:** Selected product, selected workspace item, notification badge and onboarding prompts.
- **NEEDS VERIFICATION:** Mobile shell, keyboard focus order and persisted rail state.

## Rules and Validation

- **RECONSTRUCTION:** All write-shaped controls are disabled or return a local boundary notice.

## Technical Data

- **OBSERVATION:** Semantic buttons, links, tabs and pop-up buttons are present inside a heavily virtualized DOM.
- **INFERENCE:** Route-specific `mf-*` bundles are consistent with micro-frontend composition.

## Lessons

- **RECOMMENDATION:** Centilio Track should keep product navigation distinct from workspace content navigation and preserve the active context across screen changes.

## Sources

- **OBSERVATION:** Authenticated monday.com runtime, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/monday-shared/MondayPreview.tsx`.
- **NOT OBSERVED:** Private contracts, mutations and persistence.
