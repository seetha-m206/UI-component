---
component: "Zoho CRM Home Header and View Selector"
ui_category: "Page Header > Home view controls"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A welcome header pairs refresh, named-home selection and overflow controls above the dashboard grid."
---

# Component: Zoho CRM Home Header and View Selector

## Overview

The Home page header combines a greeting and illustration with a page refresh control, named-home selector and overflow action.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Refresh | Activate | **NEEDS VERIFICATION:** refresh semantics not exercised | Unverified |
| Named-home selector | Open | **NEEDS VERIFICATION:** menu contents not inspected | Unverified |
| Overflow | Open | **NEEDS VERIFICATION:** actions not inspected | Unverified |

## Behavior & States

**OBSERVED:** The header is a 57-pixel-high complementary region above the widget grid at the inspected viewport. It exposes the current named Home view.

**RECONSTRUCTION:** Public fixtures replace the signed-in person's name with a fictional role-oriented view.

**NEEDS VERIFICATION:** Personalization, default selection, sharing, edit modes, persistence, refresh scope and permissions.

## Technical Data

- **OBSERVED:** Header region uses `id="homePageContainer"` and exposes `role="complementary"`.
- **OBSERVED:** Sample typography inherits Zoho Puvi at 14px.
- **NOT OBSERVED:** Data refresh API, cache policy or view configuration schema.

### State Fixtures

```json
{"greeting":"Welcome Alex Morgan","selectedView":"Sales Manager Home","views":["Sales Manager Home","Executive Overview"]}
```

## Accessibility

**OBSERVED:** Refresh is exposed as a button. **NEEDS VERIFICATION:** selector labeling, menu semantics, focus return and status announcement after refresh.

## Sources

Authenticated Zoho CRM Home, observed 2026-10-07. Private receipt `01-home-dashboard.png`.
