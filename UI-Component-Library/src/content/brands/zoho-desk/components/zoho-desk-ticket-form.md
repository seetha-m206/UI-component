---
component: "Zoho Desk Ticket Form"
ui_category: "Application Layout > Form shell"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A sectioned creation form pairs required ticket inputs with a contact context panel."
---

# Component: Zoho Desk Ticket Form

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A sectioned creation form pairs required ticket inputs with a contact context panel.

## Structure

Breadcrumb/template header → Ticket Information → Additional Information → Add Attachment → related details → fixed footer.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Add new Ticket | Open | Blank form loads | Pristine form |
| Cancel | Leave untouched form | Ticket list returns without submit | List |

## Behavior & States

**OBSERVED:** Contact Name, Subject and Status showed required markers. Status defaulted to Open and Channel to Phone. Priority, Language and Classifications showed -None-. Contact-related details remained empty. No field value was entered.

States: Pristine default, Editor expanded, Contact picker open, Cancelled.

**NOT OBSERVED:** Submit validation, success, duplicate detection, autosave, permission-dependent fields and persistence.

## Rules & Validation

**OBSERVED:** Disclosure, navigation and pristine dismissal only. No create, submit, save, delete, send, purchase, settings change or upload action was executed.

**NEEDS VERIFICATION:** Server validation, authorization enforcement, error paths and persistence are not established by a menu or screenshot. Passive read receipts and provider telemetry were not audited.

## Technical Data

- **OBSERVED:** Rendered screen, accessibility tree and the narrow interactions described above.
- **OBSERVED:** The form uses ZohoPuvi with system fallbacks. Sample section headings measured 18px/600. The form page title measured 16px/600. These are desktop samples, not universal design tokens.
- **NOT OBSERVED:** Network requests, response schemas, implementation source, backend architecture and error handling. No API calls or hidden application state were inspected.
- **RECONSTRUCTION:** Fictional fixture data below describes a local component state. It does not establish provider outcomes or include copied account/contact content.

### State Fixtures

**RECONSTRUCTION — fictional local data only.**

```json
{
  "contact": null,
  "subject": "",
  "description": "",
  "status": "Open",
  "priority": "-None-",
  "language": "-None-",
  "channel": "Phone",
  "owner": "Alex Morgan"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep required fields visually clear and show dependent context without forcing navigation away.

## Evidence Gaps

**NEEDS VERIFICATION:** Submit validation, success, duplicate detection, autosave, permission-dependent fields and persistence.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `18-blank-ticket-form.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
