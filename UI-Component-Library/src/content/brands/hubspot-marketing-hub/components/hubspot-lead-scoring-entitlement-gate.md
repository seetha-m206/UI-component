---
component: "HubSpot Lead Scoring Entitlement Gate"
ui_category: "Marketing > Lead Scoring"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Marketing Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Lead Scoring Entitlement Gate

## Location

- **OBSERVED:** Lead Scoring locked route at `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=mh-lead-scoring-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-lead-scoring-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The gate framed lead scoring around profile fit and behavioral engagement.
- **OBSERVED:** Benefit sections described flexible score categories, score decay, threshold alerts, separate fit and engagement dimensions and record-level score history.
- **OBSERVED:** Talk to Sales, Start 14-day trial and View pricing were available above plan comparison tables.
- **NOT ACTIVATED:** Sales, trial, pricing or score creation.
- **NEEDS VERIFICATION:** Score builder, criteria validation, decay, thresholds, recalculation, permissions and CRM-card history.

## Fictional Local Fixture

```yaml
model: Northstar Qualified Interest
fit_score: 72
engagement_score: 48
threshold: 100
decay_days: 30
entitlement: locked
```

## Evidence Boundary

- **FACT:** The entitlement gate and described capabilities were observed.
- **RECONSTRUCTION:** The model and scores are fictional.
- **NEEDS VERIFICATION:** No scoring model was created or evaluated.

## Sources

- Authenticated HubSpot Lead Scoring entitlement gate, observed 2026-10-07.
