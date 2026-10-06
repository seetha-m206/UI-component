---
component: "Zoho Desk Main Content Area"
ui_category: "Application Layout > Main content area"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "The content wrapper supports list, form and multi-pane ticket-detail compositions."
---

# Component: Zoho Desk Main Content Area

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

The content wrapper supports list, form and multi-pane ticket-detail compositions.

## Structure

List: toolbar and entries. Form: stacked sections and contextual side panel. Detail: queue, property pane and conversation area.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Add new Ticket | Open form | List composition changes to sectioned form | Form |
| Sample ticket subject | Open detail | Queue and properties remain beside ticket body | Detail |

## Behavior & States

**OBSERVED:** The form uses a pale background behind white section cards. Detail uses vertical separators to partition the queue, properties and ticket body.

States: List composition, Sectioned form, Multi-pane detail.

**NOT OBSERVED:** Resizable divider behavior, narrow viewport adaptation and layout persistence.

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
  "listRows": 1,
  "formSections": [
    "Ticket Information",
    "Additional Information",
    "Add Attachment"
  ],
  "detailPanes": [
    "Queue",
    "Properties",
    "Conversation"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Use consistent framing while letting each task determine the number and purpose of panes.

## Evidence Gaps

**NEEDS VERIFICATION:** Resizable divider behavior, narrow viewport adaptation and layout persistence.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `01-ticket-workspace.jpg`.
- **OBSERVED:** Private receipt `18-blank-ticket-form.jpg`.
- **OBSERVED:** Private receipt `27-ticket-detail.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
