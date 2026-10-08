---
component: "HubSpot Technology Partner Introduction"
ui_category: "Development > Technology Partner"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
---

# HubSpot Technology Partner Introduction

## Location
- **OBSERVED:** `/marketplace-providers/343751787/technology-partner`.
## Screenshots
- **OBSERVED:** `2026-10-07-technology-partner.png`.
## Structure
- **OBSERVED / DOM:** The authenticated application shell exposed global search, Breeze Assistant, profile controls, vertical product navigation, a Development secondary navigation and a main `Page Section`.
- **OBSERVED / DOM:** The main workflow exposed one H1, the Tier status and Key resources sections, the locked-tier H3, one Create a listing button, six resource links and no form fields.
- **OBSERVED / DOM:** The tier card listed three benefits before the primary action. The resource area separated Technology Partner Manager, program benefits, feedback survey, partner resource center and app certification.
## Actions
| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Page load | Reload | Returned the same locked tier and resource state. |
| Development navigation | Read only | Exposed Overview, Projects, Legacy Apps, MCP Connectors, Design Manager, Monitoring, Keys, Testing, Domain, Migrations, Marketplace Listings, Technology Partner and Documentation. |
| Create a listing | Not activated | Would begin a provider-side listing workflow and remains **NOT OBSERVED**. |
| Email, guide, survey, resource and certification links | Not activated | External navigation and communication remain **NOT OBSERVED**. |
## Behavior & States
- **OBSERVED:** Technology Partner was the expanded secondary-navigation item.
- **OBSERVED:** Tier status remained locked because no Marketplace listing existed.
- **NOT OBSERVED:** Loading, validation, error, certification, submission and success states were not triggered.
## Technical Data
- **OBSERVED / DOM:** Main workflow counts were 1 button, 6 links, 2 headings in the scoped main node, 0 forms and 0 inputs. The full accessibility tree also exposed section headings for Tier status and the five resource groups.
- **OBSERVED / NETWORK:** Reload issued `GET /api/login-verify/hub-user-info` and returned HTTP 200 JSON with top-level `portal`, `user` and `errors` keys.
- **OBSERVED / NETWORK:** Reload issued `GET /api/navconfig/v5/navconfig` and returned HTTP 200 JSON containing navigation children, create-button configuration, business-unit and personalization metadata.
- **OBSERVED / NETWORK:** Reload issued the `PersonalisedNavService/getPersonalisedNav` RPC as POST and returned HTTP 200 JSON with `type`, `data` and `correlationId` keys.
- **OBSERVED / NETWORK:** A usage-logging POST returned HTTP 204. It is shell telemetry, not evidence of a Technology Partner mutation.
- **NOT OBSERVED:** No domain-specific Technology Partner data endpoint was identified during reload, and no create-listing request or response was triggered.
## Screen, Actions & States
- **OBSERVED:** Tier status was locked behind creating a Marketplace listing. Benefits emphasized visibility and growth across marketing, sales and product.
- **OBSERVED:** Resources included partner contact email, program guide, feedback survey, resource center and app certification.
- **NOT ACTIVATED:** Create listing, email, guide, survey, resource center and certification.
- **NEEDS VERIFICATION:** Eligibility, tier calculation, application, benefits and certification flow.
## Fictional Local Fixture
```yaml
partner: Northstar Apps
tier_status: locked
marketplace_listing: none
certified: false
```
## Evidence Boundary
- **FACT:** The partner introduction and locked tier state were directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No partner action or external communication occurred.
## Sources
- Authenticated HubSpot Technology Partner screen, observed 2026-10-07.
