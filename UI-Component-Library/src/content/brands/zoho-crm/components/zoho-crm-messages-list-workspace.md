---
component: "Zoho CRM Messages List Workspace"
ui_category: "Data Display > List workspace"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "The Messages workspace combines a named view, filtering controls, sorting and an empty result region."
---

# Component: Zoho CRM Messages List Workspace

## Overview

The Messages workspace combines a named view, filtering controls, sorting and an empty result region.

## Behavior & States

**OBSERVED:** The visible view was All Messages with filters on the left and sort controls above an empty list.

**RECONSTRUCTION:** The fixture below uses a fictional workspace and synthetic state to document the reusable pattern.

**NEEDS VERIFICATION:** Activation outcomes, populated data, permission differences, responsive behavior, loading and error states were not exercised.

## Rules & Validation

Keep the observed structure separate from provider behavior. Visible actions were documented but not activated.

## Technical Data

- **OBSERVED:** The component was visible in the authenticated module surface.
- **RECONSTRUCTION:** No live organization values or record data are copied into this record.
- **NOT OBSERVED:** Provider-side mutations, integration status and downstream outcomes.

### State Fixtures

```json
{"module":"Messages","view":"All Messages","visibleRecords":0,"sort":{"field":"Message Time","direction":"Descending"}}
```

## Accessibility

**NEEDS VERIFICATION:** Focus order, keyboard behavior, announced state and screen-reader relationships.

## Sources

Authenticated Zoho CRM module, observed 2026-10-07. Private receipt `messages-provider-observation.json` and screenshot `25-messages.png`.
