---
component: Apollo Forms Overview
ui_category: 'Forms > Product Overview'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Overview cards for enriching existing forms or building a new form.
---

# Component: Apollo Forms Overview

## Structure

Forms heading → enrichment card → builder card → primary actions.

## Behavior & States

- **OBSERVED:** The Forms destination presented form enrichment and form builder paths.
- **RECONSTRUCTION:** The preview uses fictional benefits and disables both entry actions.
- **NOT OBSERVED:** Builder canvas, field configuration, embed code and submissions.
- **NEEDS VERIFICATION:** Publishing, validation, consent handling, enrichment writes and analytics.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-forms-overview.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-emails-mailbox-onboarding]] and [[apollo-global-picklists-plan-gate]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-forms-overview.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
