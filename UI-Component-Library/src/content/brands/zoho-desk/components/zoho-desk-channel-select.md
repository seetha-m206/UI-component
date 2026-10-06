---
component: "Zoho Desk Channel Select"
ui_category: "Forms > Searchable dropdown"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A searchable channel dropdown identifies the origin of a new ticket."
---

# Component: Zoho Desk Channel Select

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

A searchable channel dropdown identifies the origin of a new ticket.

## Structure

Channel label → selected Phone → search field → scrollable channel choices.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Channel arrow | Open | Searchable options appear | Expanded |
| Outside menu | Dismiss | Phone remains selected | Unchanged |

## Behavior & States

**OBSERVED:** The menu exposed Phone, Email, Web, Twitter, Facebook, Chat, Forums, Feedback Widget and Instagram. Phone was selected. Search and selection effects were not tested.

States: Phone selected, Menu open.

**NOT OBSERVED:** Channel integrations, source creation behavior, search filtering and channel-specific fields.

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
  "value": "Phone",
  "options": [
    "Phone",
    "Email",
    "Web",
    "Twitter",
    "Facebook",
    "Chat",
    "Forums",
    "Feedback Widget",
    "Instagram"
  ]
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep channel metadata separate from the presence or configuration of a live integration.

## Evidence Gaps

**NEEDS VERIFICATION:** Channel integrations, source creation behavior, search filtering and channel-specific fields.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `22-channel-options.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
