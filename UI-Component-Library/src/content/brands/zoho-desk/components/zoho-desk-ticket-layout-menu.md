---
component: "Zoho Desk Ticket Layout Menu"
ui_category: "Navigation > View mode selector"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A layout menu separates display density from specialized work modes."
---

# Component: Zoho Desk Ticket Layout Menu

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A layout menu separates display density from specialized work modes.

## Structure

Classic View trigger → Classic/Compact/Table options → WORK MODES heading → Status/Handshake/Countdown/Priority.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Classic View | Open menu | Grouped options and active checkmark appear | Expanded |
| Outside menu | Dismiss | Classic View remains selected | Collapsed |

## Behavior & States

**OBSERVED:** Classic View carried a checkmark. Compact View and Table View appeared above the WORK MODES group. The four work modes were visible. No mode was selected.

States: Classic selected, Menu expanded.

**NOT OBSERVED:** Rendered alternate modes, stored layout preferences and mode-specific behavior.

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
  "selected": "Classic View",
  "layouts": [
    "Classic View",
    "Compact View",
    "Table View"
  ],
  "workModes": [
    "Status Mode",
    "Handshake Mode",
    "Countdown Mode",
    "Priority Mode"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Separate structural layout choices from task-driven modes so their purpose is clear.

## Evidence Gaps

**NEEDS VERIFICATION:** Rendered alternate modes, stored layout preferences and mode-specific behavior.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `13-layout-options-loaded.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
