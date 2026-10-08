---
component: "HubSpot AEO Onboarding — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-aeo-onboarding"
component_level: "empty"
---

# HubSpot AEO Onboarding — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot AEO Onboarding](./hubspot-aeo-onboarding.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific empty description.

## Actions

- OBSERVED: The onboarding hero explains AI visibility across ChatGPT, Perplexity and Gemini, prompt tracking and Content Agent recommendations.
- OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- OBSERVED: A free technical and content audit notice appeared above three embedded Academy lessons with durations and play controls.
- NEEDS VERIFICATION: Audit execution, prompt results, recommendations, tracked engines and dashboard states.
- NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-aeo-onboarding-audit-empty.
- **RECONSTRUCTION:** Evidence-bounded empty, first-run, zero-result, and unconfigured states for HubSpot AEO Onboarding. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific empty description.

### Network / API

- **OBSERVED:** OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- **NOT OBSERVED:** NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-aeo-onboarding"
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

- Parent workflow: hubspot-aeo-onboarding.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-aeo-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
