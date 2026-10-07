---
component: "Zoho CRM List Sort Menu"
ui_category: "Data Controls > Sort menu"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A compact sort disclosure offers a field choice, direction, Cancel and an initially disabled Apply action."
---

# Component: Zoho CRM List Sort Menu

## Overview

Opening Sort displayed a compact menu with Sort By, an initial None value, an Ascending direction, Cancel and a disabled Apply button.

## Behavior & States

**OBSERVED:** Apply remained disabled before a sort field was chosen. Cancel closed the menu without changing the list.

**RECONSTRUCTION:** A local fixture may sort fictional leads by Company or Created Time.

**NEEDS VERIFICATION:** Field chooser, descending option, multi-sort, validation, applied indicators, persistence and server response.

## Technical Data

- **OBSERVED:** Cancel and Apply expose button roles. Disabled state is exposed for Apply.
- **NOT OBSERVED:** Sort parameter format or stability guarantees.

```json
{"sortBy":null,"direction":"ascending","applyDisabled":true,"open":true}
```

## Accessibility

**NEEDS VERIFICATION:** dialog or menu role, focus trap, Escape behavior, chooser labeling and applied-state announcement.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. The menu was opened and cancelled without applying a sort.
