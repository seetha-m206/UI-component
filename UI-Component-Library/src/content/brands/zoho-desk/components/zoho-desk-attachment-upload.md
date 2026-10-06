---
component: "Zoho Desk Attachment Upload Surface"
ui_category: "Forms > File upload"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A dashed upload area combines drag-and-drop copy and a split browse control."
---

# Component: Zoho Desk Attachment Upload Surface

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A dashed upload area combines drag-and-drop copy and a split browse control.

## Structure

Add Attachment heading → drop area → upload instruction → Browse Files/arrow → size hint.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Upload surface | Observe without activation | No file picker opened and no upload initiated | Empty |

## Behavior & States

**OBSERVED:** The form advertised Upload or Drag and Drop file(s) here and Maximum file size 40 MB. Browse Files and its adjacent disclosure were visible. Neither was activated.

States: Empty upload surface.

**NOT OBSERVED:** Allowed types, enforcement of the displayed size limit, multiple upload behavior, progress, failure and removal.

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
  "files": [],
  "displayedMaxSize": "40 MB",
  "upload": "guarded"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** State upload constraints before the user chooses a file, and verify enforcement separately.

## Evidence Gaps

**NEEDS VERIFICATION:** Allowed types, enforcement of the displayed size limit, multiple upload behavior, progress, failure and removal.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `18-blank-ticket-form.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
