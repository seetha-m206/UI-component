---
component: "HubSpot Blog Onboarding — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-blog-onboarding"
component_level: "atomic"
---

# HubSpot Blog Onboarding — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Blog Onboarding](./hubspot-blog-onboarding.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: Empty onboarding framed a first blog post around audience growth, traffic and conversion.
- OBSERVED: Actions included Create with AI Beta, Start from scratch and import existing blog. AI support promised outlines and SEO-optimized content.
- NOT ACTIVATED: AI creation, scratch creation, import and video playback.
- NEEDS VERIFICATION: Editor, scheduling, publishing, authors, tags, SEO settings and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-blog-onboarding-audit-atomic.
- **RECONSTRUCTION:** Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Blog Onboarding. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **OBSERVED:** OBSERVED: Empty onboarding framed a first blog post around audience growth, traffic and conversion.
- **RECONSTRUCTION:** RECONSTRUCTION: The post fixture is fictional and local only.
- **NOT OBSERVED:** NEEDS VERIFICATION: No post or blog was created or imported.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-blog-onboarding"
component_level: "atomic"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
control_count: "1"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-blog-onboarding.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-blog-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
