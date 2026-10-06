---
component: "Zoho Desk Ticket Properties Panel"
ui_category: "Application Layout > Context panel"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Grouped information cards expose ticket context and editing affordances beside the conversation."
---

# Component: Zoho Desk Ticket Properties Panel

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

Grouped information cards expose ticket context and editing affordances beside the conversation.

## Structure

Ticket Properties title/edit → Contact Info → Key Information → Ticket Information → Additional Information → Save/Cancel.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Property pane | Observe pristine state | Context cards and disabled controls visible | Pristine |

## Behavior & States

**OBSERVED:** Contact details, owner, status, due date, tags, product, skills, language, priority, channel and classification were visible. Save and Cancel were disabled in the inspected pristine state. Inline values were not edited.

States: Pristine grouped properties, Disabled Save and Cancel.

**NOT OBSERVED:** Field editing, validation, immediate-save behavior, permissions and persistence.

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
  "contact": "Taylor Reed",
  "owner": "Alex Morgan",
  "status": "Open",
  "priority": "-None-",
  "tags": [],
  "dirty": false
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Group related metadata into short cards and make unsaved-change controls legible.

## Evidence Gaps

**NEEDS VERIFICATION:** Field editing, validation, immediate-save behavior, permissions and persistence.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `27-ticket-detail.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
