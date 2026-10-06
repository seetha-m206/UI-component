---
component: "Zoho Desk Ticket Detail Tabs"
ui_category: "Navigation > Tabs"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Ticket subviews share a stable subject header and metadata."
---

# Component: Zoho Desk Ticket Detail Tabs

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

Ticket subviews share a stable subject header and metadata.

## Structure

Conversation/count/disclosure → Resolution → Time Entry → Attachment → more tabs.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Attachment | Open tab | Attachment route and empty state appear | Attachment active |
| Back | Return to list | Ticket list shown | List |

## Behavior & States

**OBSERVED:** Conversation was active initially. Attachment changed the route to an attachments suffix and displayed an empty state while preserving queue and properties. Resolution and Time Entry were visible but not opened.

States: Conversation active, Attachment active.

**NOT OBSERVED:** Resolution, time entry, more tabs, keyboard tab navigation and tab state persistence.

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
  "tabs": [
    "1 Conversation",
    "Resolution",
    "Time Entry",
    "Attachment"
  ],
  "selected": "Attachment"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Preserve record context when switching subviews and clearly mark the selected view.

## Evidence Gaps

**NEEDS VERIFICATION:** Resolution, time entry, more tabs, keyboard tab navigation and tab state persistence.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `27-ticket-detail.jpg`.
- **OBSERVED:** Private receipt `30-attachments-empty.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
