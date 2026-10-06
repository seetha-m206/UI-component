---
component: "Zoho Desk Editor Insert Menu"
ui_category: "Content Creation > Insert menu"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A rich-text insert disclosure groups structural content commands."
---

# Component: Zoho Desk Editor Insert Menu

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A rich-text insert disclosure groups structural content commands.

## Structure

Insert trigger → scrollable command menu with icons and labels.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Insert | Open | Command list appears | Expanded |
| Outside menu | Dismiss | Blank editor remains | Closed |

## Behavior & States

**OBSERVED:** The menu contained Insert link, Remove link, Insert HTML, Edit HTML, Insert table, Insert horizontal rule, Insert code and Insert quote. Only menu disclosure was exercised.

States: Expanded, Closed.

**NOT OBSERVED:** Command dialogs, HTML handling, inserted markup, sanitization and resulting document state.

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
  "commands": [
    "Insert link",
    "Remove link",
    "Insert HTML",
    "Edit HTML",
    "Insert table",
    "Insert horizontal rule",
    "Insert code",
    "Insert quote"
  ],
  "execution": "guarded"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Distinguish structural insertion commands from inline formatting.

## Evidence Gaps

**NEEDS VERIFICATION:** Command dialogs, HTML handling, inserted markup, sanitization and resulting document state.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `24-editor-insert-menu.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
