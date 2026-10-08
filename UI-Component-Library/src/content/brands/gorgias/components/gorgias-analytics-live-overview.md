---
component: 'Gorgias Analytics Live Overview'
ui_category: 'Analytics > Real-Time Support Overview'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Live support overview with channel and agent filters, operational KPI cards, support-volume chart and early-access notice.'
---

# Component: Gorgias Analytics Live Overview

## Location

- **OBSERVATION:** Analytics > Real-time monitoring > Overview at `/app/stats/live-overview`.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-analytics-live-overview.png)

## Structure

- **OBSERVATION:** Navigation groups cover real-time monitoring, dashboards, AI and automation, quality, support performance, insights and voice.
- **OBSERVATION:** Main header contains Learn, channel and agent filters.
- **OBSERVATION:** KPI cards show online or offline agents and assigned or unassigned open tickets.
- **OBSERVATION:** Support Volume chart distinguishes tickets created, replied and closed.
- **RECONSTRUCTION:** Dates, business hours, timezone and live workspace counts are fictionalized.

## Actions

| Action | Result or boundary |
| --- | --- |
| Change filters | Visible but not exercised |
| Early-access tour or opt-in | Visible but not exercised |
| Create dashboard | Visible navigation action only |

## Behavior & States

- **OBSERVATION:** A dated notice described an upcoming analytics experience and opt-in boundary.
- **NOT OBSERVED:** Filtered charts, exports, dashboard creation, entitlement variants and recurring refresh.

## Technical Data

- **OBSERVATION / Network:** Sanitized request patterns included `/api/managed-dashboards`. Initiation does not prove dashboard content or persistence.

## Evidence Boundary

- **NOT OBSERVED:** No filter, opt-in, dashboard, export or report configuration changed.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
