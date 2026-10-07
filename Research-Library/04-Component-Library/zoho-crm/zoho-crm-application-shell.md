---
component: "Zoho CRM Application Shell"
ui_category: "Application Layout > Application shell"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A persistent left navigation, top utility bar, main workspace and bottom collaboration rail frame the CRM."
---

# Component: Zoho CRM Application Shell

## Overview

The authenticated desktop application uses a fixed-width left navigation beside a light main canvas, with global utilities across the top and collaboration utilities along the bottom edge.

## Structure

Product selector → primary links → teamspace and grouped modules → module search → top utility controls → page workspace → bottom collaboration rail.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Primary navigation link | Select a module | Main workspace navigates to that module | Read-only navigation |
| Group disclosure | Expand or collapse | Child module links appear or hide | Reversible disclosure |
| Hide Menu | Activate | **NEEDS VERIFICATION:** collapse behavior was not exercised | Unverified |

## Behavior & States

**OBSERVED:** The shell remained present on Home and during an accidental read-only Vendors navigation. The inspected viewport was 1138 × 1224 CSS pixels and the navigation occupied 240 pixels of width.

**RECONSTRUCTION:** Local examples use a fictional "Northwind Demo" workspace and invented record counts.

**NEEDS VERIFICATION:** Mobile behavior, responsive breakpoints, cross-session persistence, menu collapse, role-specific navigation and loading failures.

## Rules & Validation

**OBSERVED:** Only navigation and disclosure actions were exercised. No create, import, save, send, delete, assignment, workflow, settings or integration action was used.

## Technical Data

- **OBSERVED:** The left menu exposes `role="navigation"` and `id="leftMainMenuDiv"`.
- **OBSERVED:** Zoho Puvi with sans-serif fallback rendered the sampled shell at 14px and weight 400.
- **NOT OBSERVED:** Source code, API contracts, network payloads, authorization rules and persistence implementation.

### State Fixtures

```json
{"workspace":"Northwind Demo","activeModule":"Home","menu":"expanded","role":"Sales Manager"}
```

## Accessibility

**OBSERVED:** Major regions and many links expose names in the accessibility tree. Some utility controls expose only generic button roles or descriptions.

**NEEDS VERIFICATION:** Keyboard order, skip behavior, focus restoration, announcements and contrast.

## Sources

Authenticated Zoho CRM on `crm.zoho.in`, observed 2026-10-07 through the Codex in-app browser. Private screenshot `01-home-dashboard.png` is retained under `Internal/` and is not copied into the public catalogue.
