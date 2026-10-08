---
component: "HubSpot Breeze Assistant Panel — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-breeze-assistant"
component_level: "atomic"
---

# HubSpot Breeze Assistant Panel — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Breeze Assistant Panel](./hubspot-breeze-assistant.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Breeze opened a left-side panel with navigation for New chat, Chats, Artifacts, Projects, Memories and Prompts. Recents displayed No chats.
- **OBSERVED:** OBSERVED: The main panel greeted the signed-in user and offered contextual suggestions: Find my missing tickets, Check my ticket filters and Refresh my ticket board.
- **OBSERVED:** OBSERVED: Four shortcut cards were labelled Summarize, Create, How do I and Meetings. The composer showed “Ask Breeze Assistant or @ mention”, an Open tools menu, Start dictation and a disabled Send message. A notice stated that AI-generated content may be inaccurate.
- **OBSERVED:** OBSERVED / DOM: The assistant loaded in its own widget frame. Navigation and suggestions were buttons. The composer exposed a tools popup, dictation button and disabled send button.
- **OBSERVED:** NOT OBSERVED: Model selection, prompt transport, retention, tool contracts and streaming behavior.

## Actions

- Element | Safe action | Observed result or boundary
- Open Breeze Assistant | Keyboard Space | Opened the assistant and reduced the available width for Tickets.
- Close Assistant | Keyboard Space | Closed the assistant and restored the full Tickets workspace.
- Suggestions, shortcuts, tools, dictation, composer and navigation | Not activated | No prompt, message, tool, recording or artifact was created. Outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-breeze-assistant-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Breeze Assistant Panel. Derived from the authored observation record.
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
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "5"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-breeze-assistant.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-breeze-assistant.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
