---
component: Workspace menu trigger
ui_category: 'Navigation > Menus'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Observed Ahrefs workspace selector trigger with the current workspace label and disclosure cue.
---

# Component: Workspace menu trigger

## Evidence boundary

Observed in authenticated Ahrefs screen headers on 2026-09-29. The closed menu trigger was observed, but its expanded contents were not preserved. The 2026-09-30 live session is signed out, so opening the menu remains explicitly unverified.

## States and behavior

- Default shows the fictional Atlas workspace label and disclosure cue.
- Activation produces a local needs-verification status instead of inventing menu items.
- Disabled is a synthetic design-system state.

## Accessibility

The native button exposes menu intent and a closed expanded state. Source focus transfer and menu keyboard behavior remain unverified.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Dashboard and Site Explorer header reviews, 2026-09-29.
- **CONTINUATION:** Local guarded trigger verified on 2026-09-30 while signed out.
