---
component: "Zoho Desk Global Header"
ui_category: "Application Layout > Header"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Module links and compact global utility controls share one persistent header."
---

# Component: Zoho Desk Global Header

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06
- **Scope:** First authenticated Tickets pass. This is a partial component record, not product-wide completion.

## Overview

Module links and compact global utility controls share one persistent header.

## Structure

Product mark → module links → workspace label → split add button → search → notifications → marketplace → setup → agent → app launcher.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Quick Action arrow | Open menu | Cross-module actions appear | Menu open |
| Search icon | Open search | Search overlay replaces header content | Search overlay |

## Behavior & States

**OBSERVED:** Tickets, Knowledge Base, Community, Customers, Analytics and Activities are visible. Quick Action and GlobalSearch were opened. Notification, Marketplace, Setup and Applications menu were visible but not opened.

States: Normal header, Quick Action expanded, Search overlay.

**NOT OBSERVED:** Notifications contents, settings, marketplace, launcher and agent-menu behavior.

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
  "modules": [
    "Tickets",
    "Knowledge Base",
    "Community",
    "Customers",
    "Analytics",
    "Activities"
  ],
  "workspace": "Northwind Demo",
  "agentInitials": "AM"
}
```

## Accessibility

**OBSERVED:** The evidence includes exposed labels and roles where available. Some icon and calendar controls appeared as generic containers or checkbox-like controls in the accessibility tree.

**NEEDS VERIFICATION:** Keyboard operation, focus trapping, focus restoration, screen-reader announcements and contrast need a separate accessibility pass. Semantic roles alone do not prove accessibility.

## Cross-Component Pattern Note

**RECOMMENDATION:** Keep high-frequency utilities compact while giving icon controls accessible names.

## Evidence Gaps

**NEEDS VERIFICATION:** Notifications contents, settings, marketplace, launcher and agent-menu behavior.

## Sources

Authenticated Zoho Desk on desk.zoho.in, observed 2026-10-06 through Codex in-app browser. Source screenshots are private local receipts and are not copied into the public catalogue.

- **OBSERVED:** Private receipt `01-ticket-workspace.jpg`.
- **OBSERVED:** Private receipt `15-quick-action-menu.jpg`.
- **OBSERVED:** Private receipt `17-search-scope.jpg`.

The batch README maps records to the private receipt manifest. Any local reconstruction stays labelled separately from authenticated evidence.
