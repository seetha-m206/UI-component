---
component: Semrush Feature Upgrade Gate
ui_category: 'Feedback & Status > Plan Upgrade Gate'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Full-workspace Guru plan gate shown after selecting the Growth report tab.
---

# Component: Semrush Feature Upgrade Gate

## Human View

Full-workspace Guru plan gate shown after selecting the Growth report tab.

## State Fixtures

Gate visible and guarded local Upgrade feedback.

## Technical View

The gate replaces report content while leaving navigation and query context available. It combines a plan heading, explanatory copy, two benefit tiles, and a single primary Upgrade action.

## AI Context

Classify this as entitlement gating, not a loading or empty state. The requested report exists but is unavailable under the current plan.

## Evidence Boundary

- **OBSERVED:** Selecting Growth report showed Get more with Guru plan, 5K reports per day, Historical data, and Upgrade to Guru.
- **RECONSTRUCTION:** Guarded local Upgrade feedback and simplified benefit artwork.
- **NOT OBSERVED:** Upgrade destination, pricing, checkout flow, entitlement refresh, or Compare by countries access.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
