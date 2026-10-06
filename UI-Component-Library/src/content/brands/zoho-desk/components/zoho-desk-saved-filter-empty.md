---
component: "Zoho Desk Saved Filter Empty State"
ui_category: "Feedback > Empty state"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A toolbar popover reports an empty personal saved-filter collection."
---

# Component: Zoho Desk Saved Filter Empty State

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A toolbar popover reports an empty personal saved-filter collection.

## Structure

Saved-filter arrow → MY SAVED FILTERS heading → illustration → No saved filters.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| My saved filters | Open | Loading resolves to empty state | Empty |
| Outside popover | Dismiss | List remains | Closed |

## Behavior & States

**OBSERVED:** The popover briefly showed a loading spinner, then No saved filters with an illustration. No create or save action was exercised.

States: Loading observed transiently, Empty, Closed.

**NOT OBSERVED:** Populated saved filters, filter saving, rename, delete and error recovery.

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
  "title": "MY SAVED FILTERS",
  "savedFilters": [],
  "message": "No saved filters"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Give an empty saved collection an explicit message instead of an ambiguous blank menu.

## Evidence Gaps

**NEEDS VERIFICATION:** Populated saved filters, filter saving, rename, delete and error recovery.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `11-saved-filters-empty.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
