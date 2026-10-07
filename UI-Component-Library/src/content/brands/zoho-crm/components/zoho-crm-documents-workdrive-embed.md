---
component: "Zoho CRM Documents WorkDrive Embed"
ui_category: "Application Layout > Embedded workspace"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "The Documents module hosts a Zoho WorkDrive workspace inside the CRM content area."
---

# Component: Zoho CRM Documents WorkDrive Embed

## Overview

Documents integrates an embedded Zoho WorkDrive surface while retaining CRM navigation around it.

## Behavior & States

**OBSERVED:** A WorkDrive frame was present in the main content region and identified as Zoho WorkDrive.

**RECONSTRUCTION:** The local fixture uses a blank framed workspace without provider URLs or identifiers.

**NEEDS VERIFICATION:** File listing, preview, upload, sharing, search, permissions, errors and cross-product session behavior were not exercised.

## Rules & Validation

Treat CRM and WorkDrive as distinct product surfaces. Presence of the frame does not prove file access or provider authentication beyond the rendered shell.

## Technical Data

- **OBSERVED:** The embedded surface is framed within the CRM module.
- **OBSERVED:** CRM global navigation remains visible around the frame.
- **NOT OBSERVED:** Frame messaging, APIs or storage behavior.

### State Fixtures

```json
{"host":"Zoho CRM","embeddedProduct":"Zoho WorkDrive","folder":"Demo Documents","files":[]}
```

## Accessibility

**NEEDS VERIFICATION:** Frame title quality, focus transition into the embed and escape back to CRM navigation.

## Sources

Authenticated Zoho CRM Documents, observed 2026-10-07. Private receipt `09-documents-workdrive.png`.
