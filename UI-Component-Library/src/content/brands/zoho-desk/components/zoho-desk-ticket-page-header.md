---
component: "Zoho Desk Ticket Page Header"
ui_category: "Application Layout > Page header"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "The list toolbar combines view identity, count and disclosure controls."
---

# Component: Zoho Desk Ticket Page Header

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

The list toolbar combines view identity, count and disclosure controls.

## Structure

Star state → All Tickets title/count → view arrow → Filter/saved filters → Total Count → layout → sort → information.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| View title | Open chooser | View grouping appears | Chooser open |
| Template label | Open chooser | Template empty state appears | Chooser empty |

## Behavior & States

**OBSERVED:** The list title exposes an h1 inside a popup button. The form header uses Tickets / Add Ticket / Choose Ticket Template.

States: List title and count, Form breadcrumb and template selector.

**NOT OBSERVED:** Star changes, Total Count click behavior, information panel and count refresh semantics.

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
  "title": "All Tickets",
  "count": 1,
  "breadcrumb": [
    "Tickets",
    "Add Ticket"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep identity, scope and view controls visually distinct from record actions.

## Evidence Gaps

**NEEDS VERIFICATION:** Star changes, Total Count click behavior, information panel and count refresh semantics.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `01-ticket-workspace.jpg`.
- **OBSERVED:** Private receipt `18-blank-ticket-form.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
