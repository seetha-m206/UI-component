---
component: "Zoho Desk Ticket View Picker"
ui_category: "Search and Filtering > Saved views"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A grouped view chooser offers search, starred views and a custom-view entry."
---

# Component: Zoho Desk Ticket View Picker

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A grouped view chooser offers search, starred views and a custom-view entry.

## Structure

All Tickets trigger → search combobox → STARRED VIEWS → ALL VIEWS → Add Custom View.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| All Tickets | Open chooser | Grouped chooser appears | Expanded |
| Outside chooser | Dismiss | List remains visible | Collapsed |

## Behavior & States

**OBSERVED:** Opening All Tickets revealed a search combobox, STARRED VIEWS with the current view, a collapsed ALL VIEWS group and Add Custom View. A later mis-targeted click returned to the list and does not prove expansion of ALL VIEWS.

States: Collapsed, Starred group expanded, All views group collapsed.

**NOT OBSERVED:** Full built-in view inventory, search filtering, starring and custom-view creation.

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
  "search": "",
  "starred": [
    "All Tickets"
  ],
  "allViewsExpanded": false,
  "customViewAction": "guarded"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep frequently used views separate from the full inventory and distinguish navigation from creation.

## Evidence Gaps

**NEEDS VERIFICATION:** Full built-in view inventory, search filtering, starring and custom-view creation.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `02-ticket-views.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
