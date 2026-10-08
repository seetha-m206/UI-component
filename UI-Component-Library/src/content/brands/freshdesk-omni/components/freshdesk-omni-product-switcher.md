---
component: "Freshworks Product Switcher"
ui_category: "Navigation > Product Switcher"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed slide-over switcher for organization controls, portals and product discovery, with identifiers sanitized."
---

# Freshworks Product Switcher

## Location

- **OBSERVED:** Freshdesk Omni left rail → Freshworks Switcher.

## Structure

- **OBSERVED:** A left slide-over contained profile actions, organization administration, account portals, move-account guidance and other-product discovery.
- **OBSERVED:** Freshsales Suite and Freshdesk Omni portals were grouped under My Accounts and Portals.

## Actions

- **OBSERVED:** The switcher opened and closed without navigation.
- **NOT OBSERVED:** Profile, security, subscription, account move, add-account and product-launch actions.

## Behavior & States

- **OBSERVED:** The rest of the application dimmed while the panel was open.
- **RECONSTRUCTION:** All links are replaced by inert fictional controls.

## Technical Data

- **OBSERVED / DOM:** A dedicated product-sidebar container exposed grouped links and buttons.
- **NEEDS VERIFICATION:** Cross-product session transfer, authorization and tenant switching.

## Sources

- **OBSERVED:** Authenticated Freshworks switcher, 2026-10-08. Personal identifiers intentionally omitted.
