---
component: "HubSpot SEO Entitlement Gate — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-seo-entitlement-gate"
component_level: "interaction"
---

# HubSpot SEO Entitlement Gate — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot SEO Entitlement Gate](./hubspot-seo-entitlement-gate.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **OBSERVED:** OBSERVED: The gate promoted actionable recommendations across speed, mobile, on-page SEO and accessibility.
- **OBSERVED:** OBSERVED: Additional sections described topic-cluster planning, canonical URLs, ranking reports and Google Search Console data.
- **OBSERVED:** OBSERVED: Talk to Sales, Start 14-day trial and View pricing preceded the Free versus Professional comparison table.
- **OBSERVED:** NOT ACTIVATED: Sales, trial, pricing or integration actions.
- **OBSERVED:** NEEDS VERIFICATION: Recommendation workspace, scans, topic planning, Search Console connection and reporting.
- **OBSERVED:** OBSERVED: The gate promoted actionable recommendations across speed, mobile, on-page SEO and accessibility.
- **OBSERVED:** OBSERVED: Additional sections described topic-cluster planning, canonical URLs, ranking reports and Google Search Console data.
- **OBSERVED:** OBSERVED: Talk to Sales, Start 14-day trial and View pricing preceded the Free versus Professional comparison table.
- **OBSERVED:** NOT ACTIVATED: Sales, trial, pricing or integration actions.
- **OBSERVED:** NEEDS VERIFICATION: Recommendation workspace, scans, topic planning, Search Console connection and reporting.

## Actions

- OBSERVED: The gate promoted actionable recommendations across speed, mobile, on-page SEO and accessibility.
- OBSERVED: Additional sections described topic-cluster planning, canonical URLs, ranking reports and Google Search Console data.
- OBSERVED: Talk to Sales, Start 14-day trial and View pricing preceded the Free versus Professional comparison table.
- NOT ACTIVATED: Sales, trial, pricing or integration actions.
- NEEDS VERIFICATION: Recommendation workspace, scans, topic planning, Search Console connection and reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-seo-entitlement-gate-audit-interaction.
- **OBSERVED:** Evidence-backed local interaction transitions and state changes for HubSpot SEO Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The gate promoted actionable recommendations across speed, mobile, on-page SEO and accessibility.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Additional sections described topic-cluster planning, canonical URLs, ranking reports and Google Search Console data.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Talk to Sales, Start 14-day trial and View pricing preceded the Free versus Professional comparison table.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Sales, trial, pricing or integration actions.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-seo-entitlement-gate"
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

- Parent workflow: hubspot-seo-entitlement-gate.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-seo-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
