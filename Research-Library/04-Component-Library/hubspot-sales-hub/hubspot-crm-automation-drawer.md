---
component: "HubSpot CRM Automation Suggestions Drawer"
ui_category: "Actions > Workflow Builder"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot CRM Automation Suggestions Drawer

## Location

- **OBSERVED:** Automate controls on Contacts, Companies and Deals indexes.

## Screenshot

- **OBSERVED:** Contacts: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-contacts-automate.png`.
- **OBSERVED:** Companies: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-companies-automate.png`.
- **OBSERVED:** Deals: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-deals-automate.png`.

## Structure

- **OBSERVED:** A right-side drawer is titled Automate plus the current object name and explains that automation can respond when that object is created or updated.
- **OBSERVED:** Automate your workflows is the leading action, followed by a Starter entitlement message and a Suggested for you section.
- **OBSERVED:** Each object context supplied three disabled suggestion cards with a title and outcome-oriented description.
- **OBSERVED:** Contact suggestions covered new-contact notification, setting lead status and sending a follow-up email. Company suggestions covered new-company, customer-conversion and high-value alerts. Deal suggestions covered closed-deal notification, new-deal task creation and presentation follow-up.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Automate | Open | Displayed the current object's suggestions drawer. |
| Close | Activate | Closed the drawer without changing the object view. |
| Automate your workflows | Not activated | Destination and entitlement behavior remain **NEEDS VERIFICATION**. |
| Suggestion cards | Not activated | Cards were disabled in this portal. |

## Behavior & States

- **OBSERVED:** The object name and suggestion content adapt while the drawer structure stays constant.
- **OBSERVED:** Entitlement copy separates the available navigation action from disabled suggested automations.
- **NEEDS VERIFICATION:** Workflow creation, upgrade routing, automation validation, save behavior and error states.

## Technical Data

- **OBSERVED / DOM:** The drawer is exposed as a separate container after the index content. Suggestion cards are disabled buttons.
- **NEEDS VERIFICATION:** Recommendation-generation logic, API calls, workflow schema and entitlement checks.

## Human Context

- **RECOMMENDATION:** Reuse a single object-aware automation drawer with contextual suggestion content and explicit entitlement messaging.

## AI Context

- **FACT:** Three object variants were directly observed.
- **RECONSTRUCTION:** A local preview may switch between fictional object suggestions without implementing workflow creation.
- **NEEDS VERIFICATION:** No workflow was opened, created, enabled or saved.

## Sources

- Authenticated HubSpot Contacts, Companies and Deals screens, observed 2026-10-07.
