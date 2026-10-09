---
component: Apollo Tasks Sort Dialog
ui_category: 'Sorting > Tasks'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Multi-sort dialog with field, direction and rule controls.
---

# Component: Apollo Tasks Sort Dialog

## Structure

Sort trigger → Due date field → Ascending direction → add or remove rule → Apply.

## Behavior & States

- **OBSERVED:** The sort dialog showed a Due date rule, Ascending direction and disabled Apply state.
- **RECONSTRUCTION:** The local dialog is static and cannot modify results.
- **NOT OBSERVED:** Applied sorting, multiple rules and saved order.
- **NEEDS VERIFICATION:** Conflict handling, persistence, keyboard focus and server ordering.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-tasks-sort-dialog.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-tasks-filter-sidebar]] and [[apollo-tasks-view-options-drawer]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-tasks-sort-dialog.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
