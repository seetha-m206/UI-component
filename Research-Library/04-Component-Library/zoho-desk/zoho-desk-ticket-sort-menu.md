---
component: "Zoho Desk Ticket Sort Menu"
ui_category: "Search and Filtering > Sort control"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Sorting exposes a field choice and a separate time-order choice."
---

# Component: Zoho Desk Ticket Sort Menu

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

Sorting exposes a field choice and a separate time-order choice.

## Structure

Overflow trigger → SORT BY → four fields → divider → oldest/latest choices.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Sort trigger | Open | Fields and order appear | Expanded |
| Outside menu | Dismiss | Original selection stays | Collapsed |

## Behavior & States

**OBSERVED:** Due Date, Recent Thread, Modified Time and Created Time were listed. Recent Thread and Show Latest First carried checkmarks. No choice was changed.

States: Recent Thread selected, Latest First selected, Menu expanded.

**NOT OBSERVED:** Actual reordering, tie-breaking, persistence and server sort parameters.

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
  "field": "Recent Thread",
  "direction": "Show Latest First",
  "fields": [
    "Due Date",
    "Recent Thread",
    "Modified Time",
    "Created Time"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep the sorted field and direction independently visible.

## Evidence Gaps

**NEEDS VERIFICATION:** Actual reordering, tie-breaking, persistence and server sort parameters.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `14-sort-menu.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
