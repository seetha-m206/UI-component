---
component: "HubSpot Ads Onboarding"
ui_category: "Marketing > Advertising"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Marketing Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Ads Onboarding

## Location

- **OBSERVED:** Ads first-run screen at `/ads/343751787/new-onboarding`.

## Screenshots

- **OBSERVED:** `2026-10-07-ads-onboarding.png`.

## Screen, Actions & States

- **OBSERVED:** The hero offered Connect ad network and Create ad account.
- **OBSERVED:** A recommended setup checklist linked to contact segments, forms, landing pages and tracking-code installation.
- **OBSERVED:** The screen included an embedded “Welcome to HubSpot Ads” explainer video.
- **NOT ACTIVATED:** Network connection, account creation, checklist destinations and video playback.
- **NEEDS VERIFICATION:** OAuth scopes, campaign import, account selection, ad creation, audience sync, conversion events and reporting.

## Fictional Local Fixture

```yaml
network: Example Ads Network
connection_state: disconnected
setup:
  contact_segment: ready
  form: missing
  landing_page: missing
  tracking_code: missing
```

## Evidence Boundary

- **FACT:** The disconnected onboarding state was directly observed.
- **RECONSTRUCTION:** The network and checklist fixture are fictional.
- **NEEDS VERIFICATION:** No external ad network was connected.

## Sources

- Authenticated HubSpot Ads onboarding, observed 2026-10-07.
