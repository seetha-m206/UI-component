---
component: "Zoho Desk Due Date and Time Picker"
ui_category: "Forms > Date picker"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A combined calendar and time control uses explicit Set and Clear actions."
---

# Component: Zoho Desk Due Date and Time Picker

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A combined calendar and time control uses explicit Set and Clear actions.

## Structure

Due Date input → month header/navigation → weekday grid → hour/minute/period selectors → Set/Clear.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Calendar icon | Open | Calendar and time controls appear | Expanded |
| Outside picker | Dismiss | No date committed | Unselected |

## Behavior & States

**OBSERVED:** The opened picker showed October 2026, month arrows, a seven-column calendar, hour/minute/AM-PM selectors and Set/Clear buttons. The field remained at its date-format placeholder after dismissal.

States: Placeholder, Picker expanded, Dismissed unchanged.

**NOT OBSERVED:** Date selection, Set/Clear effects, timezone conversion, invalid or past-date rules and deadline persistence.

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
  "month": "October 2026",
  "hour": "12",
  "minute": "00",
  "period": "PM",
  "actions": [
    "Set",
    "Clear"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Make committing a date/time distinct from browsing the calendar.

## Evidence Gaps

**NEEDS VERIFICATION:** Date selection, Set/Clear effects, timezone conversion, invalid or past-date rules and deadline persistence.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `20-due-date-picker.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
