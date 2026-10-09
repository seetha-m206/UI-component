---
component: Apollo CSV Enrichment Paywall
ui_category: 'Paywalls > Data Import'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: CSV enrichment gate with an unavailable import action and upgrade route.
---

# Component: Apollo CSV Enrichment Paywall

## Structure

CSV tab → illustrated table → disabled import → upgrade action.

## Behavior & States

- **OBSERVED:** The CSV tab showed an unavailable import state, an upgrade path and a marketing illustration.
- **RECONSTRUCTION:** The illustration is replaced by synthetic rows. Provider sample identities and exact claims are omitted.
- **NOT OBSERVED:** CSV upload, parsing, mapping, enrichment output and billing.
- **NEEDS VERIFICATION:** File validation, row limits, credit charging, plan entitlements and error responses.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-csv-enrichment-paywall.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-crm-enrichment-empty-state]] and [[apollo-data-enrichment-tabs]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-csv-enrichment-paywall.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
