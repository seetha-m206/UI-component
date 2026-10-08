---
component: "Freshdesk Omni Preferred Channel Chooser"
ui_category: "Overlays > Setup Modal"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed omnichannel setup chooser with transient Web Chat selection and an unexercised submission boundary."
---

# Freshdesk Omni Preferred Channel Chooser

## Location

- **OBSERVED:** Quick start → Connect support channels.

## Screenshot

- **OBSERVED:** Centered dark modal with six two-column channel cards and a sticky action footer.

## Structure

- **OBSERVED:** Email, Portal, Web Chat, Instagram, WhatsApp and Facebook appeared as icon, label and description cards.
- **OBSERVED:** More channels, Cancel and Get started completed the chooser.

## Actions

- **OBSERVED:** Selecting Web Chat added a blue focus/selection outline.
- **OBSERVED:** Cancel dismissed the chooser and returned to Quick start.
- **NOT OBSERVED:** Get started was not invoked.

## Behavior & States

- **OBSERVED:** Default and Web Chat selected states.
- **RECONSTRUCTION:** Get started is disabled and guarded in the local fixture.

## Technical Data

- **OBSERVED / DOM:** Each channel was exposed as a button. Cancel and Get started were separate footer buttons.
- **NEEDS VERIFICATION:** Selection persistence, created channel objects, APIs, validation and entitlement rules.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni tenant, 2026-10-08.
- **RECONSTRUCTION:** Fictional channel chooser fixture.
