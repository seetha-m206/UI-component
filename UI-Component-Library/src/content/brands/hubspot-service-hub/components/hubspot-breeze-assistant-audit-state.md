---
component: "HubSpot Breeze Assistant Panel — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Breeze Assistant Panel. Derived from the authored observation record."
parent_workflow: "hubspot-breeze-assistant"
component_level: "state"
---

# HubSpot Breeze Assistant Panel — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Breeze Assistant Panel](./hubspot-breeze-assistant.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The assistant is route-aware because its suggested actions referenced tickets and filters. Send was disabled while the composer was empty.
- **OBSERVED:** NOT OBSERVED: Prompt submission, generated content, tool execution, memories, artifacts, chats, voice input and error states.

## Actions

- Element | Safe action | Observed result or boundary
- Open Breeze Assistant | Keyboard Space | Opened the assistant and reduced the available width for Tickets.
- Close Assistant | Keyboard Space | Closed the assistant and restored the full Tickets workspace.
- Suggestions, shortcuts, tools, dictation, composer and navigation | Not activated | No prompt, message, tool, recording or artifact was created. Outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-breeze-assistant-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Breeze Assistant Panel. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Four shortcut cards were labelled Summarize, Create, How do I and Meetings. The composer showed “Ask Breeze Assistant or @ mention”, an Open tools menu, Start dictation and a disabled Send message. A notice stated that AI-generated content may be inaccurate.
- **OBSERVED:** OBSERVED / DOM: The assistant loaded in its own widget frame. Navigation and suggestions were buttons. The composer exposed a tools popup, dictation button and disabled send button.

### Network / API

- **OBSERVED:** OBSERVED / DOM: The assistant loaded in its own widget frame. Navigation and suggestions were buttons. The composer exposed a tools popup, dictation button and disabled send button.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-breeze-assistant"
component_level: "state"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
selected_state: "documented"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-breeze-assistant.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-breeze-assistant.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
