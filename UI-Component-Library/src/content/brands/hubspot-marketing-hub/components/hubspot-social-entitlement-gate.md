---
component: "HubSpot Social Entitlement Gate"
ui_category: "Marketing > Social"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Marketing Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Social Entitlement Gate

## Location

- **OBSERVED:** Social locked route at `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=social-media-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-social-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The gate described publishing and scheduling across major networks, keyword monitoring, comment replies and cross-channel reporting.
- **OBSERVED:** Benefit sections covered campaign-connected publishing, suggested posting times, social mention streams and ROI reporting.
- **OBSERVED:** Conversion controls and a Free versus Professional comparison table were visible.
- **NOT ACTIVATED:** Talk to Sales, Start trial, View pricing, network connection or publishing.
- **NEEDS VERIFICATION:** Composer, approval, calendar, network authorization, monitoring, engagement and analytics states.

## Fictional Local Fixture

```yaml
post: Northstar launch recap
channels: [LinkedIn, Instagram]
schedule_at: 2026-11-04T15:30:00Z
approval_state: pending
entitlement: locked
```

## Evidence Boundary

- **FACT:** The entitlement gate was directly observed.
- **RECONSTRUCTION:** The social post fixture is fictional and local only.
- **NEEDS VERIFICATION:** No account was connected and no post was created or sent.

## Sources

- Authenticated HubSpot Social entitlement gate, observed 2026-10-07.
