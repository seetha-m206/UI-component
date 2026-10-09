---
component: Apollo AI Assistant Onboarding
ui_category: 'AI Assistance > Guided Assistant Entry'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Right-side AI assistant drawer offering three goal-oriented radio choices and a guarded Continue action.
---

# Component: Apollo AI Assistant Onboarding

## Location

- **Product:** Apollo authenticated shell.
- **Observed trigger:** Header AI Assistant button.

## Structure

Close control → assistant mark → question heading → explanatory copy → three radio-card choices → Continue.

## Behavior & States

- The drawer occupies the right side and narrows the underlying Home content.
- Find ideal prospects was preselected and labelled Popular.
- Other choices were Build your TAM and Create an outbound sequence.
- Continue was available in the provider UI but was not pressed.
- The reconstruction permits local choice changes and always disables Continue.

## Rules & Validation

- Treat Continue as an executable AI path that may create lists, target definitions or sequences.
- Do not submit a goal, prompt, contact criterion or campaign instruction during research.
- Keep downstream generation, enrichment and provider writes explicitly NOT OBSERVED.
- Explain which later artifact each choice may produce before execution.

## Technical Data

- **OBSERVED:** Heading was `What can I do for you today?`.
- **OBSERVED:** Choice descriptions referenced ICPs and lists, companies for a product or service, and an outreach campaign.
- **OBSERVED:** Drawer used a large centered assistant mark and vertically stacked radio cards.
- **NOT OBSERVED:** Continue destination, prompt steps, generated output, credit consumption, persistence, cancellation and errors.
- **NEEDS VERIFICATION:** Whether a choice alone writes state, exact review step, provenance and rollback.

## Accessibility

Goal cards visually resembled radio controls. A reusable version should use a named radio group, keep descriptions connected to labels and announce that Continue may initiate AI-assisted work.

## Sources

- **OBSERVATION:** AI assistant entry drawer opened and dismissed without selection or continuation, 2026-10-09.
- **RECONSTRUCTION:** Local radio choices with AI execution disabled.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-ai-assistant-onboarding.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-activity-notifications-panel]] and [[apollo-ai-assistant-page]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-ai-assistant-onboarding.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
