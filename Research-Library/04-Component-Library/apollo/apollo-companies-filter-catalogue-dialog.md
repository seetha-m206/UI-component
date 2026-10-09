---
component: Apollo Companies Filter Catalogue Dialog
ui_category: 'Filters > Catalogue Dialog'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Searchable catalogue of pinned and available company filters grouped by company, engagement, source and miscellaneous categories.
---

# Component: Apollo Companies Filter Catalogue Dialog

## Structure

Title and Close → Search filters → Type selector → Apply Filters → pinned filters → Company Info → Engagement Activity → Created Source → Miscellaneous.

## Behavior & States

- **OBSERVED:** Pinned filters matched the sidebar and offered unpin controls.
- **OBSERVED:** Additional filters offered pin controls, while several premium filters displayed a lock.
- **OBSERVED:** The dialog was opened and closed without searching, pinning or applying.
- **RECONSTRUCTION:** The local catalogue is a bounded text representation with disabled actions.
- **NOT OBSERVED:** Filter search results, type changes, pin persistence and Apply behavior.
- **NEEDS VERIFICATION:** Keyboard focus trap, focus return, scrolling and permissions.

## Sources

- **OBSERVATION:** Authenticated Companies Filters dialog, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-filter-catalogue-dialog.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-employee-filter]] and [[apollo-companies-filter-sidebar]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-filter-catalogue-dialog.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
