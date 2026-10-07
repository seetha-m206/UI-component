---
component: "HubSpot Sales Hub Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Sales Hub shell with global toolbar, grouped primary navigation, and setup continuation card."
---

# HubSpot Sales Hub Application Shell

## Location

- **OBSERVED:** Authenticated Start Guide at `https://app-na3.hubspot.com/start-guide/343751787` on 2026-10-07.
- **OBSERVED:** The route stayed on the official `hubspot.com` domain after login.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-start-guide.png`.

## Structure

- **OBSERVED:** A 44-pixel global toolbar spans the viewport above a 236-pixel left navigation and a light main workspace.
- **OBSERVED:** The toolbar exposes the HubSpot home mark, global search, Breeze Assistant, Upgrade, Create new, Calls, Marketplace, Help, Settings, Notifications and the account menu.
- **OBSERVED:** The primary navigation exposes Home, Contacts, Companies, Deals and Segments, followed by expanded Marketing, Content and Platform groups, More, an Upgrade to Starter action and a setup continuation card.
- **OBSERVED:** The body uses `Lexend Deca`, Helvetica, Arial, sans-serif at a 14-pixel base size. The observed viewport was 1138 by 1224 CSS pixels at device-pixel ratio 2.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Marketing, Content and Platform group headers | Not changed during this screen pass | Each was visibly expanded with nested tools. |
| More | Not opened during this screen pass | Visible as a collapsed menu item. |
| Toolbar menus | Not opened during this screen pass | Visible shared-shell controls. Outcomes remain **NEEDS VERIFICATION** for the Sales Hub lane. |
| Setup continuation card | Not activated | Presented the message “Complete your setup and reach your goals faster.” with Continue. |

## Behavior & States

- **OBSERVED:** The shell stayed present while the Start Guide disclosure and options menu changed inside the main workspace.
- **OBSERVED:** Hidden per-item navigation option buttons were present in the rendered DOM with `display: none` until their interaction state is invoked.
- **NEEDS VERIFICATION:** Responsive collapse behavior, keyboard traversal order, hover-only affordances, navigation persistence and product-specific More-menu contents.

## Technical Data

- **OBSERVED / DOM:** Primary entries use `role="menuitem"` and stable identifiers including `contacts`, `companies`, `deals`, `lists`, `dashboards`, `workflows` and `more-tools-toggle`.
- **OBSERVED / DOM:** Toolbar controls expose accessible names and stable IDs including `global-search-input`, `hs-global-toolbar-object-create`, `calling-remote-toggle`, `hs-global-toolbar-marketplace-list-item`, `hs-global-toolbar-help-list-item`, `hs-global-toolbar-settings-list-item`, `hs-global-toolbar-notifications-list-item` and `hs-global-toolbar-accounts`.
- **NEEDS VERIFICATION:** Internal React state, network contracts, authorization checks, design-token source values and motion timing.

## Human Context

- **RECOMMENDATION:** Treat the global toolbar, primary navigation and setup continuation card as independent reusable shell components. The product-specific record belongs in the Sales Hub lane even where the shared chrome resembles Service Hub.

## AI Context

- **FACT:** The authenticated shell was observed directly on 2026-10-07.
- **RECONSTRUCTION:** Any local preview must use fictional account data and local-only interactions.
- **NEEDS VERIFICATION:** Shared-shell controls documented earlier for Service Hub must be re-exercised before being claimed as Sales Hub behavior.

## Sources

- Authenticated HubSpot Start Guide, observed 2026-10-07.
- Local screenshot and DOM/computed-style capture listed above.
