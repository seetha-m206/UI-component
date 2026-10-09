---
component: Apollo Companies Import Menu
ui_category: 'Menus > Import Actions'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Account import menu exposing single-account, CSV and local-business discovery entry points.
---

# Component: Apollo Companies Import Menu

## Structure

Import trigger → Single account → CSV → separator → Find local businesses with New badge.

## Behavior & States

- **OBSERVED:** The menu was opened and dismissed only.
- **RECONSTRUCTION:** Every local menu item is disabled.
- **NOT OBSERVED:** Forms, file selection, mapping, duplicate handling and local-business discovery.
- **NEEDS VERIFICATION:** File limits, validation, permissions, billing and import outcomes.

## Rules

Treat every item as consequential. Opening the menu is reversible, selecting an item was outside this pass.

## Sources

- **OBSERVATION:** Authenticated Companies Import menu, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-import-menu.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Rules & Validation

- **OBSERVED:** Only visible default, empty, selected, disabled or plan-gated states are documented.
- **RECONSTRUCTION:** Fixture actions are local or disabled and cannot call Apollo.
- **NEEDS VERIFICATION:** Provider authorization, validation, persistence, loading, error and recovery behavior.

## Technical Data

- **OBSERVED:** Sanitized route, title, headings, controls and semantic state are recorded in the dated Apollo evidence receipts.
- **RECONSTRUCTION / HTML:** Semantic React headings, sections, buttons, tabs, dialogs and status regions.
- **RECONSTRUCTION / CSS:** Scoped Apollo-inspired fixture styling without copied provider source or design tokens.
- **RECONSTRUCTION / JavaScript:** Local React state or static fixture rendering only.
- **NOT OBSERVED / Network:** No request payload, response schema, header, token, object identifier or endpoint contract was retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-companies-filter-sidebar]] and [[apollo-companies-location-filter]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-import-menu.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
