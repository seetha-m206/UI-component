---
component: 'Salesforce Sales Application Shell'
ui_category: 'Application Layout > App Shell'
source_product: 'Salesforce Sales (trial workspace)'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Salesforce Sales pattern with a fictional local reconstruction and provider outcomes left bounded.'
---

# Component: Salesforce Sales Application Shell

## Location

- **OBSERVED:** Authenticated Salesforce Lightning Sales app on 2026-10-07.
- **OBSERVED:** Official sign-in began at `login.salesforce.com`; the authenticated trial org used an official `lightning.force.com` host.

## Screenshot

- **RECONSTRUCTION:** A fictional local shell fixture is available in the catalogue. Provider captures remain private because the shell can expose account identity and tenant details.

## Structure

- **OBSERVED:** Dark vertical product rail, trial promotion banner, global search, Agentforce, guidance, help, quick settings, notifications and profile controls.
- **OBSERVED:** Sales object navigation exposes Leads, Contacts, Accounts, Opportunities, Products, Price Books, Calendar and a More menu. The More menu exposed Analytics, Invoices and Video Calls in this workspace.
- **OBSERVED:** A persistent utility bar provides the To Do List.
- **OBSERVED:** Agentforce opened as an enablement gate with a Generative AI agreement and `Agree and Enable` action. The action was not selected.
- **OBSERVED:** Quick Settings grouped Fields and Sales Stages under Customization and Users, Business Details, Fiscal Year, Billing and Purchases, and Email Settings under Company.

## Actions

| Element and action                 | Result or boundary                                                        |
| ---------------------------------- | ------------------------------------------------------------------------- |
| Select Sales from the product rail | Opened the Sales app at the Leads list.                                   |
| Open More                          | Revealed Analytics, Invoices and Video Calls.                             |
| Open object links                  | Navigated among read-only list and calendar surfaces.                     |
| Open Agentforce                    | Revealed the disabled-by-default enablement panel.                        |
| Open Quick Settings                | Revealed Sales-specific setup shortcuts without opening or changing them. |

## Behavior & States

- **OBSERVED:** The shell remained consistent across lists, Calendar and the embedded Analytics workspace.
- **NOT OBSERVED:** Navigation personalization, permissions, mobile shell and persisted rearrangement were not exercised.

## Technical Data

- **OBSERVED / DOM:** Semantic navigation regions, headings, links, buttons, checkboxes, menus and an embedded Analytics iframe were exposed.
- **NOT OBSERVED / Network:** No requests, tokens, cookies or private APIs were inspected.

## Needs Verification

- **NEEDS VERIFICATION:** Exact edition, entitlement and role-specific navigation.

## Sources

- **OBSERVED:** Private receipt `Internal/scratch-2026-10/salesforce-sales-cloud/provider/provider-observation.json`.
