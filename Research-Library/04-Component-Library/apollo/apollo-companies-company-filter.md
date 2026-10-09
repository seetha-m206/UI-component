---
component: Apollo Companies Company Filter
ui_category: 'Filters > Entity Filter'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Company include and exclude filter with domain-known state and list-based constraints.
---

# Component: Apollo Companies Company Filter

## Structure

Include operator → company combobox → exclusion section → Domain exists with known and unknown controls → company-list include or exclude disclosure.

## Behavior & States

- **OBSERVED:** Default operator was Is any of and the combobox placeholder was Enter companies.
- **OBSERVED:** The disclosure was opened and closed without typing or selecting.
- **RECONSTRUCTION:** Preview offers inert controls and no company names.
- **NOT OBSERVED:** Suggestions, tokens, validation, result updates and list contents.
- **NEEDS VERIFICATION:** Multi-select removal, domain logic and server query semantics.

## Sources

- **OBSERVATION:** Authenticated Company filter disclosure, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-company-filter.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-calls-dialer-paywall]] and [[apollo-companies-discovery-empty-state]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-company-filter.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
