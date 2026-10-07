---
component: "Zoho CRM Business Card Summary"
ui_category: "Data Display > Record summary"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A prominent record summary surfaces owner, primary contact methods and current status before full details."
---

# Component: Zoho CRM Business Card Summary

## Overview

The business-card area presents Lead Owner, Email, Phone, Mobile and Lead Status as a compact summary above the full field sections.

## Behavior & States

**OBSERVED:** Values appeared as button-like inline-edit targets. Email was linked and phone values had call affordances.

**RECONSTRUCTION:** Public fixtures use `.invalid` email and reserved fictional phone values.

**NEEDS VERIFICATION:** Inline editing, calling, email launch, empty values, validation, save behavior and permissions.

## Technical Data

- **OBSERVED:** Region exposes `id="dvbusinesscardContainer"`.
- **NOT OBSERVED:** Communication integration or field-update API.

```json
{"owner":"Morgan Lee","email":"avery@example.invalid","phone":"+1 555 0100","mobile":"+1 555 0101","status":"Contacted"}
```

## Accessibility

**NEEDS VERIFICATION:** label-value relationships, inline-edit naming, call-link purpose and error feedback.

## Sources

Authenticated Zoho CRM lead detail, observed 2026-10-07. Live contact values remain private.
