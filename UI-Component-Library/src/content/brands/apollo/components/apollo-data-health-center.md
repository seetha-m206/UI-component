---
component: Apollo Data Health Center
ui_category: 'Data Enrichment > Overview'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Enrichment onboarding hub with CRM and saved-contact entry points.
---

# Component: Apollo Data Health Center

## Structure

Data enrichment header → tab strip → scheduled jobs and automation actions → CRM onboarding → benefit cards.

## Behavior & States

- **OBSERVED:** The Data health center tab showed zero scheduled jobs, CRM and saved-contact entry points, and three benefit cards.
- **RECONSTRUCTION:** The preview uses fictional zero-state metrics and inert cards.
- **NOT OBSERVED:** Connected CRM data, scheduled job results and enrichment activity.
- **NEEDS VERIFICATION:** Connection entitlements, job lifecycle, credit use and provider writes.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-data-health-center.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-data-enrichment-tabs]] and [[apollo-data-request-navigation]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-data-health-center.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
