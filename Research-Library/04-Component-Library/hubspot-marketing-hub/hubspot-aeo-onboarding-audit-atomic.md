---
component: "HubSpot AEO Onboarding — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-aeo-onboarding"
component_level: "atomic"
---

# HubSpot AEO Onboarding — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot AEO Onboarding](./hubspot-aeo-onboarding.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: The onboarding hero explains AI visibility across ChatGPT, Perplexity and Gemini, prompt tracking and Content Agent recommendations.
- OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- OBSERVED: A free technical and content audit notice appeared above three embedded Academy lessons with durations and play controls.
- NEEDS VERIFICATION: Audit execution, prompt results, recommendations, tracked engines and dashboard states.
- NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-aeo-onboarding-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot AEO Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **OBSERVED:** OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- **NOT OBSERVED:** NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-aeo-onboarding"
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

- Parent workflow: hubspot-aeo-onboarding.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-aeo-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
