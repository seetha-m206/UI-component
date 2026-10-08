---
component: "HubSpot Inbox First-Channel Empty State — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot Inbox First-Channel Empty State. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-inbox-empty-state"
component_level: "empty"
---

# HubSpot Inbox First-Channel Empty State — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Inbox First-Channel Empty State](./hubspot-inbox-empty-state.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific empty description.

## Actions

- Element | Safe action | Result or boundary
- Inbox More views | Keyboard Space | Revealed Email, Calls, All closed, Sent, Spam and Trash. Control label became Less and `aria-expanded` became true.
- Actions | Keyboard Space | Revealed Manage team availability and Connect a channel.
- Channel cards | Not activated | Connection and configuration outcomes are NOT OBSERVED.
- You're away | Not activated | Availability changes are NOT OBSERVED.
- Inbox Settings | Not activated | Link target was visible. Settings content is NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-inbox-empty-state-audit-empty.
- **RECONSTRUCTION:** Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot Inbox First-Channel Empty State. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
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
component_level: "empty"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
result_count: "0"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-inbox-empty-state.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-inbox-empty-state.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
