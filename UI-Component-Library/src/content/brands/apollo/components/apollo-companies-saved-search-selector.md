---
component: Apollo Companies Saved Search Selector
ui_category: 'Search > Saved Views'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Searchable saved-view selector with ownership tabs, system default and create action.
---

# Component: Apollo Companies Saved Search Selector

## Structure

Search input → All searches, Your searches, Starred, Assigned to you and Shared tabs → Default view system option → Create saved search.

## Behavior & States

- **OBSERVED:** All searches and the system Default view were selected.
- **OBSERVED:** The selector was opened and dismissed only.
- **RECONSTRUCTION:** Local tab and view content are inert and fictional.
- **NOT OBSERVED:** User-created views, shared results, creation and selection persistence.
- **NEEDS VERIFICATION:** Permissions, empty tabs, keyboard navigation and server synchronization.

## Sources

- **OBSERVATION:** Authenticated Companies view selector, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-saved-search-selector.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-saved-empty-state]] and [[apollo-companies-search-settings-drawer]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-saved-search-selector.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
