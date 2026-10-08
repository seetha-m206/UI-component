---
component: "HubSpot Website Pages Onboarding — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Website Pages Onboarding. Derived from the authored observation record."
parent_workflow: "hubspot-website-pages-onboarding"
component_level: "state"
---

# HubSpot Website Pages Onboarding — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Website Pages Onboarding](./hubspot-website-pages-onboarding.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: Empty onboarding presented AI-assisted creation or a theme, no-code customization and lead-generation positioning.
- **OBSERVED:** OBSERVED: A brand-kit alignment banner exposed Edit brand kit and Close. The page also offered import-existing-site and Create actions.
- **OBSERVED:** NOT ACTIVATED: Create, Edit brand kit, import existing site and Close.
- **OBSERVED:** NEEDS VERIFICATION: Editor, theme selection, publishing, analytics, page states and connected-domain behavior.

## Actions

- OBSERVED: Empty onboarding presented AI-assisted creation or a theme, no-code customization and lead-generation positioning.
- OBSERVED: A brand-kit alignment banner exposed Edit brand kit and Close. The page also offered import-existing-site and Create actions.
- NOT ACTIVATED: Create, Edit brand kit, import existing site and Close.
- NEEDS VERIFICATION: Editor, theme selection, publishing, analytics, page states and connected-domain behavior.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-website-pages-onboarding-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Website Pages Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Empty onboarding presented AI-assisted creation or a theme, no-code customization and lead-generation positioning.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: A brand-kit alignment banner exposed Edit brand kit and Close. The page also offered import-existing-site and Create actions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Create, Edit brand kit, import existing site and Close.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Editor, theme selection, publishing, analytics, page states and connected-domain behavior.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-website-pages-onboarding"
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

- Parent workflow: hubspot-website-pages-onboarding.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-website-pages-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
