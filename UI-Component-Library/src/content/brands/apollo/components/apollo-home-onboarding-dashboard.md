---
component: Apollo Home Onboarding Dashboard
ui_category: 'Application Layout > Onboarding Dashboard'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Getting started dashboard with a time-bound credit message, progress bar, four mission groups and three learning-resource cards.
---

# Component: Apollo Home Onboarding Dashboard

## Location

- **Product:** Apollo authenticated Home.
- **Observed screen:** Getting started layout at `#/home`.
- **Evidence boundary:** Live account progress and credits are not retained. The preview uses synthetic values.

## Structure

Page title and layout picker → first-14-days explanation → progress bar → four mission cards → Academy, webinar and help-document resource cards.

## Behavior & States

- Four missions independently expand and collapse.
- Each mission shows reward, purpose and completion fraction before expansion.
- The first mission contains six prospecting tasks. Later missions contain three, three and two tasks.
- Resource cards remain below the mission stack.
- The reconstruction limits content to fictional examples and disables every provider destination.

## Rules & Validation

- Show the progress state separately from the count on each mission.
- Keep incomplete, dependency-disabled and available actions visually distinct.
- Do not imply that onboarding completion proves configuration, entitlement or outreach readiness.
- Keep credit rewards contextual rather than representing them as cash value.

## Technical Data

- **OBSERVED:** Heading copy was `Get started with Apollo`.
- **OBSERVED:** The screen explained that tasks in the first 14 days could earn up to 700 credits.
- **OBSERVED:** Mission headings were Start reaching the right prospects, Get your inbox ready to send, Scale your outreach, and Turn activity into meetings.
- **OBSERVED:** A named progressbar was present.
- **OBSERVED:** Resource destinations were Apollo Academy, webinars and help docs.
- **NOT OBSERVED:** Completion persistence, credit award timing, expired onboarding state, fully completed state and server validation.
- **NEEDS VERIFICATION:** Zero-day, post-14-day, partial-completion, error and mobile states.

## Accessibility

Mission headers were buttons with expanded state. The progressbar had an accessible Progress name. Task images described completion status. A reusable version should include an explicit numeric progress value for assistive technology.

## Best Observed Approach

Combine a small number of outcome-oriented missions with visible dependencies and immediate next actions, while preserving a separate learning-resource layer.

## Sources

- **OBSERVATION:** Authenticated Apollo Home dashboard, 2026-10-09.
- **RECONSTRUCTION:** Fictional mission data and local-only accordion behavior.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-home-onboarding-dashboard.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-goals-plan-gate]] and [[apollo-imports-exports-hub]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-home-onboarding-dashboard.html).
