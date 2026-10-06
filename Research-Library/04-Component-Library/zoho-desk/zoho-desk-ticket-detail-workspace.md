---
component: "Zoho Desk Ticket Detail Workspace"
ui_category: "Application Layout > Split-pane shell"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "The detail workspace preserves queue context beside properties and the conversation."
---

# Component: Zoho Desk Ticket Detail Workspace

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

The detail workspace preserves queue context beside properties and the conversation.

## Structure

Queue list → utility rail → Ticket Properties pane → subject/actions/meta → content tabs → conversation → bottom actions.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Ticket subject | Open detail | Queue, properties and body appear | Detail |
| Back | Return to list | Classic list restored | List |

## Behavior & States

**OBSERVED:** The sample ticket opened in a multi-pane workspace with contact/key/additional information cards, conversation content and an action footer. Apply Macro, Remote Assist and Close Ticket were visible and not activated.

States: Conversation detail, Attachment tab empty, Returned to list.

**NOT OBSERVED:** Reply composer, macros, remote assistance, close-ticket workflow and multi-ticket navigation.

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
  "ticketId": "#DEMO-1042",
  "subject": "Demo delivery question",
  "contact": "Taylor Reed",
  "body": "Fictional request used only to demonstrate the conversation layout.",
  "status": "Open"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep surrounding queue context available while agents inspect a record.

## Evidence Gaps

**NEEDS VERIFICATION:** Reply composer, macros, remote assistance, close-ticket workflow and multi-ticket navigation.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `27-ticket-detail.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
