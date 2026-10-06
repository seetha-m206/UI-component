---
component: "Zoho Desk Ticket Sidebar"
ui_category: "Application Layout > Left sidebar"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A compact icon-and-label rail organizes ticket-specific destinations."
---

# Component: Zoho Desk Ticket Sidebar

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A compact icon-and-label rail organizes ticket-specific destinations.

## Structure

HQ → Team Feeds → Views → Agent Queue → Team Queue → Tags → Scheduled Replies.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Filter | Open panel | Filter fields occupy left region | Filter panel |
| Hide control | Close panel | Ticket navigation rail returns | Navigation rail |

## Behavior & States

**OBSERVED:** Views is visually highlighted on the list. Labels wrap beneath icons. The filter panel temporarily occupies the left region and can be closed.

States: Views active, Filter panel replacing rail.

**NOT OBSERVED:** Queue contents, feeds, tag management, scheduled replies and saved sidebar preference.

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
  "activeItem": "Views",
  "items": [
    "HQ",
    "Team Feeds",
    "Views",
    "Agent Queue",
    "Team Queue",
    "Tags",
    "Scheduled Replies"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Separate module navigation from temporary task controls and provide an obvious route back.

## Evidence Gaps

**NEEDS VERIFICATION:** Queue contents, feeds, tag management, scheduled replies and saved sidebar preference.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `01-ticket-workspace.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
