---
component: "HubSpot Service Hub Application Shell — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Service Hub Application Shell. Derived from the authored observation record."
parent_workflow: "hubspot-application-shell"
component_level: "state"
---

# HubSpot Service Hub Application Shell — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Service Hub Application Shell](./hubspot-application-shell.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The More flyout groups tools by CRM, Marketing, Content, Sales, Revenue, Service, Data Management, Agents, Automation, Reporting and Development. In the Service group, Chatflows offered a Pin control. Other Service entries appeared as menu items.
- **OBSERVED:** OBSERVED: Global search returned Tickets and Inbox tool links. Help Desk and Knowledge Base results explicitly identified Service Hub Professional and resolved to upgrade URLs in this portal.
- **OBSERVED:** NOT OBSERVED: Complete navigation outcomes for each Service entry, responsive shell, hover behavior and saved pin state.

## Actions

- Element | Safe action | Observed result
- Global Find in HubSpot | Enter Tickets, Help desk, Knowledge base or Inbox | Search result panel showed matching tools and documentation. Tickets and Inbox had working tool links. Help Desk and Knowledge Base showed upgrade destinations.
- More | Keyboard Space | Expanded the product-group flyout.
- Service in More | Keyboard Space | Showed Chatflows, Help Desk, Customer Success, Customer Agent, Knowledge Base, Customer Portal, Feedback Surveys and Service Analytics.
- Pin controls | Not activated | Visible beside some product entries. Persistence is NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-application-shell-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Service Hub Application Shell. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A dark left navigation rail, dark full-width top header, and light main workspace. The rail has Home, record entries, expandable Marketing, Content and Platform groups, and More. The header has global search, Breeze Assistant, Upgrade, Create new, Calls, Marketplace, Help, Settings, Notifications and the account menu.
- **OBSERVED:** OBSERVED / DOM: Accessibility roles included `banner`, `navigation`, `menu`, `menuitem`, `searchbox`, buttons and links. Expanded state appeared on the More menu item. This is rendered DOM evidence only.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Internal JavaScript, server authorization, API contracts, CSS tokens and motion timing.
- **OBSERVED:** FACT: Product identity and two authenticated routes were verified on 2026-10-05.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-application-shell"
component_level: "state"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
selected_state: "documented"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-application-shell.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-application-shell.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
