---
component: Apollo Activity and Notifications Panel
ui_category: 'Feedback > Activity and Notification Panel'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Header-anchored panel with Activities and Notifications tabs, refresh and close controls, blank activity state and explicit no-notifications state.
---

# Component: Apollo Activity and Notifications Panel

## Location

- **Product:** Apollo authenticated shell.
- **Observed trigger:** Header button named Activity & notifications.

## Structure

Activities and Notifications tabs → optional Refresh control on Activities → Close control → content region.

## Behavior & States

- Activities opened selected and displayed an empty content region in the observed account state.
- Notifications switched locally within the panel and displayed `No Notifications`.
- The Refresh control was visible in Activities but was not pressed.
- Close dismissed the panel.
- No notification was opened, marked read or changed.

## Rules & Validation

- Distinguish a truly empty activity surface from a loading or failed state.
- Do not call an empty blank region successful data retrieval without request evidence.
- Keep refresh, read state and notification navigation disabled in reconstructions.
- Opening the panel must not be recorded as evidence that notifications were marked read.

## Technical Data

- **OBSERVED:** The panel used dialog semantics.
- **OBSERVED:** Tabs were Activities and Notifications.
- **OBSERVED:** Activities exposed Refresh and Close. Notifications exposed Close and No Notifications.
- **NOT OBSERVED:** Loading, activity rows, notification rows, unread badges, read persistence, refresh request and errors.
- **NEEDS VERIFICATION:** Polling, pagination, retention, mark-as-read rules and focus return.

## Accessibility

Tabs exposed selected state. Refresh and Close had accessible names. The blank Activities region needs a named empty-state message rather than visual emptiness alone.

## Sources

- **OBSERVATION:** Activities and Notifications panel states, 2026-10-09.
- **RECONSTRUCTION:** Local tabs with refresh and notification actions disabled.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-activity-notifications-panel.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-account-stage-settings]] and [[apollo-ai-assistant-onboarding]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-activity-notifications-panel.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
