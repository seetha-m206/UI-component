---
component: Apollo Companies Search Settings Drawer
ui_category: 'Search > Settings Drawer'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Right-side drawer summarizing fields, applied filters, visibility and subscriptions for a company search.
---

# Component: Apollo Companies Search Settings Drawer

## Structure

Search settings title and Close → Fields count → Applied filters count → Visibility and sharing → Subscription and alerts.

## Behavior & States

- **OBSERVED:** The untouched system view showed nine fields, zero filters, Everyone visibility and no subscription.
- **OBSERVED:** The drawer was opened and closed without selecting a row.
- **RECONSTRUCTION:** Preview values are fictional and controls are disabled.
- **NOT OBSERVED:** Field editing, sharing changes, subscription creation or persistence.
- **NEEDS VERIFICATION:** Nested panels, role permissions and notification behavior.

## Sources

- **OBSERVATION:** Authenticated Companies Search settings drawer, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-companies-search-settings-drawer.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-companies-saved-search-selector]] and [[apollo-companies-website-visitors-prompt]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-companies-search-settings-drawer.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
