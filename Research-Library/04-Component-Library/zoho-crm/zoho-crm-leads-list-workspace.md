---
component: "Zoho CRM Leads List Workspace"
ui_category: "Data Display > CRM list workspace"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Custom views, list controls, advanced filters, a record table and pagination form the Leads workspace."
---

# Component: Zoho CRM Leads List Workspace

## Overview

The Leads screen divides the main canvas into custom-view navigation, a list toolbar, an optional filter sidebar, a wide record table and a pagination footer.

## Behavior & States

**OBSERVED:** The selected All Leads view rendered thirty visible rows. The filter sidebar and table remained independently framed inside the workspace.

**RECONSTRUCTION:** Public examples use fictional leads and companies only.

**NEEDS VERIFICATION:** Loading, filtered-empty, permission-empty, error, mobile, compact and offline states.

## Technical Data

- **OBSERVED:** The records region exposes `role="main"` with `id="viewcontainer"`.
- **OBSERVED:** At the inspected viewport it occupied approximately 658 × 1014 CSS pixels.
- **NOT OBSERVED:** Data query, cache, record schema, authorization or persistence implementation.

```json
{"view":"All Leads","filtersOpen":true,"displayMode":"list","rows":[{"name":"Avery Chen","company":"Northwind Demo"}]}
```

## Accessibility

**OBSERVED:** Major regions, table cells and many controls expose roles and names. **NEEDS VERIFICATION:** focus order, keyboard navigation and announcements.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. Private receipt `02-leads-list.png`.
