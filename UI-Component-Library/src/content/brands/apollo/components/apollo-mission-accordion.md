---
component: Apollo Mission Accordion
ui_category: 'Cards > Expandable Progress Card'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: complete
summary: Independently expandable mission card with reward badge, outcome description, task count and dependency-aware rows.
---

# Component: Apollo Mission Accordion

## Location

- **Product:** Apollo authenticated Home.
- **Observed screen:** Getting started mission stack.

## Structure

Clickable header → title → reward pill → short outcome description → completed fraction → chevron → task rows.

## Behavior & States

- Each card can remain open while another card opens. This is a multi-disclosure stack, not a one-open accordion.
- Collapsed cards retain their reward, purpose and completion fraction.
- Expanded cards reveal two to six rows.
- The local fixture reproduces independent expansion only. Task actions stay disabled.

## Rules & Validation

- Use `aria-expanded` on every header.
- Do not hide completion context when collapsed.
- Preserve a consistent row grid across missions with different action availability.
- Do not auto-start an action when expanding a mission.

## Technical Data

- **OBSERVED:** All four mission cards could be expanded at the same time.
- **OBSERVED:** Reward badges showed 300, 150, 150 and 100 credits respectively.
- **OBSERVED:** Fractions were 0 of 6, 0 of 3, 0 of 3 and 0 of 2 completed in the observed account state.
- **NOT OBSERVED:** Non-zero progress, completed mission styling, reward collection, error and persistence behavior.
- **NEEDS VERIFICATION:** Whether expansion state persists across reload or devices.

## Accessibility

Live headers exposed button and expanded/collapsed semantics. The reward and description remained part of each button name, which preserves context but creates long accessible names.

## Sources

- **OBSERVATION:** Four live mission disclosure states, 2026-10-09.
- **RECONSTRUCTION:** Local multi-open disclosure stack with no provider actions.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-mission-accordion.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-meetings-calendar-onboarding]] and [[apollo-onboarding-task-row]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-mission-accordion.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
