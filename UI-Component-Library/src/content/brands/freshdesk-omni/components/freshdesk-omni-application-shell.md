---
component: "Freshdesk Omni Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Authenticated Freshdesk Omni shell and Quick start workspace with fictional local reconstruction."
---

# Freshdesk Omni Application Shell

## Location

- **OBSERVED:** Authenticated Freshdesk Omni Quick start screen.

## Screenshot

- **OBSERVED:** Dark icon rail, compact action bar, trial banner, large Quick start workspace and a floating Freshchat launcher.
- **NEEDS VERIFICATION:** Source pixels are not retained because the provider view exposed account context.

## Structure

- **OBSERVED:** The left rail linked to Freddy AI Insights, Dashboard, Tickets, Contacts, Solutions, Forums, AI Agent Studio, Analytics and Admin.
- **OBSERVED:** The top bar contained New, Search, notification, help, Apps and avatar controls.
- **OBSERVED:** Quick start grouped three setup cards and collapsible goal sections with a 0/3 progress indicator.

## Actions

- **OBSERVED:** Opening the product switcher and channel chooser preserved the shell beneath an overlay.
- **RECONSTRUCTION:** Local shell controls emit guard messages and never open provider forms.

## Behavior & States

- **OBSERVED:** The shell dimmed behind the channel chooser and remained visible behind the Freshchat widget.
- **NOT OBSERVED:** Mobile breakpoints, route persistence and permission-dependent navigation.

## Technical Data

- **OBSERVED / DOM:** Ember-style identifiers, accessible links and buttons, a Freshworks navigation element, a micro-frontend region and a nested Freshchat frame were exposed.
- **NEEDS VERIFICATION:** Provider state model, authorization rules, network contracts and analytics instrumentation.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni tenant, 2026-10-08.
- **RECONSTRUCTION:** `src/previews/freshchat-omni-shared/` with fictional content.
