---
component: 'Gorgias Chat Channel Empty State'
ui_category: 'Messaging > Channel Setup Empty State'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Chat-channel explanation and no-integration state with a guarded New chat action.'
---

# Component: Gorgias Chat Channel Empty State

## Location

- **OBSERVATION:** Settings > Channels > Chat at `/app/settings/channels/gorgias_chat`.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-chat-channel-empty.png)

## Structure

- **OBSERVATION:** Header combines Chat title and New chat action.
- **OBSERVATION:** Explanatory copy connects website-widget conversations to helpdesk tickets.
- **OBSERVATION:** The account displayed no integration of this type.

## Actions

| Action | Result or boundary |
| --- | --- |
| New chat | Visible only. No channel setup was started |
| Navigate to another channel | Not required for this state |

## Behavior & States

- **RECONSTRUCTION:** New chat produces a local `No chat channel was created` status.
- **NOT OBSERVED:** Setup steps, embed code, widget customization, publishing and inbound conversation behavior.

## Technical Data

- **OBSERVATION / DOM:** The empty state and New chat button appeared in the persistent Settings shell.

## Evidence Boundary

- **NOT OBSERVED:** No channel, widget or integration was created or changed.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
