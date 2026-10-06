---
component: "HubSpot Contextual Help Center"
ui_category: "Feedback > Help Panel"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Contextual Help Center

## Location

- **OBSERVED:** Shared authenticated global toolbar while viewing Unassigned tickets, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** The panel was visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** Help opened a right-side panel headed Help Center with Expand and Close controls.
- **OBSERVED:** A HubSpot Academy section contained a search field and three contextual recommendations for Tickets | Unassigned tickets: Review and Route Tickets, Resolve Support Tickets and Set Up Your Ticket Pipelines. The first two displayed “a minute” and the third displayed “2 minutes”.
- **OBSERVED:** The panel also exposed Go to HubSpot Academy home, a Support section, an Ask a question combobox and Start a chat.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Help | Keyboard Space | Opened the contextual Help Center panel. |
| Close | Keyboard Space | Closed the panel and restored the Tickets screen. |
| Expand, Academy search, recommendations, Academy home, Ask a question and Start a chat | Not activated | Search, playback, navigation and support outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Recommendations were contextual to the current Tickets route. The panel overlays the right side while leaving the Tickets screen visible.
- **NOT OBSERVED:** Full-screen mode, queries, video playback, support chat, history and empty/error states.

## Technical Data

- **OBSERVED / DOM:** Help content loaded inside the in-app help frame. Academy recommendations loaded inside a nested Academy frame and were exposed as buttons with progress indicators at zero.
- **NOT OBSERVED:** Recommendation ranking, search network behavior and support routing.

## Human Context

- **RECOMMENDATION:** Contextual help should name the current screen and keep escalation separate from self-service learning.

## AI Context

- **FACT:** Titles, durations and controls were observed without opening content or contacting support.
- **NOT OBSERVED:** Course contents and chat responses remain outside this record.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, expanded mode, search, recommendation playback, support chat and accessibility focus containment.

## Sources

- **OBSERVED:** Authenticated HubSpot Help Center over Unassigned tickets, inspected 2026-10-06.
