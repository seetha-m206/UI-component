---
component: "HubSpot Memberships Access State"
ui_category: "Content > Memberships"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Memberships Access State

## Location

- **OBSERVED:** `/memberships/343751787`.

## Screenshots

- **OBSERVED:** `2026-10-07-memberships-access-state.png`.

## Screen, Actions & States

- **OBSERVED:** The page stated that the account did not have access to memberships and described contacts and access groups.
- **OBSERVED:** A Learn more action was available. A separate private-content feedback prompt offered Negative, Neutral and Positive reactions.
- **NOT ACTIVATED:** Learn more, feedback and any membership action.
- **NEEDS VERIFICATION:** Membership lists, access-group rules, gated-content configuration and member states.

## Fictional Local Fixture

```yaml
membership: Northstar Partner Library
status: inaccessible
access_group: partner_preview
members: 0
```

## Evidence Boundary

- **FACT:** The access-denied state and feedback prompt were directly observed.
- **RECONSTRUCTION:** The membership fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated membership workspace was accessible.

## Sources

- Authenticated HubSpot Memberships access state, observed 2026-10-07.
