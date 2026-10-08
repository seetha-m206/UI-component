---
component: "HubSpot AEO Onboarding — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-aeo-onboarding"
component_level: "interaction"
---

# HubSpot AEO Onboarding — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot AEO Onboarding](./hubspot-aeo-onboarding.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **NOT OBSERVED:** OBSERVED: The onboarding hero explains AI visibility across ChatGPT, Perplexity and Gemini, prompt tracking and Content Agent recommendations.
- **NOT OBSERVED:** OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- **NOT OBSERVED:** OBSERVED: A free technical and content audit notice appeared above three embedded Academy lessons with durations and play controls.
- **NOT OBSERVED:** NEEDS VERIFICATION: Audit execution, prompt results, recommendations, tracked engines and dashboard states.
- **NOT OBSERVED:** NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.
- **NOT OBSERVED:** OBSERVED: The onboarding hero explains AI visibility across ChatGPT, Perplexity and Gemini, prompt tracking and Content Agent recommendations.
- **NOT OBSERVED:** OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- **NOT OBSERVED:** OBSERVED: A free technical and content audit notice appeared above three embedded Academy lessons with durations and play controls.
- **NOT OBSERVED:** NEEDS VERIFICATION: Audit execution, prompt results, recommendations, tracked engines and dashboard states.
- **NOT OBSERVED:** NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.

## Actions

- OBSERVED: The onboarding hero explains AI visibility across ChatGPT, Perplexity and Gemini, prompt tracking and Content Agent recommendations.
- OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- OBSERVED: A free technical and content audit notice appeared above three embedded Academy lessons with durations and play controls.
- NEEDS VERIFICATION: Audit execution, prompt results, recommendations, tracked engines and dashboard states.
- NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-aeo-onboarding-audit-interaction.
- **RECONSTRUCTION:** Evidence-bounded local interaction transitions and state changes for HubSpot AEO Onboarding. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The onboarding hero explains AI visibility across ChatGPT, Perplexity and Gemini, prompt tracking and Content Agent recommendations.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: A free technical and content audit notice appeared above three embedded Academy lessons with durations and play controls.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Audit execution, prompt results, recommendations, tracked engines and dashboard states.

### Network / API

- **OBSERVED:** OBSERVED: Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- **NOT OBSERVED:** NOT ACTIVATED: Get started free, Try a sample prompt, Academy playback and any submission.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-aeo-onboarding"
component_level: "interaction"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
interaction_result: "local guard"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-aeo-onboarding.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-aeo-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
