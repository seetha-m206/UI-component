---
component: "HubSpot Forms Onboarding — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-forms-onboarding"
component_level: "screen"
---

# HubSpot Forms Onboarding — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Forms Onboarding](./hubspot-forms-onboarding.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: A first-run hero promoted drag-and-drop multi-step forms, brand-kit styling, conditional logic and AI form shortening through enrichment.
- **OBSERVED:** OBSERVED: The screen presented a single Create form primary action and a success illustration.
- **OBSERVED:** NOT ACTIVATED: Create form.
- **OBSERVED:** NEEDS VERIFICATION: Form-type selection, builder controls, field validation, conditional branches, preview, embed, publication and submission handling.

## Actions

- OBSERVED: A first-run hero promoted drag-and-drop multi-step forms, brand-kit styling, conditional logic and AI form shortening through enrichment.
- OBSERVED: The screen presented a single Create form primary action and a success illustration.
- NOT ACTIVATED: Create form.
- NEEDS VERIFICATION: Form-type selection, builder controls, field validation, conditional branches, preview, embed, publication and submission handling.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-forms-onboarding-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Forms Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: A first-run hero promoted drag-and-drop multi-step forms, brand-kit styling, conditional logic and AI form shortening through enrichment.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The screen presented a single Create form primary action and a success illustration.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Create form.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Form-type selection, builder controls, field validation, conditional branches, preview, embed, publication and submission handling.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-forms-onboarding"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Marketing"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-forms-onboarding.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-forms-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
