---
component: "HubSpot AEO Onboarding"
ui_category: "Marketing > AI Search Visibility"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot AEO Onboarding

## Location

- **OBSERVED:** AEO Beta at `/ai-visibility/343751787/trial`.

## Screenshots

- **OBSERVED:** `2026-10-07-aeo-onboarding.png`.

## Screen, Actions & States

- **OBSERVED:** The onboarding hero explains AI visibility across ChatGPT, Perplexity and Gemini, prompt tracking and Content Agent recommendations.
- **OBSERVED:** Brand and Domain fields were prefilled from the portal context, followed by Get started free and Try a sample prompt actions.
- **OBSERVED:** A free technical and content audit notice appeared above three embedded Academy lessons with durations and play controls.
- **NEEDS VERIFICATION:** Audit execution, prompt results, recommendations, tracked engines and dashboard states.
- **NOT ACTIVATED:** Get started free, Try a sample prompt, Academy playback and any submission.

## Fictional Local Fixture

```yaml
brand: Northstar Analytics
domain: northstar.example
engines: [ChatGPT, Perplexity, Gemini]
audit_state: ready
primary_action: Get started free
```

## Evidence Boundary

- **FACT:** The onboarding screen was directly observed in the authenticated portal.
- **RECONSTRUCTION:** The fixture is fictional and local only.
- **NEEDS VERIFICATION:** No provider audit, prompt or tracking setup was started.

## Sources

- Authenticated HubSpot AEO onboarding, observed 2026-10-07.
