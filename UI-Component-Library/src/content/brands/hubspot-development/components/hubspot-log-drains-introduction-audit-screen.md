---
component: "HubSpot Log Drains Introduction — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Log Drains Introduction. Derived from the authored observation record."
parent_workflow: "hubspot-log-drains-introduction"
component_level: "screen"
---

# HubSpot Log Drains Introduction — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Log Drains Introduction](./hubspot-log-drains-introduction.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Intro described streaming app logs to external monitoring, configuring drains through the CLI, verifying status in HubSpot and retaining data externally.
- **OBSERVED:** OBSERVED: Partner cards linked to Sentry and Honeycomb.
- **OBSERVED:** NOT ACTIVATED: CLI configuration, partner navigation and connection verification.
- **OBSERVED:** NEEDS VERIFICATION: Drain creation, authentication, destinations, status, failures and deletion.

## Actions

- OBSERVED: Intro described streaming app logs to external monitoring, configuring drains through the CLI, verifying status in HubSpot and retaining data externally.
- OBSERVED: Partner cards linked to Sentry and Honeycomb.
- NOT ACTIVATED: CLI configuration, partner navigation and connection verification.
- NEEDS VERIFICATION: Drain creation, authentication, destinations, status, failures and deletion.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-log-drains-introduction-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Log Drains Introduction. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Intro described streaming app logs to external monitoring, configuring drains through the CLI, verifying status in HubSpot and retaining data externally.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Partner cards linked to Sentry and Honeycomb.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: CLI configuration, partner navigation and connection verification.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Drain creation, authentication, destinations, status, failures and deletion.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-log-drains-introduction"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Development"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-log-drains-introduction.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-log-drains-introduction.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
