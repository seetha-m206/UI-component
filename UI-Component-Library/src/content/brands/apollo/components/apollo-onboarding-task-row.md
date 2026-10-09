---
component: Apollo Onboarding Task Row
ui_category: 'Cards > Guided Task Row'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Guided task row with completion marker, outcome-oriented copy and a primary, secondary or dependency-disabled action.
---

# Component: Apollo Onboarding Task Row

## Location

- **Product:** Apollo authenticated Home.
- **Observed screen:** Expanded onboarding missions.

## Structure

Completion indicator → task description → right-aligned action button. Rows are separated by a subtle divider and keep the same height within each mission card.

## Behavior & States

- Available next actions use either a bright primary or dark secondary button.
- Dependency-blocked tasks retain their copy and show a disabled action.
- The observed state used an empty square indicator and accessible image description `not completed`.
- The preview includes available, incomplete and dependency-disabled examples but executes none.

## Rules & Validation

- Disabled actions must explain their prerequisite in adjacent copy or an accessible description.
- Never use a checked visual for an unverified provider outcome.
- Keep AI, inbox connection, outreach launch, scheduling, extension install and object creation disabled in reconstructions.
- Treat completion as provider state, not as a local visual toggle.

## Technical Data

- **OBSERVED:** Examples included Save a prospect, Find numbers, Create a list, Save a company, Set up alert, Install extension, Connect inbox, Start warmup, Start setup, Start with AI, Add contacts, Go to Sequence, Set up scheduling and Set up Conversations.
- **OBSERVED:** Start warmup, Add contacts and Go to Sequence were disabled because earlier steps were incomplete.
- **NOT OBSERVED:** Clicking any action, task completion, loading, success, failure, credit award or rollback.
- **NEEDS VERIFICATION:** Button permission logic, prerequisite resolution and persistence.

## Accessibility

Rows exposed task and action copy in button names. A reusable version should add explicit text for why dependency-disabled controls are unavailable.

## Sources

- **OBSERVATION:** Expanded Apollo onboarding mission rows, 2026-10-09.
- **RECONSTRUCTION:** Fictional local task examples with all consequential actions disabled.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-onboarding-task-row.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-mission-accordion]] and [[apollo-people-discovery-empty-state]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-onboarding-task-row.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
