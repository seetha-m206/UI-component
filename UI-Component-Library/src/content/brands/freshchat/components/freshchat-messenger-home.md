---
component: "Freshchat Messenger Home"
ui_category: "Messaging > Customer Widget"
source_product: "Freshchat"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed embedded Freshchat home with message entry cards, FAQ shortcuts and provider attribution."
---

# Freshchat Messenger Home

## Location

- **OBSERVED:** Floating chat launcher embedded in Freshdesk Omni.

## Structure

- **OBSERVED:** Branded header, close control, Message Us section, two conversation-entry cards, FAQs section, three category shortcuts, show-more control and Powered by Freshchat attribution.

## Actions

- **OBSERVED:** Open and close widget actions.
- **OBSERVED:** FAQ search navigation stayed inside the widget.
- **NOT OBSERVED:** Conversation entry cards were not opened and no message was sent.

## Behavior & States

- **OBSERVED:** Closed launcher and open home states.
- **RECONSTRUCTION:** Message-entry controls only display a local safety notice.

## Technical Data

- **OBSERVED / DOM:** The widget ran in a nested `wchat.freshchat.com` frame with accessible links, headings and buttons.
- **NEEDS VERIFICATION:** Conversation creation, identity handoff, delivery, agent routing, notifications and persistence.

## Sources

- **OBSERVED:** Embedded Freshchat widget, 2026-10-08.
- **RECONSTRUCTION:** Fictional help topics and disabled messaging actions.
