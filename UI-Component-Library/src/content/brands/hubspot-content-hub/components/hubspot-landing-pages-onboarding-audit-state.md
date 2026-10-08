---
component: "HubSpot Landing Pages Onboarding — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Landing Pages Onboarding. Derived from the authored observation record."
parent_workflow: "hubspot-landing-pages-onboarding"
component_level: "state"
---

# HubSpot Landing Pages Onboarding — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Landing Pages Onboarding](./hubspot-landing-pages-onboarding.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: Empty onboarding emphasized conversion analytics and AI-generated landing pages, with a brand-kit alignment banner.
- **OBSERVED:** OBSERVED: Opening Create disclosed Create with AI Beta and Create from scratch.
- **OBSERVED:** SAFE ACTION: The reversible Create menu was opened and closed.
- **OBSERVED:** NOT ACTIVATED: Either creation path, Edit brand kit and banner Close.
- **OBSERVED:** NEEDS VERIFICATION: Builder, template selection, testing, publishing and performance states.

## Actions

- OBSERVED: Empty onboarding emphasized conversion analytics and AI-generated landing pages, with a brand-kit alignment banner.
- OBSERVED: Opening Create disclosed Create with AI Beta and Create from scratch.
- SAFE ACTION: The reversible Create menu was opened and closed.
- NOT ACTIVATED: Either creation path, Edit brand kit and banner Close.
- NEEDS VERIFICATION: Builder, template selection, testing, publishing and performance states.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-landing-pages-onboarding-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Landing Pages Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Empty onboarding emphasized conversion analytics and AI-generated landing pages, with a brand-kit alignment banner.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Opening Create disclosed Create with AI Beta and Create from scratch.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: SAFE ACTION: The reversible Create menu was opened and closed.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Either creation path, Edit brand kit and banner Close.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-landing-pages-onboarding"
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

- Parent workflow: hubspot-landing-pages-onboarding.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-landing-pages-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
