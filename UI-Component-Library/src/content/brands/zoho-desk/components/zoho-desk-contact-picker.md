---
component: "Zoho Desk Contact Picker"
ui_category: "Forms > Record selection dialog"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A large contact overlay combines search, a result row and alphabetical indexing."
---

# Component: Zoho Desk Contact Picker

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A large contact overlay combines search, a result row and alphabetical indexing.

## Structure

Select Contact header → Search → close → contact rows → ALL/A–Z rail.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Choose Contact | Open | Selection overlay loads | Open |
| Close icon | Dismiss | Pristine form context remains | Closed |

## Behavior & States

**OBSERVED:** The overlay showed a contact row with avatar, name and supporting metadata. ALL and A–Z appeared in a right-edge index. It was dismissed without selecting or searching. Source identity and contact details are excluded from fictional fixtures.

States: Populated selector, Closed without selection.

**NOT OBSERVED:** Search results, alphabetical navigation, no-result state, keyboard focus trap and selection effects.

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
  "contacts": [
    {
      "name": "Taylor Reed",
      "company": "Northwind Demo",
      "email": "taylor@example.test",
      "website": "https://example.test"
    }
  ],
  "selected": null,
  "alphabet": "ALL ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Make entity identity scannable and keep secondary details subordinate to the name.

## Evidence Gaps

**NEEDS VERIFICATION:** Search results, alphabetical navigation, no-result state, keyboard focus trap and selection effects.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `25-contact-picker.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
