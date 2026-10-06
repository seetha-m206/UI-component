---
component: "Zoho Desk Date Filter Presets"
ui_category: "Search and Filtering > Date presets"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Date-related filters offer searchable relative-time presets."
---

# Component: Zoho Desk Date Filter Presets

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

Date-related filters offer searchable relative-time presets.

## Structure

Created Time → Select → search field → relative ranges → Custom.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Created Time arrow | Open | Searchable presets appear | Expanded |
| Outside dropdown | Dismiss | Date criterion stays empty | Unselected |

## Behavior & States

**OBSERVED:** The dropdown exposed Today, Yesterday, Current Week, Current Month, Last 3 days, Last 7 days, Last 15 days, Last 30 days, Last 3 months and Custom in the accessibility state. The visible list was scrollable.

States: Unselected, Preset menu open.

**NOT OBSERVED:** Custom-range interface, timezone boundaries, applying presets and date filtering results.

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
  "value": null,
  "presets": [
    "Today",
    "Yesterday",
    "Current Week",
    "Current Month",
    "Last 3 days",
    "Last 7 days",
    "Last 15 days",
    "Last 30 days",
    "Last 3 months",
    "Custom"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Distinguish relative reporting periods from a record due-date calendar.

## Evidence Gaps

**NEEDS VERIFICATION:** Custom-range interface, timezone boundaries, applying presets and date filtering results.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `10-date-presets.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
