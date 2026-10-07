---
component: "Zoho CRM Grouped Module Navigation"
ui_category: "Navigation > Grouped module navigation"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Expandable Sales, Activities, Inventory, Support and Integrations groups organize module links inside a teamspace."
---

# Component: Zoho CRM Grouped Module Navigation

## Overview

The CRM Teamspace rail groups related modules into expandable folders while leaving cross-product destinations such as Home, Workqueue, Reports and Analytics above the teamspace.

## Structure

Teamspace header → module search → expandable folder headers → child module links → standalone module links.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Sales | Expand | Leads, Contacts, Accounts, Deals, Forecasts, Documents and Campaigns are visible | OBSERVED |
| Activities | Expand | Tasks, Meetings and Calls are visible | OBSERVED |
| Inventory | Expand | Products, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices and Vendors are visible | OBSERVED |
| Support | Expand | Cases and Solutions are visible | OBSERVED |
| Integrations | Expand | Social and Visits are visible | OBSERVED |

## Behavior & States

**OBSERVED:** Folder controls expose expanded or collapsed state and a secondary accessibility action. Expanded groups insert their child links into the rail.

**RECONSTRUCTION:** Fictional fixtures can retain the information architecture while replacing account-specific visibility.

**NEEDS VERIFICATION:** Dragging, reordering, adding modules, teamspace editing, permission-based hiding and persistence across sessions.

## Rules & Validation

**OBSERVED:** Folder disclosure is reversible. One ambiguous collapse interaction navigated to the read-only Vendors list, so subsequent navigation should target explicit links rather than visual proximity.

## Technical Data

- **OBSERVED:** Folder buttons expose names and expanded state.
- **OBSERVED:** Child links expose direct module URLs.
- **NOT OBSERVED:** Navigation configuration APIs or permission resolution.

### State Fixtures

```json
{"teamspace":"Revenue Operations","groups":[{"label":"Sales","expanded":true,"items":["Leads","Contacts","Accounts","Deals"]},{"label":"Activities","expanded":true,"items":["Tasks","Meetings","Calls"]}]}
```

## Accessibility

**OBSERVED:** Disclosure state is exposed. **NEEDS VERIFICATION:** keyboard handling, focus movement after expansion and nested-list semantics.

## Sources

Authenticated Zoho CRM Home, observed 2026-10-07. Private receipt `01-home-dashboard.png`.
