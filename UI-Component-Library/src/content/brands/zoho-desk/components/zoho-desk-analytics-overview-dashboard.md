---
component: "Zoho Desk Analytics Overview Dashboard"
ui_category: "Analytics > Support overview"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A support dashboard combines a time range, ticket KPI cards, trend chart and channel and handling summaries."
---

# Component: Zoho Desk Analytics Overview Dashboard

## Overview

The Overview Dashboard showed a Last 24 Hours control, six KPI cards, Tickets Stats totals and a time-series chart, followed by Traffic Analysis, Average Handling Time and Happiness Rate sections.

## Behavior & States

**OBSERVED:** The dashboard rendered with current point-in-time values and chart labels.

**RECONSTRUCTION:** The preview uses invented counts and does not represent Centilio operations.

**NOT OBSERVED:** Time-range changes, filtering, drill-down, export, refresh semantics, reports and Advanced Analytics.

## State Fixtures

```json
{"range":"Last 24 Hours","open":6,"onHold":2,"overdue":1,"dueToday":3,"unassigned":1,"channel":"Email"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Live counts were treated as transient and were not reused.
