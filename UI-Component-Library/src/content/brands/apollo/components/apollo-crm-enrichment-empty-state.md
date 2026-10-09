---
component: Apollo CRM Enrichment Empty State
ui_category: 'Empty States > Integrations'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: CRM enrichment onboarding with Salesforce and HubSpot connection actions.
---

# Component: Apollo CRM Enrichment Empty State

## Structure

CRM tab → connection empty state → Salesforce action → HubSpot action → benefit cards.

## Behavior & States

- **OBSERVED:** The CRM tab showed an empty connection state with Salesforce and HubSpot actions.
- **RECONSTRUCTION:** All providers and records are fictional and connection actions are disabled.
- **NOT OBSERVED:** Connected CRM records, mapping, sync or enrichment results.
- **NEEDS VERIFICATION:** OAuth flow, permissions, sync direction, persistence and error handling.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-crm-enrichment-empty-state.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-credit-usage-dashboard]] and [[apollo-csv-enrichment-paywall]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-crm-enrichment-empty-state.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
