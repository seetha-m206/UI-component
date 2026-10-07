---
component: "Hostinger Account Menu"
ui_category: "Navigation > Account Menu"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Global account destination menu with identity context and grouped profile, billing, security, preference, and session actions."
---

# Hostinger Account Menu

## Location

- **OBSERVED:** Global hPanel header on the authenticated Home route.

## Screenshot

- **NEEDS VERIFICATION:** The open menu was visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** The Account popup opens a dialog containing identity headings followed by destinations for account information, sharing, billing, security, activity, notifications, AI memory, language, learning, expert help, theme, and logout.
- **OBSERVED:** Personal identity values were intentionally omitted.
- **OBSERVED / CSS SAMPLE:** The panel measured 300 by 645 px with a 24 px radius, white background, subtle 1 px border, and 8 px by 16 px shadow.

## Actions

- **OBSERVED:** Opening and closing the menu preserved the current route.
- **NEEDS VERIFICATION:** Destination loading states, theme switching, language switching, and logout confirmation.

## Technical Data

- **OBSERVED / DOM:** The popup exposed a dialog containing a menu and individually labelled destinations.
- **NEEDS VERIFICATION:** Focus trapping, focus restoration, authorization filtering, analytics, and internal handlers.

## Reconstruction Guidance

- **RECONSTRUCTION:** Place identity context above grouped account destinations. Keep destructive or session-ending actions visually separate.

## Sources

- **OBSERVED:** Authenticated Hostinger hPanel and `Internal/scratch-2026-10/hostinger/individual-component-evidence.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-account-menu` uses fictional local data and sends no Hostinger request.
- `open` — observed or observed-structure starting state.
- `closed` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
