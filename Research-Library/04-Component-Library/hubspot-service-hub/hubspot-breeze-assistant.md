---
component: "HubSpot Breeze Assistant Panel"
ui_category: "AI > Assistant Panel"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Breeze Assistant Panel

## Location

- **OBSERVED:** Shared authenticated toolbar over Unassigned tickets, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** The panel was visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** Breeze opened a left-side panel with navigation for New chat, Chats, Artifacts, Projects, Memories and Prompts. Recents displayed No chats.
- **OBSERVED:** The main panel greeted the signed-in user and offered contextual suggestions: Find my missing tickets, Check my ticket filters and Refresh my ticket board.
- **OBSERVED:** Four shortcut cards were labelled Summarize, Create, How do I and Meetings. The composer showed “Ask Breeze Assistant or @ mention”, an Open tools menu, Start dictation and a disabled Send message. A notice stated that AI-generated content may be inaccurate.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Open Breeze Assistant | Keyboard Space | Opened the assistant and reduced the available width for Tickets. |
| Close Assistant | Keyboard Space | Closed the assistant and restored the full Tickets workspace. |
| Suggestions, shortcuts, tools, dictation, composer and navigation | Not activated | No prompt, message, tool, recording or artifact was created. Outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The assistant is route-aware because its suggested actions referenced tickets and filters. Send was disabled while the composer was empty.
- **NOT OBSERVED:** Prompt submission, generated content, tool execution, memories, artifacts, chats, voice input and error states.

## Technical Data

- **OBSERVED / DOM:** The assistant loaded in its own widget frame. Navigation and suggestions were buttons. The composer exposed a tools popup, dictation button and disabled send button.
- **NOT OBSERVED:** Model selection, prompt transport, retention, tool contracts and streaming behavior.

## Human Context

- **RECOMMENDATION:** Keep contextual suggestions distinct from the composer and display the accuracy limitation beside the input.

## AI Context

- **FACT:** The empty assistant state and control labels were observed without sending data.
- **NOT OBSERVED:** No claim is made about answer quality, execution success or persistence.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, empty-to-typed state, provider-approved fictional prompt, response streaming, tool menu, voice behavior and focus management.

## Sources

- **OBSERVED:** Authenticated HubSpot Breeze Assistant over Unassigned tickets, inspected 2026-10-06.
