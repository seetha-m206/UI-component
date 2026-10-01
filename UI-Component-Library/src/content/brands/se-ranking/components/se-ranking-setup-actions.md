---
component: SE Ranking setup actions
ui_category: 'Actions > Setup CTA'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: AI tracking, analytics, and keyword setup calls to action, with the live Add keywords import path observed end to end.
---

# Component: SE Ranking setup actions

## Human View

Project widgets use compact setup actions for AI tracking, analytics connection, and keyword tracking when data is absent or a module is not configured.

## State Fixtures

- Observed action labels assembled into one comparison specimen.
- Observed AI search-engine setup screen with engine tabs, country, location, language, brand, and current Google India row.
- Observed Analytics and traffic connector options for Google Analytics, Google Search Console, and Matomo Analytics.
- Guarded local click feedback.
- Synthetic disabled set.

## Actions

| Element | Action | Local result | Evidence boundary |
| --- | --- | --- | --- |
| Set up AI tracking | Activate | Opened Search engines setup in a new tab | **OBSERVED** |
| Connect analytics | Activate | The widget exposed three connector choices | **OBSERVED OPTIONS** |
| Add keywords | Activate | Opens local import reconstruction | Live import flow **OBSERVED** |

## Evidence Boundary

- **OBSERVED:** Action labels and widget contexts. AI setup opened its destination. Analytics exposed three providers. Add keywords opened the import dialog and completed a one-keyword TXT import.
- **RECONSTRUCTION:** Unified card presentation, disabled state, and local feedback.
- **NOT OBSERVED:** Saving a new AI engine, completing OAuth, permissions, and quota exhaustion.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview and keyword import, 2026-09-30 and 2026-10-01.
