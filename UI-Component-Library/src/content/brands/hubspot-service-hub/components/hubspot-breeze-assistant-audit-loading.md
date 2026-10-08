---
component: "HubSpot Breeze Assistant Panel — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot Breeze Assistant Panel. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-breeze-assistant"
component_level: "loading"
---

# HubSpot Breeze Assistant Panel — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Breeze Assistant Panel](./hubspot-breeze-assistant.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result or boundary
- Open Breeze Assistant | Keyboard Space | Opened the assistant and reduced the available width for Tickets.
- Close Assistant | Keyboard Space | Closed the assistant and restored the full Tickets workspace.
- Suggestions, shortcuts, tools, dictation, composer and navigation | Not activated | No prompt, message, tool, recording or artifact was created. Outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-breeze-assistant-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Breeze Assistant Panel. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
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
component_level: "loading"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
progress: "synthetic pending state"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-breeze-assistant.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-breeze-assistant.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
