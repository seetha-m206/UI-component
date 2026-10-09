---
component: Apollo Analytics Overview
ui_category: 'Analytics > Overview'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Analytics hub with dashboard, report and goal creation shortcuts.
---

# Component: Apollo Analytics Overview

## Structure

Overview tab → create menu → shortcuts → recent Dashboards, Reports and Goals → advanced analytics gate.

## Behavior & States

- **OBSERVED:** The Analytics hub showed creation shortcuts, recent-content tabs and an advanced analytics upsell.
- **RECONSTRUCTION:** Recent names and all data are synthetic. Private dashboard names are omitted.
- **NOT OBSERVED:** Opening dashboards, creating reports or goals, starring and upgrade.
- **NEEDS VERIFICATION:** Permissions, persistence, queries, exports and plan entitlements.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-analytics-overview.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-ai-word-usage-empty-state]] and [[apollo-application-shell]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-analytics-overview.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
