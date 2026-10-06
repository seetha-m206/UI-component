---
component: "Zoho Desk Ticket Attachment Empty State"
ui_category: "Feedback > Empty state"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An empty attachment subview offers cloud and local-file entry points."
---

# Component: Zoho Desk Ticket Attachment Empty State

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

An empty attachment subview offers cloud and local-file entry points.

## Structure

Attachment tab → illustration → No Attachments available → context hint → Attach From Cloud / Browse Files.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Attachment tab | Open | Loading resolves to empty attachment panel | Empty |

## Behavior & States

**OBSERVED:** After loading, the ticket attachment tab displayed the empty message and two upload entry controls. Neither entry was activated.

States: Loading transiently, Empty attachment subview.

**NOT OBSERVED:** Cloud connection, native file chooser, uploads, validation, progress, removal and download behavior.

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
  "message": "No Attachments available",
  "actions": [
    "Attach From Cloud",
    "Browse Files"
  ],
  "upload": "guarded"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Explain the purpose of adding an attachment and keep the two source choices explicit.

## Evidence Gaps

**NEEDS VERIFICATION:** Cloud connection, native file chooser, uploads, validation, progress, removal and download behavior.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `30-attachments-empty.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
