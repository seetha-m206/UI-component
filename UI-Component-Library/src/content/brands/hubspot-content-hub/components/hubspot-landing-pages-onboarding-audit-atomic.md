---
component: "HubSpot Landing Pages Onboarding — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Landing Pages Onboarding. Derived from the authored observation record."
parent_workflow: "hubspot-landing-pages-onboarding"
component_level: "atomic"
---

# HubSpot Landing Pages Onboarding — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Landing Pages Onboarding](./hubspot-landing-pages-onboarding.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: Empty onboarding emphasized conversion analytics and AI-generated landing pages, with a brand-kit alignment banner.
- OBSERVED: Opening Create disclosed Create with AI Beta and Create from scratch.
- SAFE ACTION: The reversible Create menu was opened and closed.
- NOT ACTIVATED: Either creation path, Edit brand kit and banner Close.
- NEEDS VERIFICATION: Builder, template selection, testing, publishing and performance states.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-landing-pages-onboarding-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Landing Pages Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-landing-pages-onboarding"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "1"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-landing-pages-onboarding.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-landing-pages-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
