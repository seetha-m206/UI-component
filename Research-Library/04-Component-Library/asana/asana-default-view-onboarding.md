---
component: "Asana Default View Onboarding"
ui_category: "Onboarding > Default View"
source_product: "Asana"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
---

# Asana Default View Onboarding

## Location
- **OBSERVED:** First visit to the authenticated project Board.

## Structure
- **OBSERVED:** Blocking overlay asked for a default view with Board selected and List, Calendar and Timeline alternatives, followed by Continue.

## Actions
- **OBSERVED:** Escape did not dismiss the overlay. Continue and alternative choices were not activated because they could persist a project preference.

## Behavior & States
- **RECONSTRUCTION:** Local choices are reversible and Continue produces a guard notice instead of saving.

## Technical Data
- **OBSERVED:** Choice controls were exposed as checkboxes and Continue as a button.

## Needs Verification
- **NOT OBSERVED:** Save request, persistence, dismissal rules and permission effects.

## Sources
- **OBSERVED:** Authenticated Asana project board, 2026-10-08.
