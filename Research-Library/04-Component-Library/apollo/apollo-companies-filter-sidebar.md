---
component: Apollo Companies Filter Sidebar
ui_category: 'Filters > Pinned Filter Sidebar'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Fixed-width company filter rail with Total, Net New and Saved scopes plus six pinned filters.
---

# Component: Apollo Companies Filter Sidebar

## Structure

Total, Net New and Saved scope selector → Company → locked Lookalikes → Account Location → Employees → Industry & Keywords → Website Visitors → full filter catalogue.

## Behavior & States

- **OBSERVED:** Sidebar width was 300 px and Total was selected by default.
- **OBSERVED:** Saved showed zero and opened a zero-result workspace.
- **RECONSTRUCTION:** Local preview uses synthetic aggregate counts.
- **NOT OBSERVED:** Non-zero Saved data, filtered result rows and saved-query persistence.
- **NEEDS VERIFICATION:** Responsive collapse, badges, scroll retention and server synchronization.

## Rules & Accessibility

Use a radiogroup for scopes and buttons with expanded state for filter rows. Aggregate counts do not prove record access.

## Sources

- **OBSERVATION:** Total and Saved Companies states, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-filter-sidebar.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-filter-catalogue-dialog]] and [[apollo-companies-import-menu]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-filter-sidebar.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
