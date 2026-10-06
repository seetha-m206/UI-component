---
component: "Zoho Desk Quick Action Menu"
ui_category: "Actions > Action menu"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A split add control offers searchable cross-module creation entries and shortcuts."
---

# Component: Zoho Desk Quick Action Menu

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A split add control offers searchable cross-module creation entries and shortcuts.

## Structure

Add arrow → Search → object list → shortcut hints.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Quick Action arrow | Open | Searchable object menu appears | Expanded |
| Outside menu | Dismiss | Header returns | Collapsed |

## Behavior & States

**OBSERVED:** Ticket, Article, Topic, Account, Contact, Report, Dashboard, Contract, Call, Task, Event and WhatsApp Message entries were visible with shortcut hints. No entry in this menu was invoked.

States: Collapsed, Expanded.

**NOT OBSERVED:** Creating objects, opening each workflow, shortcut execution and search filtering.

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
  "query": "",
  "actions": [
    "Ticket",
    "Article",
    "Topic",
    "Account",
    "Contact",
    "Report",
    "Dashboard",
    "Contract",
    "Call",
    "Task",
    "Event",
    "WhatsApp Message"
  ],
  "submitBehavior": "local guard only"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Expose a direct primary action alongside a discoverable menu for less common object types.

## Evidence Gaps

**NEEDS VERIFICATION:** Creating objects, opening each workflow, shortcut execution and search filtering.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `15-quick-action-menu.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
