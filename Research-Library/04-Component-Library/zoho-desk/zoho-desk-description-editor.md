---
component: "Zoho Desk Description Editor"
ui_category: "Content Creation > Rich text editor"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Focusing the description field expands a rich-text editor within the ticket form."
---

# Component: Zoho Desk Description Editor

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

Focusing the description field expands a rich-text editor within the ticket form.

## Structure

Description field → formatting toolbar → editable body iframe → Plain text affordance.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Description field | Focus without typing | Toolbar and larger editing area appear | Expanded blank editor |

## Behavior & States

**OBSERVED:** An initially compact text area expanded on focus. The toolbar visibly included emphasis, color, font and size, alignment/list controls, image-related controls, Insert and Plain text. The active editable area was inside an about:srcdoc frame.

States: Compact empty field, Expanded empty editor.

**NOT OBSERVED:** Formatting effects, sanitization, uploads, plain-text conversion, undo behavior and saved editor output.

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
  "text": "",
  "fontSize": "10",
  "formattingApplied": false
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Reveal advanced formatting on demand while preserving the user position within the form.

## Evidence Gaps

**NEEDS VERIFICATION:** Formatting effects, sanitization, uploads, plain-text conversion, undo behavior and saved editor output.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `23-description-editor.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
