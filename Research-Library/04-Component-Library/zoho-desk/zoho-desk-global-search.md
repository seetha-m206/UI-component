---
component: "Zoho Desk Global Search Overlay"
ui_category: "Search and Filtering > Global search"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A dimmed overlay provides module and department search scope."
---

# Component: Zoho Desk Global Search Overlay

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A dimmed overlay provides module and department search scope.

## Structure

Header search → focused input → scope disclosure → modules/departments → Advanced Search and cross-app entry.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| GlobalSearch | Open | Search overlay appears | Focused empty search |
| Scope icon | Open | Module and department options appear | Scope menu |
| Close | Dismiss | Ticket list restored | Closed |

## Behavior & States

**OBSERVED:** Search in Tickets appeared above a dimmed page. Scope disclosure listed All modules, Tickets, Knowledge Base, Accounts, Contacts, Activities and Products. Department scope and Advanced Search were visible. Closing via the visible close control restored the ticket list.

States: Empty focused search, Scope expanded, Closed.

**NOT OBSERVED:** Query submission, results, search errors, advanced search and cross-app navigation.

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
  "module": "Tickets",
  "department": "Northwind Demo",
  "modules": [
    "All modules",
    "Tickets",
    "Knowledge Base",
    "Accounts",
    "Contacts",
    "Activities",
    "Products"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Show what will be searched before the user enters a query.

## Evidence Gaps

**NEEDS VERIFICATION:** Query submission, results, search errors, advanced search and cross-app navigation.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `16-global-search.jpg`.
- **OBSERVED:** Private receipt `17-search-scope.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
