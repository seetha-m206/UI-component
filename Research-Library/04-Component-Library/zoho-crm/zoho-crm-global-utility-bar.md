---
component: "Zoho CRM Global Utility Bar"
ui_category: "Application Layout > Global utility controls"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Search, quick create, calendar, marketplace, setup, profile and application controls stay available above the workspace."
---

# Component: Zoho CRM Global Utility Bar

## Overview

The top-right utility cluster provides a global record search field followed by quick-create, calendar, marketplace, setup, profile and application-menu controls.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Search records | Focus or type | **NEEDS VERIFICATION:** result behavior not exercised | Unverified |
| Create | Activate | **NEEDS VERIFICATION:** consequential creation surface not opened | Guarded |
| Calendar | Navigate | Direct calendar link is exposed | OBSERVED link only |
| Setup | Navigate | Direct settings link is exposed | OBSERVED link only |

## Behavior & States

**OBSERVED:** The controls are visually compact and remain outside the Home widget grid. Search is visually dominant through a wide tinted field.

**RECONSTRUCTION:** A local preview may show fictional matches but must never imply a provider-side search was executed.

**NEEDS VERIFICATION:** Search suggestions, keyboard shortcuts, create-menu contents, notification badges, popovers, account menu and permission gates.

## Rules & Validation

No utility control that could create, configure, connect, message or change account state was activated.

## Technical Data

- **OBSERVED:** Calendar and Setup expose links in the accessibility tree.
- **OBSERVED:** Several icon-only controls expose descriptions rather than visible labels.
- **NOT OBSERVED:** Query endpoints, debounce rules, result ranking and permission logic.

### State Fixtures

```json
{"query":"","suggestions":["Aurora Labs","Beacon Retail"],"notifications":2,"createMenuOpen":false}
```

## Accessibility

**NEEDS VERIFICATION:** accessible names for every icon, focus order, search announcements and popover focus management.

## Sources

Authenticated Zoho CRM Home, observed 2026-10-07. Private receipt `01-home-dashboard.png`.
