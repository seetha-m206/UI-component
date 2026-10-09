---
component: Apollo Application Shell
ui_category: 'Application Layout > Global Application Shell'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Compact dark Apollo shell with icon navigation, global search, credits, AI, notifications, profile, contextual page tools and flyout navigation groups.
---

# Component: Apollo Application Shell

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Apollo authenticated application.
- **Observed screen:** Home at `#/home`.
- **Evidence boundary:** Account identity and provider data stayed session-only. The preview uses fictional identity and values.

## Structure

Forty-six-pixel left icon rail → forty-eight-pixel global header → route content → floating education/help control. The header contains a global search trigger, credit counter, AI assistant, activity and notifications, and profile access. The rail exposes Home, AI Assistant, six flyout groups, Onboarding hub, Email setup and health, and Admin Settings.

## Actions

| Control | Safe state observed | Result |
|---|---|---|
| Global search | Opened and dismissed | Search and AI suggestion palette appeared |
| AI assistant | Opened and dismissed | Right-side onboarding drawer appeared |
| Activity and notifications | Opened, changed tab, closed | Empty Activities and No Notifications states appeared |
| Profile | Opened and dismissed | Account and workspace action menu appeared |
| Rail flyouts | Opened and dismissed | Six named destination groups appeared |

## Behavior & States

- Rail groups are Prospect and enrich, Engage, Win deals, Tools and automation, Inbound, and Saved records.
- The selected Home icon uses a filled rounded background.
- Header utilities stay visible while the content area scrolls.
- Overlays do not replace the underlying route.
- The local fixture makes flyout disclosure reversible and disables navigation.

## Rules & Validation

- Do not expose account initials, email, workspace identifiers, provider object ids or live credit balance in fixtures.
- Keep AI execution, search submission, navigation and account actions disabled until their contracts are verified.
- Every icon requires an accessible name. Several live rail buttons did not expose one in the captured accessibility tree.
- Do not treat opening an overlay as evidence that its final action works.

## Technical Data

- **OBSERVED:** Document title was `Home - Apollo` and route class was `#/home`.
- **OBSERVED:** The search trigger used a 32 px height, 8 px radius and 12 px computed font.
- **OBSERVED:** The selected Home rail control measured 28 by 28 px with an 8 px radius.
- **OBSERVED:** The static Home DOM contained 39 buttons, 9 links, 2 dialog containers and 1 progressbar.
- **OBSERVED:** No console warning or error was captured during the bounded Home pass.
- **NOT OBSERVED:** Request classes because the read-only browser scope did not expose the performance timing API.
- **NEEDS VERIFICATION:** Focus management, overlay stacking, responsive rail behavior, keyboard-only navigation and destination entitlements.

## Accessibility

The global search, Home, AI Assistant, notifications, profile and layout controls exposed useful names. Several rail group buttons were icon-only in the accessibility tree. A reusable shell should give every group an `aria-label`, return focus to its trigger after dismissal and expose the active route with `aria-current`.

## Best Observed Approach

Use a narrow persistent rail for frequent cross-product destinations, keep global utilities in a single compact header, and reveal grouped destinations only when needed.

## Sources

- **OBSERVATION:** Authenticated Apollo Home inspection, 2026-10-09.
- **OBSERVATION:** Accessibility tree, bounded semantic DOM and computed-style capture.
- **RECONSTRUCTION:** Fictional local React shell. No Apollo navigation or write is available.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-application-shell.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-analytics-overview]] and [[apollo-billing-empty-state]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-application-shell.html).
