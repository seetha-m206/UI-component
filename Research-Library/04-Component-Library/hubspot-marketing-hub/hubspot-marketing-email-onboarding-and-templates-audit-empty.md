---
component: "HubSpot Marketing Email Onboarding and Template Library — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-marketing-email-onboarding-and-templates"
component_level: "empty"
---

# HubSpot Marketing Email Onboarding and Template Library — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketing Email Onboarding and Template Library](./hubspot-marketing-email-onboarding-and-templates.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific empty description.

## Actions

- OBSERVED: The onboarding screen offered Simple, Newsletter and Promotion recommendations plus View all templates and Start from scratch.
- OBSERVED: View all templates opened a searchable library with 33 templates grouped into Ecommerce, Engagement, Event, Greeting, Newsletter, Plain text and Other.
- OBSERVED: Template cards exposed Use template and Preview. Several advanced templates and Saved templates displayed locked states.
- OBSERVED: Brand-kit selection, Create new template and Upload design appeared in the library header, with the latter two locked.
- NOT ACTIVATED: Use template, Preview, Start from scratch, Create new template, Upload design and any email creation or send action.
- NEEDS VERIFICATION: Editor layout, validation, audience selection, review, scheduling, sending and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketing-email-onboarding-and-templates-audit-empty.
- **RECONSTRUCTION:** Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot Marketing Email Onboarding and Template Library. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific empty description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketing-email-onboarding-and-templates"
component_level: "empty"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
result_count: "0"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-marketing-email-onboarding-and-templates.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-marketing-email-onboarding-and-templates.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
