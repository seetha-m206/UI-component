---
component: "HubSpot SEO Entitlement Gate"
ui_category: "Marketing > SEO"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Marketing Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot SEO Entitlement Gate

## Location

- **OBSERVED:** SEO locked route at `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=seo-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-seo-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The gate promoted actionable recommendations across speed, mobile, on-page SEO and accessibility.
- **OBSERVED:** Additional sections described topic-cluster planning, canonical URLs, ranking reports and Google Search Console data.
- **OBSERVED:** Talk to Sales, Start 14-day trial and View pricing preceded the Free versus Professional comparison table.
- **NOT ACTIVATED:** Sales, trial, pricing or integration actions.
- **NEEDS VERIFICATION:** Recommendation workspace, scans, topic planning, Search Console connection and reporting.

## Fictional Local Fixture

```yaml
site: northstar.example
recommendations:
  critical: 2
  high: 5
  medium: 11
topic_cluster: Analytics Operations
entitlement: locked
```

## Evidence Boundary

- **FACT:** The entitlement and feature-description screen was observed.
- **RECONSTRUCTION:** The audit counts and topic are fictional.
- **NEEDS VERIFICATION:** No SEO workspace or provider scan was accessible.

## Sources

- Authenticated HubSpot SEO entitlement gate, observed 2026-10-07.
