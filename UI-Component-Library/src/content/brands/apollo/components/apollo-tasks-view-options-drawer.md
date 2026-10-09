---
component: Apollo Tasks View Options Drawer
ui_category: 'View Settings > Tasks'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Drawer for layout, grouping, fields and applied filters.
---

# Component: Apollo Tasks View Options Drawer

## Structure

View options → Table layout → Group by None → Fields count → Filters count.

## Behavior & States

- **OBSERVED:** The drawer showed Table layout, no grouping, eight fields and one applied filter.
- **RECONSTRUCTION:** Counts are fictional and all controls are disabled.
- **NOT OBSERVED:** Field selection, grouping changes and table persistence.
- **NEEDS VERIFICATION:** Column order, responsive behavior, accessibility and saved preferences.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-tasks-view-options-drawer.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-tasks-sort-dialog]] and [[apollo-team-meetings-onboarding]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-tasks-view-options-drawer.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
