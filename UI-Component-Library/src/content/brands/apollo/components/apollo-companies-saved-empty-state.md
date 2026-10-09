---
component: Apollo Companies Saved Empty State
ui_category: 'Empty States > Search Results'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Zero-result Saved companies state with reset and AI-search recovery actions.
---

# Component: Apollo Companies Saved Empty State

## Structure

Saved scope → empty-search illustration → adjustment guidance → Reset filters → Search with AI.

## Behavior & States

- **OBSERVED:** Saved showed zero and produced the empty state.
- **OBSERVED:** No reset or AI action was selected, and Total was restored afterward.
- **RECONSTRUCTION:** Preview uses fictional aggregate counts and inert recovery actions.
- **NOT OBSERVED:** Non-zero saved rows, bulk selection, pagination and delete behavior.
- **NEEDS VERIFICATION:** Saved record permissions, persistence and search recovery outcomes.

## Sources

- **OBSERVATION:** Authenticated Saved Companies state, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-saved-empty-state.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-location-filter]] and [[apollo-companies-saved-search-selector]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-saved-empty-state.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
