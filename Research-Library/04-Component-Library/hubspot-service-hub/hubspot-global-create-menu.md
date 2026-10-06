---
component: "HubSpot Global Create Menu"
ui_category: "Actions > Action Menu"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Global Create Menu

## Location

- **OBSERVED:** Shared authenticated global toolbar above the Unassigned tickets board, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** Visually and semantically inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** A compact plus-icon control opened a menu labelled Create new with five object actions: Contact, Company, Deal, Ticket and Task.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Create new | Keyboard Space | Opened the object creation menu and exposed expanded state. |
| Create new | Keyboard Space while open | Closed the menu and removed the five actions. |
| Contact, Company, Deal, Ticket and Task | Not activated | Creation forms, validation and successful submission are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The menu overlays the current screen without navigating or replacing Tickets content.
- **NOT OBSERVED:** Keyboard arrow navigation, focus return, object-specific forms, permissions and errors.

## Technical Data

- **OBSERVED / DOM:** The trigger exposes popup-button semantics and expanded state. Each menu item is a button with a stable object-specific identifier.
- **NOT OBSERVED:** Creation routes, API requests, payloads and persistence.

## Human Context

- **RECOMMENDATION:** Keep high-frequency object creation available globally while naming each destination explicitly.

## AI Context

- **FACT:** The five labels were read directly from the authenticated menu.
- **NOT OBSERVED:** The menu does not establish which fields or permissions each creation flow requires.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot, keyboard roving behavior, each creation form, cancellation and provider success states.

## Sources

- **OBSERVED:** Authenticated HubSpot global toolbar, inspected 2026-10-06.
