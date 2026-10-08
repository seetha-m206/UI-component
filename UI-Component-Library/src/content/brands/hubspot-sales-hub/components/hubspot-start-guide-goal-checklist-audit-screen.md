---
component: "HubSpot Start Guide Goal Checklist — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Start Guide Goal Checklist. Derived from the authored observation record."
parent_workflow: "hubspot-start-guide-goal-checklist"
component_level: "screen"
---

# HubSpot Start Guide Goal Checklist — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Start Guide Goal Checklist](./hubspot-start-guide-goal-checklist.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The screen begins with “Start Guide” and a personalized explanation of setup goals.
- **OBSERVED:** OBSERVED: A Your goals header groups Your plan, Integrations and Invite controls.
- **OBSERVED:** OBSERVED: The Generate Leads goal reports `0/2 complete` and a zero-percent progress indicator.
- **OBSERVED:** OBSERVED: The first task is Import your contacts with explanatory copy, a primary Import contacts button, an icon-only More options control and a More steps disclosure.
- **OBSERVED:** OBSERVED: Expanding More steps reveals Draft a form, a Draft form button and another More options control.
- **OBSERVED:** OBSERVED: Suggested for you offers Grow Reach with four steps and Get Found Online with two steps, each with an Add goal action.

## Actions

- Element | Safe action | Observed result
- More steps | Open, then close | Revealed and hid Draft a form without leaving the page.
- Draft form More options | Open, then close | Displayed Skip this step and a Set up manually link.
- Skip this step | Not activated | NEEDS VERIFICATION: It appears consequential because it can alter checklist state.
- Set up manually | Not activated | The rendered link targets the portal’s forms onboarding route.
- Import contacts, Draft form and Add goal | Not activated | Creation, import and goal mutation outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-start-guide-goal-checklist-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Start Guide Goal Checklist. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The first task is Import your contacts with explanatory copy, a primary Import contacts button, an icon-only More options control and a More steps disclosure.
- **OBSERVED:** OBSERVED: Expanding More steps reveals Draft a form, a Draft form button and another More options control.
- **OBSERVED:** OBSERVED / DOM: The More steps button exposed `aria-expanded` through the accessibility tree. The revealed controls were added to the accessible tree only while expanded.
- **OBSERVED:** OBSERVED / DOM: The options menu contained a button for Skip this step and an anchor for Set up manually. The latter resolved to `/forms/343751787/loading-onboarding` with onboarding-referrer query parameters.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: API calls, analytics events, persistence model, server response, validation and focus-return implementation.
- **NOT OBSERVED:** Set up manually | Not activated | The rendered link targets the portal’s forms onboarding route.
- **OBSERVED:** FACT: Labels, progress, accessible states, route and computed styles were captured directly.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-start-guide-goal-checklist"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Onboarding"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-start-guide-goal-checklist.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-start-guide-goal-checklist.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
