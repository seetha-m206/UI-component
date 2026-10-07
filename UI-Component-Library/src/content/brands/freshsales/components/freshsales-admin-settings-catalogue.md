---
component: 'Freshsales Admin Settings Catalogue'
ui_category: 'Account & Settings > Settings Catalogue'
source_product: 'Freshsales'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified.'
---

# Freshsales Admin Settings Catalogue

## Location

- **OBSERVED:** Authenticated Admin Settings landing page.

## Structure

- **OBSERVED:** Persistent search and left category list for Leads, Contacts, & Accounts; Deals & Pipelines; Teams & Territories; Data & Import; Channels; Apps & Integrations; and Account Settings.
- **OBSERVED:** Capability cards covered fields, lifecycle, scoring, web forms, pipelines, forecasting, products, workflows, assignment, users, roles, territories, imports/migrations, email/chat/phone channels, marketplace/API/integrations, audit, billing, Freddy, and battlecards.

## Actions

- **OBSERVED:** Category changes were inspected without opening settings cards.
- **OBSERVED:** API Settings, billing, account cancellation/export, users, roles, imports, integrations, and all mutation-bearing destinations were deliberately not opened.

## Behavior & States

- **OBSERVED:** Category selection replaced the capability catalogue in place while preserving the app shell and search.
- **RECONSTRUCTION:** Local cards emit guard notices and never reveal credentials or change settings.

## Technical Data

- **OBSERVED / DOM:** Capability cards were links with descriptions and, in some product areas, cross-module routes.
- **NEEDS VERIFICATION:** Permission gates, plan gates, setting forms, validations, audit events, save behavior, and runtime effects.

## Sources

- **OBSERVED:** Authenticated Freshsales Admin Settings catalogue, 2026-10-07.
