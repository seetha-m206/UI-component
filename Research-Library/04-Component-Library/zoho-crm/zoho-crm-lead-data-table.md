---
component: "Zoho CRM Lead Data Table"
ui_category: "Data Display > Record table"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A selectable record table presents configurable lead columns with linked names and contact fields."
---

# Component: Zoho CRM Lead Data Table

## Overview

The Leads table presents selection controls followed by Lead Name, Company, Email, Phone, Lead Source and Lead Owner columns. Lead names and email values were rendered as links.

## Behavior & States

**OBSERVED:** Thirty rows were visible on the inspected first page. Live names, companies, email addresses, phone numbers and owners were treated as private evidence and are not reproduced.

**RECONSTRUCTION:** Fictional rows demonstrate column structure only.

**NEEDS VERIFICATION:** Row hover actions, inline edit, navigation, column resizing, horizontal scrolling, sorting, bulk selection and loading states.

## Technical Data

- **OBSERVED:** The table exposes semantic rows, cells and row checkboxes.
- **OBSERVED:** View Settings is available beside the table.
- **NOT OBSERVED:** Record API, PII controls or row-level permissions.

```json
{"columns":["Lead Name","Company","Email","Phone","Lead Source","Lead Owner"],"rows":[{"name":"Avery Chen","company":"Northwind Demo","email":"avery@example.invalid","phone":"+1 555 0100","source":"Web","owner":"Morgan Lee"}]}
```

## Accessibility

**NEEDS VERIFICATION:** header associations, link purpose, checkbox labels, row navigation and virtualization behavior.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. Private receipt `02-leads-list.png`.
