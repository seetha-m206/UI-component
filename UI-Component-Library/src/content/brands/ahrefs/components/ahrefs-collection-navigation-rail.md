---
component: Collection navigation rail
ui_category: 'Application Layout > Sidebar'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Observed Ahrefs workspace rail with actions, search, saved-work collections, and folders.
---

# Component: Collection navigation rail

## Evidence boundary

Observed in the authenticated Ahrefs Dashboard workspace on 2026-09-29. Collection navigation, settings, collapse, creation, and folder persistence were not exercised. The independent 2026-09-30 preview uses local-only selection and filtering.

## States and behavior

- Default shows Projects, Portfolios, Reports, Alerts, and the empty Folders section.
- Search filters the local collection list.
- Collection selection changes only the preview status.
- Account and persistence actions do not run.

## Accessibility

Labelled aside and navigation landmarks, labelled search, current-page state, native buttons, and disabled state are provided. Source collapse animation remains unverified.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Dashboard workspace review, 2026-09-29.
- **CONTINUATION:** Local rail filtering and selection verified on 2026-09-30 while signed out.
