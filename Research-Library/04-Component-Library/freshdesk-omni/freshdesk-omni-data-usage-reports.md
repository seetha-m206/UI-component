---
component: "Freshdesk Omni Data Usage Reports"
ui_category: "Administration > Data Usage"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the data usage reports read-only with consequential actions left untouched."
---

# Freshdesk Omni Data Usage Reports

## Location

- **OBSERVED:** Admin → Account → Data Usage.

## Structure

- **OBSERVED:** The Data Usage route opened an embedded Analytics All reports library with navigation, search, sorting and curated integration and API usage report rows, plus an optional product tour.
- **RECONSTRUCTION:** The local fixture records the route relationship with fictional dates and neutral report metadata.

## Actions

- **NOT OBSERVED:** No report, search, sort, tour, schedule or data export was opened.

## Technical Data

- **OBSERVED / DOM:** Embedded analytics navigation, report columns, curated badges and two usage report categories were exposed.
- **NEEDS VERIFICATION:** Report contents, usage metrics, entitlements, data freshness, scheduling and exports.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni data usage reports, 2026-10-08.
