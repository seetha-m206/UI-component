---
component: Apollo Companies Employee Filter
ui_category: 'Filters > Range Filter'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Predefined employee bands with aggregate hints, custom-range mode and unknown-count option.
---

# Component: Apollo Companies Employee Filter

## Structure

Predefined Range and Custom Range modes → employee bands from 1–10 through 10001+ → unknown employee-count option.

## Behavior & States

- **OBSERVED:** Predefined Range was active and every band displayed a live aggregate hint.
- **OBSERVED:** No band, custom mode or unknown option was selected.
- **RECONSTRUCTION:** Preview omits live aggregate counts and offers representative inert bands.
- **NOT OBSERVED:** Custom-range inputs, selection combinations and result updates.
- **NEEDS VERIFICATION:** Range validation, overlapping bands and server query semantics.

## Sources

- **OBSERVATION:** Authenticated Employees disclosure, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-employee-filter.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-discovery-empty-state]] and [[apollo-companies-filter-catalogue-dialog]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-employee-filter.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
