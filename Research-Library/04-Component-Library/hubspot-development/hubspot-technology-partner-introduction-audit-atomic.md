---
component: "HubSpot Technology Partner Introduction — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-technology-partner-introduction"
component_level: "atomic"
---

# HubSpot Technology Partner Introduction — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Technology Partner Introduction](./hubspot-technology-partner-introduction.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED / DOM: The authenticated application shell exposed global search, Breeze Assistant, profile controls, vertical product navigation, a Development secondary navigation and a main `Page Section`.
- **OBSERVED:** OBSERVED / DOM: The main workflow exposed one H1, the Tier status and Key resources sections, the locked-tier H3, one Create a listing button, six resource links and no form fields.
- **OBSERVED:** OBSERVED / DOM: The tier card listed three benefits before the primary action. The resource area separated Technology Partner Manager, program benefits, feedback survey, partner resource center and app certification.
- **OBSERVED:** OBSERVED / DOM: Main workflow counts were 1 button, 6 links, 2 headings in the scoped main node, 0 forms and 0 inputs. The full accessibility tree also exposed section headings for Tier status and the five resource groups.
- **OBSERVED:** OBSERVED / NETWORK: Reload issued `GET /api/login-verify/hub-user-info` and returned HTTP 200 JSON with top-level `portal`, `user` and `errors` keys.
- **OBSERVED:** OBSERVED / NETWORK: Reload issued `GET /api/navconfig/v5/navconfig` and returned HTTP 200 JSON containing navigation children, create-button configuration, business-unit and personalization metadata.
- **OBSERVED:** OBSERVED / NETWORK: Reload issued the `PersonalisedNavService/getPersonalisedNav` RPC as POST and returned HTTP 200 JSON with `type`, `data` and `correlationId` keys.
- **OBSERVED:** OBSERVED / NETWORK: A usage-logging POST returned HTTP 204. It is shell telemetry, not evidence of a Technology Partner mutation.
- **OBSERVED:** NOT OBSERVED: No domain-specific Technology Partner data endpoint was identified during reload, and no create-listing request or response was triggered.

## Actions

- Element | Safe action | Observed result or boundary
- Page load | Reload | Returned the same locked tier and resource state.
- Development navigation | Read only | Exposed Overview, Projects, Legacy Apps, MCP Connectors, Design Manager, Monitoring, Keys, Testing, Domain, Migrations, Marketplace Listings, Technology Partner and Documentation.
- Create a listing | Not activated | Would begin a provider-side listing workflow and remains NOT OBSERVED.
- Email, guide, survey, resource and certification links | Not activated | External navigation and communication remain NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-technology-partner-introduction-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Technology Partner Introduction. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED / DOM: The authenticated application shell exposed global search, Breeze Assistant, profile controls, vertical product navigation, a Development secondary navigation and a main `Page Section`.
- **OBSERVED:** OBSERVED / DOM: The main workflow exposed one H1, the Tier status and Key resources sections, the locked-tier H3, one Create a listing button, six resource links and no form fields.
- **OBSERVED:** OBSERVED / DOM: The tier card listed three benefits before the primary action. The resource area separated Technology Partner Manager, program benefits, feedback survey, partner resource center and app certification.
- **OBSERVED:** OBSERVED / DOM: Main workflow counts were 1 button, 6 links, 2 headings in the scoped main node, 0 forms and 0 inputs. The full accessibility tree also exposed section headings for Tier status and the five resource groups.
- **OBSERVED:** OBSERVED / NETWORK: Reload issued `GET /api/navconfig/v5/navconfig` and returned HTTP 200 JSON containing navigation children, create-button configuration, business-unit and personalization metadata.
- **NOT OBSERVED:** NOT OBSERVED: No domain-specific Technology Partner data endpoint was identified during reload, and no create-listing request or response was triggered.

### Network / API

- **OBSERVED:** OBSERVED / NETWORK: Reload issued `GET /api/login-verify/hub-user-info` and returned HTTP 200 JSON with top-level `portal`, `user` and `errors` keys.
- **OBSERVED:** OBSERVED / NETWORK: Reload issued `GET /api/navconfig/v5/navconfig` and returned HTTP 200 JSON containing navigation children, create-button configuration, business-unit and personalization metadata.
- **OBSERVED:** OBSERVED / NETWORK: Reload issued the `PersonalisedNavService/getPersonalisedNav` RPC as POST and returned HTTP 200 JSON with `type`, `data` and `correlationId` keys.
- **OBSERVED:** OBSERVED / NETWORK: A usage-logging POST returned HTTP 204. It is shell telemetry, not evidence of a Technology Partner mutation.
- **NOT OBSERVED:** NOT OBSERVED: No domain-specific Technology Partner data endpoint was identified during reload, and no create-listing request or response was triggered.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-technology-partner-introduction"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "9"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-technology-partner-introduction.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-technology-partner-introduction.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
