---
component: "Freshsales Plan Boundary States"
ui_category: "Feedback > Availability and Upgrade"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Freshsales Plan Boundary States

## Location

- **OBSERVED:** Naturally encountered across the record overlays, global trial shell, roles catalogue and Freddy settings.

## Structure

- **OBSERVED:** Loading messages, a trial-expiry banner, upgrade actions, disabled controls, a CPQ license warning, Freddy beta access and an unavailable-label fallback in the global header.

## Actions

- **OBSERVED:** Waiting for provider pages to load exposed loading-to-content transitions.
- **NOT EXECUTED:** Upgrade, checkout, license purchase, request demo, unavailable control and disabled capability actions.

## Behavior & States

- **OBSERVED:** Availability could be limited by loading, disabled state, plan, license or beta status. The provider also exposed a missing-translation fallback for one unavailable control.
- **RECONSTRUCTION:** The fixture consolidates these independently observed boundaries into fictional beta, loading, unavailable and upgrade states.

## Technical Data

- **OBSERVED / DOM:** Disabled controls were accessible as disabled. Trial and beta status appeared as persistent banners.
- **NEEDS VERIFICATION:** Billing eligibility, exact plan gates, localization fallback, retry behavior and upgrade outcomes.

## Sources

- **OBSERVED:** Authenticated Freshsales continuation pass, 2026-10-07.
