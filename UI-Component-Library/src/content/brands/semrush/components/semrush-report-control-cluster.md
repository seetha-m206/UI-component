---
component: Semrush Report Control Cluster
ui_category: 'Filtering & Search > Country Device Date Controls'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Compact report filter cluster combining country database choices, device, historical date, and currency context.
---

# Component: Semrush Report Control Cluster

## Human View

Compact report filter cluster combining country database choices, device, historical date, and currency context.

## State Fixtures

US selected, alternate country, More selected, Desktop or Mobile, and current or prior date.

## Technical View

Country options are a segmented radio group. Device and time period are separate selectors. Currency is read-only context rather than an editable control.

## AI Context

Attach every downstream metric to country, device, time period, and currency. Do not merge these into one unlabeled filter string.

## Evidence Boundary

- **OBSERVED:** Worldwide, US, UK, DE, More, Desktop, Sep 29 2026, and USD in the authenticated report header.
- **RECONSTRUCTION:** Mobile option, alternate date, local state transitions, and fictional downstream values.
- **NOT OBSERVED:** More-country popover, date menu contents, Mobile results, historical availability limits, or currency switching.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
