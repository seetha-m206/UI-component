---
component: "HubSpot Inbox First-Channel Empty State — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed local interaction transitions and state changes for HubSpot Inbox First-Channel Empty State. Derived from the authored observation record."
parent_workflow: "hubspot-inbox-empty-state"
component_level: "interaction"
---

# HubSpot Inbox First-Channel Empty State — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Inbox First-Channel Empty State](./hubspot-inbox-empty-state.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **OBSERVED:** Element | Safe action | Result or boundary
- **OBSERVED:** Inbox More views | Keyboard Space | Revealed Email, Calls, All closed, Sent, Spam and Trash. Control label became Less and `aria-expanded` became true.
- **OBSERVED:** Actions | Keyboard Space | Revealed Manage team availability and Connect a channel.
- **OBSERVED:** Channel cards | Not activated | Connection and configuration outcomes are NOT OBSERVED.
- **OBSERVED:** You're away | Not activated | Availability changes are NOT OBSERVED.
- **OBSERVED:** Inbox Settings | Not activated | Link target was visible. Settings content is NOT OBSERVED.
- **OBSERVED:** OBSERVED: Unassigned, Assigned to me and All open displayed 0. Expanded More showed Email, Calls and Spam with 0. The first-channel invitation occupied the main panel because no channel was configured in this view.
- **OBSERVED:** OBSERVED: The WhatsApp and Calling cards were labelled locked in the rendered accessibility tree. The promotion offered Upgrade and Do this later.
- **OBSERVED:** NOT OBSERVED: Channel wizard steps, connection validation, message rows, composer, assignment, reply, notification and alert dismissal persistence.

## Actions

- Element | Safe action | Result or boundary
- Inbox More views | Keyboard Space | Revealed Email, Calls, All closed, Sent, Spam and Trash. Control label became Less and `aria-expanded` became true.
- Actions | Keyboard Space | Revealed Manage team availability and Connect a channel.
- Channel cards | Not activated | Connection and configuration outcomes are NOT OBSERVED.
- You're away | Not activated | Availability changes are NOT OBSERVED.
- Inbox Settings | Not activated | Link target was visible. Settings content is NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-inbox-empty-state-audit-interaction.
- **OBSERVED:** Evidence-backed local interaction transitions and state changes for HubSpot Inbox First-Channel Empty State. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A secondary left column contains Inbox, availability indicator, Unassigned, Assigned to me and All open views, expandable More views, Actions and Inbox Settings. The main panel displayed the heading “Say hello.” with an instruction to connect a first channel.
- **OBSERVED:** OBSERVED: Six channel cards were visible: Team email, Chat, Forms, Facebook Messenger, WhatsApp and Calling. WhatsApp and Calling had locked markers. A blue informational banner said the Inbox sidebar had been updated. A WhatsApp upgrade promotion appeared as a separate callout.
- **OBSERVED:** OBSERVED / DOM: The view uses buttons for navigation and disclosure, a link for Inbox Settings, an alert for the sidebar notice, and checkbox roles for channel cards. The More disclosure exposed `aria-expanded=false` before Space and `true` afterward.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Network calls, private event handlers, data model and CSS token values.
- **NOT OBSERVED:** Inbox Settings | Not activated | Link target was visible. Settings content is NOT OBSERVED.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-inbox-empty-state"
component_level: "interaction"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
interaction_result: "local guard"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-inbox-empty-state.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-inbox-empty-state.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
