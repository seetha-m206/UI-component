---
component: "HubSpot Blog Onboarding — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Blog Onboarding. Derived from the authored observation record."
parent_workflow: "hubspot-blog-onboarding"
component_level: "action"
---

# HubSpot Blog Onboarding — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Blog Onboarding](./hubspot-blog-onboarding.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: Empty onboarding framed a first blog post around audience growth, traffic and conversion.
- **OBSERVED:** OBSERVED: Actions included Create with AI Beta, Start from scratch and import existing blog. AI support promised outlines and SEO-optimized content.
- **OBSERVED:** NOT ACTIVATED: AI creation, scratch creation, import and video playback.
- **OBSERVED:** NEEDS VERIFICATION: Editor, scheduling, publishing, authors, tags, SEO settings and analytics.

## Actions

- OBSERVED: Empty onboarding framed a first blog post around audience growth, traffic and conversion.
- OBSERVED: Actions included Create with AI Beta, Start from scratch and import existing blog. AI support promised outlines and SEO-optimized content.
- NOT ACTIVATED: AI creation, scratch creation, import and video playback.
- NEEDS VERIFICATION: Editor, scheduling, publishing, authors, tags, SEO settings and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-blog-onboarding-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Blog Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Empty onboarding framed a first blog post around audience growth, traffic and conversion.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Actions included Create with AI Beta, Start from scratch and import existing blog. AI support promised outlines and SEO-optimized content.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: AI creation, scratch creation, import and video playback.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Editor, scheduling, publishing, authors, tags, SEO settings and analytics.

### Network / API

- **OBSERVED:** OBSERVED: Empty onboarding framed a first blog post around audience growth, traffic and conversion.
- **RECONSTRUCTION:** RECONSTRUCTION: The post fixture is fictional and local only.
- **NOT OBSERVED:** NEEDS VERIFICATION: No post or blog was created or imported.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-blog-onboarding"
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

- Parent workflow: hubspot-blog-onboarding.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-blog-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
