---
component: "HubSpot Ads Onboarding — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Ads Onboarding. Derived from the authored observation record."
parent_workflow: "hubspot-ads-onboarding"
component_level: "state"
---

# HubSpot Ads Onboarding — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ads Onboarding](./hubspot-ads-onboarding.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The hero offered Connect ad network and Create ad account.
- **OBSERVED:** OBSERVED: A recommended setup checklist linked to contact segments, forms, landing pages and tracking-code installation.
- **OBSERVED:** OBSERVED: The screen included an embedded “Welcome to HubSpot Ads” explainer video.
- **OBSERVED:** NOT ACTIVATED: Network connection, account creation, checklist destinations and video playback.
- **OBSERVED:** NEEDS VERIFICATION: OAuth scopes, campaign import, account selection, ad creation, audience sync, conversion events and reporting.

## Actions

- OBSERVED: The hero offered Connect ad network and Create ad account.
- OBSERVED: A recommended setup checklist linked to contact segments, forms, landing pages and tracking-code installation.
- OBSERVED: The screen included an embedded “Welcome to HubSpot Ads” explainer video.
- NOT ACTIVATED: Network connection, account creation, checklist destinations and video playback.
- NEEDS VERIFICATION: OAuth scopes, campaign import, account selection, ad creation, audience sync, conversion events and reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ads-onboarding-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Ads Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The hero offered Connect ad network and Create ad account.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: A recommended setup checklist linked to contact segments, forms, landing pages and tracking-code installation.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The screen included an embedded “Welcome to HubSpot Ads” explainer video.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Network connection, account creation, checklist destinations and video playback.

### Network / API

- **OBSERVED:** OBSERVED: The hero offered Connect ad network and Create ad account.
- **NOT OBSERVED:** NOT ACTIVATED: Network connection, account creation, checklist destinations and video playback.
- **RECONSTRUCTION:** RECONSTRUCTION: The network and checklist fixture are fictional.
- **NOT OBSERVED:** NEEDS VERIFICATION: No external ad network was connected.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ads-onboarding"
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

- Parent workflow: hubspot-ads-onboarding.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-ads-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
