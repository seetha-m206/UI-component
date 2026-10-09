---
component: Apollo Companies Account Location Filter
ui_category: 'Filters > Location Filter'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Headquarters-aware location filter with geography input, exclusion, multiple locations, ZIP radius and location-count controls.
---

# Component: Apollo Companies Account Location Filter

## Structure

Region selector → Headquarters selector → location combobox → Exclude locations → Add location → ZIP radius → number-of-locations disclosure.

## Behavior & States

- **OBSERVED:** Headquarters was the default location type.
- **OBSERVED:** The disclosure was opened and closed without entering geography.
- **RECONSTRUCTION:** Local controls are disabled and contain no provider location data.
- **NOT OBSERVED:** Autocomplete, multiple-location rows, radius units and result updates.
- **NEEDS VERIFICATION:** Validation, international formats and server query semantics.

## Sources

- **OBSERVATION:** Authenticated Account Location disclosure, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-location-filter.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-import-menu]] and [[apollo-companies-saved-empty-state]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-location-filter.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
