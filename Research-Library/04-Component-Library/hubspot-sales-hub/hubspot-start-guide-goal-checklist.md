---
component: "HubSpot Start Guide Goal Checklist"
ui_category: "Onboarding > Checklist"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Start Guide Goal Checklist

## Location

- **OBSERVED:** Authenticated Start Guide at `https://app-na3.hubspot.com/start-guide/343751787` on 2026-10-07.

## Screenshot

- **OBSERVED:** Default state: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-start-guide.png`.
- **OBSERVED:** Expanded step and options menu: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-start-guide-expanded-menu.png`.

## Structure

- **OBSERVED:** The screen begins with “Start Guide” and a personalized explanation of setup goals.
- **OBSERVED:** A Your goals header groups Your plan, Integrations and Invite controls.
- **OBSERVED:** The Generate Leads goal reports `0/2 complete` and a zero-percent progress indicator.
- **OBSERVED:** The first task is Import your contacts with explanatory copy, a primary Import contacts button, an icon-only More options control and a More steps disclosure.
- **OBSERVED:** Expanding More steps reveals Draft a form, a Draft form button and another More options control.
- **OBSERVED:** Suggested for you offers Grow Reach with four steps and Get Found Online with two steps, each with an Add goal action.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| More steps | Open, then close | Revealed and hid Draft a form without leaving the page. |
| Draft form More options | Open, then close | Displayed Skip this step and a Set up manually link. |
| Skip this step | Not activated | **NEEDS VERIFICATION:** It appears consequential because it can alter checklist state. |
| Set up manually | Not activated | The rendered link targets the portal’s forms onboarding route. |
| Import contacts, Draft form and Add goal | Not activated | Creation, import and goal mutation outcomes remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** More steps exposes additional tasks inline and updates its accessible expanded state.
- **OBSERVED:** The task options menu is anchored to the task row and uses a pop-up button with expanded/collapsed state.
- **OBSERVED:** Primary actions use pill-shaped buttons. Import contacts was observed with a dark teal background and white text, while secondary controls were white or transparent with dark text.
- **NEEDS VERIFICATION:** Completion animation, persisted progress, skip confirmation, validation, loading, error, empty-goal and finished-goal states.

## Technical Data

- **OBSERVED / DOM:** The More steps button exposed `aria-expanded` through the accessibility tree. The revealed controls were added to the accessible tree only while expanded.
- **OBSERVED / DOM:** The options menu contained a button for Skip this step and an anchor for Set up manually. The latter resolved to `/forms/343751787/loading-onboarding` with onboarding-referrer query parameters.
- **OBSERVED / CSS:** Observed controls used 12-pixel Lexend Deca text and extremely large border-radius values to create pill and circular shapes.
- **NEEDS VERIFICATION:** API calls, analytics events, persistence model, server response, validation and focus-return implementation.

## Human Context

- **RECOMMENDATION:** Reuse the pattern as a progressive onboarding checklist with explicit progress, reversible disclosure and per-task overflow actions. Consequential actions should remain distinct from informational disclosure.

## AI Context

- **FACT:** Labels, progress, accessible states, route and computed styles were captured directly.
- **RECONSTRUCTION:** A local preview may simulate expanding steps and opening the menu, but must not claim provider persistence.
- **NEEDS VERIFICATION:** Skipping, importing, drafting and adding goals were deliberately not executed.

## Sources

- Authenticated HubSpot Start Guide, observed 2026-10-07.
- Local screenshots and DOM/computed-style capture listed above.
