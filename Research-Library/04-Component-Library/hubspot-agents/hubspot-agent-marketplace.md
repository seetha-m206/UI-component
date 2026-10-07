---
component: "HubSpot Agent Marketplace"
ui_category: "Agents > Agent Marketplace"
source_product: "HubSpot Breeze"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Agent Marketplace

## Location
- **OBSERVED:** `/marketplace/343751787/breeze-agents?referrer=breeze`.

## Screenshots
- **OBSERVED:** `2026-10-07-agent-marketplace.png`.

## Screen, Actions & States
- **OBSERVED:** Marketplace navigation exposed Home, Apps, Agents, Workflows, Templates and Solutions Partners, with Search, Manage and Build.
- **OBSERVED:** Agent-template cards included Company Research, Deal Loss, Customer Health, Call Recap, Customer Handoff, Developer Tool Testing and Shopify Store Performance, each shown with HubSpot authorship and low install counts.
- **OBSERVED:** Collections highlighted apps with Agent Builder actions and an Explore all Agents link.
- **NOT ACTIVATED:** Search, template detail, installation, app connections, Manage, Build and collection navigation.
- **NEEDS VERIFICATION:** Detail pages, permissions, install flow, configuration, execution and removal.

## Fictional Local Fixture
```yaml
template: Northstar Account Brief Agent
publisher: Example Studio
status: not_installed
installs: 0
actions: [research_company, summarize_signals]
```

## Evidence Boundary
- **FACT:** The marketplace catalogue and visible cards were directly observed.
- **RECONSTRUCTION:** The template fixture is fictional and local only.
- **NEEDS VERIFICATION:** No agent or app was installed.

## Sources
- Authenticated HubSpot Agent Marketplace, observed 2026-10-07.
