---
component: "Freshsales Roles and Permissions"
ui_category: "Administration > Access Control"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Freshsales Roles and Permissions

## Location

- **OBSERVED:** Admin Settings, Teams & Territories, Roles.

## Structure

- **OBSERVED:** Explanatory header, add-on license action, Create role action, license usage summary, role table, users, created/updated metadata and per-role license actions.
- **OBSERVED:** The provider listed seven built-in roles including administrator, sales, restricted and marketing variants.

## Actions

- **OBSERVED:** The catalogue and the default Account Admin role were opened read-only.
- **NOT EXECUTED:** Role creation, user assignment, license management, subscription purchase, role menu and deletion.

## Behavior & States

- **OBSERVED:** A CPQ license warning stated that no further users could be added to CPQ-enabled roles until licenses were managed or purchased.
- **RECONSTRUCTION:** Fixture roles, users and license counts are fictional.

## Technical Data

- **OBSERVED / DOM:** Role and user counts linked to role-management routes. Destructive or paid controls were not activated.
- **NEEDS VERIFICATION:** Custom-role validation, assignment persistence, license purchase and deletion safeguards.

## Sources

- **OBSERVED:** Authenticated Freshsales roles catalogue, 2026-10-07.
