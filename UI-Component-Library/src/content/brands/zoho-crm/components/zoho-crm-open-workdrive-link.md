---
component: "Zoho CRM Open WorkDrive Link"
ui_category: "Navigation > External product link"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A contextual link offers to open the document workspace directly in Zoho WorkDrive."
---

# Component: Zoho CRM Open WorkDrive Link

## Overview

The Documents shell includes a direct link from CRM to the corresponding WorkDrive product surface.

## Behavior & States

**OBSERVED:** Open WorkDrive appeared near the product label and targeted a WorkDrive route.

**RECONSTRUCTION:** The fixture records a disabled external-product link with no account identifiers.

**NEEDS VERIFICATION:** New-tab behavior, destination authentication, folder continuity, access errors and return navigation were not exercised.

## Rules & Validation

Do not activate cross-product links during bounded observation unless required. Strip provider identifiers from public fixtures.

## Technical Data

- **OBSERVED:** The action is a link, not an inline document command.
- **OBSERVED:** Its destination belongs to the WorkDrive domain.
- **NOT OBSERVED:** Navigation target state or permission enforcement.

### State Fixtures

```json
{"label":"Open WorkDrive","enabled":false,"destination":"WorkDrive workspace"}
```

## Accessibility

**NEEDS VERIFICATION:** Whether the accessible name announces the product boundary and new browsing context.

## Sources

Authenticated Zoho CRM Documents, observed 2026-10-07. Private receipt `09-documents-workdrive.png`.
