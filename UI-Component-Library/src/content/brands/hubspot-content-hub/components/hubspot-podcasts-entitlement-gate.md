---
component: "HubSpot Podcasts Entitlement Gate"
ui_category: "Content > Podcasts"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Content Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Podcasts Entitlement Gate

## Location

- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=podcasts-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-podcasts-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The Professional gate described creating episodes from AI-generated audio or recordings and distributing them through one RSS feed.
- **OBSERVED:** Benefits included HubSpot audio hosting, directory distribution, written-content repurposing, an episode module for pages and built-in analytics.
- **OBSERVED:** Talk to Sales and Start 14-day trial were offered above a plan comparison table.
- **NOT ACTIVATED:** Sales contact, trial, hosting, RSS distribution, creation and publishing.
- **NEEDS VERIFICATION:** Show setup, episode editor, RSS configuration, directory connections, publishing and analytics.

## Fictional Local Fixture

```yaml
show: Northstar Operators
episode: Turning Signals into Action
status: locked
audio_source: ai_generated
distribution: [spotify, apple_podcasts]
```

## Evidence Boundary

- **FACT:** The Podcasts entitlement gate was directly observed.
- **RECONSTRUCTION:** The podcast fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated podcast workspace was accessible.

## Sources

- Authenticated HubSpot Podcasts entitlement gate, observed 2026-10-07.
