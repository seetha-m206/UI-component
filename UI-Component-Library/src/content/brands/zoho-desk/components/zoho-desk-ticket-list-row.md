---
component: "Zoho Desk Ticket List Row"
ui_category: "Enterprise Tables > Entries list"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A classic ticket row groups subject, identity, timing, status and agent assignment."
---

# Component: Zoho Desk Ticket List Row

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A classic ticket row groups subject, identity, timing, status and agent assignment.

## Structure

Channel icon → subject → ticket/contact/account metadata → created/due time → status → thread/comment controls → owner avatar.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Subject link | Open sample ticket | Ticket detail route loads | Detail screen |

## Behavior & States

**OBSERVED:** One provider sample row is visible. The subject opens detail. Status and owner are popup controls, while thread and comment affordances sit inline.

States: Populated classic row.

**NOT OBSERVED:** Row selection, bulk actions, pagination, inline status updates, owner changes and comment submission.

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
  "ticketId": "#DEMO-1042",
  "subject": "Demo delivery question",
  "contact": "Taylor Reed",
  "account": "Northwind Demo",
  "created": "09:15 AM",
  "due": "09 Oct 03:00 PM",
  "status": "Open",
  "owner": "Alex Morgan",
  "threads": 1
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Use a strong subject line and a quieter metadata line without hiding record actions.

## Evidence Gaps

**NEEDS VERIFICATION:** Row selection, bulk actions, pagination, inline status updates, owner changes and comment submission.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `01-ticket-workspace.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
