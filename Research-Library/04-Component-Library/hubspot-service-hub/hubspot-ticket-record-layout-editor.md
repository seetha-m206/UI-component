---
component: "HubSpot Ticket Record Layout Editor"
ui_category: "Account / Settings > Record Layout Editor"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Record Layout Editor

## Location

- **OBSERVED:** Default Ticket record page editor, inspected 2026-10-06.

## Structure

- **OBSERVED:** The editor header showed Exit, disabled Undo and Redo, Default view, Save and Save and exit.
- **OBSERVED:** The layout included About this ticket, Activities, Contacts, Companies, Deals and Attachments cards, plus Add card, Edit card, Create new tab and Change tab order controls.
- **OBSERVED:** About this ticket's More card actions menu exposed Set conditional logic and Remove card.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Default view link | Page visit | Opened the populated record-page editor. |
| More card actions | Open disclosure | Displayed Set conditional logic and Remove card. |
| Save, edit, add, remove and reorder | Not activated | All layout mutations and persistence are **NOT OBSERVED**. |

## Screenshot

- **NEEDS VERIFICATION:** No durable provider screenshot was archived.

## Sources

- **OBSERVED:** Authenticated Ticket record-page editor, inspected 2026-10-06.
