---
component: "Zoho CRM Sectioned Record Details"
ui_category: "Data Display > Field sections"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Collapsible detail sections group record fields while exposing inline-edit targets."
---

# Component: Zoho CRM Sectioned Record Details

## Overview

The record detail area groups fields under Lead Information, Address Information and Description Information inside an expanded Hide Details accordion.

## Behavior & States

**OBSERVED:** Field labels and values form repeated rows. Many values are button-like inline edit targets, including empty fields.

**RECONSTRUCTION:** Fictional values replace all observed identity, contact, financial, address and description data.

**NEEDS VERIFICATION:** Collapse behavior, inline editors, field types, validation, required fields, save and cancel, layout customization and permissions.

## Technical Data

- **OBSERVED:** The details region exposes `id="dvinfoContainer"`.
- **OBSERVED:** Field wrappers use repeated identifiers derived from field API names.
- **NOT OBSERVED:** Layout metadata or update contracts.

```json
{"sections":[{"title":"Lead Information","fields":[{"label":"Industry","value":"Software"},{"label":"Rating","value":"Warm"}]},{"title":"Address Information","fields":[{"label":"City","value":"Toronto"}]}]}
```

## Accessibility

**NEEDS VERIFICATION:** accordion naming, field label association, read versus edit mode and validation announcements.

## Sources

Authenticated Zoho CRM lead detail, observed 2026-10-07. Live values are excluded.
