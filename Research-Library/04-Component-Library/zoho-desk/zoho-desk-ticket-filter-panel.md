---
component: "Zoho Desk Ticket Filter Panel"
ui_category: "Search and Filtering > Filter panel"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A searchable dark sidebar exposes record, owner, date and classification filters."
---

# Component: Zoho Desk Ticket Filter Panel

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A searchable dark sidebar exposes record, owner, date and classification filters.

## Structure

Filter heading/hide → Search Fields → stacked field selectors → date controls → additional categorical filters.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Funnel icon | Open panel | Field list replaces navigation rail | Expanded |
| Hide | Close panel | Navigation rail returns | Collapsed |

## Behavior & States

**OBSERVED:** Observed fields include Account Name, Contact Name, Status, Product Name, Ticket Owner, Created By, Modified By, Created Time, Ticket On Hold Time, Ticket Closed Time, Modified Time, Customer Responded Time, Team, Due Date, Priority, Channel, Classifications, Layout, Skills, Language and Parent Ticket. The sidebar scrolls independently of the main list.

States: Expanded, Collapsed, Status options disclosed, Created-time presets disclosed.

**NOT OBSERVED:** Applying criteria, chips, combined filtering, reset, saving filters and backend query semantics.

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
  "fieldQuery": "",
  "selectedCriteria": {},
  "fields": [
    "Account Name",
    "Contact Name",
    "Status",
    "Product Name",
    "Ticket Owner",
    "Created Time",
    "Due Date",
    "Priority",
    "Channel"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Make field discovery searchable when the filter inventory is long and keep the record canvas visible.

## Evidence Gaps

**NEEDS VERIFICATION:** Applying criteria, chips, combined filtering, reset, saving filters and backend query semantics.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `07-filter-fields-loaded.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
