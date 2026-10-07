---
component: "HubSpot Marketplace Listings Empty State"
ui_category: "Development > Marketplace Listings"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Developer Platform screen patterns with explicit credential-safety boundaries and fictional local fixtures."
---

# HubSpot Marketplace Listings Empty State

## Location
- **OBSERVED:** `/marketplace-providers/343751787/unified-listings`.
## Screenshots
- **OBSERVED:** `2026-10-07-marketplace-listings.png`.
## Screen, Actions & States
- **OBSERVED:** Empty inventory exposed Create listing, Search and No listings found.
- **NOT ACTIVATED:** Listing creation, search and publication.
- **NEEDS VERIFICATION:** Listing wizard, assets, review, submission, approval, publication and analytics.
## Fictional Local Fixture
```yaml
listing: Northstar CRM Extension
status: draft
category: productivity
submitted: false
```
## Evidence Boundary
- **FACT:** The listing inventory empty state was directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No listing was created or submitted.
## Sources
- Authenticated HubSpot Marketplace Listings, observed 2026-10-07.
