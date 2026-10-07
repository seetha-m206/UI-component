---
component: "Zoho CRM Advanced Filter Sidebar"
ui_category: "Filtering > Advanced filter panel"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A searchable sidebar groups system, field and related-module criteria behind checkbox disclosures."
---

# Component: Zoho CRM Advanced Filter Sidebar

## Overview

The left filter panel combines a search input with expanded System Defined Filters, Filter By Fields and Filter By Related Modules sections.

## Behavior & States

**OBSERVED:** System criteria included activities, campaigns, email status, record actions, touched and untouched records, and cadences. Field and related-module sections exposed many checkbox criteria.

**RECONSTRUCTION:** Fictional filter examples may use Industry, Lead Source and Recent Activity while leaving provider data untouched.

**NEEDS VERIFICATION:** Selecting a criterion, condition editors, validation, multi-filter logic, clear-all, save-filter and result updates.

## Technical Data

- **OBSERVED:** The panel exposes `role="complementary"` and `id="lv_left_filter"`.
- **OBSERVED:** The sampled panel used Zoho Puvi at 14px and a six-pixel radius.
- **NOT OBSERVED:** Filter serialization, query syntax or server evaluation.

```json
{"search":"","sections":["System Defined Filters","Filter By Fields","Filter By Related Modules"],"selected":[]}
```

## Accessibility

**OBSERVED:** Criteria expose checkbox roles and names. **NEEDS VERIFICATION:** group labeling, keyboard traversal and dynamic-count announcements.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. No checkbox was changed.
