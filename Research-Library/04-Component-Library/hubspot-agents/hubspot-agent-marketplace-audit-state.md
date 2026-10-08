---
component: "HubSpot Agent Marketplace — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Breeze"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-agent-marketplace"
component_level: "state"
---

# HubSpot Agent Marketplace — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Agent Marketplace](./hubspot-agent-marketplace.md).
- **COMPONENT LEVEL:** state.

## Structure

- **NOT OBSERVED:** OBSERVED: Marketplace navigation exposed Home, Apps, Agents, Workflows, Templates and Solutions Partners, with Search, Manage and Build.
- **NOT OBSERVED:** OBSERVED: Agent-template cards included Company Research, Deal Loss, Customer Health, Call Recap, Customer Handoff, Developer Tool Testing and Shopify Store Performance, each shown with HubSpot authorship and low install counts.
- **NOT OBSERVED:** OBSERVED: Collections highlighted apps with Agent Builder actions and an Explore all Agents link.
- **NOT OBSERVED:** NOT ACTIVATED: Search, template detail, installation, app connections, Manage, Build and collection navigation.
- **NOT OBSERVED:** NEEDS VERIFICATION: Detail pages, permissions, install flow, configuration, execution and removal.

## Actions

- OBSERVED: Marketplace navigation exposed Home, Apps, Agents, Workflows, Templates and Solutions Partners, with Search, Manage and Build.
- OBSERVED: Agent-template cards included Company Research, Deal Loss, Customer Health, Call Recap, Customer Handoff, Developer Tool Testing and Shopify Store Performance, each shown with HubSpot authorship and low install counts.
- OBSERVED: Collections highlighted apps with Agent Builder actions and an Explore all Agents link.
- NOT ACTIVATED: Search, template detail, installation, app connections, Manage, Build and collection navigation.
- NEEDS VERIFICATION: Detail pages, permissions, install flow, configuration, execution and removal.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-agent-marketplace-audit-state.
- **RECONSTRUCTION:** Evidence-bounded visible selection, entitlement, disabled, expanded, and status states for HubSpot Agent Marketplace. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Marketplace navigation exposed Home, Apps, Agents, Workflows, Templates and Solutions Partners, with Search, Manage and Build.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Agent-template cards included Company Research, Deal Loss, Customer Health, Call Recap, Customer Handoff, Developer Tool Testing and Shopify Store Performance, each shown with HubSpot authorship and low install counts.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Collections highlighted apps with Agent Builder actions and an Explore all Agents link.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Search, template detail, installation, app connections, Manage, Build and collection navigation.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-agent-marketplace"
component_level: "state"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
selected_state: "synthetic"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-agent-marketplace.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-agents/hubspot-agent-marketplace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
