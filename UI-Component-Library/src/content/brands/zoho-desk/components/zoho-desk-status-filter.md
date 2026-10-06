---
component: "Zoho Desk Status Filter"
ui_category: "Search and Filtering > Categorical filter"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An inline status selector expands within the filter sidebar."
---

# Component: Zoho Desk Status Filter

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

An inline status selector expands within the filter sidebar.

## Structure

Status label → Select or search combobox → four status choices.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Status filter | Open | Four choices appear | Expanded |
| Outside menu | Dismiss | No filter value applied | Collapsed |

## Behavior & States

**OBSERVED:** The opened filter displayed Open, On Hold, Escalated and Closed. No status was selected.

States: Unselected, Options expanded.

**NOT OBSERVED:** Applied filter results, multi-select semantics and relation to custom statuses.

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
  "options": [
    "Open",
    "On Hold",
    "Escalated",
    "Closed"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Use the same status vocabulary across list filters and records while keeping filter effects separate from record editing.

## Evidence Gaps

**NEEDS VERIFICATION:** Applied filter results, multi-select semantics and relation to custom statuses.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `09-status-filter-loaded.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
