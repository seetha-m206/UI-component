---
component: "Zoho CRM Deals Create Dashboard Link"
ui_category: "Navigation > Analytics link"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "An inline onboarding link connects pipeline monitoring guidance to the Analytics dashboard area."
---

# Component: Zoho CRM Deals Create Dashboard Link

## Overview

The second Deals guidance row offers a dashboard-oriented next step for pipeline tracking.

## Behavior & States

**OBSERVED:** Create Dashboard appeared inline after the pipeline-tracking prompt and targeted Analytics.

**RECONSTRUCTION:** The fixture represents the destination without creating any dashboard.

**NEEDS VERIFICATION:** Dashboard builder, permissions, templates, save flow and resulting analytics were not exercised.

## Rules & Validation

The link label describes an intended workflow, not evidence that activation immediately creates a dashboard.

## Technical Data

- **OBSERVED:** The destination is the CRM Analytics area.
- **OBSERVED:** The link is embedded in the guidance row.
- **NOT OBSERVED:** Builder state, persistence or dashboard output.

### State Fixtures

```json
{"label":"Create dashboard","enabled":false,"destination":"Analytics"}
```

## Accessibility

**NEEDS VERIFICATION:** Link purpose outside context, focus treatment and destination announcement.

## Sources

Authenticated Zoho CRM Deals, observed 2026-10-07. Private receipt `07-deals-empty-state.png`.
