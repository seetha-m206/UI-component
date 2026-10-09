---
component: Apollo AI Assistant Page
ui_category: 'AI > Assistant'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Standalone assistant workspace with context, memory, chat and preset entry points.
---

# Component: Apollo AI Assistant Page

## Structure

Assistant sidebar → new chat → channels → context center → memory → composer → presets → Slack prompt.

## Behavior & States

- **OBSERVED:** The assistant page showed navigation, a composer, attachment and context controls, presets and a Slack connection prompt.
- **RECONSTRUCTION:** Chat history, remaining-use counts and private content are omitted. All execution paths are disabled.
- **NOT OBSERVED:** Prompt submission, AI output, memory contents, attachments and connections.
- **NEEDS VERIFICATION:** Model behavior, credits, retention, permissions, provider writes and error states.

## Accessibility

Semantic headings, labels and disabled action states are reconstructed from the observed hierarchy. Keyboard order, focus management and provider responsive behavior need verification.

## Sources

- **OBSERVATION:** Authenticated, read-only Apollo screen, 2026-10-09.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-ai-assistant-page.png).
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
- **RECONSTRUCTION:** Related records: [[apollo-ai-assistant-onboarding]] and [[apollo-ai-context-review]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-ai-assistant-page.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
