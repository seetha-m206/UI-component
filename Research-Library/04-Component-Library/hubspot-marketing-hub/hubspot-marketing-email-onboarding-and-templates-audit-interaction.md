---
component: "HubSpot Marketing Email Onboarding and Template Library — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-marketing-email-onboarding-and-templates"
component_level: "interaction"
---

# HubSpot Marketing Email Onboarding and Template Library — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketing Email Onboarding and Template Library](./hubspot-marketing-email-onboarding-and-templates.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **OBSERVED:** OBSERVED: The onboarding screen offered Simple, Newsletter and Promotion recommendations plus View all templates and Start from scratch.
- **OBSERVED:** OBSERVED: View all templates opened a searchable library with 33 templates grouped into Ecommerce, Engagement, Event, Greeting, Newsletter, Plain text and Other.
- **OBSERVED:** OBSERVED: Template cards exposed Use template and Preview. Several advanced templates and Saved templates displayed locked states.
- **OBSERVED:** OBSERVED: Brand-kit selection, Create new template and Upload design appeared in the library header, with the latter two locked.
- **OBSERVED:** NOT ACTIVATED: Use template, Preview, Start from scratch, Create new template, Upload design and any email creation or send action.
- **OBSERVED:** NEEDS VERIFICATION: Editor layout, validation, audience selection, review, scheduling, sending and analytics.
- **OBSERVED:** OBSERVED: The onboarding screen offered Simple, Newsletter and Promotion recommendations plus View all templates and Start from scratch.
- **OBSERVED:** OBSERVED: View all templates opened a searchable library with 33 templates grouped into Ecommerce, Engagement, Event, Greeting, Newsletter, Plain text and Other.
- **OBSERVED:** OBSERVED: Template cards exposed Use template and Preview. Several advanced templates and Saved templates displayed locked states.
- **OBSERVED:** OBSERVED: Brand-kit selection, Create new template and Upload design appeared in the library header, with the latter two locked.

## Actions

- OBSERVED: The onboarding screen offered Simple, Newsletter and Promotion recommendations plus View all templates and Start from scratch.
- OBSERVED: View all templates opened a searchable library with 33 templates grouped into Ecommerce, Engagement, Event, Greeting, Newsletter, Plain text and Other.
- OBSERVED: Template cards exposed Use template and Preview. Several advanced templates and Saved templates displayed locked states.
- OBSERVED: Brand-kit selection, Create new template and Upload design appeared in the library header, with the latter two locked.
- NOT ACTIVATED: Use template, Preview, Start from scratch, Create new template, Upload design and any email creation or send action.
- NEEDS VERIFICATION: Editor layout, validation, audience selection, review, scheduling, sending and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketing-email-onboarding-and-templates-audit-interaction.
- **OBSERVED:** Evidence-backed local interaction transitions and state changes for HubSpot Marketing Email Onboarding and Template Library. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The onboarding screen offered Simple, Newsletter and Promotion recommendations plus View all templates and Start from scratch.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: View all templates opened a searchable library with 33 templates grouped into Ecommerce, Engagement, Event, Greeting, Newsletter, Plain text and Other.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Template cards exposed Use template and Preview. Several advanced templates and Saved templates displayed locked states.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Brand-kit selection, Create new template and Upload design appeared in the library header, with the latter two locked.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketing-email-onboarding-and-templates"
component_level: "interaction"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
interaction_result: "local guard"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-marketing-email-onboarding-and-templates.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-marketing-email-onboarding-and-templates.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
