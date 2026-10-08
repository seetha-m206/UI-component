---
component: "HubSpot Revenue Agent Beta — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-revenue-agent-beta"
component_level: "action"
---

# HubSpot Revenue Agent Beta — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Revenue Agent Beta](./hubspot-revenue-agent-beta.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: Beta introduction described context-aware invoice follow-up with user control, compatibility with billing tools synced to HubSpot and no additional seat requirement.
- **OBSERVED:** OBSERVED: Actions included How Revenue Agent uses HubSpot Credits, Sign up for beta and a disabled Learn more button, plus an Agent Hub link.
- **OBSERVED:** NOT ACTIVATED: Credits disclosure, beta signup, Agent Hub and follow-up automation.
- **OBSERVED:** NEEDS VERIFICATION: Setup, billing-tool connection, draft review, approval, sending, escalation and credit consumption.

## Actions

- OBSERVED: Beta introduction described context-aware invoice follow-up with user control, compatibility with billing tools synced to HubSpot and no additional seat requirement.
- OBSERVED: Actions included How Revenue Agent uses HubSpot Credits, Sign up for beta and a disabled Learn more button, plus an Agent Hub link.
- NOT ACTIVATED: Credits disclosure, beta signup, Agent Hub and follow-up automation.
- NEEDS VERIFICATION: Setup, billing-tool connection, draft review, approval, sending, escalation and credit consumption.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-revenue-agent-beta-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Revenue Agent Beta. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Beta introduction described context-aware invoice follow-up with user control, compatibility with billing tools synced to HubSpot and no additional seat requirement.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Actions included How Revenue Agent uses HubSpot Credits, Sign up for beta and a disabled Learn more button, plus an Agent Hub link.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Credits disclosure, beta signup, Agent Hub and follow-up automation.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Setup, billing-tool connection, draft review, approval, sending, escalation and credit consumption.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-revenue-agent-beta"
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

- Parent workflow: hubspot-revenue-agent-beta.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-revenue-hub/hubspot-revenue-agent-beta.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
