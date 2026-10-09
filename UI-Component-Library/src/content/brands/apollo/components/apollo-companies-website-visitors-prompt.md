---
component: Apollo Companies Website Visitors Prompt
ui_category: 'Filters > Connection Prompt'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Empty filter disclosure prompting website connection before visitor-based company filtering becomes available.
---

# Component: Apollo Companies Website Visitors Prompt

## Structure

Illustration → value proposition → explanation → Connect website action.

## Behavior & States

- **OBSERVED:** The disclosure explained that connection enables identification and prioritization of visiting companies.
- **OBSERVED:** Connect website was not selected.
- **RECONSTRUCTION:** Local action is disabled and copy is shortened.
- **NOT OBSERVED:** Connection setup, tracking script, consent, visitor data and filters.
- **NEEDS VERIFICATION:** Permissions, privacy controls, installation, data latency and provider writes.

## Sources

- **OBSERVATION:** Authenticated Website Visitors disclosure, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-website-visitors-prompt.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-search-settings-drawer]] and [[apollo-contact-stage-settings]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-website-visitors-prompt.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
