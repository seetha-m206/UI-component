---
component: "Zoho CRM Custom View Tabs and Menu"
ui_category: "Navigation > Saved views"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Pinned view tabs sit beside a menu for dropdown presentation, new-view creation and view management."
---

# Component: Zoho CRM Custom View Tabs and Menu

## Overview

The Leads workspace surfaces pinned views as tabs and places additional view management behind a More Custom View disclosure.

## Behavior & States

**OBSERVED:** Today's Leads and All Leads appeared as tabs. Expanding More Custom View exposed Show custom views as Dropdown, New Custom View and Manage Custom View. The menu was collapsed without choosing an action.

**RECONSTRUCTION:** Fictional examples use views such as "New This Week" and "Enterprise Prospects".

**NEEDS VERIFICATION:** Creating, editing, deleting, sharing, pinning, reordering and persisting views.

## Technical Data

- **OBSERVED:** The menu control exposes combobox-like expanded and collapsed states.
- **OBSERVED:** New and Manage actions are links inside the disclosure.
- **NOT OBSERVED:** View-definition schema or sharing permissions.

```json
{"selected":"All Leads","pinned":["New This Week","All Leads"],"menuOpen":false}
```

## Accessibility

**NEEDS VERIFICATION:** tab semantics, arrow-key behavior, menu focus transfer and focus return.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. The disclosure was opened and closed without mutation.
