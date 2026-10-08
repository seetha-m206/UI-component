---
component: "HubSpot Agent Marketplace — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Breeze"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Agent Marketplace. Derived from the authored observation record."
parent_workflow: "hubspot-agent-marketplace"
component_level: "action"
---

# HubSpot Agent Marketplace — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Agent Marketplace](./hubspot-agent-marketplace.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: Marketplace navigation exposed Home, Apps, Agents, Workflows, Templates and Solutions Partners, with Search, Manage and Build.
- **OBSERVED:** OBSERVED: Agent-template cards included Company Research, Deal Loss, Customer Health, Call Recap, Customer Handoff, Developer Tool Testing and Shopify Store Performance, each shown with HubSpot authorship and low install counts.
- **OBSERVED:** OBSERVED: Collections highlighted apps with Agent Builder actions and an Explore all Agents link.
- **OBSERVED:** NOT ACTIVATED: Search, template detail, installation, app connections, Manage, Build and collection navigation.
- **OBSERVED:** NEEDS VERIFICATION: Detail pages, permissions, install flow, configuration, execution and removal.

## Actions

- OBSERVED: Marketplace navigation exposed Home, Apps, Agents, Workflows, Templates and Solutions Partners, with Search, Manage and Build.
- OBSERVED: Agent-template cards included Company Research, Deal Loss, Customer Health, Call Recap, Customer Handoff, Developer Tool Testing and Shopify Store Performance, each shown with HubSpot authorship and low install counts.
- OBSERVED: Collections highlighted apps with Agent Builder actions and an Explore all Agents link.
- NOT ACTIVATED: Search, template detail, installation, app connections, Manage, Build and collection navigation.
- NEEDS VERIFICATION: Detail pages, permissions, install flow, configuration, execution and removal.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-agent-marketplace-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Agent Marketplace. Derived from the authored observation record.
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
component_level: "action"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
last_action: "none"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-agent-marketplace.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-agents/hubspot-agent-marketplace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
