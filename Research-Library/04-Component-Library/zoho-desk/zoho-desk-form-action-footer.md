---
component: "Zoho Desk Form Action Footer"
ui_category: "Actions > Action bar"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A persistent footer keeps Submit and Cancel accessible while the form scrolls."
---

# Component: Zoho Desk Form Action Footer

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A persistent footer keeps Submit and Cancel accessible while the form scrolls.

## Structure

Full-width footer → blue Submit → outlined Cancel.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Cancel | Activate on untouched form | Ticket list returns | List restored |
| Submit | Not activated | No validation or persistence claim | Not observed |

## Behavior & States

**OBSERVED:** Both controls stayed along the lower edge. Computed button samples were 90 by 29 CSS pixels with 4px corners and 13px/600 text. Submit used rgb(10, 115, 235). Cancel returned the untouched form to the list.

States: Pristine footer, Cancelled to list.

**NOT OBSERVED:** Submission, required-field errors, dirty-form confirmation and pending/disabled submit states.

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
  "primary": "Submit",
  "secondary": "Cancel",
  "submitBehavior": "blocked locally",
  "dirty": false
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep the primary commitment distinct from an escape action and verify cancellation independently.

## Evidence Gaps

**NEEDS VERIFICATION:** Submission, required-field errors, dirty-form confirmation and pending/disabled submit states.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `18-blank-ticket-form.jpg`.
- **OBSERVED:** Private receipt `26-restored-ticket-list.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
