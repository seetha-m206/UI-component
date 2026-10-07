---
component: "Freshsales Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Freshsales Application Shell

## Location

- **OBSERVED:** Authenticated Freshsales Suite across Contacts, Accounts, Deals, Conversations, Analytics, and Admin Settings.

## Screenshot

- **NEEDS VERIFICATION:** Source screenshots are not retained because the tenant UI exposed account context and contact data.

## Structure

- **OBSERVED:** Dark icon rail, white top bar, route title, CRM search, trial banner, plan and demo actions, quick-create button, mail/help/notification utilities, avatar, and a wide content workspace.
- **OBSERVED:** Primary destinations were Dashboards, Contacts, Accounts, Deals, Conversations, Analytics, Admin Settings, and Phone.
- **OBSERVED:** A setup guide appeared above Contacts and Deals with task cards and an interactive-tour action.

## Actions

- **OBSERVED:** Safe route changes preserved the shell. Setup actions were not started.

## Behavior & States

- **OBSERVED:** Full-page skeletons and contextual loading messages appeared while modules initialized.
- **RECONSTRUCTION:** Local navigation and setup actions emit guard notices only.

## Technical Data

- **OBSERVED / DOM:** Ember identifiers, React-root regions, accessible links/buttons, and embedded Freshcaller/Freshchat frames were visible.
- **NEEDS VERIFICATION:** Provider APIs, JavaScript state, persistence, responsive breakpoints, and authorization rules.

## Sources

- **OBSERVED:** Authenticated Freshsales Suite, 2026-10-07.
- **RECONSTRUCTION:** `src/previews/freshsales-shared/`.
