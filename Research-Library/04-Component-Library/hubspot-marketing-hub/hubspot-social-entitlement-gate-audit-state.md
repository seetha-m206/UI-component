---
component: "HubSpot Social Entitlement Gate — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-social-entitlement-gate"
component_level: "state"
---

# HubSpot Social Entitlement Gate — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Social Entitlement Gate](./hubspot-social-entitlement-gate.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The gate described publishing and scheduling across major networks, keyword monitoring, comment replies and cross-channel reporting.
- **OBSERVED:** OBSERVED: Benefit sections covered campaign-connected publishing, suggested posting times, social mention streams and ROI reporting.
- **OBSERVED:** OBSERVED: Conversion controls and a Free versus Professional comparison table were visible.
- **OBSERVED:** NOT ACTIVATED: Talk to Sales, Start trial, View pricing, network connection or publishing.
- **OBSERVED:** NEEDS VERIFICATION: Composer, approval, calendar, network authorization, monitoring, engagement and analytics states.

## Actions

- OBSERVED: The gate described publishing and scheduling across major networks, keyword monitoring, comment replies and cross-channel reporting.
- OBSERVED: Benefit sections covered campaign-connected publishing, suggested posting times, social mention streams and ROI reporting.
- OBSERVED: Conversion controls and a Free versus Professional comparison table were visible.
- NOT ACTIVATED: Talk to Sales, Start trial, View pricing, network connection or publishing.
- NEEDS VERIFICATION: Composer, approval, calendar, network authorization, monitoring, engagement and analytics states.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-social-entitlement-gate-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Social Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The gate described publishing and scheduling across major networks, keyword monitoring, comment replies and cross-channel reporting.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Benefit sections covered campaign-connected publishing, suggested posting times, social mention streams and ROI reporting.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Conversion controls and a Free versus Professional comparison table were visible.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Talk to Sales, Start trial, View pricing, network connection or publishing.

### Network / API

- **OBSERVED:** OBSERVED: The gate described publishing and scheduling across major networks, keyword monitoring, comment replies and cross-channel reporting.
- **NOT OBSERVED:** NOT ACTIVATED: Talk to Sales, Start trial, View pricing, network connection or publishing.
- **NOT OBSERVED:** NEEDS VERIFICATION: Composer, approval, calendar, network authorization, monitoring, engagement and analytics states.
- **RECONSTRUCTION:** RECONSTRUCTION: The social post fixture is fictional and local only.
- **NOT OBSERVED:** NEEDS VERIFICATION: No account was connected and no post was created or sent.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-social-entitlement-gate"
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

- Parent workflow: hubspot-social-entitlement-gate.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-social-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
