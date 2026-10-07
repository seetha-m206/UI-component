---
component: "HubSpot CRM Index Workspace"
ui_category: "Enterprise Tables > Records Workspace"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Populated Contacts and Companies record indexes with pinned views, object selector, table tooling, add menus, and connection prompt."
---

# HubSpot CRM Index Workspace

## Location

- **OBSERVED:** Contacts at `/contacts/343751787/objects/0-1/views/all/list` and Companies at `/contacts/343751787/objects/0-2/views/all/list`.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-contacts-list.png`.
- **OBSERVED:** `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-companies-empty-list.png`.

## Structure

- **OBSERVED:** The index header combines an object selector, overflow control, Automate control and object-specific Add menu.
- **OBSERVED:** Pinned views appear as tabs. Contacts showed All contacts, My contacts and Unassigned contacts. Companies showed All companies and My companies.
- **OBSERVED:** The toolbar includes search, Filter, Sort by, board/table view toggles, View settings and Collapse header.
- **OBSERVED:** The Contacts table showed eight visible data columns and two HubSpot-labelled sample rows. The Companies table showed one sample company after loading.
- **OBSERVED:** Footer controls report record count and freshness, with Refresh, Export and Clone actions.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Object selector | Open, then close | Listed Calls, Carts, Communications, Companies, Contacts, Contracts Beta, Deals, Meetings, Notes, Tasks, Tickets and other CRM objects. |
| Add contacts / Add companies | Open, then close | Offered Create new and Import. Neither action was selected. |
| Pinned views | Not changed | Current view stayed All contacts or All companies. |
| Export and Clone | Not activated | Outcomes remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** The index supports both table and board controls even when the current object is rendered as a table.
- **OBSERVED:** Add companies was temporarily unavailable while the page loaded, then became enabled after the object data arrived.
- **OBSERVED:** Companies displayed a prompt to connect Gmail and described contact and conversation synchronization. Connect Gmail was not activated.
- **NEEDS VERIFICATION:** Pagination beyond the small sample data set, bulk selection actions, row keyboard behavior, live refresh timing and saved pinned-view persistence.

## Technical Data

- **OBSERVED / DOM:** The Contacts table contained one header row and two data rows. Visible column labels were Name, Email, Phone Number, Contact owner, Primary company, Last Activity Date, Lead Status and Create Date.
- **OBSERVED / DOM:** Add menus used pop-up buttons with a content list containing Create new and Import.
- **OBSERVED / DOM:** Record rows exposed selection checkboxes, inline-association expanders and record links.
- **NEEDS VERIFICATION:** Query API, pagination payload, export generation, object-selector routing logic and permission enforcement.

## Human Context

- **RECOMMENDATION:** Reuse the screen as an object-agnostic records workspace whose header, views and toolbar are stable while columns and empty/populated content vary by object.

## AI Context

- **FACT:** Contacts and Companies index states were observed directly.
- **RECONSTRUCTION:** Local previews must replace the provider sample records with fictional people and companies.
- **NEEDS VERIFICATION:** Create, import, export, clone and bulk actions were deliberately not executed.

## Sources

- Authenticated HubSpot Contacts and Companies screens, observed 2026-10-07.
