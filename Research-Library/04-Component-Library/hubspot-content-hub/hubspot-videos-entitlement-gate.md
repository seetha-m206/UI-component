---
component: "HubSpot Videos Entitlement Gate"
ui_category: "Content > Videos"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Videos Entitlement Gate

## Location

- **OBSERVED:** `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=videos-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-videos-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The Professional gate positioned CRM-connected video hosting, editing, clipping, repurposing and optimization.
- **OBSERVED:** Benefits covered AI clips and translation, transcript editing, captions, cropping, brand styling, in-video forms and CTAs, and conversion or revenue analytics.
- **OBSERVED:** Talk to Sales and Start 14-day trial appeared above a Free versus Professional comparison table.
- **NOT ACTIVATED:** Sales contact, trial, upgrade, upload, edit, embed and analytics actions.
- **NEEDS VERIFICATION:** Video library, editor, player settings, publishing, forms, CTAs and performance reporting.

## Fictional Local Fixture

```yaml
video: Northstar Product Tour
status: locked
duration_seconds: 94
caption_language: en
cta: Request a demo
```

## Evidence Boundary

- **FACT:** The Videos entitlement gate was directly observed.
- **RECONSTRUCTION:** The video fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated video workspace was accessible.

## Sources

- Authenticated HubSpot Videos entitlement gate, observed 2026-10-07.
