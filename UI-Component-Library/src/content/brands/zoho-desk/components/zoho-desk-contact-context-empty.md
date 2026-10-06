---
component: "Zoho Desk Contact Context Empty State"
ui_category: "Feedback > Contextual empty state"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "The form side panel explains why related contact information is absent."
---

# Component: Zoho Desk Contact Context Empty State

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

The form side panel explains why related contact information is absent.

## Structure

RELATED DETAILS → Contact Information card → illustration → No Contact chosen → explanatory copy → Choose Contact.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Choose Contact | Open selector | Selection overlay appears | Contact picker |
| Close selector | Dismiss | No Contact chosen remains | Empty context |

## Behavior & States

**OBSERVED:** The side panel remained beside the form and offered Choose Contact. Opening it displayed the contact selector while preserving the form in the background.

States: No contact chosen, Selector overlay open.

**NOT OBSERVED:** Populated related details, contact creation, switching contact and dependent field updates.

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
  "contact": null,
  "message": "No Contact chosen",
  "action": "Choose Contact"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Explain missing dependent context and provide its next action in place.

## Evidence Gaps

**NEEDS VERIFICATION:** Populated related details, contact creation, switching contact and dependent field updates.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `18-blank-ticket-form.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
