---
component: Apollo Email Health Overview
ui_category: 'Deliverability > Overview'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Deliverability dashboard with mailbox context, zero metrics and recommendations.
---

# Component: Apollo Email Health Overview

## Structure

Overview tab → add and mailbox controls → metric cards → delivery, inbox and reply regions → recommendations.

## Behavior & States

- **OBSERVED:** The overview showed zero delivery metrics, mailbox controls and no actionable recommendations.
- **RECONSTRUCTION:** Mailboxes and metrics are fictional. Add and manage actions are disabled.
- **NOT OBSERVED:** Linked mailbox health, populated charts and completed recommendations.
- **NEEDS VERIFICATION:** Metric definitions, sync timing, permissions and provider remediation.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-email-health-overview.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-email-domains-empty-state]] and [[apollo-email-mailboxes-empty-table]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-email-health-overview.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
