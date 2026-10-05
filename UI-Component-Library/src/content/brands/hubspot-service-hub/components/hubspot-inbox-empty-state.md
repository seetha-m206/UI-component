---
component: "HubSpot Inbox First-Channel Empty State"
ui_category: "Feedback > First-Run Empty State"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "partial"
summary: "First-channel Inbox state with zero-count views, channel cards, access markers, and sidebar notice."
---

# HubSpot Inbox First-Channel Empty State

## Location

- **OBSERVED:** Authenticated [Inbox](https://app-na3.hubspot.com/live-messages/343751787/inbox) on 2026-10-05. The portal showed zero conversations in the visible view counters.

## Screenshot

- **NEEDS VERIFICATION:** Visually inspected in the in-app browser. No source screenshot was archived.

## Structure

- **OBSERVED:** A secondary left column contains Inbox, availability indicator, Unassigned, Assigned to me and All open views, expandable More views, Actions and Inbox Settings. The main panel displayed the heading “Say hello.” with an instruction to connect a first channel.
- **OBSERVED:** Six channel cards were visible: Team email, Chat, Forms, Facebook Messenger, WhatsApp and Calling. WhatsApp and Calling had locked markers. A blue informational banner said the Inbox sidebar had been updated. A WhatsApp upgrade promotion appeared as a separate callout.

## Actions

| Element | Safe action | Result or boundary |
| --- | --- | --- |
| Inbox More views | Keyboard Space | Revealed Email, Calls, All closed, Sent, Spam and Trash. Control label became Less and `aria-expanded` became true. |
| Actions | Keyboard Space | Revealed Manage team availability and Connect a channel. |
| Channel cards | Not activated | Connection and configuration outcomes are **NOT OBSERVED**. |
| You're away | Not activated | Availability changes are **NOT OBSERVED**. |
| Inbox Settings | Not activated | Link target was visible. Settings content is **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Unassigned, Assigned to me and All open displayed 0. Expanded More showed Email, Calls and Spam with 0. The first-channel invitation occupied the main panel because no channel was configured in this view.
- **OBSERVED:** The WhatsApp and Calling cards were labelled locked in the rendered accessibility tree. The promotion offered Upgrade and Do this later.
- **NOT OBSERVED:** Channel wizard steps, connection validation, message rows, composer, assignment, reply, notification and alert dismissal persistence.

## Rules & Validation

- **NOT OBSERVED:** No channel connection, external account authorization, message send or settings change was attempted. Do not infer provider validation or persistence from these cards.

## Technical Data

- **OBSERVED / DOM:** The view uses buttons for navigation and disclosure, a link for Inbox Settings, an alert for the sidebar notice, and checkbox roles for channel cards. The More disclosure exposed `aria-expanded=false` before Space and `true` afterward.
- **NOT OBSERVED:** Network calls, private event handlers, data model and CSS token values.

## Human Context

- **RECOMMENDATION:** Reuse the split layout, zero-count view menu, and channel choice cards as distinct component patterns. Keep locked choices visibly separate from setup-ready choices.

## AI Context

- **FACT:** This was the accessible Inbox, not the paid Help Desk workspace.
- **NOT OBSERVED:** The card descriptions are provider copy, not proof that a channel can be connected with this account.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, individual channel flows, populated conversation state, confirmation and error states, accessibility beyond observed roles.

## Sources

- **OBSERVED:** Authenticated [Inbox](https://app-na3.hubspot.com/live-messages/343751787/inbox), inspected 2026-10-05.
