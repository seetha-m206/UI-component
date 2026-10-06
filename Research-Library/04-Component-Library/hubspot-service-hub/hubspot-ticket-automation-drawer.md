---
component: "HubSpot Ticket Automation Drawer"
ui_category: "Actions > Workflow Builder"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Automation Drawer

## Location

- **OBSERVED:** Authenticated Tickets index, inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** Drawer was visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** Automate opened a right-side drawer headed “Automate Tickets” with the description “Automate what happens when a Ticket is created or updated”.
- **OBSERVED:** A primary Automate your workflows control displayed a lock icon. The drawer stated that suggested automations are available at Starter.
- **OBSERVED:** Suggested for you contained disabled cards for notifying a sales team when a new contact is created, setting lead status to New for a new contact, and sending a follow-up email to new contacts.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Automate | Keyboard Space | Opened the automation drawer. |
| Automation CTA and suggestions | Not activated | Upgrade, workflow creation and suggestion outcomes are **NOT OBSERVED**. |
| Tickets route | Reloaded after inspection | Reset the drawer without changing provider data. |

## Behavior & States

- **OBSERVED:** The drawer mixes an entitlement-gated primary action with disabled recommendation cards and explanatory copy.
- **NOT OBSERVED:** Close-button behavior, eligible-plan experience, workflow editor, enabling logic, save and execution states.

## Technical Data

- **OBSERVED / DOM:** Automate is a button. Suggestion cards exposed disabled state.
- **NOT OBSERVED:** Entitlement API, recommendation generation, workflow schema or runtime execution.

## Human Context

- **RECOMMENDATION:** Record the entitlement boundary with the component. Recommendation copy is not evidence that the suggested automation is executable in the current plan.

## AI Context

- **FACT:** The drawer and its disabled suggestions were observed in the authenticated portal.
- **NOT OBSERVED:** No automation was created, enabled or run.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, close behavior, paid-plan controls, workflow editor and execution feedback.

## Sources

- **OBSERVED:** Authenticated HubSpot Tickets index, inspected 2026-10-05.
