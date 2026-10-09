---
component: Apollo Sending Policies Settings
ui_category: 'Deliverability > Policies'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Sending protection settings for catch-all handling, allowlists and bounce risk.
---

# Component: Apollo Sending Policies Settings

## Structure

Sending policies tab → catch-all policy → allowlist → Bounce Guard → summary metrics → Save changes.

## Behavior & States

- **OBSERVED:** The screen showed active protection sections, an empty allowlist and a disabled save state.
- **RECONSTRUCTION:** Thresholds and current account values are replaced with synthetic settings.
- **NOT OBSERVED:** Editing thresholds, toggles, allowlist entries and save outcome.
- **NEEDS VERIFICATION:** Validation, permissions, persistence, sequence pauses and warnings.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-sending-policies-settings.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-scoring-models]] and [[apollo-sequence-alert-thresholds]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-sending-policies-settings.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
