---
component: Apollo Companies Discovery Empty State
ui_category: 'Search > Assisted Discovery'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Company discovery workspace with global actions, natural-language prompt, quick filters and advanced-filter entitlement callout.
---

# Component: Apollo Companies Discovery Empty State

## Structure

Page title and Import menu → saved-view selector → filter visibility → company search → Research with AI → Create workflow → Save as new search → Auto-Score → Search settings → discovery prompt and quick filters.

## Behavior & States

- **OBSERVED:** The untouched Total scope displayed a natural-language prompt instead of a company table.
- **OBSERVED:** Quick filters covered locations, employee count and industry.
- **RECONSTRUCTION:** Preview counts, prompt copy and company content are fictional.
- **NOT OBSERVED:** Search results, loading, pagination, row selection and company records.
- **NEEDS VERIFICATION:** Query execution, result ranking, entitlements and server validation.

## Rules & Accessibility

The heading, text search and action hierarchy should remain distinct. The observed page repeated one console warning that an element lacked `aria-label` or `aria-labelledby`. The exact source element was not identified.

## Sources

- **OBSERVATION:** Authenticated Companies default state, 2026-10-09.
- **RECONSTRUCTION:** Fictional counts and inert local controls.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-discovery-empty-state.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-company-filter]] and [[apollo-companies-employee-filter]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-discovery-empty-state.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
