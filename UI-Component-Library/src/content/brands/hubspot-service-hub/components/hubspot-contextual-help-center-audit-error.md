---
component: "HubSpot Contextual Help Center — Error Component"
ui_category: "Deep Audit > Error Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed error, unavailable, validation, retry, and failure states for HubSpot Contextual Help Center. Derived from the authored observation record."
parent_workflow: "hubspot-contextual-help-center"
component_level: "error"
---

# HubSpot Contextual Help Center — Error Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Contextual Help Center](./hubspot-contextual-help-center.md).
- **COMPONENT LEVEL:** error.

## Structure

- **OBSERVED:** NOT OBSERVED: Full-screen mode, queries, video playback, support chat, history and empty/error states.

## Actions

- Element | Safe action | Observed result or boundary
- Help | Keyboard Space | Opened the contextual Help Center panel.
- Close | Keyboard Space | Closed the panel and restored the Tickets screen.
- Expand, Academy search, recommendations, Academy home, Ask a question and Start a chat | Not activated | Search, playback, navigation and support outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-contextual-help-center-audit-error.
- **OBSERVED:** Evidence-backed error, unavailable, validation, retry, and failure states for HubSpot Contextual Help Center. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A HubSpot Academy section contained a search field and three contextual recommendations for Tickets | Unassigned tickets: Review and Route Tickets, Resolve Support Tickets and Set Up Your Ticket Pipelines. The first two displayed “a minute” and the third displayed “2 minutes”.
- **OBSERVED:** OBSERVED / DOM: Help content loaded inside the in-app help frame. Academy recommendations loaded inside a nested Academy frame and were exposed as buttons with progress indicators at zero.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Recommendation ranking, search network behavior and support routing.
- **NOT OBSERVED:** NOT OBSERVED: Course contents and chat responses remain outside this record.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-contextual-help-center"
component_level: "error"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
error_message: "NOT OBSERVED: Full-screen mode, queries, video playback, support chat, history and empty/error states."
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-contextual-help-center.
- Reusable level: error.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-contextual-help-center.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
